// Form validation functions for Mantz Music Website

function validateName(formName, fieldName){
	var x=document.forms["formName"]["fieldName"].value;
	var re = /^\s*[A-Za-z]{2,}\s+([A-Za-z]{2,})?\s*$/;
	var m = re.exec(x);
	if (m==null){
		alert("Please enter your name.");
		document.forms["formName"]["fieldName"].style.backgroundColor = "#FFAAAA";
		return false;
	}
	else{
		return true;
	}
}

function valContactForm(){
	
}