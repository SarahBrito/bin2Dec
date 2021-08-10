
function toConvert(){
  let bin = document.querySelector(".main__input-bin").value
  let decNumber = 0
  let isBin = true
  let binNumber = bin.split('').reverse().join('')
  
  for (var i=0; i < binNumber.length; i++){
    
    if (binNumber[i] !="1" && binNumber[i] != "0"){
      isBin = false
      document.querySelector(".msg__error").innerHTML = "Número inválido (digite apenas 0 ou 1)"
      document.querySelector(".main__result").innerHTML = ""
      break
    }
    decNumber += Number(binNumber[i]) * Math.pow(2,i)
  }
  
  if (isBin === true){

    let text = document.querySelector(".main__result")
    text.style.cssText = "opacity: 0.8;" + "color: #0cce6b;"
    document.querySelector(".msg__error").innerHTML = ""
    document.querySelector(".main__result").innerHTML = `${bin}(bin) = ${decNumber}(dec)`
  }
  
}


