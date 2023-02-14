(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        window.pageYOffset > 50 ? header.classList.add('header__active') :
            header.classList.remove('header__active');
    }
}());