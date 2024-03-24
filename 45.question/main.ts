//q45
import {features} from "process";
function storecareinfo(manufactuerer: string, modelName: string, ...extraoption: {[key : string]:any }[]): object{
    const carinfo ={
        manufactuerer,
        modelName,
        ...Object.assign({}, ...extraoption)

    }
    return carinfo;

}
let answer =storecareinfo('honda','civic', {color: 'black'}, {features: ['navigation', 'power window']})
console.log(answer);