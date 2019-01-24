window.onload = function () {
    // 导航栏渐显
    searchshow();
}
let searchshow = function () {
    let nav = document.querySelector('.header_main');
    window.onscroll = function () {
        let scrollTop = window.pageYOffset;
        let opacity = 0;
        if (scrollTop < 170) {
            opacity = 0;
        } else {
            opacity = 0.85;
        }
        nav.style.background = 'rgba(255,192,1,' + opacity + ')';
    }

};
