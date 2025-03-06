export interface Position {
    positionName: string,
    duration: string,
    location?: string,
    jobType?: "Full-time" | "Part-time" | "Casual" | "Contract",
    locationType?: "On-Site" | "Remote" | "Hybrid",
    workPoints: string[],
}

export interface Experience {
    orgName: string,
    orgLogoPath: string,
    orgLink: string,
    positions: Position[]
}

export interface ExperienceSection {
    experienceSectionTitle: string,
    experienceSectionSubtitle?: string,
    experiences: Experience[],
}