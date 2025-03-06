import { ExternalSite } from "./external-site.interface";

export interface SkillSection {
    sectionTitle: string,
    imagePath: string,
    skillLinks: ExternalSite[],
    skillsList: string[],
}