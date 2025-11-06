document.addEventListener('DOMContentLoaded', function() {
    const aboutMeImageContainer = document.querySelector('.aboutmeImage');
    const aboutMeTextContainer = document.querySelector('.aboutmeText');

    function handleSlideIn(element) {
        if (!element) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    element.classList.add('slide-in');
                } else {
                    element.classList.remove('slide-in');
                }
            });
        }, { threshold: 0.3 });
        observer.observe(element);
    }

    handleSlideIn(aboutMeImageContainer);
    handleSlideIn(aboutMeTextContainer);
});