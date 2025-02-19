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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

let slideIndex = 0;
let slides, dots, timer;

// Initialize slideshow
function initSlides() {
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    showSlides(slideIndex);
    startAutoSlide();
}

// Show specific slide
function showSlides(index) {
    if (index >= slides.length) { slideIndex = 0; } // Loop back to start
    if (index < 0) { slideIndex = slides.length - 1; } // Go to end

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // Remove active status from dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Display the current slide and highlight the dot
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Navigate slides manually
function plusSlides(n) {
    clearInterval(timer); // Stop auto-slide
    slideIndex += n;
    showSlides(slideIndex);
    startAutoSlide(); // Restart auto-slide
}

// Go to specific slide when clicking a dot
function currentSlide(n) {
    clearInterval(timer); // Stop auto-slide
    slideIndex = n - 1;
    showSlides(slideIndex);
    startAutoSlide(); // Restart auto-slide
}

// Automatically advance slides
function startAutoSlide() {
    timer = setInterval(() => {
        slideIndex++;
        showSlides(slideIndex);
    }, 3000); // Change image every 3 seconds
}

// Initialize slideshow after DOM loads
document.addEventListener('DOMContentLoaded', initSlides);

// Get or initialize the streak value
    const streakKey = "duolingoStreak";
    const lastUpdatedKey = "lastUpdated";

    let streak = localStorage.getItem(streakKey) 
      ? parseInt(localStorage.getItem(streakKey)) 
      : 1; // Set your initial streak value here
    const lastUpdated = localStorage.getItem(lastUpdatedKey) 
      ? new Date(localStorage.getItem(lastUpdatedKey)) 
      : new Date();

    // Update the streak if the last update was before today
    const now = new Date();
    if (now.toDateString() !== lastUpdated.toDateString()) {
      const diffDays = Math.floor((now - lastUpdated) / (1000 * 60 * 60 * 24));
      streak += diffDays; // Increment by the number of days passed
      localStorage.setItem(streakKey, streak);
      localStorage.setItem(lastUpdatedKey, now.toISOString());
    }

    // Display the streak
    document.getElementById("streak").innerText = streak;

    // Function to update the streak at midnight
    function scheduleMidnightIncrement() {
      const timeUntilMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;
      setTimeout(() => {
        streak++;
        localStorage.setItem(streakKey, streak);
        localStorage.setItem(lastUpdatedKey, new Date().toISOString());
        document.getElementById("streak").innerText = streak;

        // Schedule the next daily increment
        setInterval(() => {
          streak++;
          localStorage.setItem(streakKey, streak);
          localStorage.setItem(lastUpdatedKey, new Date().toISOString());
          document.getElementById("streak").innerText = streak;
        }, 24 * 60 * 60 * 1000);
      }, timeUntilMidnight);
    }

    // Start the scheduling
    scheduleMidnightIncrement();
