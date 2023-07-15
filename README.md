# Code Clone Source:

Developer: Ada Mandala

Repo link: [ada-x64/resume-template](https://github.com/ada-x64/resume-template)

# resume-template

This repo is a template for building resumes and cover letters using Pug, CSS, and Typescript.

## Live Editing

To in a web browser, use `npm start`. This will serve at localhost:3000 using nodemon to watch for changes.

## Rendering

To render to PDF, use `npm run render`. This will run the render script, which depends on Puppeteer. This project originally depended on wkhtmltopdf, but I had no luck running it on two of my three machines.

In order to prevent needless reloading, `render` will watch for changes. Unfortunately, because all the resume text is stored in a TypeScript file, it cannot hot-reload the text. (It could, but I don't want to put in the effort. Make a PR if you want to!)

## Styles

All the styles are stored in `static/styles.css`. Building a resume is simple enough I didn't feel the need to bring anything else in.

__NOTE: You will need to replace the font-awesome kit in `views/page-layout.pug`.__

## License

This work is licensed under the Creative Commons Attribution 3.0 Unported License. To view a copy of this license, visit http://creativecommons.org/licenses/by/3.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.