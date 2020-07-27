let formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function(e){
  e.preventDefault();
  formulario.reset();
})