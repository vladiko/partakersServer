import * as express from 'express';
import partakerModelSchema = require('../models/partaker.model');
//import * as fs from 'fs';

class PartakerService {
    //private list: partakerModelSchema.IPartakerModel[] = [];
    //private readonly fileName = 'partakerListRepo.data';

    constructor() {
        // const data: Buffer = fhelper.readFile(this.fileName);
      //  this.list = [];//JSON.parse(data.toString());
    }

    public getPartakers: express.RequestHandler = (req, res, next) => {
        let partakerModel = partakerModelSchema.getModel();
        partakerModel.find({}, (err, partakers: partakerModelSchema.IPartakerModel[]) => {
            if (err) {
                return next(err);
            } else {
                res.json(partakers);
            }
        });
    };

    //public getPartakers(): partakerModelSchema.IPartakerModel[] {
    //    return this.list;
    //}

    public addPartaker: express.RequestHandler = (req, res, next) => {
        let partakerModel = partakerModelSchema.getModel();
        var partaker = new partakerModel(req.body);
        partaker.save((err) => {
            if (err) {
                return next(err);
            } else {
                res.json(partaker);
            }
        });
    }

    //public addPartaker(partaker: partakerModelSchema.IPartakerModel) {

    //    //let aa = this.getPartakers();
    //    this.list.push(partaker);
    //    //fhelper.writeFile(this.fileName, JSON.stringify(this.list));
    //}

    //public removePartaker(partaker: partakerModelSchema.IPartakerModel) {
    //    let index: number = -1;
    //    if (this.list) {
    //        this.list.forEach((p, i) => {
    //            if (p.firstName === partaker.firstName && p.lastName === partaker.lastName) {
    //                index = i;
    //            }
    //        });
    //        if (index > -1) {
    //            this.list.splice(index, 1);
    //            //fhelper.writeFile(this.fileName, JSON.stringify(this.list));
    //        }
    //    }
    //}

    public  removePartaker: express.RequestHandler = (req, res, next) => {
        let partakerModel = partakerModelSchema.getModel();
        partakerModel.findOne({ id: req.body.id }, (err, user) => {
            if (err) {
                return next(err);
            } else {
                partakerModel.remove({ _id: req.body.id }, (errr) => {
                    if (errr) {
                        next(errr);
                    } else {
                        res.send({ partaker: req.body, removed: true });
                    }
                });
            }
        });
    };


    //public cleanList() {
    //    this.list = [];
    //    //fhelper.writeFile(this.fileName, JSON.stringify(this.list));
    //}
}
export const partakerService: PartakerService = new PartakerService();
