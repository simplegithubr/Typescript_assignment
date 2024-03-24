// q 17
let guest_list = ['kinza', 'sagar', 'zainab', 'masooma',];
//for(let i=0; i<guest_list.length; i++){
// console.log('madam'+ guest_list[i] + ',\n\nwe invited you on dinner tomorrow\nThank you\n')
//}
let not_present = 'zainab';
let new_guest = 'hunza';
guest_list[2] = new_guest;
//for (let i = 0; i < guest_list.length; i++) {
  //  console.log('madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow\nThank you\n');
//}
guest_list.unshift('muskan', 'saniya', 'hina');
//for (let i = 0; i < guest_list.length; i++) {
   // console.log('madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.we found big tabale so we deciede to invite 3 more guest \nThank you\n');
//}
console.log('\nUnfortunately we can not arrange big tabale, only two people allow')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry madam. ${guest_list} your not invite for dinner.` );
}
for(let i=0; i<guest_list.length; i++){
   console.log(`madam` + guest_list[i] + ',\nyes you are still invited on tomorrow dinner\nThank you\n')
}
guest_list.splice(0,2)
console.log(guest_list)