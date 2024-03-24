var guest_list = ['kinza', 'sagar', 'zainab', 'masooma',];
for (var i = 0; i < guest_list.length; i++) {
    console.log('madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow\nThank you\n');
}
var not_present = 'zainab';
var new_guest = 'hunza';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow\nThank you\n');
}
console.log("madam ".concat(not_present, " will not comming tomorrow dinner"));
