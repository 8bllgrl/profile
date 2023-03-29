import { Accomplishment } from "./accomplishment.model";

export class Project extends Accomplishment {
    tech: string[];

    constructor(
        id: number,
        name: string,
        description: string,
        startDate: string,
        endDate: string,
        tech: string[],
        link?: string
    ) {
        super(id, name, description, startDate, endDate, link);
        this.tech = tech;
    }
}