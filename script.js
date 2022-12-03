const input = document.querySelector("input")
const lista = document.querySelector('ol')
const btn = document.querySelector("button")

function adicionar(event) {
    event.preventDefault() /* Prevenindo que a tela se atualize */

   const newLi = document.createElement('li');
   newLi.innerHTML = input.value;

   lista.appendChild(newLi);/* Adicionando nova lista */

   input.value = ''; /* Limpando o Input */
};
btn.addEventListener('click', adicionar);
