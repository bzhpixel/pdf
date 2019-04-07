
/* fixdata and rABS are defined in the drag and drop example */
function handleMilkFile(e) {

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
			if(rABS) {/* if binary string, read with type 'binary' */
					workbook = XLSX.read(data, {type: 'binary'});
					
					var first_sheet_name = workbook.SheetNames[0];
					
					/* Get worksheet */
					var worksheet = workbook.Sheets[first_sheet_name];
					

					var tab = XLSX.utils.sheet_to_json(worksheet, {header:1});


					//recherche de la dernière ligne saisie
					let isEmpty = 0;
					let currentRow = 6;
					let maxRow = 0;
					let C = 2; // colonne 'C'
					while (isEmpty == 0){

						if(tab[currentRow][2] == null){
							isEmpty = 1;
							maxRow =currentRow;
						}
						currentRow++;
					}
					



					var milkarray=[];
					isEmpty = 0;
					currentRow = maxRow-1;
					C = 9; // colonne 'C'
					while (isEmpty == 0){
						console.log(currentRow);
						if(tab[currentRow][9] != null){
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
							
						}
						currentRow--;
					} 
					//console.table("lait"+milkarray);


					let es =document.getElementById("milkSelect");


					milkarray.forEach(element => {
					let option = document.createElement("option");
					option.text = element[0]  + "("+ element[1] +")";
					option.value = element[1];
					es.add(option);	
					});



			} else {// if array buffer, convert to base64 
				var arr = fixdata(data);
				workbook = XLSX.read(btoa(arr), {type: 'base64'});
			}// DO SOMETHING WITH workbook HERE 
			};
			 reader.readAsBinaryString(f);
}}





document.getElementById("inputMilk").addEventListener('change', handleMilkFile, false);
