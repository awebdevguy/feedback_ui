
const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.getElementById('ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
let selectedRating = 'Satisfied';

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = 
  `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We will use your feedback to improve our customer support.</p>
  `
});

ratingsContainer.addEventListener('click', (e) => {
  if(e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
  if(e.target.classList.contains('rating')) {
    removeActive();
    e.target.classList.add('active');
    selectedRating = e.target.querySelector('small').innerHTML;
  }
});

function removeActive() {
  for(let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}