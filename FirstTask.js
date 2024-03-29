"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
// this is the first task of the taypescript file
//npm i D @types/node => this is imp for the using the modules in the typescript
//npm init => for the crate the package.json file => for assess the outside modules
//node FirstTask.js => it is not used in the package.json => "type":"module";
//reading the file op.json and perform some operation
var math = function () {
    return new Promise(function (res, rej) {
        var fileRead = fs.readFileSync("./op.json", "utf8");
        //console.log(fileRead);
        var fileOb = JSON.parse(fileRead); // it convert json format to object
        //console.log('fileOp',fileOb,typeof fileOb);
        //cheked that val1 and val2 keys are available in the op.json file 
        if (!('val1' in fileOb)) {
            rej("val1 is not found");
        }
        if (!('val2' in fileOb)) {
            rej("val2 is not found");
        }
        //some operations on the add,sub,mul,div => and stored the new value
        switch ((fileOb.add && fileOb.sub && fileOb.mul && fileOb.div) || fileOb.add || fileOb.sub || fileOb.mul || fileOb.div) {
            case 'operator':
                if (('add' in fileOb) && ('sub' in fileOb) && ('mul' in fileOb) && ("div" in fileOb)) {
                    res({
                        'add': (fileOb.val1 + fileOb.val2), 'sub': (fileOb.val1 - fileOb.val2),
                        'mul': (fileOb.val1 * fileOb.val2), 'div': (fileOb.val1 / fileOb.val2)
                    });
                }
                else if ('add' in fileOb) {
                    res({ 'add': (fileOb.val1 + fileOb.val2) });
                }
                else if ('sub' in fileOb) {
                    res({ 'sub': (fileOb.val1 - fileOb.val2) });
                }
                else if ('mul' in fileOb) {
                    res({ 'mul': (fileOb.val1 * fileOb.val2) });
                }
                else if ('div' in fileOb) {
                    res({ 'div': (fileOb.val1 / fileOb.val2) });
                }
            default:
                rej("Invalid op");
        }
        res(fileOb);
    });
};
//writing in the op.jeson 
var writeFile = function (output) {
    var writeoutput = {
        output: output
    };
    var write = fs.writeFileSync('./op.json', JSON.stringify(writeoutput)); // it convert object to json format
    //console.log('write', write);
};
//these is the main function where we can call all functions 
//above function is not return any thing but it is async() function so it convert the promise into object so thats way => Promise<object>
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var filedisply, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, math()];
            case 1:
                filedisply = _a.sent();
                console.log(filedisply, typeof filedisply); // it display the result
                writeFile(filedisply); // static typescrept is void
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.log('errer', error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
main(); // static typescrept is Promise<void>
