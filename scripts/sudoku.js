window.onload=function(){
    
        let Board=document.getElementById('Board');
        let tablerow=document.getElementById('thickBorder');
        let table=document.getElementById('TABLE');
    for (let p=0;p<3;p++){
       for(let k=0;k<3;k++){
        for(let i=0;i<3;i++){
         let tr=document.createElement("tr");
         for(let j=0;j<3;j++){
             let td=document.createElement("td");
             td.setAttribute('id','content');
             tr.append(td);
         }
         table.append(tr);
        }
        tablerow.append(table);
    }
    Board.append(tablerow);
    }
};
    let palette=document.getElementById('Pallete');
    let td=document.createElement("td");
    for (let i=0;i<10;i++){
        let td=document.createElement("td");
        td.click(function(){
            console.log("click");
        })
    }
    
    

