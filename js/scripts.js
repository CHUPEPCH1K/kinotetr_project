const schemeSvg = document.querySelector(".scheme-svg");
const totalPriceTag = document.querySelector(".price-total");
const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
let cost = 800;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
if(!event.target.classList.contains("booked"))
{
    event.target.classList.toggle("active");
    let totalSeats = schemeSvg.querySelectorAll(".active").length ;
    totalPrice = totalSeats * cost
    totalPriceTag.textContent = totalPrice;
}
});
menuButton.addEventListener('click', () =>
{
    console.log("Кликнули по меню");
    menu.classList.toggle("is-open");
});

function openTrailerModal() {
    document.getElementById('trailerModal').classList.add('active');
  }
  
  function closeTrailerModal() {
    const modal = document.getElementById('trailerModal');
    modal.classList.remove('active');
    
    // Остановка видео при закрытии
    const iframe = document.getElementById('rutubeTrailer');
    const src = iframe.src;
    iframe.src = '';
    iframe.src = src;
  }
  
  // Закрытие по нажатию Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeTrailerModal();
    }
  });
  
  // Закрытие по клику вне плеера
  document.getElementById('trailerModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('trailerModal')) {
      closeTrailerModal();
    }
  });