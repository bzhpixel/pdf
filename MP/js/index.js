
/* window.onload = function(e){
	console.log("ajax");
	var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
								//console.log("succes");
                //document.getElementById("milkSelect").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET", "./js/ajaxMilk.js", true);
        xmlhttp.send();
}; */


/* processing array buffers, only required for readAsArrayBuffer */
function fixdata(data) {
	let o = "", l = 0, w = 10240;
	for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,newUint8Array(data.slice(l*w,l*w+w)));
	o+=String.fromCharCode.apply(null, newUint8Array(data.slice(l*w)));
	return o;
}
const rABS = true; // true: readAsBinaryString ; false: readAsArrayBuffer/* set up drag-and-drop event */






document.getElementById("creamSelect").addEventListener("change", (e)=>{
	
	let separator = document.getElementById("creamSelect").value.indexOf("|");
	console.log(separator);

	let creamMG = document.getElementById("creamSelect").value.slice(0, separator);

	console.log(creamMG);

	let creamES = document.getElementById("creamSelect").value.slice(separator+1, document.getElementById("creamSelect").value.length);

	console.log(creamES);

	document.getElementById("creamES").value = creamES;
	document.getElementById("creamMG").value = creamMG;

	calculate();
});




document.getElementById("milkSelect").addEventListener("change", (e)=>{
	
	let milkES = document.getElementById("milkSelect").value;

	document.getElementById("milkES").value = milkES;
	calculate();
});







document.getElementById("waterInput").addEventListener("input", (e) => {
/* 	let water = parseInt(document.getElementById("waterInput").value);
	let milk = parseInt(document.getElementById("milkInput").value);
	let cream = parseInt(document.getElementById("creamInput").value);

	document.getElementById("totalInput").value = water + milk + cream; */

	calculate();
});

document.getElementById("milkInput").addEventListener("input", (e) =>{
/* 	let water = parseInt(document.getElementById("waterInput").value);
	let milk = parseInt(document.getElementById("milkInput").value);
	let cream = parseInt(document.getElementById("creamInput").value);

	document.getElementById("totalInput").value = water + milk + cream;


	let milkES = parseFloat(document.getElementById("milkES").value);
	let milkCalculated = milk * 38/ milkES;
	document.getElementById("milkCalculated").value = milkCalculated.toFixed(2); */
	calculate();

});

document.getElementById("creamInput").addEventListener("input", (e) =>{
/* 	let water = parseInt(document.getElementById("waterInput").value);
	let milk = parseInt(document.getElementById("milkInput").value);
	let cream = parseInt(document.getElementById("creamInput").value);
	let milkES = parseFloat(document.getElementById("milkES").value);


	if(cream == 0){

		let milkES = parseFloat(document.getElementById("milkES").value);
		let milkCalculated = milk * 38/ milkES;
		document.getElementById("milkCalculated").value = milkCalculated.toFixed(2);


	}else{
		let creamES = parseFloat(document.getElementById("creamES").value);
		let creamMG = parseFloat(document.getElementById("creamMG").value);

		let creamCalculated = cream * 40 / creamMG;
		document.getElementById("creamCalculated").value = creamCalculated.toFixed(2);

		let milkCalculated = (milk*38-(creamCalculated*creamES - cream*44)) / milkES;
		document.getElementById("milkCalculated").value = milkCalculated.toFixed(2);

		let waterCalculated = (water + milk + cream)-(creamCalculated + milkCalculated);
		document.getElementById("waterCalculated").value = waterCalculated.toFixed(2);


		 
		document.getElementById("totalCalculated").value = (waterCalculated + milkCalculated + creamCalculated).toFixed(2);



	
	}



	document.getElementById("totalInput").value = water + milk + cream;*/

	calculate();
});







function calculate(){
	let water = parseInt(document.getElementById("waterInput").value);
	let milk = parseInt(document.getElementById("milkInput").value);
	let cream = parseInt(document.getElementById("creamInput").value);

	let milkES = parseFloat(document.getElementById("milkES").value);
	let creamES = parseFloat(document.getElementById("creamES").value);
	let creamMG = parseFloat(document.getElementById("creamMG").value);

	let creamCalculated = 0;

	let milkCalculated = 0;

	let waterCalculated = 0;
	

	if(cream == 0){

		let milkES = parseFloat(document.getElementById("milkES").value);
		let milkCalculated = milk * 38/ milkES;
		document.getElementById("milkCalculated").value = milkCalculated.toFixed(2);

		let creamCalculated = 0;

		let waterCalculated = (water + milk)-(milkCalculated);
		document.getElementById("waterCalculated").value = waterCalculated.toFixed(2);
		document.getElementById("totalCalculated").value = (waterCalculated + milkCalculated).toFixed(2);
	}else{
		let creamES = parseFloat(document.getElementById("creamES").value);
		let creamMG = parseFloat(document.getElementById("creamMG").value);

		let creamCalculated = cream * 40 / creamMG;
		document.getElementById("creamCalculated").value = creamCalculated.toFixed(2);

		let milkCalculated = (milk*38-(creamCalculated*creamES - cream*44)) / milkES;
		document.getElementById("milkCalculated").value = milkCalculated.toFixed(2);

		let waterCalculated = (water + milk + cream)-(creamCalculated + milkCalculated);
		document.getElementById("waterCalculated").value = waterCalculated.toFixed(2);


		 
		document.getElementById("totalCalculated").value = (waterCalculated + milkCalculated + creamCalculated).toFixed(2);
	}



	document.getElementById("totalInput").value = water + milk + cream;
}