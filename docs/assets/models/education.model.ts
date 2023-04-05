import { Accomplishment } from "./accomplishment.model";

export class Education extends Accomplishment {


    constructor(
        id: number,
        name: string,
        description: string,
        startDate: string,
        endDate: string,
        link?: string
    ) {
        super(id, name, description, startDate, endDate, link);
    }
}