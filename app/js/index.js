const navSlide = () => {
  const burger = document.querySelector('.burger-wrapper'),
        nav = document.querySelector('.nav')

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')
  })
}

navSlide()