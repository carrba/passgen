const { argv } = require('process')

let passwordLength = 14

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

if (argv.length > 2){
try {
    passwordLength = parseInt(argv[2])
    console.log(typeof(passwordLength))
}
catch {}
}


if (argv.length = 4){
    if (argv[3] === '-simple'){
        chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
}

let password = "";

for (var i = 0; i <= passwordLength; i++) { 
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
}

console.log("")
console.log(password)
console.log("")