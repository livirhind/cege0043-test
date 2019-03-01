function startDataUpload(){
	
	//receive the text box values
	var name= document.getElementById("name").value;
	var surname= document.getElementById("surname").value;
	var modulecode= document.getElementById("module").value;
	//put values in postring to send to the server
	var postString="name="+name +"&surname="+surname+"&module="+modulecode;
	alert(postString);
	//calling the processing function
	processData(postString);
}

var client; //the global variable that holds the request
function processData(postString) {
    client = new XMLHttpRequest() ;
    client.open('POST', 'http://developer.cege.ucl.ac.uk:30309/reflectData',true);
    client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    client.onreadystatechange = dataUpload;
    //send the post string
    client.send(postString);
}

//create the code to wait for the response from the data server, and process the response once it is received
function dataUpload() {
	//function listens out for the server to say that the data is ready
	if (client.readyState == 4){
		//change the DIV to show the response
		document.getElementById("dataUploadResult").innerHTML= client.responseText;
	}
}