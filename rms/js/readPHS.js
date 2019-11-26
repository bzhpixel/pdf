/*SheetJS*/
/* processing array buffers, only required for readAsArrayBuffer */
// function fixdata(data) {
// 	let o = "", l = 0, w = 10240;
// 	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,newUint8Array(data.slice(l*w,l*w+w)));
// 	o+=String.fromCharCode.apply(null, newUint8Array(data.slice(l*w)));
// 	return o;
// }
// const rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer/* set up drag-and-drop event */



	var tab;
    let tableauElement = new Array();
    var autre;
    var dateDebut, heureDebut, dateFin, heureFin;
    var needToCheckDate = 0;



function createTableForFlavor(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.setAttribute("colspan", "4");
    txt = document.createTextNode("Arôme");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            //console.log(t.length);
            let debug =t.length;
            let i=0, j=0;


            for(j=0;j<tabTriSalleArome.length;j++){

                for(i=0;i<t.length;i++){

                    if(checkElementInJson(arome, t[i][0]) == true && GetAromePlacement(t[i][0]) == tabTriSalleArome[j]){
                    //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                    // console.log("draw flavor");
                    // console.log(i);
                    // console.log(t[i][0]);
                    // console.log(GetAromePlacement(t[i][0]));
                    // console.log(t[i][1]);
                    createTableRowForFlavor(table,
                        t[i][0],
                        GetAromePlacement(t[i][0]),
                        t[i][1]
                    );
                    t[i][2]=1;
                    }
                
                
                    
                }

            }
                
}
function createTableForPowder(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.setAttribute("colspan", "4");
    txt = document.createTextNode("Poudre");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            let i=0;
            for(i=0;i<t.length;i++){

                if(checkElementInJson(poudre, t[i][0]) == true){
                   //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                createTableRow(table,t[i][0],
                                t[i][1]
                                 );
                                 t[i][2]=1;
                }
            
            
                
                }
                
}
function createTableForFruit(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    
    td.setAttribute("colspan", "4");
    td.setAttribute("height", "40");
    txt = document.createTextNode("Purée");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            for(i=0;i<t.length;i++){

                if(checkElementInJson(fruit, t[i][0]) == true){
                   //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                createTableRow(table,t[i][0],
                                t[i][1]
                                 );
                                 t[i][2]=1;
                }
            
            
                
                }
                
}

function createTableForOther(table,t){
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.setAttribute("colspan", "4");
    txt = document.createTextNode("Autre");
    td.appendChild(txt);
    tr.appendChild(td);
    tr.classList.add("tableH1");
    table.appendChild(tr);
            //dessin tableau
            for(i=0;i<t.length;i++){

                
                if(t[i][2] == 0){
                   //console.log("afficher" +t[i][0] + "=" + t[i][1]);
                createTableRow(table,t[i][0],
                                t[i][1]
                                 );
                                 t[i][2]=1;
                }
            
            
                
                }
                
}
    
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
    td.style.width = "15%";
    td.appendChild(txt);
    tr.appendChild(td);

    // // nom de la sauce
    td = document.createElement("td");
    txt = document.createTextNode(col2);
    td.style.width = "30%";
    td.appendChild(txt);
    tr.appendChild(td);

      // // cas vide
      td = document.createElement("td");
      txt = document.createTextNode("");
      td.style.width = "50%";
      td.appendChild(txt);
      tr.appendChild(td);

    tableBody.appendChild(tr);
}


function checkElementInJson(tab, element){
//console.log("check"+element);

        let i =0;
        for(i=0;i<tab.length;i++){
            if(tab[i].article.includes(element) ){
                //console.log("true");
                return 1;
            }
        }
        //console.log("false");
    
    return -1;

}

function checkElement(tab, element){

    if(tab.length == 0){
        //cas ou le tableau est vide
        return -1;
    }else{
        let i =0;
        for(i=0;i<tab.length;i++){
            if(tab[i][0] == element ){
                return 1;
            }
        }

    }
    return -1;

}

function checkDate(DateToTest){
    let myTestDate = DateToTest;
    
    let myDate = new Date(
        myTestDate.substring(6,10),
        myTestDate.substring(3,5)-1,
        myTestDate.substring(0,2),
        myTestDate.substring(11,13),
        myTestDate.substring(14,16)
    );

    dateDebut

    let d1 = new Date(
        dateDebut.substring(0,4),
        dateDebut.substring(5,7)-1,
        dateDebut.substring(8,10),
        heureDebut.substring(0,2),
        heureDebut.substring(3,6)
    );

    let d2 = new Date(
        dateFin.substring(0,4),
        dateFin.substring(5,7)-1,
        dateFin.substring(8,10),
        heureFin.substring(0,2),
        heureFin.substring(3,6)
    );

        if(myDate >= d1 && myDate <= d2){
            return 1;
        }else{
            return 0;
        }

    
};

function writeDataTable(t){
    let tableLength = t.length;

    // on fait le tri dans le tableau
    //suppression des doublons
    let nombreElement = 0;

    console.log("taille du tableau:" + tableLength);
    for(i=0;i<tableLength;i++){

       if(checkElement(tableauElement,t[i]["N° d'article"]) == -1){
           // console.log("ajout nouveau element");
       if(needToCheckDate==1){
           if( checkDate(t[i]["reservé"]) == 1){
            tableauElement.push(new Array(t[i]["N° d'article"], t[i]["Description d'article"],0));
            nombreElement ++;
           }
       }else{
        tableauElement.push(new Array(t[i]["N° d'article"], t[i]["Description d'article"],0));
        nombreElement ++;
       }


        }
    }
        //console.log(tableauElement);



    let div = document.getElementById("DataPanel");
    //div.write(t[0]);
    //console.log(t[2]["Description d'article"]);
    let tableBody = document.getElementById("DataPanelTableBody");
    
    //dessin tableau
    createTableForFlavor(tableBody,tableauElement); 
    createTableForPowder(tableBody,tableauElement); 
    createTableForFruit(tableBody,tableauElement); 
    createTableForOther(tableBody,tableauElement); 

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
            
            dateDebut = $("#dateDebut").val();
            dateFin = $("#dateFin").val();
            heureDebut = $("#heureDebut").val();
            heureFin = $("#heureFin").val();

            if($("#dateDebut").val() == null ||$("#dateDebut").val() == undefined || $("#dateDebut").val() == ""){
                needToCheckDate = 0;
            }else{
                needToCheckDate = 1;
            }


            document.getElementById("selectionPHS").style.display = "none";
            $("main").remove();


            writeDataTable(tab);

		};
			 reader.readAsBinaryString(f);
}


}



document.getElementById("inputPHS").addEventListener('change', handleXLSFile, false);