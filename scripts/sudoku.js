var selectedtile;
window.onload=function(){
    
        let Board=document.getElementById('Board');
        
         for (var k=0;k<3;k++){
            let bigRow=document.createElement('tr');
             var tablerow=document.getElementById('thickBorder');
             for (var j=0;j<3;j++){
                var td=document.createElement('td');
                table=document.getElementById("TABLE");
              for (let i=0;i<3;i++){
            var row=table.insertRow(i);
            for (let j=0;j<3;j++){
                
                eval('var '+'cell'+i+j+'= '+'row.insertCell('+j+').setAttribute("id","content")'+';'); 
               
               }
           }
           td.append(table);
           tablerow.appendChild(td);
        }
          bigRow.append(tablerow);
          Board.appendChild(bigRow);
         }
         
    
    var palette=document.getElementById("pallete");
    palette.setAttribute("align","center");
    
    var tableBody=document.createElement('TBODY');
    palette.appendChild(tableBody);
    var tr=document.createElement('tr');
    tableBody.appendChild(tr);
    for (var i=1;i<10;i++){
        var td=document.createElement('td');
        var div=document.getElementById("numberbox");
        div.innerHTML=i;
        td.append(div);
        div.onclick=palletteHandeler;
        tr.appendChild(td);
    }
    var img = document.createElement("IMG");
    img.src = "images/undo.png";
    var div=document.getElementById("numberbox");
    div.appendChild(img);
    div.onclick=palletteHandeler;
    tr.appendChild(div);
    $('#content').click(function() {
        console.log('Register button clicked');
        return false;
    });
};

    function palletteHandeler(){
        selectedtile=this.innerHTML;
    }
    function boardHandeler(){
        this.innerHTML=selectedtile;
    }
    
    

         
        
    
    
    // //var table=document.createElement('Table');
    // //var tableBody=document.createElement('TBODY');
    // //palette.appendChild(tableBody);
    
   // palette.appendChild(table);
    

