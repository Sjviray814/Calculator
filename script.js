let display = document.getElementById("display");
let beginningText = "0";
let displayText = "";
let displayParts = ["", "", ""];


function putNumber(num){
	if(displayParts[0] == "0"){ // If the first element is a zero
		
		if(displayParts[1]){ // if there is a sign already
			displayParts[2] = displayParts[2] + num;
		}
		else{ // the first element is a zero but there is no sign
			displayParts[0] = "" + num;
		}
	}
	
	else{ // If the first element is not a zero
		if(displayParts[1]){ // if there is a sign already
			displayParts[2] = displayParts[2] + num;
		}
		else{ // the first element is not a zero but there is no sign
			displayParts[0] = displayParts[0] + num;
		}
	}
	
	
	updateDisplay();
}

function putSign(sign){
	displayParts[1] = sign;	
	updateDisplay();
}

function equals(){
	num1 = parseFloat(displayParts[0]);
	num2 = parseFloat(displayParts[2]);
	sign = displayParts[1];
	if(!num2){ // if num2 doesn't exist
		displayParts[1] = "";
		
	}
	
	switch(sign){
		case '+':
			displayParts = ["" + (num1 + num2), "", ""];
			break;
		case '-':
			displayParts = ["" + (num1 - num2), "", ""];
			break;
		case 'x':
			displayParts = ["" + (num1 * num2), "", ""];
			break;
		case '/':
			displayParts = ["" + (num1 / num2), "", ""];
			break;
			
	}
	
	updateDisplay();
}






function clearAll(){
	displayParts = ["0", "", ""];
	updateDisplay();
}

function backspace(){
	if(displayParts[2] != ""){
		displayParts[2] = displayParts[2].slice(0, -1);
	}
	else if(displayParts[1] != ""){
		displayParts[1] = "";
	}
	else{
		displayParts[0] = displayParts[0].slice(0, -1);
		if(displayParts[0] == "") displayParts[0] = "0";
	}
	
	updateDisplay();
}	


function percent(){
	if(displayParts[2] != ""){ // if the rightmost number is the second one
		displayParts[2] = "" + (parseFloat(displayParts[2]) / 100);
	}
	else{ //if the rightmost number is the first one
		displayParts[0] = "" + (parseFloat(displayParts[0]) / 100);
	}
	
	updateDisplay();
}

function negative(){
	if(displayParts[2] != ""){ // if the rightmost number is the second one
		displayParts[2] = "" + (parseFloat(displayParts[2]) * -1);
	}
	else{ //if the rightmost number is the first one
		displayParts[0] = "" + (parseFloat(displayParts[0]) * -1);
	}
	
	updateDisplay();
}


function updateDisplay(){
	displayText = displayParts.join(" ");	
	display.innerHTML = displayText;
}



window.onload=function(){
	displayParts[0] = beginningText;
	display.innerHTML = beginningText;
}