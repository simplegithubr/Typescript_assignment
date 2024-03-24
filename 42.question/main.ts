//q 42
let magicion : string[]=['harry potter', 'hermione granger','ron weasley','albus dumbledore'];

    
function make_great(magicionArry: string[]){
    for(let i=0; i<magicionArry.length; i++){
        magicion[i]= 'the great ' + magicionArry [i]
    }
}
function show_magicion(magicion: string[]){
    magicion.forEach(element =>{
        console.log(element)
    })
} 

make_great(magicion  );
show_magicion(magicion);