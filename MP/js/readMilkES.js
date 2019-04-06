
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
					//console.log(workbook);
					var first_sheet_name = workbook.SheetNames[0];
					//console.table(first_sheet_name);
					/* Get worksheet */
					var worksheet = workbook.Sheets[first_sheet_name];
					//console.table(worksheet);

					var tab = XLSX.utils.sheet_to_json(worksheet, {header:1});
					console.log(tab);
					console.log(tab[6][2]);


/* loop through every cell manually */
//var range = XLSX.utils.decode_range(worksheet['!ref']); // get the range

/* for(var R = range.s.r; R <= range.e.r; ++R) {
  for(var C = range.s.c; C <= range.e.c; ++C) {
	// find the cell object 
	console.log('Row : ' + R);
	console.log('Column : ' + C);
	var cellref = XLSX.utils.encode_cell({c:C, r:R}); // construct A1 reference for cell
	if(!worksheet[cellref]) continue; // if cell doesn't exist, move on
	var cell = worksheet[cellref];
	console.log(cell.v);

}} */


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
var milkarray=[];
isEmpty = 0;
currentRow = maxRow-1;
C = 9; // colonne 'C'
while (isEmpty == 0){
	console.log(currentRow);
	if(tab[currentRow][9] != null){
		isEmpty = 1;
	}else{

		//console.log(cell.v);
		//if(startRow >= 85)isEmpty = 1;
		let milkES = tab[currentRow][8]; 
		if (milkES != null){
			console.log(milkES.v);
		}else{
			
			console.log("vide");
			milkES = 0.38;
		}
		let tempArrayToPush = [tab[currentRow][2], parseFloat(milkES*100).toFixed(2)];

		milkarray.push(tempArrayToPush);
		
	}
	currentRow--;
} 
console.table("lait"+milkarray);


let es =document.getElementById("milkSelect");


milkarray.forEach(element => {
let option = document.createElement("option");
option.text = element[0];
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
