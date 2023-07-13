import { Resume, DateRange } from './models'

const regex = /\n|\t/;

let resume: Resume = {
    header: {
        name: "Vess Stewart",
        title: "Full Stack Web Developer"
    },
    contact: {
        phone: "318-450-0663",
        email: "vess.stewart@pm.me",
        location: "Kansas City, Missouri",
        website: "angel-pup.dev",
        linkedin: "/in/vess-stewart/",
        github: "angel-pup",
    },
    summary: `
    Full stack web developer with a passion for creating UX-driven
    applications known for being a dependable team leader and mentor.
    I am seeking a role where I can leverage my technical experience,
    continuous learning mindset, and contribute to your organization's goals.
    `.replace(regex, ' '),
    skills: [
        "MERN Stack",
        "SQL",
        "Firebase",
        "REST",
        "GraphQL",
        "TypeScript",
        "JIRA",
        "Git"
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
                "Successfully resolved critical issues promptly, demonstrating the ability to work under pressure.",
                "Collaborated with cross-functional teams to troubleshoot and escalate complex issues.",
                "Contributed to documentation for a multitude of software and services for a diverse portfolio of client companies.",
            ]
        },
        {
            title: "Collaboration Admin",
            company: "Vantage Health Plan",
            date_range: new DateRange(
                new Date(2021, 10, 1),
                new Date(2022, 9, 1)
            ).format(),
            description: [
                "Implemented, managed and optimized high priority call routing systems, ensuring efficient performance.",
                "Collaborated closely with vendors and engineers to successfully migrate CCX systems to a modern CCE/Calabrio environment",
                "Developed intelligence reports that identified and resolved configuration issues enhancing system usability and functionality.",
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
                "Developed a MVC tech blog utilizing Express.js as the backend framework, Handlebars as the templating engine, and session management for user authentication. Implemented middleware functions for enhanced security and optimized routing. Leveraged MySQL database and Sequelize ORM for efficient data management and retrieval."
            ],
            repo: "angel-pup/tech-blog",
            company: "KU Bootcamp"
        },
        {
            date_range: new DateRange(
                new Date(2023, 1),
                new Date(2023, 2)
            ).format(),
            title: "Social Network API",
            description: [
                "Developed a RESTful API demonstration with mongoose ODM / MongoDB, hosted on Atlas with Node/Express server hosted on Heroku."
            ],
            repo: "angel-pup/social-network-api",
            company: "KU Bootcamp"
        },
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