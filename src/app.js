import "bootstrap";
import "./style.css";




window.onload = function () {

  let quien = ['Mi perro', 'Mi abuela', 'El vecino', 'Un extraterrestre', 'Un Mago'];
  let accion = ['se comió', 'quemó', 'perdió', 'robó', 'desaparecio', 'mojo'];
  let objeto = ['mi tarea', 'mi mochila', 'mi cuaderno', 'mi lápiz'];
  let lugar = ['en el parque', 'en la cocina', 'en Marte', 'en el baño'];


  let boton = document.getElementById("generar");
  let resultado = document.getElementById("excusa");


  boton.addEventListener("click", function () {
    let i = quien[Math.floor(Math.random() * quien.length)];
    let j = accion[Math.floor(Math.random() * accion.length)];
    let k = objeto[Math.floor(Math.random() * objeto.length)];
    let l = lugar[Math.floor(Math.random() * lugar.length)];

    resultado.textContent = `${i} ${j} ${k} ${l}.`;
    resultado.style.animation = "none";
    resultado.offsetHeight;
    resultado.style.animation = "fadeIn 0.5s ease";
  });
};