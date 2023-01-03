
export default function validateSignup(user){
    let errors = [];

    // First name

    if(user.fname.length < 3){
        errors.push("First name must be at least 3 characters long")
    }

    if(!user.fname.match(/^[A-ZÆØÅ]/g)){
        errors.push("First name is missing a capitalized letter")
    }

    // Last name

    
    if(user.lname.length < 3){
        errors.push("Last name must be at least 3 characters long");
    }

    if(!user.lname.match(/^[A-ZÆØÅ]/g)){
        errors.push("Last name is missing a capitalized letter")
    }

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