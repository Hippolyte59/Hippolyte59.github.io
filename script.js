const templates = [
    { id: 1, name: "Landing Page Futuriste", category: "landing", description: "Animations fluides et CTA visibles pour convertir.", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&auto=format&fit=crop&q=80", demoUrl: "https://github.com/Hippolyte59", technologies: ["Tailwind", "JS", "A11y"], rating: 4.9 },
    { id: 2, name: "Dashboard Analytics Premium", category: "dashboard", description: "Graphiques, filtres et KPI prêts à intégrer.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80", demoUrl: "https://github.com/Hippolyte59", technologies: ["React", "Charts", "API"], rating: 4.95 },
    { id: 3, name: "NovaHost - Hosting Platform", category: "hosting", description: "Plateforme cloud moderne avec interface de gestion serveurs.", image: "https://images.unsplash.com/photo-1518640461-f5ce9f1a4930?w=600&auto=format&fit=crop&q=80", demoUrl: "./NovaHost-master/index.html", technologies: ["Tailwind", "JavaScript", "Responsive"], rating: 4.92 },
    { id: 4, name: "E-commerce Pro Store", category: "ecommerce", description: "Boutique en ligne moderne avec panier, fiches produits et paiement.", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&auto=format&fit=crop&q=80", demoUrl: "./E-commerce/index.html", technologies: ["Tailwind", "DaisyUI", "JavaScript"], rating: 4.87 },
    { id: 6, name: "Blog Moderne avec CMS", category: "landing", description: "Listes d'articles, catégories, call-to-action newsletter.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80", demoUrl: "", technologies: ["Next.js", "MDX", "Dark mode"], rating: 4.85 },
    { id: 7, name: "Application SaaS Cloud", category: "dashboard", description: "Auth, pricing tiers et zones d'usage en temps réel.", image: "https://images.unsplash.com/photo-1518640461-f5ce9f1a4930?w=600&auto=format&fit=crop&q=80", demoUrl: "", technologies: ["Vue", "Firebase", "Stripe"], rating: 4.93 },
    { id: 8, name: "Marketplace Multi-Vendeurs", category: "ecommerce", description: "Reviews, recherche, fiches vendeurs prêtes.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80", demoUrl: "", technologies: ["Node", "PostgreSQL", "AWS"], rating: 4.88 },
    { id: 9, name: "Site Agence Web 2026", category: "landing", description: "Services, étude de cas, formulaire de brief.", image: "https://images.unsplash.com/photo-1460925895917-adf4ee868993?w=600&auto=format&fit=crop&q=80", demoUrl: "", technologies: ["DaisyUI", "GSAP", "Forms"], rating: 4.9 },
    { id: 10, name: "CRM Cloud Enterprise", category: "dashboard", description: "Pipelines, vues kanban, filtrage segmenté.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80", demoUrl: "", technologies: ["React", "Firebase", "Realtime"], rating: 4.91 },
    { id: 11, name: "SPA Gestion de Projets", category: "dashboard", description: "Kanban, gantt light et notifications.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80", demoUrl: "", technologies: ["Vue", "WebSocket", "D3"], rating: 4.89 },
    { id: 12, name: "Portfolio Personnel Interactif", category: "portfolio", description: "Vitrine professionnelle avec projets, compétences et contact intégré.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80", demoUrl: "./Portfolio/index.html", technologies: ["Tailwind", "JavaScript", "Responsive"], rating: 4.94 }

];

const categoryConfig = {
    landing: { color: 'from-orange-500 to-red-500', badge: 'badge-warning', title: 'text-orange-600', border: 'border-orange-200 shadow-orange-100', glow: 'shadow-orange-500/20' },
    dashboard: { color: 'from-blue-500 to-cyan-500', badge: 'badge-info', title: 'text-blue-600', border: 'border-blue-200 shadow-blue-100', glow: 'shadow-blue-500/20' },
    ecommerce: { color: 'from-emerald-500 to-teal-500', badge: 'badge-success', title: 'text-emerald-600', border: 'border-emerald-200 shadow-emerald-100', glow: 'shadow-emerald-500/20' },
    portfolio: { color: 'from-pink-500 to-rose-500', badge: 'badge-error', title: 'text-pink-600', border: 'border-pink-200 shadow-pink-100', glow: 'shadow-pink-500/20' },
    hosting: { color: 'from-purple-500 to-indigo-500', badge: 'badge-primary', title: 'text-purple-600', border: 'border-purple-200 shadow-purple-100', glow: 'shadow-purple-500/20' }
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé - Initialisation...');
    initializeFilters();
    initializeTemplates();
    setupTheme();
    setupContact();
    setupScrollAnimations();
    updateCopyright();
});

function initializeFilters() {
    const filterButtons = document.querySelectorAll('#filters button');
    console.log('Boutons de filtre trouvés:', filterButtons.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            console.log('Filtre cliqué:', filterValue);
            filterButtons.forEach(btn => {
                btn.classList.remove('btn-active');
                btn.classList.add('btn-ghost');
            });
            
            this.classList.add('btn-active');
            this.classList.remove('btn-ghost');
            displayTemplates(filterValue);
        });
    });
}
function displayTemplates(filter = 'all') {
    console.log('Affichage des templates pour le filtre:', filter);
    const grid = document.getElementById('templatesGrid');
    
    if (!grid) {
        console.error('Grid non trouvée!');
        return;
    }
    
    grid.innerHTML = '';
    
    const filteredTemplates = filter === 'all' 
        ? templates 
        : templates.filter(t => t.category === filter);
    
    console.log('Nombre de templates à afficher:', filteredTemplates.length);
    
    filteredTemplates.forEach((template, index) => {
        const card = buildTemplateCard(template);
        grid.appendChild(card);
        
        requestAnimationFrame(() => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 60);
        });
    });
    
    updateTemplateCount(filteredTemplates.length);
}

function buildTemplateCard(template) {
    const card = document.createElement('article');
    const config = categoryConfig[template.category] || categoryConfig.landing;
    const isNovaHost = template.name.includes('NovaHost');
    
    card.className = `card bg-base-100 border-2 ${config.border} rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:${config.glow} transform hover:-translate-y-2`;
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px) scale(0.9)';
    card.style.transition = 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    const novaHostBadge = isNovaHost ? `<span class="badge badge-primary gap-1 mb-2 animate-pulse"><i class="fa-solid fa-star"></i> En vedette</span>` : '';
    const glowBg = isNovaHost ? `<div class="absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${config.color} opacity-5 rounded-full blur-3xl animate-pulse"></div>` : `<div class="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br ${config.color} opacity-3 rounded-full blur-2xl"></div>`;
    
    card.innerHTML = `
        ${glowBg}
        <figure class="aspect-video overflow-hidden relative bg-gradient-to-br from-base-200 to-base-300 group">
            <img 
                src="${template.image}" 
                alt="${template.name}" 
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                loading="lazy"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-3 right-3 badge gap-1 ${config.badge} animate-bounce text-white font-semibold">
                ${template.category}
            </div>
        </figure>
        <div class="card-body gap-3 flex flex-col relative z-10">
            ${novaHostBadge}
            <div class="flex items-center justify-between gap-3">
                <span class="badge ${config.badge} font-bold text-white gap-1 transform transition-transform group-hover:scale-110">
                    ${template.category.toUpperCase()}
                </span>
                <div class="text-sm font-semibold flex items-center gap-1 ${config.title}">
                    <i class="fa-solid fa-star"></i> ${formatRating(template.rating)}
                </div>
            </div>
            <h3 class="card-title text-lg ${config.title} font-bold leading-tight">${template.name}</h3>
            <p class="text-sm text-base-content/70 leading-relaxed">${template.description}</p>
            <div class="flex flex-wrap gap-2 text-xs">
                ${template.technologies.map(tech => `<span class="badge badge-outline badge-sm font-medium">${tech}</span>`).join('')}
            </div>
            <div class="card-actions justify-end mt-auto pt-2">
                <a 
                    href="${template.demoUrl}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn btn-sm gap-2 ${config.badge} text-white font-bold transition-all duration-300 hover:scale-105"
                    aria-label="Voir la démo de ${template.name}"
                >
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    Voir la démo
                </a>
            </div>
        </div>
    `;
    
    return card;
}

function initializeTemplates() {
    console.log('Initialisation des templates...');
    displayTemplates('all');
}

function updateTemplateCount(count) {
    const el = document.getElementById('templateCount');
    if (el) {
        el.textContent = count || templates.length;
    }
}

function formatRating(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const stars = '★'.repeat(full) + (half ? '½' : '');
    return `${stars} ${rating.toFixed(2)}`;
}

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });
}

function setupTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    const saved = localStorage.getItem('theme') || 'dark';
    applyTheme(saved);

    toggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const icon = theme === 'dark' ? 'fa-moon' : 'fa-sun';
    const toggle = document.getElementById('themeToggle');
    if (toggle) {
        toggle.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    }
}

function setupContact() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const subject = form.querySelector('#subject').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (!name || !email || !subject || !message) {
            notify('Veuillez remplir tous les champs.', 'warning');
            return;
        }
        
        notify(`Merci ${name} ! Je vais vous contacter sur ${email}.`, 'success');
        form.reset();
    });
}

function notify(message, type = 'info') {
    const existingToasts = document.querySelectorAll('.alert');
    if (existingToasts.length > 2) existingToasts[0].remove();
    
    const toast = document.createElement('div');
    toast.className = `alert alert-${type}`;
    toast.innerHTML = `<span>${message}</span>`;
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '16px',
        right: '16px',
        zIndex: '9999',
        minWidth: '240px',
        animation: 'slideInUp 0.3s ease'
    });
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'slideOutDown 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function updateCopyright() {
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `© 2025-${currentYear} Hippolyte`;
    }
}
