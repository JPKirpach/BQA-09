function formValidation(){
  var loginForm = document.querySelector('form')
  if(loginForm != undefined){
    return true
  }
  return false
}

console.log(formValidation())

function inputValidation(inputType){
  var inputField = document.querySelector("input[type="+inputType+"]")
  if(inputField != undefined){
    return true
  }
  return false
}

requiredInputs = ['email', 'password']
for(i=0; i < requiredInputs.length; i++){
  console.log(inputValidation(requiredInputs[i]))
}


