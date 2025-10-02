// Ultra-Modern JavaScript for Leonardo da Vinci Residence Website
// Optimized for Cloudflare Pages

console.log('Script.js loaded successfully!');
console.log('JavaScript file is working!');

// Immediate test to see if script loads
window.scriptLoaded = true;
console.log('Global variable set: scriptLoaded =', window.scriptLoaded);

// Global test functions available immediately
window.testJS = function() {
    console.log('JavaScript is working!');
    console.log('Language selector element:', document.getElementById('language-select'));
    console.log('Nav menu element:', document.getElementById('nav-menu'));
    return 'JavaScript test successful!';
};

window.testTranslation = function(language) {
    console.log('Manual translation test to:', language);
    if (typeof translatePage === 'function') {
        translatePage(language);
    } else {
        console.log('translatePage function not available yet');
    }
};

window.resetToEnglish = function() {
    console.log('Resetting page to English...');
    if (typeof translatePage === 'function') {
        translatePage('en');
    } else {
        console.log('translatePage function not available yet');
    }
};

window.testHamburger = function() {
    console.log('Testing hamburger menu...');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    console.log('Hamburger element:', hamburger);
    console.log('Nav menu element:', navMenu);
    
    if (hamburger && navMenu) {
        console.log('Elements found - toggling menu');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        console.log('Menu active:', navMenu.classList.contains('active'));
    } else {
        console.log('Elements not found!');
    }
};

window.testLanguageSelector = function() {
    console.log('=== TESTING LANGUAGE SELECTOR ===');
    const languageSelect = document.getElementById('language-select');
    console.log('Language selector element:', languageSelect);
    
    if (languageSelect) {
        console.log('Current value:', languageSelect.value);
        console.log('Available options:', Array.from(languageSelect.options).map(opt => opt.value));
        console.log('translatePage function exists:', typeof translatePage === 'function');
        
        // Test manual translation
        console.log('Testing manual translation to German...');
        if (typeof translatePage === 'function') {
            translatePage('de');
        }
    } else {
        console.log('Language selector not found!');
    }
    console.log('=== END LANGUAGE SELECTOR TEST ===');
};

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM Content Loaded - Initializing website...');
    
    // Initialize all functionality
    initNavigation();
    initScrollEffects();
    initGallery();
    initAnimations();
    initContactForm();
    initParallax();
    initCounters();
    initLazyLoading();
    initPerformanceOptimizations();
    initLanguageSelector();
    
    // Add loaded class for CSS animations
    document.body.classList.add('loaded');
    
    console.log('Website initialization complete!');
});

// Navigation functionality
function initNavigation() {
    console.log('Initializing navigation...');
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    console.log('Navigation elements:', {
        navbar: navbar,
        hamburger: hamburger,
        navMenu: navMenu,
        navLinks: navLinks.length
    });

    // Mobile menu toggle
    if (hamburger && navMenu) {
        console.log('Mobile menu elements found - adding event listener');
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Hamburger clicked!');
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            console.log('Classes toggled. Active state:', navMenu.classList.contains('active'));
            console.log('Hamburger active state:', hamburger.classList.contains('active'));
        });
    } else {
        console.log('Mobile menu elements not found:', {
            hamburger: hamburger,
            navMenu: navMenu
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

    // Logo click handler - scroll to top
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Navbar scroll effect - optimized with throttling
    if (navbar) {
        let navbarScrollTimeout;
        const handleNavbarScroll = () => {
            if (navbarScrollTimeout) return;
            navbarScrollTimeout = requestAnimationFrame(() => {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
                navbarScrollTimeout = null;
            });
        };
        window.addEventListener('scroll', handleNavbarScroll, { passive: true });
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
    // Scroll indicator fade out - optimized
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        let indicatorScrollTimeout;
        const handleIndicatorScroll = () => {
            if (indicatorScrollTimeout) return;
            indicatorScrollTimeout = requestAnimationFrame(() => {
                if (window.scrollY > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
                indicatorScrollTimeout = null;
            });
        };
        window.addEventListener('scroll', handleIndicatorScroll, { passive: true });
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
            closeLightbox();
        }
    });
    
    // Add escape key support
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    };
    document.addEventListener('keydown', handleEscape);
    
    // Store the escape handler for cleanup
    lightbox._escapeHandler = handleEscape;
}

// Close lightbox function
function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        // Remove escape key listener
        if (lightbox._escapeHandler) {
            document.removeEventListener('keydown', lightbox._escapeHandler);
        }
        
        document.body.removeChild(lightbox);
        document.body.style.overflow = 'auto';
    }
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
                // Don't prevent default for mailto links - let them open the mail client
                // Just add a brief visual feedback
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-envelope"></i> Opening email...';
                
                // Reset after a short delay
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 1000);
                
                // Don't prevent the default mailto behavior
                return true;
            }
        });
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effects - optimized for better performance
function initParallax() {
    const parallaxElements = document.querySelectorAll('.hero');
    
    if (parallaxElements.length === 0) return;
    
    let parallaxTimeout;
    const handleParallax = () => {
        if (parallaxTimeout) return;
        parallaxTimeout = requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3; // Reduced intensity for better performance
            
            parallaxElements.forEach(element => {
                element.style.transform = `translate3d(0, ${rate}px, 0)`;
            });
            parallaxTimeout = null;
        });
    };
    
    // Throttle parallax updates
    window.addEventListener('scroll', handleParallax, { passive: true });
}

// Counter animations
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    if (counters.length === 0) return;
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target')) || 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Enhanced lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if (images.length === 0) return;
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                    imageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Performance optimizations
function initPerformanceOptimizations() {
    // Preload critical resources
    const preloadLinks = [
        { href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
        { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', as: 'style' }
    ];
    
    preloadLinks.forEach(link => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = link.href;
        linkElement.as = link.as;
        document.head.appendChild(linkElement);
    });
    
    // Optimize scroll events - removed duplicate handler
    // Individual scroll handlers are now optimized with requestAnimationFrame
    
    // Add touch support detection
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Add reduced motion support
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add('reduced-motion');
    }
}

// Enhanced scroll animations with stagger effect
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100); // Stagger animation
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('.section-header, .feature, .amenity, .testimonial');
    
    reveals.forEach((reveal, index) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            setTimeout(() => {
                reveal.classList.add('animate-on-scroll', 'animated');
            }, index * 50);
        }
    });
}

// Enhanced error handling
function initErrorHandling() {
    // Handle image loading errors
    document.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
            e.target.alt = 'Image not found';
        }
    }, true);
    
    // Handle JavaScript errors gracefully
    window.addEventListener('error', (e) => {
        console.warn('JavaScript error handled gracefully:', e.error);
    });
}

// Initialize error handling
initErrorHandling();

// Enhanced scroll handler with throttling - optimized
const throttledScrollHandler = throttle(() => {
    revealOnScroll();
}, 200); // Increased throttle time for better performance

window.addEventListener('scroll', throttledScrollHandler, { passive: true });

// Utility functions
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Console welcome message with enhanced styling
console.log(`
%c🏖️  Welcome to Leonardo da Vinci Residence!
%c
   Your perfect Mediterranean escape in Badesi, Sardinia.
   
   Built with modern web technologies and optimized for Cloudflare Pages.
   
   For inquiries: info@davinciresidence.com
`, 
'color: #2563eb; font-size: 16px; font-weight: bold;',
'color: #6b7280; font-size: 14px;'
);

// Language Selector functionality with URL parameter support
function initLanguageSelector() {
    console.log('Initializing language selector...');
    const languageSelect = document.getElementById('language-select');
    console.log('Language select element:', languageSelect);
    
    if (languageSelect) {
        console.log('Language selector found, adding event listener...');
        
        // Get language from URL parameter first, then localStorage, then default
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        const savedLanguage = localStorage.getItem('selectedLanguage');
        const initialLanguage = urlLang || savedLanguage || 'en';
        
        console.log('URL language:', urlLang);
        console.log('Saved language:', savedLanguage);
        console.log('Initial language:', initialLanguage);
        
        // Set the select value
        languageSelect.value = initialLanguage;
        
        // Apply initial translation
        if (typeof translatePage === 'function') {
            translatePage(initialLanguage);
            console.log('Initial translation applied:', initialLanguage);
        }
        
        // Add change event listener
        languageSelect.addEventListener('change', function(e) {
            const selectedLanguage = this.value;
            console.log('=== LANGUAGE SELECTOR EVENT ===');
            console.log('Language selector changed to:', selectedLanguage);
            
            // Store language preference
            localStorage.setItem('selectedLanguage', selectedLanguage);
            console.log('Language saved to localStorage:', selectedLanguage);
            
            // Update URL with language parameter
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', selectedLanguage);
            window.history.pushState({}, '', newUrl);
            console.log('URL updated with language parameter:', newUrl.toString());
            
            // Call translatePage
            console.log('Calling translatePage with:', selectedLanguage);
            if (typeof translatePage === 'function') {
                translatePage(selectedLanguage);
                console.log('translatePage called successfully');
            } else {
                console.error('translatePage function not found!');
            }
            
            console.log('=== END LANGUAGE SELECTOR EVENT ===');
        });
    } else {
        console.error('Language selector element not found!');
        console.log('Available elements with "language" in ID:', 
            document.querySelectorAll('[id*="language"]'));
    }
}

// Translate page content
function translatePage(language) {
    console.log(`=== TRANSLATE PAGE START ===`);
    console.log(`Translating page to: ${language}`);
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    console.log(`Found ${navLinks.length} navigation links`);
    navLinks.forEach((link, index) => {
        const text = link.getAttribute(`data-${language}`);
        console.log(`Nav link ${index}:`, link, `data-${language}="${text}"`);
        if (text) {
            link.textContent = text;
            console.log(`✓ Translated nav link: ${text}`);
        } else {
            console.log(`✗ No translation found for nav link ${index}`);
        }
    });
    
    // Update all elements with translation data attributes
    const translatableElements = document.querySelectorAll('[data-en]');
    console.log(`Found ${translatableElements.length} translatable elements`);
    
    let translatedCount = 0;
    translatableElements.forEach((element, index) => {
        const text = element.getAttribute(`data-${language}`);
        console.log(`Element ${index}:`, element.tagName, element.className, `data-${language}="${text}"`);
        
        if (text) {
            // Handle button text specially
            const btnText = element.querySelector('.btn-text');
            if (btnText) {
                btnText.textContent = text;
                console.log(`✓ Translated button text: ${text}`);
            } else {
                // Check if the text contains HTML tags
                if (text.includes('<') && text.includes('>')) {
                    // Use innerHTML for elements that contain HTML tags
                    element.innerHTML = text;
                    console.log(`✓ Translated element with HTML: ${text}`);
                } else {
                    // Use textContent for plain text
                    element.textContent = text;
                    console.log(`✓ Translated element: ${text}`);
                }
            }
            translatedCount++;
        } else {
            console.log(`✗ No translation found for element ${index}`);
        }
    });
    
    console.log(`Translation complete: ${translatedCount}/${translatableElements.length} elements translated`);
    console.log(`=== TRANSLATE PAGE END ===`);
}


// Export functions for potential external use
window.DaVinciResidence = {
    openLightbox,
    closeLightbox,
    navigateLightbox,
    revealOnScroll,
    initScrollAnimations,
    translatePage,
    testTranslation
};
