// q 15
let guest_list: string[]= ['kinza','sagar','zainab','masooma',];
for(let i=0; i<guest_list.length; i++){
    console.log('madam'+ guest_list[i] + ',\n\nwe invited you on dinner tomorrow\nThank you\n')
}
let not_present: string= 'zainab'
let new_guest: string= 'hunza'
guest_list[2]= new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('madam'+ guest_list[i] + ',\n\nwe invited you on dinner tomorrow\nThank you\n')
}
console.log(`madam ${not_present} will not comming tomorrow dinner`);
