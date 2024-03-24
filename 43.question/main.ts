//q 43
let magicion : string[]=['harry potter', 'hermione granger','ron weasley','albus dumbledore'];
function copyArray(arry:string[]){
    return[...arry]
}
function make_great(magicionArry: string[]){
    for(let i=0; i<magicionArry.length; i++){
        magicionArry[i]= 'the great ' + magicionArry [i]
    }
}

function show_magicion(magicion: string[]){
    magicion.forEach(element =>{
        console.log(element)
    });
} 
const copymagicionArray =copyArray(magicion)

make_great(copymagicionArray);
console.log('\n\nthis is my original arry: ')
show_magicion(magicion);
console.log('\n\nthis is my modfied copy of the array');
show_magicion(copymagicionArray)