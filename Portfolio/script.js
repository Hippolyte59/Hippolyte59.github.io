// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        offset: 100,
        once: false,
        mirror: true,
        easing: 'ease-in-out-cubic'
    });

    // Initialize features
    setupNavigation();
    setupProjectFilters();
    setupSmoothScroll();
    setupContactForm();
    setupProjectModals();
    setupObserver();
});

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.smooth-scroll');

    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.classList.remove('shadow-lg');
            navbar.style.background = 'rgba(15, 23, 42, 0.1)';
        }
    });

    // Close mobile menu on link click
    links.forEach(link => {
        link.addEventListener('click', () => {
            const dropdown = document.querySelector('[tabindex="0"]');
            if (dropdown) {
                dropdown.blur();
            }
        });
    });
}

// ============================================
// PROJECT FILTERS
// ============================================

function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            // Filter projects with animation
            projectCards.forEach(card => {
                const isMatch = filter === 'all' || card.dataset.filter === filter;
                
                if (isMatch) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    }, 10);
                } else {
                    card.classList.add('hidden');
                }
            });

            // Reinitialize AOS for new visible elements
            AOS.refresh();
        });
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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
}

// ============================================
// CONTACT FORM
// ============================================

function setupContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            
            // Show success message
            showNotification('Message envoyé avec succès! Je vous répondrai bientôt.', 'success');
            
            // Reset form
            form.reset();
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            console.log('Form data:', Object.fromEntries(formData));
        });
    }
}

// ============================================
// PROJECT MODALS
// ============================================

const projectDetails = {
    1: {
        title: 'Plateforme E-commerce',
        description: 'Une plateforme e-commerce complète avec système de paiement intégré, panier persistent et gestion d\'inventaire en temps réel.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Redux'],
        image: '🛒',
        details: [
            'Système d\'authentification sécurisé avec JWT',
            'Panier persistant avec localStorage',
            'Intégration de paiement Stripe',
            'Tableau de bord administrateur complet',
            'Système de recommandations ML'
        ],
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    2: {
        title: 'App Mobile Fitness',
        description: 'Application mobile de suivi de fitness avec programmes personnalisés, statistiques en temps réel et communauté active.',
        technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Chart.js'],
        image: '💪',
        details: [
            'Suivi des calories et macronutriments',
            'Programmes d\'entraînement personnalisés',
            'Statistiques et graphiques en temps réel',
            'Communauté et défis',
            'Notifications push intelligentes'
        ],
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    3: {
        title: 'Studio Design Graphique',
        description: 'Site portfolio pour studio de design avec galerie interactive, filtres dynamiques et système de réservation en ligne.',
        technologies: ['Vue.js', 'Tailwind CSS', 'Framer Motion', 'Firebase', 'Stripe'],
        image: '🎨',
        details: [
            'Galerie interactive avec filtres',
            'Animations fluides et modernes',
            'Système de réservation en ligne',
            'Blog intégré',
            'Optimisation SEO complète'
        ],
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    4: {
        title: 'Gestionnaire de Tâches',
        description: 'Application collaborative de gestion de projets avec synchronisation en temps réel, notifications et analytics détaillées.',
        technologies: ['Next.js', 'Supabase', 'WebSocket', 'Tailwind CSS', 'PostgreSQL'],
        image: '✓',
        details: [
            'Gestion collaborative des tâches',
            'Synchronisation en temps réel avec WebSocket',
            'Système de permissions granulaires',
            'Analytics et rapports détaillés',
            'Export en PDF et CSV'
        ],
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    5: {
        title: 'Blog Tech Moderne',
        description: 'Blog technique avec système de commentaires, recommandations personnalisées et intégration de newsletter.',
        technologies: ['Astro', 'Markdown', 'GraphQL', 'Tailwind CSS', 'Vercel'],
        image: '📝',
        details: [
            'Génération statique optimisée',
            'Système de commentaires intégré',
            'Recherche full-text',
            'Recommandations personnalisées',
            'Newsletter automatisée'
        ],
        github: 'https://github.com',
        demo: 'https://example.com'
    },
    6: {
        title: 'Plateforme Streaming',
        description: 'Plateforme de streaming vidéo avec streaming adaptatif, recherche intelligente et recommandations basées sur le ML.',
        technologies: ['TypeScript', 'ffmpeg', 'AWS', 'React', 'Node.js'],
        image: '🎬',
        details: [
            'Streaming adaptatif avec HLS',
            'Encodage vidéo distribué',
            'Recherche intelligente avec ElasticSearch',
            'Recommandations ML',
            'Analytics de visualisation'
        ],
        github: 'https://github.com',
        demo: 'https://example.com'
    }
};

function setupProjectModals() {
    window.openProjectModal = function(projectId) {
        const modal = document.getElementById('projectModal');
        const modalContent = document.getElementById('modalContent');
        const project = projectDetails[projectId];

        if (!project) return;

        const html = `
            <div class="space-y-6">
                <div>
                    <div class="text-6xl mb-4 text-center">${project.image}</div>
                    <h2 class="text-3xl font-bold text-gradient">${project.title}</h2>
                </div>

                <p class="text-slate-300 text-lg">${project.description}</p>

                <div>
                    <h3 class="text-xl font-bold text-purple-300 mb-3">Technologies Utilisées</h3>
                    <div class="flex flex-wrap gap-2">
                        ${project.technologies.map(tech => `<div class="badge badge-primary">${tech}</div>`).join('')}
                    </div>
                </div>

                <div>
                    <h3 class="text-xl font-bold text-cyan-300 mb-3">Caractéristiques Principales</h3>
                    <ul class="space-y-2">
                        ${project.details.map(detail => `
                            <li class="flex items-start gap-3">
                                <i class="fas fa-check text-green-400 mt-1 flex-shrink-0"></i>
                                <span class="text-slate-300">${detail}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="flex gap-4">
                    <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-primary gap-2 flex-1">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary gap-2 flex-1">
                        <i class="fas fa-external-link-alt"></i> Voir le Projet
                    </a>
                </div>
            </div>
        `;

        modalContent.innerHTML = html;
        modal.showModal();
    };
}

// ============================================
// INTERSECTION OBSERVER
// ============================================

function setupObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// NOTIFICATIONS
// ============================================

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `alert alert-${type} shadow-lg fixed top-4 right-4 max-w-md z-50 animate-pulse`;
    notification.innerHTML = `
        <div>
            <svg class="stroke-current flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// PARALLAX EFFECT
// ============================================

function setupParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const parallaxElements = document.querySelectorAll('[data-parallax]');

        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================

function animateCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    counters.forEach(counter => {
        const target = parseInt(counter.dataset.counter);
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        let current = 0;
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && modal.open) {
            modal.close();
        }
    }
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

if (window.performance) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page Load Time:', pageLoadTime + 'ms');
    });
}

// ============================================
// THEME PREFERENCES
// ============================================

function setupThemePreference() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    prefersDark.addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    });
}

setupThemePreference();

// ============================================
// ANALYTICS TRACKING
// ============================================

function trackEvent(category, action, label) {
    if (typeof gtag === 'function') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track section views
document.querySelectorAll('section[id]').forEach(section => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                trackEvent('engagement', 'section_view', entry.target.id);
            }
        });
    });
    observer.observe(section);
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function
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

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Log page info
console.log('%c👋 Bienvenue sur mon Portfolio!', 'color: #667eea; font-size: 16px; font-weight: bold;');
console.log('%cMerci de votre visite!', 'color: #764ba2; font-size: 12px;');
