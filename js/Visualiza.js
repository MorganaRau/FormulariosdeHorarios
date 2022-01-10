function datafunc(){
    var data1= document.getElementById("mydata1").value;

    var data2= document.getElementById("mydata2").value;
  
   
   if ( data1>data2){
     
alert("erro: data final menor que data inicial");
}
    if (!data1){
        alert("este campo deve ser preenchido");

        }
    if(!data2){
        
         alert("este campo deve ser preenchido");
    }
   
   

}

    