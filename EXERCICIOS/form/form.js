const isValidEmail = (email) => {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(String(email).toLowerCase())
}

const isValidCPF = (cpf) => {
  const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  return regex.test(String(cpf).toLowerCase())
}

//código acima copiado do github do frontbeginners//

const form = document.querySelector('form')
const input = document.querySelector('input[name="name"]')

const validarinput = () =>{
if(!input.value){
  input.nextElementSibling.classList.remove('esconder-erro')
}


}

form addEventListener('submit', (e) =>{
  e.preventDefault()
  validarinput()
  console.log('foi')

})