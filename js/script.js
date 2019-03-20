const divProcessPDF = document.getElementById("processInput");



divProcessPDF.addEventListener("keypress", function(event){

		if (event.key === "Enter") {

			var codeSauce = divProcessPDF.value;
			
			var isnum = /^\d+$/.test(codeSauce);
		
			if(codeSauce.length == 8 && isnum){
				document.getElementById("processPDF").innerHTML="<object data='./epro/"+codeSauce+".pdf' type='application/pdf' style='width:100%; height:100vh'></object>";
			}else{
				divProcessPDF.value = "erreur de saisie";
				divProcessPDF.style.backgroundColor = "red";
				divProcessPDF.style.color = "black";
				setTimeout(resetInputStyle, 3000);
			}
		}
});

function resetInputStyle(){
	divProcessPDF.value = "";
	divProcessPDF.style.backgroundColor = "#A1A5D1";
	divProcessPDF.style.color = "#61424F";
}