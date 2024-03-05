import { promises } from 'dns';
import * as fs from 'fs';

// this is the first task of the taypescript file
//npm i D @types/node => this is imp for the using the modules in the typescript
//npm init => for the crate the package.json file => for assess the outside modules
//node FirstTask.js => it is not used in the package.json => "type":"module";

//.............................(task 3).................................

//reading the file op.json and perform some operation
const math = ():Promise<object> => {      //it returns the Promise<object>
    return new Promise((res, rej):void => {   // these (res,rej)=>{}  => it does not return anythinng

        const fileRead:string = fs.readFileSync("./op.json", "utf8");
        //console.log(fileRead);

        const fileOb = JSON.parse(fileRead);  // it convert json format to object
        //console.log('fileOp',fileOb,typeof fileOb);

        //cheked that val1 and val2 keys are available in the op.json file 
        if (!('val1' in fileOb)) {
            rej("val1 is not found");
        }
        if (!('val2' in fileOb)) {
            rej("val2 is not found");
        }

        //some operations on the add,sub,mul,div => and stored the new value
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

//writing in the op.jeson 
const writeFile = (output: object):void => {     //above function does not return anything so thats way it = void

    const writeoutput: object = {
        output: output
    }
    const write = fs.writeFileSync('./op.json', JSON.stringify(writeoutput)); // it convert object to json format
    //console.log('write', write);
}


//these is the main function where we can call all functions 
//above function is not return any thing but it is async() function so it convert the promise into object so thats way => Promise<object>
const main = async ():Promise<void> => {

   try {
    const filedisply:object = await math();
    console.log(filedisply,typeof filedisply); // it display the result
    writeFile(filedisply);  // static typescrept is void
    
   } catch (error) {
       console.log('errer',error);
   }
}
main();  // static typescrept is Promise<void>