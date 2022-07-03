let span = document.querySelector('.up');

window.onscroll = function () {
  if (this.scrollY >= 800) {
    span.classList.add('show');
  } else {
    span.classList.remove('show');
  }
};

span.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
