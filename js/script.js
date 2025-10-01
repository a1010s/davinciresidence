// Modern JavaScript for Leonardo da Vinci Residence Website

document.addEventListener("DOMContentLoaded", function() {
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initGallery();
    initAnimations();
    initContactForm();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll effects
function initScrollEffects() {
    // Scroll indicator fade out
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        });
    }
}

// Enhanced Gallery functionality
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const photos = [
        {
            src: 'img/beach.jpg',
            alt: 'Beautiful Badesi Beach',
            title: 'Crystal Clear Waters'
        },
        {
            src: 'img/terrace.jpg',
            alt: 'Private Terrace View',
            title: 'Mediterranean Views'
        },
        {
            src: 'img/livingroom.jpg',
            alt: 'Elegant Living Room',
            title: 'Luxury Interior'
        }
    ];

    if (galleryGrid) {
        photos.forEach((photo, index) => {
            const galleryItem = createGalleryItem(photo, index);
            galleryGrid.appendChild(galleryItem);
        });
    }
}

function createGalleryItem(photo, index) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item animate-on-scroll';
    galleryItem.style.animationDelay = `${index * 0.2}s`;
    
    galleryItem.innerHTML = `
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy">
        <div class="gallery-overlay">
            <i class="fas fa-search-plus"></i>
        </div>
    `;

    // Add click event for lightbox
    galleryItem.addEventListener('click', () => {
        openLightbox(photo);
    });

    return galleryItem;
}

// Simple lightbox functionality
function openLightbox(photo) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        cursor: pointer;
    `;
    
    lightbox.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90%;">
            <img src="${photo.src}" alt="${photo.alt}" style="max-width: 100%; max-height: 100%; border-radius: 12px;">
            <span style="position: absolute; top: -40px; right: 0; color: white; font-size: 30px; cursor: pointer;">&times;</span>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.tagName === 'SPAN') {
            document.body.removeChild(lightbox);
            document.body.style.overflow = 'auto';
        }
    });
}

// Scroll animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Contact form functionality
function initContactForm() {
    const contactButtons = document.querySelectorAll('.contact-buttons .btn');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (button.href && button.href.includes('mailto:')) {
                // Add loading state
                const originalText = button.innerHTML;
                button.innerHTML = '<span style="display: inline-block; width: 20px; height: 20px; border: 2px solid rgba(255,255,255,0.3); border-radius: 50%; border-top-color: white; animation: spin 1s linear infinite;"></span> Opening email...';
                button.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.style.pointerEvents = 'auto';
                }, 2000);
            }
        });
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console welcome message
console.log(`
🏖️  Welcome to Leonardo da Vinci Residence!
   
   Your perfect Mediterranean escape in Badesi, Sardinia.
   
   Built with modern web technologies and optimized for performance.
   
   For inquiries: info@davinciresidence.com
`);
