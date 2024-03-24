function makesandwich(item) {
    console.log('\nmaking your sandwich with:');
    item.forEach(function (element) { return console.log("-" + element); });
    console.log('enjoy your sandwich\n');
}
makesandwich(['hum', 'cheese', 'lettuce']);
makesandwich(['turkey', 'becon']);
makesandwich(['peanut butter', 'jelly']);
