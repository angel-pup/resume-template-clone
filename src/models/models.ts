export class DateRange {
    public start: Date;
    public end: Date | null;

    constructor(start: Date, end: Date | null) {
        this.start = start;
        this.end = end;
    }

    public format() {
        const months = [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]

        let format_date = (date: Date | null) => {
            if (date !== null) {
                return `${months[date.getMonth() - 1]} ${date.getFullYear()}`;
            } else {
                return "Present";
            }
        }
        let start_date = format_date(this.start);
        let end_date = format_date(this.end);
        return `${start_date} - ${end_date}`;
    }
}

export type Header = {
    name: string,
    title: string,
}

export type Contact = {
    phone: string,
    email: string,
    location: string,
    website: string | null,
    linkedin: string | null,
    github: string | null,
}

export type Experience = {
    date_range: string,
    title: string,
    company: string,
    description: string[],
}

export type Project = {
    date_range: string,
    title: string,
    description: string[],
    company: string,
}

export type Education = {
    graduation_year: number,
    school: string,
    degree: string,
    relevant_coursework: string[],
    awards_and_honors: string[],
}

export type Resume = {
    header: Header,
    contact: Contact,
    summary: string,

    skills: string[] | null,
    certifications: string[] | null,
    experience: Experience[],
    projects: Project[] | null,
    education: Education[] | null,
}