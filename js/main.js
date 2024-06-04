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

// Fade Animation
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
