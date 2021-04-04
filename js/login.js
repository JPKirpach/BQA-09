function formValidation(){
  var loginForm = document.querySelector('form')
  if(loginForm != undefined){
    return true
  }
  return false
}

function inputValidation(inputType){
  var inputField = document.querySelector("input[type="+inputType+"]")
  if(inputField != undefined){
    return true
  }
  return false
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
  if(documentLinks.length == 1){
    return true
  }
  return false
}


console.log(changePageValidation())

console.log(formValidation())


requiredInputs = ['email', 'password']
for(i=0; i < requiredInputs.length; i++){
  console.log(inputValidation(requiredInputs[i]))
}


console.log(buttonValidation(1))


console.log(labelValidation(2))