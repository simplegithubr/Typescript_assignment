//q 30
let users : string[]=['kinza','masooma','zainab','hina','admin']
for(let user of users){
    if(user === "admin"){
        console.log("hello admin would you like to see a status repport?")
    }

else{
    console.log(`hello ${user}, thank you for logging in again`)
}
}