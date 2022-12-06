import { Resume, DateRange } from './models'

const regex = /\n|\t/;

let resume: Resume = {
    header: {
        name: "Your Name",
        title: "Your Job Title"
    },
    contact: {
        phone: "XXX-XXX-XXXX",
        email: "your.name@mail.com",
        location: "City, State",
        website: "yoursite.me",
        linkedin: "/in/your-profile",
        github: "your-github",
    },
    summary: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
    aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia
    deserunt mollit anim id est laborum.
    `.replace(regex, ' '),
    skills: [
        "Coolness",
        "Swag",
        "Great Hair",
        "Cool Shoes"
    ],
    certifications: [
        'Certified Badass'
    ],
    experience: [
        {
            title: "A Job",
            company: "Some Company",
            date_range: new DateRange(
                new Date(2022, 6, 1),
                null
            ).format(),
            description: [
                "did a thing",
                "two things, actually",
                "maybe three..."
            ]
        },
        {
            title: "Another Job",
            company: "Some Other Company",
            date_range: new DateRange(
                new Date(2019, 8, 1),
                new Date(2022, 6, 1)
            ).format(),
            description: [
                "did a thing",
                "two things, actually",
                "maybe three..."
            ]
        },
    ],
    projects: [
        {
            date_range: new DateRange(
                new Date(2019, 4),
                new Date(2022, 4)
            ).format(),
            title: "Some Project",
            description: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
            ],
            company: "Some Company",
        },
    ],
    education: [
        {
            graduation_year: 2020,
            school: "University or School",
            degree: "Degree",
            relevant_coursework: [
                "labore et dolore magna", " labore et dolore magna 2",
            ],
            awards_and_honors: [
                'award for  labore et dolore magna',
            ],
        }
    ],
}

export = resume;