var ctc = document.querySelector('.contact');
var ctcBtn = document.querySelector('.ctc-btn');
var rtnBtn = document.querySelector('.return-btn');

ctcBtn.addEventListener('click', contactForm);
rtnBtn.addEventListener('click', contactForm);

function contactForm() {
  ctc.classList.toggle('active');
}