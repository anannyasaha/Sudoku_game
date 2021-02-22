var selectedtile=-1;
var currentrow;
var currentcolumn;
var yellowrow;
var yellowcolumn;
window.onload=function(){
    
        let Board=document.getElementById('Board');
        for (var j=0;j<9;j++){
            var row=Board.insertRow(j);
            for (var k=0;k<9;k++){
                var cell=row.insertCell(k);
                cell.setAttribute("id","cell"+j+k);
                cell.setAttribute("class","content");
                cell.placeholder=-1;
            }
        }
        for (var i=2;i<6;i++){
            if(i==2||i==5){
            for (var j=0;j<9;j++){
            var cell=document.getElementById('cell'+i+j);
            cell.style.borderBottom = "3px solid black";
            var cell1=document.getElementById('cell'+j+i);
            cell1.style.borderRight = "3px solid black";
            }
        }
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
    img.setAttribute("id","undo");
    img.onclick=undohandeler;
    tr.appendChild(img);
    
    $('.content').click(function() {
        if(this.placeholder==-1 && selectedtile!=-1){
            var cellid=this.id;
            currentrow=cellid.slice(4,5);
            row=cellid.slice(4,5);
            currentcolumn=cellid.slice(5);
            column=cellid.slice(5);
        sameblock(row,column,selectedtile);   
        var text=document.createTextNode(selectedtile);  
        this.append(text);
        this.style.fontSize="180%";
        this.align="center";
        this.marginTop="2rem";
        //this.text.fontSize="150%";
        this.placeholder=0;
    }
    
        return false;
    });
};
    function undohandeler(){
        selectedtile=-1;
        var cell=document.getElementById("cell"+currentrow+currentcolumn);
        cell.innerText="";
        cell.style.backgroundColor="white";
        cell.placeholder=-1;
        var cell2=document.getElementById("cell"+yellowrow+yellowcolumn);
        cell2.style.backgroundColor="white";
    }
    function palletteHandeler(){
        selectedtile=this.innerHTML;
    }
    function boardHandeler(){
        this.innerHTML=selectedtile;
    }
    function sameblock(row, column,selectedtile){
      if (row<3){
          row=0
      }
      else if(row>2 && row<6){
          row=3
      }
      else row=6
      column=Math.floor(column/3)*3;
      
      for(var i=row;i<row+3;i++){
      for (var j=column;j<column+3;j++){
          var cell=document.getElementById("cell"+i+j);
           if(cell.innerText==selectedtile){
               yellowrow=i;
               yellowcolumn=j;
               cell.style.backgroundColor="yellow";
           }

          }
      }
      }
    
    
    

         
        
    
    
    // //var table=document.createElement('Table');
    // //var tableBody=document.createElement('TBODY');
    // //palette.appendChild(tableBody);
    
   // palette.appendChild(table);
    

