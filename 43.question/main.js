var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicion = ['harry potter', 'hermione granger', 'ron weasley', 'albus dumbledore'];
function copyArray(arry) {
    return __spreadArray([], arry, true);
}
function make_great(magicionArry) {
    for (var i = 0; i < magicionArry.length; i++) {
        magicionArry[i] = 'the great ' + magicionArry[i];
    }
}
function show_magicion(magicion) {
    magicion.forEach(function (element) {
        console.log(element);
    });
}
var copymagicionArray = copyArray(magicion);
make_great(copymagicionArray);
console.log('\n\nthis is my original arry: ');
show_magicion(magicion);
console.log('\n\nthis is my modfied copy of the array');
show_magicion(copymagicionArray);
