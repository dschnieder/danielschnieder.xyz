document.addEventListener('DOMContentLoaded', () => {
    // Image Rotator
    const images = document.querySelectorAll('.image-slider img');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
    }

    setInterval(showNextImage, 3000);

    // Scroll Animation
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
        const triggerBottom = window.innerHeight * 0.8;

        fadeInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkFadeIn);
    checkFadeIn(); // Trigger once on load

    // Highlight Active Navigation Menu Item
    const navLinks = document.querySelectorAll('nav ul li a'); // Matches CSS selectors

    function updateActiveLink(event) {
        // Remove 'active' from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        event.target.classList.add('active');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', updateActiveLink);
    });
});

let slideIndex = 0;
let slides = document.querySelectorAll('.slideshow-container img');
let dots = document.querySelectorAll('.dot');

function showSlides(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    // Hide all slides
    slides.forEach(slide => slide.style.display = 'none');

    // Remove active-dot class from all dots
    dots.forEach(dot => dot.classList.remove('active-dot'));

    // Show the current slide and activate the corresponding dot
    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active-dot');
}

function nextSlide() {
    slideIndex++;
    showSlides(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlides(slideIndex);
}

// Automatic slideshow
setInterval(() => {
    nextSlide();
}, 3000); // Change slides every 3 seconds

// Initial display setup
showSlides(slideIndex);

// Attach event listeners to dots for manual navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slideIndex = index;
        showSlides(slideIndex);
    });
});
