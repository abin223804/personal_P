var nameerror=document.getElementById('nameerror');
var emailerror=document.getElementById('emailerror');
var subjecterror=document.getElementById('subjecterror');
var messageerror=document.getElementById('messageerror');
var submiterror=document.getElementById('submiterror');
// var nameerror=document.getElementById('nameerror');


function validateName(){
    var name  = document.getElementById('usrname').value;

    if (name.length ==0) {

        nameerror.innerHTML = 'Name is required'
    return false;    
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        nameerror.innerHTML = 'Write Full name'
        
        return false;
    }
    nameerror.innerHTML = 'valid'
    return true;

}

function validateEmail(){
    var email = document.getElementById('usremail').value;

    if (email.length==0) {

        emailerror.innerHTML='Please Enter a email'
        return false;
        
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        emailerror.innerHTML='Please Enter a Valid Email'

        return false;
        
    }
    emailerror.innerHTML='valid'
    return true;

}

function validateSubject(){
    var subject= document.getElementById('usrsubject').value;
     if (subject.length==0) {
        subjecterror.innerHTML ='Enter a subject'     
        
        return false;
     }

     var max=10
     var slen=subject.length

     if (slen>max) {

        subjecterror.innerHTML = 'Limit is 10'

        return false;
        
     }
     subjecterror.innerHTML = 'valid'
     return true;


}

function validateMessage(){
    var message= document.getElementById('usrmessage').value;
     if (message.length==0) {
        messageerror.innerHTML ='Enter a message'     
        return false;   
     }

     if (message.length>20) {

        messageerror.innerHTML = 'Limit is 20'

        return false;
        
     }
     messageerror.innerHTML = 'valid'
     return true;

}

function validateSubmit(){
    if (!validateEmail()|| !validateMessage()||!validateName()||!validateSubject()) {

        submiterror.innerHTML='Please fill the form'

        return false;
        
    }
}