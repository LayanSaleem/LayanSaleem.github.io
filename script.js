/**
 * script.js
 * JavaScript functionality for Layan Saleem Portfolio
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typing Effect for Hero Subtitle
    const typeWriterElement = document.getElementById('typewriter');
    const words = [
        "Cybersecurity Student", 
        "Digital Forensics Enthusiast", 
        "Security Researcher"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster when deleting
        } else {
            typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal speed when typing
        }
        
        // If word is completely typed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of word
        } 
        // If word is completely deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before starting new word
        }
        
        setTimeout(type, typeSpeed);
    }
    
    // Start typing effect after a small delay
    setTimeout(type, 1000);


    // 2. Navbar Scroll Effect & Hamburger Menu
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when link is clicked
    navLinkItems.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });


    // 3. Scroll Events: Navbar background, Back to top button, Scroll indicator
    const backToTopBtn = document.getElementById('back-to-top');
    const scrollIndicator = document.getElementById('scroll-indicator');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        // Navbar styling on scroll
        if (scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        if (scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
        
        // Hide scroll indicator once user scrolls down
        if (scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });

    // Back to top functionality
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // 4. Intersection Observer for Scroll Reveals and Active Nav Link
    const revealElements = document.querySelectorAll('.reveal');
    const sections = document.querySelectorAll('section');
    
    // Options for reveal observer
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // Options for active link observer
    const navOptions = {
        threshold: 0.5
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Remove active class from all links
                navLinkItems.forEach(link => link.classList.remove('active'));
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, navOptions);
    
    sections.forEach(section => navObserver.observe(section));


    // 5. Floating Shapes Background Animation
    const blobs = [
        { el: document.querySelector('.blob-1'), x: 0, y: 0, speedX: 0.05, speedY: 0.03, limit: 30 },
        { el: document.querySelector('.blob-2'), x: 0, y: 0, speedX: -0.04, speedY: 0.06, limit: 40 },
        { el: document.querySelector('.blob-3'), x: 0, y: 0, speedX: 0.03, speedY: -0.05, limit: 25 }
    ];
    
    let time = 0;
    
    function animateBlobs() {
        time += 1;
        
        blobs.forEach((blob, i) => {
            if (!blob.el) return;
            
            // Calculate new position using sine waves for smooth, natural movement
            blob.x = Math.sin(time * blob.speedX) * blob.limit;
            blob.y = Math.cos(time * blob.speedY) * blob.limit;
            
            blob.el.style.transform = `translate(${blob.x}px, ${blob.y}px)`;
        });
        
        requestAnimationFrame(animateBlobs);
    }
    
    animateBlobs();


    // 6. Subtle Parallax for Hero Elements
    const parallaxEl = document.querySelector('.parallax-element');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY < window.innerHeight) {
            const yPos = window.scrollY * 0.3; // 30% speed
            if (parallaxEl) {
                parallaxEl.style.transform = `translateY(${yPos}px)`;
            }
        }
    });


    // 7. Button Ripple Effect
    const rippleButtons = document.querySelectorAll('.ripple-btn');
    
    rippleButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });


    // 8. Card Hover Pointer Event Enhancement (3D Tilt effect - optional enhancement)
    const cards = document.querySelectorAll('.glass-card');
    
    cards.forEach(card => { **…**

_This response is too long to display in full._
