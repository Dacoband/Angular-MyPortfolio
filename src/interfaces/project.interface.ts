export interface Project {
    coverImagePath: string,
    title: string,
    techStack: string[],
    description: string,
    year: number
    githubLink?: string,
    liveLink?: string,
    branch?: string,
}

export interface ProjectSection {
    sectionTitle: string,
    sectionSubtitle?: string,
    entities: Project[];
}