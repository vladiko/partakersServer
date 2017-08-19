import * as mongoose from 'mongoose';
import partakerModelSchema = require('../models/partaker.model');
import mongoconfig = require('../config/mongo.config');

export function configureMongoose() {
    let o = <mongoose.ConnectionOptions>{ useMongoClient: true };
    let db = mongoose.connect(mongoconfig.conectionUrl, o);
    partakerModelSchema.defineModel();
    return db;
}