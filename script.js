const faders = document.querySelectorAll('.fade-up');

const appearOnScroll = new IntersectionObserver(
    function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.2
    }
);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
