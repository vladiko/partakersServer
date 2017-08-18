import * as fs from 'fs';

export const checkForFile = (fileName): boolean => {
    const d = fs.existsSync(fileName);
    if (d) {
        return true;
    } else {
        fs.writeFileSync(fileName, { flag: 'wx' });
        return true;
    }
    //, function (exists) {
    //if (exists) {
    //    callback();
    //} else {
    //    
    //        callback();
    //    })
    //}
    //});
}

export const readFile = (fileName: string) => {
    let buff: Buffer
    if (checkForFile) {
        buff = fs.readFileSync(fileName);
    }
    return buff;
}

export const writeFile = (fileName: string, data: string) => {
    fs.writeFileSync(fileName, data);
}