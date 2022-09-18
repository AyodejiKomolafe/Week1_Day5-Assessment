// I took my time and figured id show the two ways this can be done, using switch or if/else statement 

// SWITCH METHOD

let password = "TooRichToDie2022@";
let specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"/\|,.<>\/?~]/; 
 
 switch(true) {
    case (password.length >=10 && password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && Boolean(password.match(specialChar))):
        console.log("Password saved successfully")
    break;
    case (!(password.length >= 10)) :
        console.log("Password must contain 10 or more characters");
    break;
    case(!password.match(/[0-9]/)) :
        console.log("Password must contain at least one number");
    break;
    case(!password.match(/[a-z]/)) :
    console.log("Password must contian at lease one lowercase character");
    break;
    case(!password.match(/[A-Z]/)) :
    console.log("Password must contain at least one uppercase charater");
    break;
    case(!password.match(specialChar)) :
    console.log("Password must contain at least one special character");
    break;
    default :
    console.log("Wrong Password format");
 } 

// IF/ELSE METHOD

const pass = "tooRichtoDie2022!";
const special = /[`!@#$%^&*()_+\-=\[\]{};':"/\|,.<>\/?~]/
if (pass.length >= 10 && (/[0-9]/).test(pass) && (/[a-z]/).test(pass) && (/[A-Z]/).test(pass) && special.test(pass)){
   console.log("Password saved successfully");
} else if (pass.length <= 10) {
   console.log("Password Must contian 10 or more characters");
} else if (!/[A-Z]/.test(pass)){
   console.log("Password must include at least one Uppercase letter");
} else if(!/[a-z]/.test(pass)) {
   console.log("Password must include at least one lowercase letter");
} else if(!/[0-9]/.test(pass)) {
   console.log("Password must include at least one number");
} else if (!special.test(pass)) {
   console.log("Password must include at least one special character");
} else {
   console.log("Invalid password format")
}








