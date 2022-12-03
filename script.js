const input = document.querySelector("input")
const lista = document.querySelector('ul')
const btn = document.querySelector("button")
let erro = document.querySelector('.erro')



function adicionar(event) {
    event.preventDefault() /* Prevenindo que a tela se atualize */

   const newLi = document.createElement('li');
   newLi.innerHTML = input.value;

   lista.appendChild(newLi);/* Adicionando nova lista */

   input.value = ''; /* Limpando o Input */
};
btn.addEventListener('click', adicionar);

input.addEventListener('keyup', function(){
    if(input.value.length < 5 && input.value.length > 0){
        erro.innerHTML = 'Mínimo de 5 caracteres!'
    }
    else {
        erro.innerHTML = ''
    }
});
