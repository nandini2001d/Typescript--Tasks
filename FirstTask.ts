import { promises } from 'dns';
import * as fs from 'fs';
// this is the first task of the taypescript file
//npm i D @types/node => this is imp for the using the modules in the typescript
//npm init => for the crate the package.json file => for assess the outside modules
//node FirstTask.js => it is not used in the package.json

const math = (): object => {
    return new Promise((res, rej) => {

        const fileRead = fs.readFileSync("./op.json", "utf8");
        //console.log(fileRead);

        const fileOb = JSON.parse(fileRead);
        //console.log('fileOp',fileOb,typeof fileOb);

        if (!('val1' in fileOb)) {
            rej("val1 is not found");
        }
        if (!('val2' in fileOb)) {
            rej("val2 is not found");
        }


        switch((fileOb.add && fileOb.sub && fileOb.mul && fileOb.div) || fileOb.add || fileOb.sub || fileOb.mul || fileOb.div) {
            case 'operator':
                if (('add' in fileOb) && ('sub' in fileOb) && ('mul' in fileOb) && ("div" in fileOb)) {
                    res({
                        'add': (fileOb.val1 + fileOb.val2), 'sub': (fileOb.val1 - fileOb.val2),
                        'mul': (fileOb.val1 * fileOb.val2), 'div': (fileOb.val1 / fileOb.val2)
                    });
                }
                else if ('add' in fileOb) {
                    res({ 'add': (fileOb.val1 + fileOb.val2) })
                }
                else if ('sub' in fileOb) {
                    res({ 'sub': (fileOb.val1 - fileOb.val2) })
                }
                else if ('mul' in fileOb) {
                    res({ 'mul': (fileOb.val1 * fileOb.val2) })
                } else if ('div' in fileOb) {
                    res({ 'div': (fileOb.val1 / fileOb.val2) })
                }
            default:

                rej("Invalid op");
        }

        res(fileOb);

    })
}


const writeFile = (output: object) => {

    const writeoutput: object = {
        output: output
    }
    const write = fs.writeFileSync('./op.json', JSON.stringify(writeoutput));
    console.log('write', write);
}


const main = async () => {

   try {
    const filedisply: object = await math();
    console.log(filedisply);
    writeFile(filedisply);
    
   } catch (error) {
       console.log('errer',error);
   }
}
main();