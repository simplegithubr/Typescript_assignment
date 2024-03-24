var magicion = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function make_great(magicionArry) {
    for (var i = 0; i < magicionArry.length; i++) {
        magicion[i] = 'the great ' + magicionArry[i];
    }
}
function show_magicion(magicion) {
    magicion.forEach(function (element) {
        console.log(element);
    });
}
make_great(magicion);
show_magicion(magicion);
