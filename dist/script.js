const toggle = document.querySelector('.toggle__menu');
const headNav = document.querySelector('.header__nav');
const header = document.querySelector('.header');
const arrow = document.querySelector('.chevron');
const cta = document.querySelector('.cta');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    headNav.classList.toggle('open');
});

arrow.addEventListener("click", ()=> {
    arrow.classList.toggle('open');
    cta.classList.toggle('open');
});

// arrow.addEventListener('click', () => {
//     arrow.classList.toggle('open');
//     cta.classList.toggle('open');
// });

function foc() {
    cta.classList.remove("open");
}

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY >= 1) {
        header.classList.add("active");
        } else {
        header.classList.remove("active");
        }
    });

var testimonial = tns({
        container: '.testimonial__wrapper',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        controlsText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        speed:900
        }
    );

    const drop = document.querySelector('.downloaders');
    const dropdl = document.querySelector('.chevron');
