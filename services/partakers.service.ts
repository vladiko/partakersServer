import { Partaker } from "../models/partaker.model";

class PartakerService {
    private list: Partaker[] = [];
    constructor() {
        let p = new Partaker('Vova', 'Kogan');
        this.list.push(p);
    }

    public getPartakers(): Partaker[] {
        return this.list;
    }

    public addPartaker(partaker: Partaker) {
        this.list.push(partaker);
    }


}
export const partakerService: PartakerService = new PartakerService();
