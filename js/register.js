function formValidation(){
  var registerForm = document.querySelector('form');
  if(registerForm != undefined){
    return true;
  }
  return false;
}

function inputValidation(inputType){
  var inputField = document.querySelector("input[type="+inputType+"]");
  if(inputField != undefined){
    return true;
  }
  return false;
}

function confirmPass(){
  var confPass = document.querySelectorAll("input[type='password']");
  if(confPass.length == 2){
    return true;
  }
  return false;
}

function buttonValidation(numberOfButtons){
  var documentButtons = document.querySelectorAll('button');
  if(documentButtons.length == numberOfButtons){
    return true;
  }
  return false;
}

function labelValidation(numberOfLabels){
  var documentLabels = document.querySelectorAll('label');
  if(documentLabels.length == numberOfLabels){
    return true;
  }
  return false;
}

function changePageValidation(){
  var documentLinks = document.querySelectorAll('a');
  if(documentLinks.length == 2){
    return true;
  }
  return true;
}

var errors = [];

requiredInputs = ['email', 'password', 'text'];

numberOfLabels = 4;

numberOfButtons = 2;

if(formValidation() == false){
  errors.unshift('Form is not found.');
}

if(confirmPass() == false){
  errors.unshift('Password confirmation is missing.');
}

for(i=0; i < requiredInputs.length; i++){
  if(inputValidation(requiredInputs[i]) == false){
    errors.unshift('Input ' + requiredInputs[i] + ' is missing.');
  }
}

if(buttonValidation(numberOfButtons) == false){
  errors.unshift('At least one button is missing.');
}

if(labelValidation(numberOfLabels) == false){
  errors.unshift('At least one label is missing.');
}

if(changePageValidation() == false){
  errors.unshift('The link to the other page is missing.');
}

var divResult = document.querySelector('#results');

divResult.style.display = 'block';

var listResults = document.getElementById('error-list');

if(errors.length === 0){
  var displayedText = document.createTextNode('Every validation has been passed.')
  listResults.appendChild(displayedText);
}else{
  for(var i = 0; i < errors.length; i++){
    var displayedText = document.createTextNode(errors[i] + '\r');
    listResults.appendChild(displayedText);
  }
}


