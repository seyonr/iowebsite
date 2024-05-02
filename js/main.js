function homeScroll() {
    const about_scroll = document.querySelector('.home-page');
    about_scroll.scrollIntoView({ behavior: 'smooth' });
}

function aboutScroll() {
    const about_scroll = document.querySelector('.about-section');
    about_scroll.scrollIntoView({ behavior: 'smooth' });
}

function menuScroll(){
    const serv_scroll = document.querySelector(".warmup-page");
    serv_scroll.scrollIntoView({ behavior: 'smooth' });
}

function galleryScroll(){
    const shop_scroll = document.querySelector(".collage-div");
    shop_scroll.scrollIntoView({ behavior: 'smooth' });
}
