import * as mongoose from 'mongoose';
var Schema = mongoose.Schema;
export interface IPartakerModel extends mongoose.Document {
    firstName: string;
    lastName: string;
    created: Date;
}

export function defineModel() {
    let partakerSchema = new Schema({
        firstName: {
            type: String,
            required: 'firs name is required'
        },
        lastName: {
            type: String,           
            required: 'last name is required',
            trim: true
        },
        created: {
            type: Date,
            default: Date.now
        }
    });

    partakerSchema.set('toJSON', {
        getters: true,
        virtuals: true
    });
    mongoose.model('Partaker', partakerSchema);
}

export function getModel() {
    return mongoose.model<IPartakerModel>('Partaker');
}







//export class Partaker {
//    constructor(public firstName: string, public lastName: string) {
//        // empty
//    }
//}