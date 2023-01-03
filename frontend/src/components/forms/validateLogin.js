export default function validateLogin(user){
    let errors = [];

    // E-mail

    if(!user.email != ""){
        errors.push("Email is missing");
    } 

    if(!user.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        errors.push("It needs to be a valid email address");
    } 


    
    // Password

    if(!user.password != ""){
        errors.push("Password is missing");
    } 

    if(user.password.length < 6){
        errors.push("Password must be at least 6 characters long");
    }


    return errors;
}