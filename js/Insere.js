

function datafunc(){
    var data1= document.getElementById("mydata").value;

    var time1= document.getElementById("hEnt").value;
    var time2=document.getElementById("hSai").value;
   
   if ( time1>time2){
     
alert("erro: hora final menor que hora inicial");



}
    if (!data1){
        alert("este campo deve ser preenchido");

        }
    if(!time1){
        
         alert("este campo deve ser preenchido");
    }
   
     if(!time2)   {
          alert("este campo deve ser preenchido");
     }        
    }
      


    
   function addHtmlTableRow(){
            
 var rIndex,table=document.getElementById("table"),
             newRow= table.insertRow(table.length),
              cell1=newRow.insertCell(0),
              cell2=newRow.insertCell(1),
              cell3=newRow.insertCell(2),
              cell4=newRow.insertCell(3),
               
               mydata=document.getElementById("mydata").value,
               hEnt=document.getElementById("hEnt").value,
               hSai=document.getElementById("hSai").value,
               justif=document.getElementById("justif").value;
        cell1.innerHTML=mydata;
        cell2.innerHTML=hEnt;
        cell3.innerHTML=hSai;
        cell4.innerHTML=justif;
 
    }
            selectRow();
    
function selectRow (){
    
    
 var rIndex,table=document.getElementById("table");
    for(var i=1; i<table.rows.length;i++){
        table.rows[i].onclick= function(){
            
            rIndex=this.rowIndex;
           
           document.getElementById("mydata").value=this.cells[0].innerHTML;
           document.getElementById("hEnt").value=this.cells[1].innerHTML;
           document.getElementById("hSai").value=this.cells[2].innerHTML;
           document.getElementById("justif").value=this.cells[3].innerHTML;
        };
        
    }
}
selectRow ();

    function editRow(){

      
           var rIndex,table=document.getElementById("table");
        
      
       
        table.rows[rIndex].cells[0].innerHTML= document.getElementById("mydata").value;
        table.rows[rIndex].cells[1].innerHTML= document.getElementById("hEnt").value;
        
        table.rows[rIndex].cells[2].innerHTML= document.getElementById("hSai").value;
                
        table.rows[rIndex].cells[3].innerHTML= document.getElementById("justif").value;
         
    }
    
    function deleteRow(){
          var rIndex,table=document.getElementById("table");
        table.deleteRow(rIndex);
        
           
               document.getElementById("mydata").value="";
               document.getElementById("hEnt").value="";
               document.getElementById("hSai").value="";
               document.getElementById("justif").value="";
        
    }




        
    


