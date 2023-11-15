import fs from 'fs';
import path from 'path';
import readline from 'readline';
import pug from 'pug';
import puppeteer from 'puppeteer';
import watch from 'node-watch';
import { Resume } from './models/models';

(async () => {
    // browser and abort handler for interrupts
    console.log("Launching puppeteer...");
    const browser = await puppeteer.launch();
    let rendering = false;
    let needs_abort = false;

    // watch
    const exts = RegExp([
        'pug',
        'css',
        'md',
        'ts',
    ].map((ext) => `.${ext}$`).join('|'));

    const ignores = RegExp([
        '.git',
        '/node_modules',
        '/rendered',
        '/src/[^/]*.ts$'
    ].join('|'));

    // prompt for clean shutdown
    const io = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    // paths
    const project_root = path.join(__dirname, '../')
    const rendered_path = path.join(project_root, "rendered");
    const html_path = path.join(rendered_path, "html");
    const pdf_path = path.join(rendered_path, "pdf");
    const source_path = path.join(project_root, 'views/render');

    function cp_files(model: Resume) {

        // init directories
        for (const path of [rendered_path, html_path, pdf_path]) {
            try {
                fs.mkdirSync(path);
            } catch { }
        }

        // copy styles
        fs.cpSync(path.join(__dirname, '../static/'), path.join(html_path, ''), {
            'recursive': true,
            'force': true,
        })

        // render pug to html
        const rendered_html: { [key: string]: string } = {};

        let files = fs
            .readdirSync(source_path)
            .filter((file) => { return file.endsWith('.pug') });

        for (const file of files) {
            let compile_template = pug.compileFile(path.join(source_path, file));
            rendered_html[file.replace('.pug', '')] = compile_template(model);
        }

        return rendered_html;
    }

    function Render(key: string) {
        console.log(`Rendering ${key}`);
        if (needs_abort) {
            return Promise.reject();
        }
        return browser.newPage().then((page) => {
            if (needs_abort) {
                return Promise.reject();
            }
            return page.goto(
                `file://${html_path}/${key}.html`,
                { 'waitUntil': 'networkidle0' }
            ).then(() => {
                if (needs_abort) {
                    return Promise.reject();
                }
                page.emulateMediaType('print');
                page.createPDFStream({
                    'format': 'LETTER',
                    'printBackground': true,
                    'path': `${pdf_path}/${key}.pdf`
                });
                console.log(`Rendered ${key}`)
            })
        })
    };

    async function doitPromise() {
        // race condition
        needs_abort = rendering;
        rendering = true;

        console.log("Rendering...")

        let model = await import('./models/resume');
        let rendered_html = cp_files(model);

        // setup promises to output HTML and PDFs
        let promises = Object.entries(rendered_html).map(entry => {
            const key = entry[0];
            const val = entry[1];

            fs.writeFileSync(path.join(html_path, `${key}.html`), val);

            return { key, promise: Render(key) };
        });

        // execute promises
        for (let { key, promise } of promises) {
            try {
                await promise;
            } catch {
                console.warn(`Render of ${key} aborted!`);
            }
        }
        rendering = false;
    }

    function query() {
        io.question('Watching files. Press enter to close.', (_) => {
            console.log('Closing...')
            browser.close()
                .then(() => { io.close(); watcher.close() })
                .catch(() => { io.close(); watcher.close() });
        });
    }

    function doit() {
        doitPromise().then(
            () => { console.log("Done"); query(); },
            () => { console.log("Interrupted"); query(); }
        ).catch(console.error);
    }

    // Main loop. Do the initial render.
    doit();
    var watcher = watch(project_root, {
        'delay': 1000,
        'recursive': true,
        filter: (f, skip) => {
            if (ignores.test(f)) {
                console.log(`skipping ${f}`)
                return skip;
            } else {
                return exts.test(f);
            }
        },
    }, doit);
})();

