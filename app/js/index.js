const navSlide = () => {
  const burger = document.querySelector('.burger-wrapper'),
        nav = document.querySelector('.nav')

  burger.addEventListener('click', () => nav.classList.toggle('nav-active'))
}

navSlide()

// const selectedLink = () => {
//   const navLink = document.querySelector('.nav__link')

//   navLink.addEventListener('click', () => {
//     if (!navLink.classList.contains('selected')) console.log('1')
//   })
// }

// selectedLink()