

   

    
function valida(){

     var form= document.getElementById("form");
     var email= document.getElementById("email").value;
     var text= document.getElementById("text");
     email= email.toLowerCase();
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(email.match(mailformat))
{
form.classList.add("valid");
form.classList.remove("invalid");
text.innerHTML="formato de e-mail correto";
text.style.color="aqua";
}
else
{
form.classList.remove("valid");
form.classList.add("invalid");
text.innerHTML="formato de e-mail incorreto";
text.style.color="red";

}
}




window.onload=()=>{
    this.sessionStorage.setItem("email","morganavrsantos@gmailcom");
     this.sessionStorage.setItem("senha","1234");
};
var input=document.getElementsByTagName('input');
var login=document.getElementById('login');
var form=document.querySelector('form');
form.onsubmit=()=>{return false;};



login.onclick=()=>{
    preventDefault();
    if((input[0].value !=="")&&(input[1].value !=="")){
    }
    else
    
     if((input[0])===this.sessionStorage.getItem("email") &&  (input[1].value===this.sessionStorage.getItem("senha"))){
         form.onsubmit=()=>{return 1;} ;
    }
    
    else
    {
        if((input[0])!== this.sessionStorage.getItem("email")){
       alert ("email incorreto");
                setTimeout(()=>{
                     input[0].nextElementSibling.textContent="";
                 },2000);
        }
        
        else
        {
        if((input[1])!== this.sessionStorage.getItem("senha")){
        alert ("senha incorreta");
                setTimeout(()=>{
                     input[1].nextElementSibling.textContent="";
                 },2000);
      
        }
  
        else
        { if(input[0].value ===""){
                input[0].nextElementSibling.textContent="Email não preenchido";
                setTimeout(()=>{
                   alert ("email não preenchido");
                 },2000);
                
                }
            if(input[0].value ==="")    
            {
                input[1].nextElementSibling.textContent="Senha não preenchida";
                setTimeout(()=>{
                     alert ("senha não preenchida");
                 },2000);
            
      
                    
                
    }
    
        } 
        }
    }
    
    };
    