// q 32
let current_usr: string[]=['Kinza','Sagar','humza','Rabia','ali'];
let new_user : string[]=['Hamad','Maheen','Fatima','Kinza','Humza'];
new_user.forEach(new_one_user => {
    let our_condition=current_usr.some(current_one_usr =>current_one_usr.toLowerCase()=== new_one_user.toLowerCase())
    
    if(our_condition){
        console.log(`sorry ${new_one_user}is already taken!`)
}else{
    console.log(`this username ${new_one_user} is avaible`)
}

})