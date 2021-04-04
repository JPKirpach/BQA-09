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
    return true
  }
  return true
}

requiredInputs = ['email', 'password', 'text'];

for(i=0; i < requiredInputs.length; i++){
  console.log(inputValidation(requiredInputs[i]));
}

console.log(buttonValidation(2))

console.log(labelValidation(4))

console.log(changePageValidation())