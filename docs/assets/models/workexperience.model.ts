import { Accomplishment } from "./accomplishment.model";

export class WorkExperience extends Accomplishment {

    company: string = "";

    constructor(
        id: number,
        company: string,
        name: string,
        description: string,
        startDate: string,
        endDate: string,
        link?: string
    ) {
        super(id, name, description, startDate, endDate, link);
        this.company = company
    }
}