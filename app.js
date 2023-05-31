



/* Preload Animation */
window.addEventListener("load", () => {
    const contenedor_loader = document.querySelector(".contenedor_loader");
    contenedor_loader.style.opacity = 0;
    contenedor_loader.style.visibility = "hidden";
  });


  /* Movimientos 3D CARD */
  
  const posters = document.querySelectorAll('.imagen__container2');
  
  
  
  posters.forEach((poster) => {
      const height = poster.clientHeight;
      const width = poster.clientWidth;
      poster.addEventListener('mousemove', (e) => {
          const { layerX, layerY } = e;
          const xRotation = ((layerY - height / 2) / width) * 20;
          const yRotation = ((layerX - height / 2) / width) * 20;
  
          poster.style.transform =` perspective(500px) scale(1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
      });
      poster.addEventListener('mouseout', () => {
          poster.style.transform = 'perspective(0) scale(1) rotateX(0) rotateY(0)'
      });
  });
  
  
  // Galeria de imagenes
  
  document.addEventListener("DOMContentLoaded", function () {
    let imagenes = [
      { img: "/1.webp" },
      { img: "/2.jpg" },
      { img: "/3.jpg" },
      { img: "/4.jpg" },
    { img: "/5.jpg" },
    { img: "/6.jpg" },
    { img: "/7.jpg" },
    { img: "/8.jpg" },
    { img: "/9.jpg" },
    { img: "/10.jpg" },
    { img: "/11.webp" },
    { img: "/12.jpg" },
    { img: "/13.jpg" },
    { img: "/14.jpg" },
    { img: "/15.jpg" },
    { img: "/16.webp" },
    { img: "/17.jpg" },
    { img: "/18.jpg" },
    { img: "/19.jpg" },
    { img: "/20.jpg" },
    { img: "/21.webp" },
    { img: "/22.jpg" },
    { img: "/23.jpg" },
    { img: "/24.jpg" },
    { img: "/25.jpg" }
  ];

  let contador = 0;
  const contenedor = document.querySelector(".slideshow");
  const overlay = document.querySelector(".overlay");
  const galeria_imagenes = document.querySelectorAll(".galeria img");
  const img_slideshows = document.querySelector(".slideshow img");

  contenedor.addEventListener("click", function (event) {
    let atras = contenedor.querySelector(".atras"),
      adelante = contenedor.querySelector(".adelante"),
      img = contenedor.querySelector("img"),
      tgt = event.target;
    if (tgt == atras) {
      if (contador > 0) {
        img.src = imagenes[contador - 1].img;
        contador--;
      } else {
        img.src = imagenes[imagenes.length - 1].img;
        contador = imagenes.length - 1;
      }
    } else if (tgt == adelante) {
      if (contador < imagenes.length - 1) {
        img.src = imagenes[contador + 1].img;
        contador++;
      } else {
        img.src = imagenes[0].img;
        contador = 0;
      }
    }
  });
  Array.from(galeria_imagenes).forEach((img) => {
    img.addEventListener("click", (event) => {
      const imagen_seleccionada = +event.target.dataset.imgMostrar;
      img_slideshows.src = imagenes[imagen_seleccionada].img;
      contador = imagen_seleccionada;
      overlay.style.opacity = 1;
      overlay.style.visibility = "visible";
    });
  });

  var span = document.getElementsByClassName("btn_cerrar")[0];
  span.onclick = function () {
    overlay.style.visibility = "hidden";
  };
});
