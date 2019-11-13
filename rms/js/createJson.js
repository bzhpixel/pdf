/*SheetJS*/
/* processing array buffers, only required for readAsArrayBuffer */
function fixdata(data) {
	let o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,newUint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, newUint8Array(data.slice(l*w)));
	return o;
}
const rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer/* set up drag-and-drop event */

	var tab;
    let tableauElement = new Array();



    
function createTableRow(tableBody,col1,col2){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-arrows-alt-v");
    
   
    td.appendChild(i);
    td.setAttribute("class", "no-print");
    td.setAttribute("id", "sortableData");
    tr.appendChild(td);

  
    td = document.createElement("td");
    txt = document.createTextNode(col1);

    td.appendChild(txt);
    tr.appendChild(td);

    // // nom de la sauce
    td = document.createElement("td");
    txt = document.createTextNode(col2);
    td.appendChild(txt);
    tr.appendChild(td);

      // // cas vide
      td = document.createElement("td");
      txt = document.createTextNode("");
      td.style.width = "40%";
      td.appendChild(txt);
      tr.appendChild(td);

    // // OP
    // td = document.createElement("td");
    // txt = document.createTextNode(col4);
    // td.setAttribute('id', "PHS_OP");
    // td.appendChild(txt);
    // tr.appendChild(td);

    // //code sauce
    // td = document.createElement("td");
    // txt = document.createTextNode(col2);
    // td.appendChild(txt);
    // tr.appendChild(td);

    // //Quantite en KG
    // td = document.createElement("td");
    // txt = document.createTextNode(col5);
    // td.appendChild(txt);
    // tr.appendChild(td);

    // td = document.createElement("td");
    // txt = document.createTextNode("condi");
    // td.setAttribute("contenteditable", "true");
    // td.appendChild(txt);
    // tr.appendChild(td);

    // td = document.createElement("td");
    // txt = document.createTextNode("heure");
    // td.setAttribute("contenteditable", "true");
    // td.appendChild(txt);
    // tr.appendChild(td);


   

    // td = document.createElement("td");
    // let tmptxt;
    // if(col6 == undefined){
    //     tmptxt="";}
    //     else{
    //         tmptxt=col6;
    //     }
    // td.setAttribute("contenteditable", "true");
    // txt = document.createTextNode(tmptxt);
    
    // td.appendChild(txt);
    // tr.appendChild(td);

    // td = document.createElement("td");
    // txt = document.createTextNode(col6);
    // td.appendChild(txt);
    // tr.appendChild(td);    



    tableBody.appendChild(tr);
}


function checkElement(tab, element){

    for(i=0;i<tab.length;i++){
        if(tab[i]["N° d'article"] == element){
            console.log("true");
            return 1;
        }
    }
    console.log("false");
    return -1;
}

function checkElement2(tab, element){

    if(tab.length == 0){
        //cas ou le tableau est vide
        return -1;
    }else{
        let i =0;
        for(i=0;i<tab.length;i++){
            if(tab[i].article == element ){
                return 1;
            }
        }

    }
    return -1;

}


function writeDataTable(t){
    let tableLength = t.length;

    // on fait le tri dans le tableau
    let nombreElement = 0;

    console.log("taille du tableau:" + tableLength);
    for(i=0;i<tableLength;i++){
        //console.log(i);
        /*checkElement(t,t[i]["N° d'article"]) != -1 &&*/ 
       if(checkElement2(tableauElement,t[i]["N° d'article"]) == -1){
            //console.log("ajout nouveau element");
        tableauElement.push({"article":t[i]["N° d'article"], "description":t[i]["Description d'article"]});
        nombreElement ++;
        }
    }
        console.log(JSON.stringify(tableauElement));

        



    let div = document.getElementById("DataPanel");
    //div.write(t[0]);
    console.log(t[2]["Description d'article"]);
    let tableBody = document.getElementById("DataPanelTableBody");
    // for(i=0;i<tableLength;i++){
    // // createTableRow(tableBody,t[i]["N° d'article"],
    // //                  t[i]["Description d'article"]
    // //                  );

    // createTableRow(tableBody,tableauElement[i]["N° d'article"],
    //                  t[i]["Description d'article"]
    //                  );


    
    // }

        //dessin tableau
    for(i=0;i<tableauElement.length;i++){
        // createTableRow(tableBody,t[i]["N° d'article"],
        //                  t[i]["Description d'article"]
        //                  );
    
        createTableRow(tableBody,tableauElement[i].article,
                        tableauElement[i].description
                         );
    
    
        
        }
    
    $("tbody").sortable({
        handle: "#sortableData",
        cancel:''
    }).disableSelection();

$("#dataContainer").removeClass("invisible");
}






/* fixdata and rABS are defined in the drag and drop example */
function handleXLSFile(e) {
    console.log("chargement");
	var files = e.target.files;
	var i,f;
	for (i = 0; i != files.length; ++i){
		f = files[i];
		var reader = new FileReader();
		var name = f.name;
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook;
			if(rABS) {
                /* if binary string, read with type 'binary' */

                    workbook = XLSX.read(data, {type: 'binary'});
					
					var first_sheet_name = workbook.SheetNames[0];
					
					/* Get worksheet */
					var worksheet = workbook.Sheets[first_sheet_name];
					
					tab = XLSX.utils.sheet_to_json(worksheet, {header:0});
					

                //console.table(tab);


			} else {// if array buffer, convert to base64 
				var arr = fixdata(data);
				workbook = XLSX.read(btoa(arr), {type: 'base64'});
            }// DO SOMETHING WITH workbook HERE 
            
            document.getElementById("selectionPHS").style.display = "none";



            writeDataTable(tab);

		};
			 reader.readAsBinaryString(f);
}


}



document.getElementById("inputPHS").addEventListener('change', handleXLSFile, false);