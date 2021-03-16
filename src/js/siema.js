import Siema from 'siema';

const mySiema = new Siema({
  selector: '.siema',
  duration: 1500,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});
// listen for keydown event
setInterval(() => mySiema.next(), 3000);
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
