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
    Results-driven full stack web developer with a keen eye for
    detail and a passion for creating user-friendly and visually
    appealing websites and applications. Equipped with excellent
    communication, interpersonal, and creative thinking skills.
    Seeking a challenging role where I can leverage my technical
    expertise and innovative problem-solving abilities to contribute
    to your company's success. Known for being a dependable team
    player and a mentor, I am ready to apply my dedication and
    continuous learning mindset to drive impactful solutions and
    foster growth within your organization.
    `.replace(regex, ' '),
    skills: [
        "MERN Stack",
        "JIRA",
        "SQL",
        "Firebase",
        "REST",
        "TypeScript",
        "GraphQL",
        "Heroku"
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
                "Successfully resolved critical priority one issues promptly, demonstrating strong problem-solving skills and the ability to work under pressure.",
                "Collaborated effectively with cross-functional teams to troubleshoot and escalate complex issues, fostering a collaborative environment focused on issue resolution and customer satisfaction.",
                "Contributed to documenting and troubleshooting issues across a multitude of software and services for a diverse portfolio of client companies.",
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
                "Implemented and managed critical services, ensuring efficient performance and optimizing call routing systems.",
                "Collaborated closely with cross-functional teams, including vendors and engineers, to successfully migrate CCX systems to a modern CCE/Calabrio environment",
                "Developed intelligence reports that identified and resolved configuration issues to enhance system usability and functionality.",
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
                "Developed a simple MVC tech blog utilizing Express.js as the backend framework, Handlebars as the templating engine, and session management for user authentication. Implemented middleware functions for enhanced security and optimized routing. Leveraged MySQL database and Sequelize ORM for efficient data management and retrieval."
            ],
            repo: "angel-pup/tech-blog",
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
                "PWA",
                "API",
                "MERN",
                "ORM",
                "OOP"
            ]
        }
    ],
}

export = resume;