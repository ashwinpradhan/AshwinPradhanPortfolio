$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let ham = document.querySelector('.hamberger');
    let cuts = document.querySelector('.cut');
    let mobileNav = document.querySelector('.mobile-nav');

    ham.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    cuts.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });
});