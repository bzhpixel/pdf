/*SheetJS*/
/* processing array buffers, only required for readAsArrayBuffer */
function fixdata(data) {
	let o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,newUint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, newUint8Array(data.slice(l*w)));
	return o;
}
const rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer/* set up drag-and-drop event */
let tab = [];

/* fixdata and rABS are defined in the drag and drop example */
function handlePHMFile(e) {

	var files = e.target.files;
	console.log(files);
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
					

					tab = XLSX.utils.sheet_to_json(worksheet, {header:1});
                    console.log(tab);
                    console.log(tab[2][2]);
                    console.log(tab[3][2]);
                    console.log(tab.length);
					//recherche de la dernière ligne saisie
/* 					let isEmpty = 0;
					let currentRow = 2;
					let maxRow = 0;
					let C = 2; // colonne 'C'
					while (isEmpty == 0){

						if(tab[currentRow][2] == null){
							isEmpty = 1;
							maxRow =currentRow;
						}
						currentRow++;
					}
					
                    console.log(maxRow); */

                    let maxRow = tab.length;

					var phmarray=[];
					isEmpty = 0;
					currentRow = maxRow-5;
					C = 9; // colonne 'C'
					let ul = document.createElement("ul");
					while (currentRow < maxRow){
						console.log(currentRow);
						var liste = document.createElement("li");
						var lien = document.createElement("a");

						var lienText = document.createTextNode(tab[currentRow][1] + " | " + tab[currentRow][6] + " | " + tab[currentRow][4]);
						// lien.href=tab[currentRow][2];
						lien.href='#';
						let link = "showMix("+currentRow+");";
						lien.setAttribute("onclick",link);

						liste.value=tab[currentRow][2];
						
						lien.appendChild(lienText);
						liste.appendChild(lien);
						ul.appendChild(liste);

/* 						if(tab[currentRow][9] != null){
							isEmpty = 1;
						}else{
							let milkES = tab[currentRow][8]; 
							if (milkES != null){
								//console.log(milkES.v);
							}else{
								
								//console.log("vide");
								milkES = 0.38;
							}
							let tempArrayToPush = [tab[currentRow][2], parseFloat(milkES*100).toFixed(2)];

							milkarray.push(tempArrayToPush);
							
						} */
						currentRow++;
					} 
					//console.table("lait"+milkarray);
					document.getElementById("rightPanel").appendChild(ul);

					var newLink = document.createElement('a');
					document.getElementById("rightPanel").appendChild(newLink);

                    let div=document.getElementById("selection");
                    div.style.display = "none";


			} else {// if array buffer, convert to base64 
				var arr = fixdata(data);
				workbook = XLSX.read(btoa(arr), {type: 'base64'});
			}// DO SOMETHING WITH workbook HERE 
			};
			 reader.readAsBinaryString(f);
}}

document.getElementById("inputPHM").addEventListener('change', handlePHMFile, false);

function showMix(id){
 let div = document.getElementById("leftPanel");
	//div.innerHTML = id;
	document.getElementById("OP_OP").textContent= " " + tab[id][6];

	document.getElementById("OP_parfum").textContent= " " + tab[id][1];
	document.getElementById("OP_code_mix").textContent= " " + tab[id][2];
	document.getElementById("OP_quantite").textContent= " " + tab[id][4];

	document.getElementById("OP_produit").textContent= " " + tab[id][3];
	document.getElementById("OP_cuve").textContent= " " + tab[id][5];

	document.getElementById("OP_remarque").textContent= " " + tab[id][12];
	document.getElementById("OP_consigne").textContent= " " + tab[id][13];
}
