let result = document.querySelector(".main__result")

function toConvert(){
  let bin = document.querySelector(".main__input-bin").value
  let decNumber = 0
  let isBin = true
  let binNumber = bin.split('').reverse().join('')
  
  for (var i=0; i < binNumber.length; i++){
    
    if (binNumber[i] !="1" && binNumber[i] != "0"){
      isBin = false
      result.style.display = "none"
      document.querySelector(".msg__error").innerHTML = "Número inválido (digite apenas 0 ou 1)"
      
      break
    }
    decNumber += Number(binNumber[i]) * Math.pow(2,i)
  }
  
  if (isBin === true){

    
    result.style.display = "block"
    document.querySelector(".msg__error").innerHTML = ""
    document.querySelector(".main__result").innerHTML = `${bin}(bin) = ${decNumber}(dec)`
  }
  
}


