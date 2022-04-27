const EmailValidate = (text: string) => {
    let Email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (Email.test(text) == false) {
        return false
    }
    else {
        return true
    }
}

const UserNameValidate=(text:string)=>{
    let UserName= /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/
    if(UserName.test(text)==false){
        return false
    }
    else{
        return true
    }
}

const PasswordValidate=(text:string)=>{
 let Password=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
 if(Password.test(text)==false){
     return false
 }
 else{
     return true
 }
}

export {EmailValidate,UserNameValidate,PasswordValidate}