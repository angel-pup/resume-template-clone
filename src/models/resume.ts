import { Resume, DateRange } from './models'

const regex = /\n|\t/;

let resume: Resume = {
    header: {
        name: "Vess Stewart",
        title: "Full Stack Web Developer"
    },
    contact: {
        phone: "318-376-6398",
        email: "vess.stewart@pm.me",
        location: "Kansas City, Missouri",
        website: "angel-pup.dev",
        linkedin: "/in/vess-stewart/",
        github: "angel-pup",
    },
    summary: `
        Full stack web developer with a passion for creating efficient 
        applications and adept at learning new technologies and systems rapidly.
        I am seeking a role where I can leverage my technical experience,
        sharpen it, and make both your systems and my skills shine.
    `.replace(regex, ' '),
    skills: [
        "PostgreSQL, MSQL, MySQL",
        "Python",
        "MongoDB",
        "JIRA",
        "Git",
        "TypeScript",
        "MERN Stack",
        //"GraphQL",
    ],
    certifications: [
        "ITIL Foundation Certificate in IT Service Management",
        "KU Full-Stack Flex Coding Boot Camp"
    ],
    experience: [
        {
            title: "Support Engineer II",
            company: "ISG Technology",
            date_range: new DateRange(
                new Date(2023, 3, 1),
                null
            ).format(),
            description: [
                "Resolved over 1200 issues, over 100 of which were client company critical.",
                "Single-handedly repaired an entire client company's DUO MFA configuration.",
                "Contributed to documentation for a multitude of software and services for a diverse portfolio of client companies.",
                "Helped orchestrate and run Veeam Backup and Restoration processes.",
                "Collaborated with cross-functional teams to troubleshoot and escalate complex issues.",
            ]
        },
        {
            title: "Collaboration Admin",
            company: "Vantage Health Plan (now BCBS of Louisiana)",
            date_range: new DateRange(
                new Date(2017, 8, 1),
                new Date(2022, 9, 1)
                ).format(),
                description: [
                "Resolved complex critical issues involving up to 8 teams within a single day.",
                "Implemented, managed and optimized high priority call routing systems, ensuring efficient performance.",
                "Collaborated closely with vendors and engineers to successfully migrate CCX systems to a modern CCE/Calabrio environment.",
                "Developed and extended complex automated reports for teams all across the company.",
                "Wrote SQL for reports and database audits in Microsoft SQL Server Management Studio.",
                "Earned promotion for writing company-wide guide booklets and documentation for Webex, Jabber, CUCM and other Cisco tools.",
            ]
        },
    ],
    projects: [
        {
            date_range: new DateRange(
                new Date(2023, 2),
                new Date(2023, 3)
            ).format(),
            title: "Tech Blog",
            description: [
                "MVC tech blog utilizing Express.js as the backend framework, Handlebars as the templating engine, and session management for user authentication. Implemented middleware functions for enhanced security and optimized routing. Leveraged MySQL database and Sequelize ORM for efficient data management and retrieval."
            ],
            repo: "angel-pup/tech-blog",
            company: "KU Bootcamp"
        },
        {
            date_range: new DateRange(
                new Date(2023, 2),
                new Date(2023, 2)
            ).format(),
            title: "Social Network API",
            description: [
                "RESTful API demonstration with mongoose ODM / MongoDB hosted on Atlas with a Node/Express server hosted on Heroku."
            ],
            repo: "angel-pup/social-network-api",
            company: "KU Bootcamp"
        }
    ],
    projects_pt2: [
        {
            date_range: new DateRange(
                new Date(2023, 2),
                new Date(2023, 2)
            ).format(),
            title: "eCommerce Backend",
            description: [
                "RESTful API hosted on Heroku to grab information (integrated via JAWSDB) from a MySQL database."
            ],
            repo: "angel-pup/e-commerce-back-end",
            company: "KU Bootcamp"
        },
        {
            date_range: new DateRange(
                new Date(2015, 9),
                new Date(2015, 9)
            ).format(),
            title: "Microprocessor Lab: Factory Motor",
            description: [
                "Simulating factory sized motor control via potentiometer with readouts, written in C on a Nexys 4 Artix 7 FPGA."
            ],
            repo: "angel-pup/Microprocessor-Lab-Final",
            company: "Louisiana Tech University"
        }
    ],
    education: [
        {
            graduation_year: 2017,
            school: "University of Louisiana Monroe",
            degree: "B.S. in Computer Science",
            relevant_coursework: [
                "Data Structures",
                "Analysis of Alogorithms", 
                "Object-Oriented Design",
                "Advanced Discrete Structures",
                "Internet Programming",
                "Theory of Database Management Systems",
            ],
        },
        {
            graduation_year: 2023,
            school: "University of Kansas",
            degree: "KU Full-Stack Flex Coding Boot Camp Certificate",
            relevant_coursework: [
                "MVC",
                "SQL & NoSQL",
                "API",
                "MERN",
                "ORM",
                "OOP"
            ]
        }
    ],
}

export = resume;