export class Accomplishment {
    id: number;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    link?: string;

    constructor(
        id: number,
        name: string,
        description: string,
        startDate: string,
        endDate: string,
        link?: string
    ){
        this.id = id;
        this.name = name;
        this.description =description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.link = link;
    }
}