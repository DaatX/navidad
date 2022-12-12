/*=============== MOSTRAR MENÚ ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENÚ MOSTRAR =====*/
/* Validar si existe constante */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENÚ OCULTO =====*/
/* Validar si existe constante */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== ELIMINAR MENÚ MÓVIL ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
        //Cuando hacemos clic en cada enlace de navegación, eliminamos la clase show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CAMBIAR CABECERA DE FONDO ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
        // Cuando el desplazamiento es mayor que 50 de altura de ventana gráfica, agregue la clase de encabezado de desplazamiento a la etiqueta del encabezado
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MOSTRAR DESPLAZAMIENTO HACIA ARRIBA ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // Cuando el desplazamiento es superior a 350 de altura de ventana gráfica, agregue la clase show-scroll a la etiqueta a con la clase scrollup
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DESPLAZAR SECCIONES ENLACE ACTIVO ===============*/

const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== PARALAJE ===============*/

let parallax = new Rellax('.parallax');

/*=============== ANIMACION GSAP ===============*/

gsap.from('.home__village', 1.2, { opacity: 0, y: 100, delay: .1 })
gsap.from('.home__pine', 1.2, { opacity: 0, y: 150, delay: .3 })
gsap.from('.home__mountain-2', 1.2, { opacity: 0, y: 150, delay: .5 })
gsap.from('.home__mountain-3', 1.2, { opacity: 0, y: -150, delay: .6 })
gsap.from('.home__mountain-1', 1.2, { opacity: 0, y: 250, delay: .7 })
gsap.from('.home__moon', 1.2, { opacity: 0, y: 200, delay: .8 })
gsap.from('.home__trineo', 1.2, { opacity: 0, x: -200, delay: .8 })
gsap.from('.home__title', 1.2, { opacity: 0, y: -60, delay: 1 })

/*=============== ANIMACIÓN DE REVELACIÓN DE DESPLAZAMIENTO ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

sr.reveal(`.about__data, .celebrate__img`, { origin: 'right' })
sr.reveal(`.about__img, .celebrate__data`, { origin: 'left' })
sr.reveal(`.send__card`, { interval: 100 })
sr.reveal(`.footer`)