// Mobile Dropdown Menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('nav ul');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Rotating Images
const images = document.querySelectorAll('.image-slider img');
let currentImageIndex = 0;

function rotateImages() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(rotateImages, 3000); // Rotate every 3 seconds

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const name = document.querySelector('#name').value.trim();
            const email = document.querySelector('#email').value.trim();
            const message = document.querySelector('#message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                event.preventDefault();
            } else if (!validateEmail(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
            }
        });
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
