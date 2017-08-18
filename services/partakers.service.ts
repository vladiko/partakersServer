import { Partaker } from "../models/partaker.model";
import fhelper = require('../services/filesHelper');
import * as fs from 'fs';

class PartakerService {
    private list: Partaker[] = [];
    private readonly fileName = 'partakerListRepo.data';

    constructor() {
        const data: Buffer = fhelper.readFile(this.fileName);
        this.list = JSON.parse(data.toString());
    }

    public getPartakers(): Partaker[] {
        const data: Buffer = fhelper.readFile(this.fileName);
        this.list = JSON.parse(data.toString());
        return this.list;
    }

    public addPartaker(partaker: Partaker) {
        //let aa = this.getPartakers();
        this.list.push(partaker);
        fhelper.writeFile(this.fileName, JSON.stringify(this.list));
    }

    public removePartaker(partaker: Partaker) {
        let index: number = -1;
        if (this.list) {
            this.list.forEach((p, i) => {
                if (p.firstName === partaker.firstName && p.lastName === partaker.lastName) {
                    index = i;
                }
            });
            if (index >-1) {
                this.list.splice(index, 1);
                fhelper.writeFile(this.fileName, JSON.stringify(this.list));
            }
        }
    }


    public cleanList() {
        this.list = [];
        fhelper.writeFile(this.fileName, JSON.stringify(this.list));
    }
}
export const partakerService: PartakerService = new PartakerService();
