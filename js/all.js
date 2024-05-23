const pageTitle = document.querySelector('.page-title');
const pages = document.querySelectorAll('.page');
const abouts = document.querySelectorAll('.about ul li');
abouts.forEach((about) => {
  about.addEventListener('click', () => {
    // console.log(pages[1]);
    if (about.innerHTML == 'works') {
      pageTitle.innerHTML = "My works";
      pages[0].classList.add('close');
      pages[1].classList.add('open');
      pages[2].classList.remove('open');
    } else if (about.innerHTML == 'contact') {
      pageTitle.innerHTML = "Contact"
      pages[2].classList.add('open');
      pages[1].classList.remove('open');
      pages[0].classList.add('close');
    } else {
      pageTitle.innerHTML = "Profile";
      pages[0].classList.remove('close');
      pages[1].classList.remove('open');
      pages[2].classList.remove('open');
    }
  })
})