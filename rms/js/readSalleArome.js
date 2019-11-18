/*SheetJS*/
/* processing array buffers, only required for readAsArrayBuffer */
function fixdata(data) {
	let o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,newUint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, newUint8Array(data.slice(l*w)));
	return o;
}
const rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer/* set up drag-and-drop event */
var tabArome;
var planSalleArome = new Array();
var tabTriSalleArome = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "Z"];


function createTableRowForFlavor(tableBody,col1,col2, col3){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let i = document.createElement("i");
    i.setAttribute("class", "fas fa-arrows-alt-v");
    
   
    td.appendChild(i);
    td.setAttribute("class", "no-print");
    td.setAttribute("id", "sortableData");
    //td.style.width = "10%";
    tr.appendChild(td);

    //td.setAttribute("colspan", "2");
    td = document.createElement("td");

    if(col2 == "Z"){
        txt = document.createTextNode(col1);
    }else{
        txt = document.createTextNode(col1+" ( "+col2+" )");
    }

    td.style.width = "15%";
    td.appendChild(txt);
    tr.appendChild(td);

    // td = document.createElement("td");
    // txt = document.createTextNode(col2);
    // td.style.width = "10%";
    // td.appendChild(txt);
    // tr.appendChild(td);


    // // nom de la sauce
    td = document.createElement("td");
    txt = document.createTextNode(col3);
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





function GetAromePlacement(article){
    for(i=0;i<planSalleArome.length;i++){
        if(planSalleArome[i][0] == article){
            return planSalleArome[i][1];
        }
    }
    return "Z";
}

function reformatDataTable(t){
    let tableLength = t.length;

    // on fait le tri dans le tableau
    //suppression des doublons
    let nombreElement = 0;

    console.log("taille du tableau:" + tableLength);
    for(i=3;i<tableLength;i++){

        if(t[i]["__EMPTY_1"] != undefined){
            planSalleArome.push(new Array(t[i]["__EMPTY"].substring(0,8), t[i]["__EMPTY_1"]));
        }


    }
 }






/* fixdata and rABS are defined in the drag and drop example */
function handleXLSFileArome(e) {
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
					
					tabArome = XLSX.utils.sheet_to_json(worksheet, {header:0});
					

                //console.table(tab);


			} else {// if array buffer, convert to base64 
				var arr = fixdata(data);
				workbook = XLSX.read(btoa(arr), {type: 'base64'});
            }// DO SOMETHING WITH workbook HERE 
            
            //document.getElementById("selectionPHS").style.display = "none";
            //$("main").remove();

            $("#box-arome").removeClass("border-danger");
            $("#box-arome").addClass("border-success");

            console.log(tabArome)
            reformatDataTable(tabArome);

		};
			 reader.readAsBinaryString(f);
}


}



document.getElementById("inputSalleArome").addEventListener('change', handleXLSFileArome, false);