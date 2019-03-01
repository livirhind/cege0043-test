function startDataUpload(){
	
	//receive the text box values
	var name= document.getElementById("name").value;
	var surname= document.getElementById("surname").value;
	var modulecode= document.getElementById("module").value;
	//put values in postring to send to the server
	var postString="name="+name +"&surname="+surname+"&module="+modulecode;
	alert(postString);
}