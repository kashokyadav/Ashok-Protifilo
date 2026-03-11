// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }); 
});

    

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {  // ^= means starts with 
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 800) {
        navbar.style.background = 'rgba(131, 223, 211, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(20, 19, 19, 0.1)';
    }
    else if (window.scrollY > 200) {
        navbar.style.background = 'rgba(230, 237, 206, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(20, 19, 19, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Animate Skill Bars on Scroll
const observerOptions = {  
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillProgress = entry.target.querySelector('.skill-progress');
            const width = skillProgress.getAttribute('data-width');
            skillProgress.style.width = width;
        }
    });
}, observerOptions);

// Observe all skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});


// Contact Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset(); // Reset form
    } else {
        alert('Please fill in all fields.');
    }
});

// Add scroll animation to sections
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });
    
// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(section);
});


//  certificates 
// PDF Preview on hover (optional enhancement)
document.querySelectorAll('.cert-pdf').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
