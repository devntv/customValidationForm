export default function Validate (values){
    let err ={};

    // !values.username.trim() && err.username = "User name is require";
    if(!values.username.trim()){
        err.username =" user name is require";
    }

    //Email
    if(!values.email){
        err.email ="email is require"
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        err.email ="email is valid"
    }

    //password
    if(!values.password){
        err.password ="password is require"
    }else if(values.password.length < 6){
        err.password ="password must 6 characters or more"
    }

    if(!values.password2){
        err.password2 ="you must confirm password at here"
    }else if(values.password2 !== values.password){
        err.password2 ="passwords do not match"
    }

    return err;
}