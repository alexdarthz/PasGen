let password=document.querySelector("password")
function genPassword(){
    let chars = "0123456789abcdefghijklmnoprstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let passwordLength = document.getElementById("rur").value;
    let password = "";
    for(let i=0;i<=passwordLength;i++){
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    document.getElementById("password").value = password;
}