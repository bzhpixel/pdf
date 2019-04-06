
/* fixdata and rABS are defined in the drag and drop example */
function handleCreamFile(e) {

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
					//console.log(workbook);
					var first_sheet_name = workbook.SheetNames[0];
					//console.table(first_sheet_name);
					/* Get worksheet */
					var worksheet = workbook.Sheets[first_sheet_name];
					//console.table(worksheet);

					var tab = XLSX.utils.sheet_to_json(worksheet, {header:1});
					console.log(tab);
					console.log(tab[6][2]);



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
console.log("max=" + maxRow);
var creamArray=[];
isEmpty = 0;
currentRow = maxRow-1;
C = 9; // colonne 'C'
while (isEmpty == 0){
	console.log(currentRow);
	if(tab[currentRow][11] != null){
		isEmpty = 1;
	}else{

		//console.log(cell.v);
		//if(startRow >= 85)isEmpty = 1;
		let creamES = tab[currentRow][9]; 
		if (creamES != null){
			console.log(creamES.v);
		}else{
			
			console.log("vide");
			creamES = 0.44;
        }

        let creamMG = tab[currentRow][8]; 
		if (creamMG != null){
			console.log(creamMG.v);
		}else{
			
			console.log("vide");
			creamMG = 0.42;
        }


		let tempArrayToPush = [tab[currentRow][2], parseFloat(creamES*100).toFixed(2), parseFloat(creamMG*100).toFixed(2)];

		creamArray.push(tempArrayToPush);
		
	}
	currentRow--;
} 
console.table("cream: "+creamArray);


let es =document.getElementById("creamSelect");


creamArray.forEach(element => {
let option = document.createElement("option");
option.text = element[0];
option.value = element[2] + "|" + element[1];
es.add(option);	
});



			} else {// if array buffer, convert to base64 
				var arr = fixdata(data);
				workbook = XLSX.read(btoa(arr), {type: 'base64'});
			}// DO SOMETHING WITH workbook HERE 
			};
			 reader.readAsBinaryString(f);
}}




document.getElementById("inputCream").addEventListener('change', handleCreamFile, false);
