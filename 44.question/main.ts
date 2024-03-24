//q 44
function makesandwich (item: string[]){
    console.log('\nmaking your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('enjoy your sandwich\n');
}
makesandwich (['hum','cheese','lettuce'])
makesandwich(['turkey','becon'])
makesandwich(['peanut butter','jelly'])