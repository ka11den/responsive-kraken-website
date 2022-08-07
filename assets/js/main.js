// show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')    

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('snow-menu')
    })
}

// remove menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('snow-menu')
    })
}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 1,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)