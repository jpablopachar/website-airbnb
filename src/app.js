import './styles/styles.css';
import './static/images/logo.png';
import './static/images/arriba.jpg';
import './static/images/arriba2.jpg';
import './static/images/lupa.png';
import './static/images/hacer1.jpg';
import './static/images/hacer2.jpg';
import './static/images/hacer3.jpg';
import './static/images/hacer4.jpg';
import './static/images/hospedaje1.jpg';
import './static/images/hospedaje2.jpg';
import './static/images/hospedaje3.jpg';
import './static/images/hospedaje-pro.jpg';
import './static/images/populares1.jpg';
import './static/images/populares2.jpg';
import './static/images/populares3.jpg';
import './static/images/populares4.jpg';
import './static/images/newyork1.jpg';
import './static/images/newyork2.jpg';
import './static/images/newyork3.jpg';
import './static/images/newyork4.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const imagenHero = document.querySelector('.hero');
  const imagenes = ['arriba2.jpg', 'arriba.jpg'];

  let i = 0;
  let tiempo = 0;

  setInterval(() => {
    imagenHero.style.backgroundPositionY = `- ${tiempo} px`;

    if (tiempo > 40) {
      tiempo = 0;
      imagenHero.style.backgroundImage = `url(/static/images/${imagenes[i]})`;

      if (i === imagenes.length - 1) {
        i = 0;
      } else {
        i += 1;
      }
    }

    tiempo += 1;
  }, 100);
});

const btnFlotante = document.querySelector('.btn-flotante');

// eslint-disable-next-line func-names
btnFlotante.addEventListener('click', function () {
  const footer = document.querySelector('.footer');

  if (footer.classList.contains('activo')) {
    footer.classList.remove('activo');
    this.classList.remove('activo');

    this.innerText = 'Idioma y Moneda';
  } else {
    footer.classList.add('activo');
    this.classList.add('activo');

    this.innerText = 'X Cerrar';
  }
});
