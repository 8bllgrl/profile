import { Accomplishment } from "./accomplishment.model";

export class Project extends Accomplishment {
    tech: string[];
    img: string;

    constructor(
        id: number,
        name: string,
        img: string,
        description: string,
        startDate: string,
        endDate: string,
        tech: string[],
        link?: string
    ) {
        super(id, name, description, startDate, endDate, link);
        this.img = img;
        this.tech = tech;
    }

    // public setDescription(value: string): void {
    //     this.description = value;
    // }
}