// ===== DATA =====
const gouvernorats = [
  "Tunis","Ariana","Ben Arous","Manouba","Nabeul","Zaghouan","Bizerte",
  "Béja","Jendouba","Le Kef","Siliana","Kairouan","Kasserine","Sidi Bouzid",
  "Sousse","Monastir","Mahdia","Sfax","Gafsa","Tozeur","Kébili",
  "Gabès","Médenine","Tataouine"
];

const categoryImages = {
  "Objet": [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  ],
  "Service": [
    "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80",
    "https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  ],
  "Compétence": [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  ]
};

let listings = [
  { id: 1,  type: "Je donne",   cat: "Objet",      title: "Canapé en bon état",                gov: "Tunis",        city: "La Marsa",      status: "Disponible", desc: "Beau canapé 3 places en tissu beige, très bon état, déménagement oblige. Dimensions : 220x90cm. À récupérer sur place.", phone: "+216 71 234 567", whatsapp: "+216 98 234 567", img: null, date: "2025-01-15", user: "Ahmed Ben Ali" },
  { id: 2,  type: "Je cherche", cat: "Objet",      title: "Livres scolaires lycée",              gov: "Sfax",         city: "Sfax Ville",    status: "Disponible", desc: "Recherche livres scolaires 3ème lycée toutes matières, pour l'année scolaire 2024-2025. Merci de me contacter.", phone: "+216 74 123 456", whatsapp: "+216 97 123 456", img: null, date: "2025-01-14", user: "Fatima Karray" },
  { id: 3,  type: "Je donne",   cat: "Service",    title: "Aide déménagement weekend",           gov: "Ariana",       city: "Raoued",        status: "Réservée",  desc: "Je propose mon aide pour les déménagements le weekend. J'ai un camion disponible et de la bonne volonté. Zone : Grand Tunis.", phone: "+216 70 987 654", whatsapp: "+216 99 987 654", img: null, date: "2025-01-13", user: "Mohamed Trabelsi" },
  { id: 4,  type: "Je cherche", cat: "Compétence", title: "Cours de français",                   gov: "Nabeul",       city: "Hammamet",      status: "Disponible", desc: "Cherche professeur de français pour cours particuliers, niveau débutant-intermédiaire. Disponible le soir en semaine.", phone: "+216 72 456 789", whatsapp: "+216 96 456 789", img: null, date: "2025-01-12", user: "Yasmine Chaari" },
  { id: 5,  type: "Je donne",   cat: "Objet",      title: "Vêtements hiver femme",               gov: "Sousse",       city: "Sousse",        status: "Donnée",    desc: "Lot de vêtements hiver femme taille M-L. Manteaux, pulls, pantalons. Tout propre et en bon état. À récupérer rapidement.", phone: "+216 73 654 321", whatsapp: "+216 95 654 321", img: null, date: "2025-01-11", user: "Salma Jebali" },
  { id: 6,  type: "Je cherche", cat: "Service",    title: "Aide jardinage",                      gov: "Bizerte",      city: "Bizerte",       status: "Disponible", desc: "Cherche aide pour entretenir mon jardin : taille des arbres, tonte de pelouse. Environ 3h de travail. Je fournis les outils.", phone: "+216 72 111 222", whatsapp: "+216 94 111 222", img: null, date: "2025-01-10", user: "Karim Nasri" },
  { id: 7,  type: "Je donne",   cat: "Compétence", title: "Cours initiation informatique",       gov: "Monastir",     city: "Monastir",      status: "Réservée",  desc: "Je propose des cours d'initiation informatique gratuits : utilisation PC, internet, email, Word basique. Tout niveau de départ accepté.", phone: "+216 73 333 444", whatsapp: "+216 93 333 444", img: null, date: "2025-01-09", user: "Hatem Brahim" },
  { id: 8,  type: "Je cherche", cat: "Objet",      title: "Table bureau étudiant",               gov: "Kairouan",     city: "Kairouan",      status: "Disponible", desc: "Étudiant cherche une table de bureau pour travailler à la maison. Toutes dimensions acceptées, l'important c'est qu'elle soit stable.", phone: "+216 77 555 666", whatsapp: "+216 92 555 666", img: null, date: "2025-01-08", user: "Nour Hamidi" },
  { id: 9,  type: "Je donne",   cat: "Objet",      title: "Micro-ondes fonctionnel",             gov: "Ben Arous",    city: "Mourouj",       status: "Donnée",    desc: "Micro-ondes Samsung 800W, parfaitement fonctionnel. Donné car remplacement par modèle plus grand. À récupérer sur place, pas de livraison.", phone: "+216 71 777 888", whatsapp: "+216 91 777 888", img: null, date: "2025-01-07", user: "Rania Mejri" },
  { id: 10, type: "Je cherche", cat: "Compétence", title: "Aide CV et entretien",                gov: "Tunis",        city: "El Menzah",     status: "Disponible", desc: "Cherche quelqu'un pour m'aider à rédiger mon CV et me préparer aux entretiens d'embauche. Je suis diplômée en gestion.", phone: "+216 71 999 000", whatsapp: "+216 90 999 000", img: null, date: "2025-01-06", user: "Ines Bouaziz" },
  { id: 11, type: "Je donne",   cat: "Service",    title: "Garde chat pendant vacances",         gov: "Gabès",        city: "Gabès",         status: "Disponible", desc: "Je propose de garder votre chat pendant vos vacances d'été. J'ai de l'expérience avec les animaux. Contactez-moi pour discuter des détails.", phone: "+216 75 123 987", whatsapp: "+216 89 123 987", img: null, date: "2025-01-05", user: "Leila Gharsalli" },
  { id: 12, type: "Je cherche", cat: "Objet",      title: "Vélo enfant",                         gov: "Mahdia",       city: "Mahdia",        status: "Réservée",  desc: "Cherche vélo pour enfant 6-8 ans, avec ou sans roues d'entraînement. Couleur peu importe. Pour un cadeau d'anniversaire.", phone: "+216 73 456 123", whatsapp: "+216 88 456 123", img: null, date: "2025-01-04", user: "Omar Ferchichi" },
  { id: 13, type: "Je donne",   cat: "Compétence", title: "Cours anglais débutant",              gov: "Ariana",       city: "Ariana Ville",  status: "Donnée",    desc: "Cours d'anglais niveau débutant offerts gratuitement. Je suis enseignante d'anglais. Sessions de 1h, 2 fois par semaine. Groupe de 3-4 personnes.", phone: "+216 70 789 456", whatsapp: "+216 87 789 456", img: null, date: "2025-01-03", user: "Sonia Laabidi" },
  { id: 14, type: "Je cherche", cat: "Service",    title: "Aide bricolage maison",               gov: "Zaghouan",     city: "Zaghouan",      status: "Disponible", desc: "Cherche bricoleur bénévole pour petites réparations dans mon appartement : porte qui grince, robinet qui fuit, quelques fixations à faire.", phone: "+216 72 321 654", whatsapp: "+216 86 321 654", img: null, date: "2024-12-30", user: "Ali Chaouachi" },
  { id: 15, type: "Je donne",   cat: "Objet",      title: "Réfrigérateur ancien",                gov: "Sidi Bouzid",  city: "Sidi Bouzid",   status: "Terminée",  desc: "Réfrigérateur Arçelik 180L, ancien modèle mais fonctionnel. Idéal pour cave ou petite surface. Don terminé.", phone: "+216 76 654 987", whatsapp: "+216 85 654 987", img: null, date: "2024-12-28", user: "Hedi Mannai" },
  { id: 16, type: "Je cherche", cat: "Compétence", title: "Cours math lycée",                    gov: "Gafsa",        city: "Gafsa",         status: "Disponible", desc: "Parent cherche professeur bénévole de mathématiques pour son fils en 2ème année lycée. Section sciences. Particulièrement fonctions et suites.", phone: "+216 76 147 258", whatsapp: "+216 84 147 258", img: null, date: "2024-12-25", user: "Mounir Tlili" },
  { id: 17, type: "Je donne",   cat: "Service",    title: "Aide informatique installation PC",   gov: "Tunis",        city: "Bardo",         status: "Réservée",  desc: "Technicien informatique propose aide gratuite : installation Windows, configuration réseau, suppression virus, conseils achat. Zone Tunis uniquement.", phone: "+216 71 369 258", whatsapp: "+216 83 369 258", img: null, date: "2024-12-22", user: "Walid Zouari" },
  { id: 18, type: "Je cherche", cat: "Objet",      title: "Chaise roulante",                     gov: "Médenine",     city: "Djerba",        status: "Disponible", desc: "Famille cherche chaise roulante pour personne âgée en convalescence. Temporairement ou définitivement. Toute marque acceptée.", phone: "+216 75 258 369", whatsapp: "+216 82 258 369", img: null, date: "2024-12-20", user: "Zied Oueslati" },
  { id: 19, type: "Je donne",   cat: "Objet",      title: "Lit bébé avec matelas",               gov: "Sousse",       city: "Kantaoui",      status: "Donnée",    desc: "Lit bébé complet avec matelas et tour de lit. Couleur blanc. Pour bébé jusqu'à 3 ans. À récupérer à Kantaoui. Don terminé.", phone: "+216 73 741 852", whatsapp: "+216 81 741 852", img: null, date: "2024-12-18", user: "Amira Sghaier" },
  { id: 20, type: "Je cherche", cat: "Service",    title: "Aide déménagement",                   gov: "Kef",          city: "Le Kef",        status: "Disponible", desc: "Cherche aide pour déménagement prévu fin janvier. Peu de meubles. Besoin de 2-3 personnes pour quelques heures. Frais de carburant remboursés.", phone: "+216 78 963 741", whatsapp: "+216 80 963 741", img: null, date: "2024-12-15", user: "Tarek Hammami" }
];

let currentUser = null;
let filteredListings = [...listings];
let currentDetailId = null;
let previousPage = 'listings';
let quoteInterval = null;
let currentQuote = 0;
let uploadedImages = [];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadUser();
  populateGovSelects();
  populateFilterGov();
  renderHomeListings();
  renderMainListings();
  updateCategoryCount();
  animateStats();
  startQuoteCarousel();
  initNavScroll();
});

// ===== NAVIGATION =====
function showPage(pageId) {
  // Check if auth required
  if ((pageId === 'publish' || pageId === 'profile') && !currentUser) {
    showToast('Veuillez vous connecter pour accéder à cette page');
    showPage('auth');
    return;
  }

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav links
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');

  // Page-specific init
  if (pageId === 'listings') {
    renderMainListings();
    previousPage = 'listings';
  }
  if (pageId === 'home') {
    renderHomeListings();
    updateCategoryCount();
    animateStats();
  }
  if (pageId === 'profile') {
    renderProfile();
  }
}

function goBack() {
  showPage(previousPage);
}

function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

function initNavScroll() {
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// ===== POPULATE SELECTS =====
function populateGovSelects() {
  const selects = ['regGov', 'annGov'];
  selects.forEach(id => {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = '<option value="">Choisir un gouvernorat...</option>';
    gouvernorats.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g;
      sel.appendChild(opt);
    });
  });
}

function populateFilterGov() {
  const sel = document.getElementById('filterGov');
  if (!sel) return;
  sel.innerHTML = '<option value="">Tous gouvernorats</option>';
  gouvernorats.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g;
    opt.textContent = g;
    sel.appendChild(opt);
  });
}

// ===== AUTH =====
function switchAuthTab(tab) {
  document.getElementById('loginForm').classList.add('hidden');
  document.getElementById('registerForm').classList.add('hidden');
  document.getElementById('tab-login').classList.remove('active');
  document.getElementById('tab-register').classList.remove('active');

  if (tab === 'login') {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('tab-login').classList.add('active');
  } else {
    document.getElementById('registerForm').classList.remove('hidden');
    document.getElementById('tab-register').classList.add('active');
  }
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPassword').value;

  // Check stored users
  const users = JSON.parse(localStorage.getItem('barcha5ir_users') || '[]');
  const user = users.find(u => u.email === email && u.password === pass);

  if (user) {
    currentUser = user;
    localStorage.setItem('barcha5ir_currentUser', JSON.stringify(user));
    updateAuthUI();
    showToast(`Bienvenue ${user.name} ! 🎉`);
    showPage('home');
  } else {
    // Demo login
    if (email && pass) {
      const demoUser = {
        name: "Utilisateur Demo",
        email: email,
        phone: "+216 71 000 000",
        gov: "Tunis",
        city: "Tunis",
        password: pass
      };
      currentUser = demoUser;
      localStorage.setItem('barcha5ir_currentUser', JSON.stringify(demoUser));
      updateAuthUI();
      showToast(`Bienvenue ! Connexion réussie 🎉`);
      showPage('home');
    } else {
      showToast('Email ou mot de passe incorrect');
    }
  }
}

function handleRegister(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const phone = document.getElementById('regPhone').value;
  const gov = document.getElementById('regGov').value;
  const city = document.getElementById('regCity').value;
  const pass = document.getElementById('regPassword').value;

  const users = JSON.parse(localStorage.getItem('barcha5ir_users') || '[]');
  if (users.find(u => u.email === email)) {
    showToast('Cet email est déjà utilisé');
    return;
  }

  const newUser = { name, email, phone, gov, city, password: pass };
  users.push(newUser);
  localStorage.setItem('barcha5ir_users', JSON.stringify(users));

  currentUser = newUser;
  localStorage.setItem('barcha5ir_currentUser', JSON.stringify(newUser));
  updateAuthUI();
  showToast(`Compte créé avec succès ! Bienvenue ${name} 🎉`);
  showPage('home');
}

function loadUser() {
  const stored = localStorage.getItem('barcha5ir_currentUser');
  if (stored) {
    currentUser = JSON.parse(stored);
    updateAuthUI();
  }
}

function updateAuthUI() {
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  if (currentUser) {
    loginBtn.classList.add('hidden');
    logoutBtn.classList.remove('hidden');
  } else {
    loginBtn.classList.remove('hidden');
    logoutBtn.classList.add('hidden');
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('barcha5ir_currentUser');
  updateAuthUI();
  showToast('Vous êtes déconnecté');
  showPage('home');
}

function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === 'password' ? 'text' : 'password';
}

// ===== PUBLISH =====
function handlePublish(e) {
  e.preventDefault();

  const type = document.querySelector('input[name="annType"]:checked')?.value;
  const cat = document.querySelector('input[name="annCat"]:checked')?.value;
  const title = document.getElementById('annTitle').value;
  const desc = document.getElementById('annDesc').value;
  const gov = document.getElementById('annGov').value;
  const city = document.getElementById('annCity').value;
  const phone = document.getElementById('annPhone').value;
  const whatsapp = document.getElementById('annWhatsapp').value;

  if (!type || !cat || !title || !desc || !gov || !city) {
    showToast('Veuillez remplir tous les champs obligatoires');
    return;
  }

  const newListing = {
    id: Date.now(),
    type, cat, title, desc, gov, city, phone, whatsapp,
    status: "Disponible",
    date: new Date().toISOString().split('T')[0],
    user: currentUser?.name || "Anonyme",
    img: uploadedImages[0] || null
  };

  listings.unshift(newListing);
  filteredListings = [...listings];
  uploadedImages = [];
  document.getElementById('imagePreviewGrid').innerHTML = '';
  document.getElementById('publishForm').reset();

  showToast('Annonce publiée avec succès ! 🎉');
  updateCategoryCount();
  showPage('listings');
}

function handleImages(e) {
  const files = Array.from(e.target.files);
  const grid = document.getElementById('imagePreviewGrid');
  if (uploadedImages.length + files.length > 5) {
    showToast('Maximum 5 photos autorisées');
    return;
  }
  files.forEach(file => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      uploadedImages.push(ev.target.result);
      const item = document.createElement('div');
      item.className = 'image-preview-item';
      item.innerHTML = `
        <img src="${ev.target.result}" alt="preview"/>
        <button onclick="removeImage(this, '${ev.target.result}')"><i class="fas fa-times"></i></button>
      `;
      grid.appendChild(item);
    };
    reader.readAsDataURL(file);
  });
}

function removeImage(btn, src) {
  uploadedImages = uploadedImages.filter(i => i !== src);
  btn.parentElement.remove();
}

// ===== RENDER HOME LISTINGS =====
function renderHomeListings() {
  const container = document.getElementById('homeListings');
  if (!container) return;
  const recent = listings.filter(l => l.status === 'Disponible').slice(0, 6);
  container.innerHTML = recent.map(l => createListingCard(l)).join('');
}

// ===== RENDER MAIN LISTINGS =====
function renderMainListings() {
  const container = document.getElementById('mainListings');
  if (!container) return;
  applyFilters();
}

function applyFilters() {
  const search = document.getElementById('searchInput')?.value.toLowerCase() || '';
  const type = document.getElementById('filterType')?.value || '';
  const cat = document.getElementById('filterCat')?.value || '';
  const gov = document.getElementById('filterGov')?.value || '';
  const status = document.getElementById('filterStatus')?.value || '';

  filteredListings = listings.filter(l => {
    const matchSearch = !search || l.title.toLowerCase().includes(search) || l.desc.toLowerCase().includes(search);
    const matchType = !type || l.type === type;
    const matchCat = !cat || l.cat === cat;
    const matchGov = !gov || l.gov === gov;
    const matchStatus = !status || l.status === status;
    return matchSearch && matchType && matchCat && matchGov && matchStatus;
  });

  const container = document.getElementById('mainListings');
  const noResults = document.getElementById('noResults');
  const countEl = document.getElementById('resultsCount');

  if (countEl) countEl.textContent = `${filteredListings.length} annonce${filteredListings.length > 1 ? 's' : ''} trouvée${filteredListings.length > 1 ? 's' : ''}`;

  if (filteredListings.length === 0) {
    container.innerHTML = '';
    noResults?.classList.remove('hidden');
  } else {
    noResults?.classList.add('hidden');
    container.innerHTML = filteredListings.map(l => createListingCard(l)).join('');
  }
}

function resetFilters() {
  document.getElementById('searchInput').value = '';
  document.getElementById('filterType').value = '';
  document.getElementById('filterCat').value = '';
  document.getElementById('filterGov').value = '';
  document.getElementById('filterStatus').value = '';
  applyFilters();
}

function filterAndShow(cat) {
  showPage('listings');
  setTimeout(() => {
    document.getElementById('filterCat').value = cat;
    applyFilters();
  }, 100);
}

// ===== CREATE LISTING CARD =====
function createListingCard(l) {
  const imgSrc = getListingImage(l);
  const statusClass = getStatusClass(l.status);
  const catClass = getCatClass(l.cat);
  const typeClass = l.type === 'Je donne' ? 'badge-donne' : 'badge-cherche';
  const catIcon = getCatIcon(l.cat);

  return `
    <div class="listing-card animate-in" onclick="showDetail(${l.id})">
      <div class="card-img-wrap">
        <img src="${imgSrc}" alt="${l.title}" loading="lazy"/>
        <span class="card-type-badge ${typeClass}">${l.type === 'Je donne' ? '🎁 ' : '🔍 '}${l.type}</span>
        <span class="card-status ${statusClass}">${l.status}</span>
      </div>
      <div class="card-body">
        <span class="card-cat ${catClass}"><i class="${catIcon}"></i> ${l.cat}</span>
        <h4 class="card-title">${l.title}</h4>
        <p class="card-location"><i class="fas fa-map-marker-alt"></i> ${l.gov} / ${l.city}</p>
      </div>
      <div class="card-footer">
        <span class="card-date"><i class="fas fa-calendar-alt"></i> ${formatDate(l.date)}</span>
        <button class="card-btn">Voir détails</button>
      </div>
    </div>
  `;
}

// ===== SHOW DETAIL =====
function showDetail(id) {
  const listing = listings.find(l => l.id === id);
  if (!listing) return;
  currentDetailId = id;
  previousPage = document.querySelector('.page.active').id.replace('page-', '');

  const container = document.getElementById('detailContainer');
  const imgSrc = getListingImage(listing);
  const statusClass = getStatusClass(listing.status);
  const catIcon = getCatIcon(listing.cat);
  const typeClass = listing.type === 'Je donne' ? 'badge-donne' : 'badge-cherche';

  const isOwner = currentUser && currentUser.name === listing.user;
  const canReserve = listing.status === 'Disponible' && !isOwner && currentUser;

  container.innerHTML = `
    <div class="detail-images">
      <img src="${imgSrc}" alt="${listing.title}"/>
    </div>
    <div class="detail-body">
      <div class="detail-header">
        <div>
          <div class="detail-badges">
            <span class="card-type-badge ${typeClass}" style="position:static;font-size:0.9rem;padding:8px 16px;">${listing.type === 'Je donne' ? '🎁 ' : '🔍 '}${listing.type}</span>
            <span class="card-cat ${getCatClass(listing.cat)}" style="padding:8px 16px;font-size:0.9rem;"><i class="${catIcon}"></i> ${listing.cat}</span>
          </div>
          <h1 class="detail-title" style="margin-top:12px;">${listing.title}</h1>
        </div>
        <div>
          <span class="status-pill ${listing.status.toLowerCase().replace('é','e').replace('é','e').replace('é','e')}" style="font-size:0.95rem;padding:10px 20px;">
            ${listing.status}
          </span>
        </div>
      </div>

      <div class="detail-meta">
        <div class="meta-item">
          <i class="fas fa-map-marker-alt"></i>
          <span><strong>${listing.gov}</strong> / ${listing.city}</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-user"></i>
          <span><strong>${listing.user}</strong></span>
        </div>
        <div class="meta-item">
          <i class="fas fa-calendar"></i>
          <span>${formatDate(listing.date)}</span>
        </div>
        <div class="meta-item">
          <i class="fas fa-tag"></i>
          <span>${listing.cat}</span>
        </div>
      </div>

      <div class="detail-desc">
        <h4><i class="fas fa-align-left" style="color:var(--primary);margin-right:8px;"></i>Description</h4>
        <p>${listing.desc}</p>
      </div>

      <div class="detail-actions">
        ${listing.phone ? `
          <button class="btn-contact-phone" onclick="contactPhone('${listing.phone}')">
            <i class="fas fa-phone"></i> ${listing.phone}
          </button>
        ` : ''}
        ${listing.whatsapp ? `
          <button class="btn-contact-whatsapp" onclick="contactWhatsapp('${listing.whatsapp}', '${listing.title}')">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </button>
        ` : ''}
        ${canReserve ? `
          <button class="btn-reserve" onclick="requestReservation(${listing.id})">
            <i class="fas fa-bookmark"></i> Réserver
          </button>
        ` : ''}
        ${isOwner ? `
          <button class="btn-reserve" style="background:var(--secondary);" onclick="showStatusModal(${listing.id})">
            <i class="fas fa-edit"></i> Modifier le statut
          </button>
        ` : ''}
      </div>

      ${!currentUser && listing.status === 'Disponible' ? `
        <div style="margin-top:20px;padding:16px;background:var(--bg-2);border-radius:var(--radius-sm);text-align:center;color:var(--text-light);">
          <i class="fas fa-info-circle" style="color:var(--primary);margin-right:8px;"></i>
          <a href="#" onclick="showPage('auth')" style="color:var(--primary);font-weight:600;">Connectez-vous</a> pour réserver cette annonce
        </div>
      ` : ''}
    </div>
  `;

  showPage('detail');
}

function contactPhone(phone) {
  window.location.href = `tel:${phone}`;
}

function contactWhatsapp(phone, title) {
  const msg = encodeURIComponent(`Bonjour ! Je vous contacte via Barcha5ir concernant votre annonce : "${title}"`);
  const clean = phone.replace(/\s/g, '').replace('+', '');
  window.open(`https://wa.me/${clean}?text=${msg}`, '_blank');
}

function requestReservation(id) {
  const listing = listings.find(l => l.id === id);
  if (!listing) return;
  openModal('Demande de réservation', `
    <div style="text-align:center;padding:20px;">
      <i class="fas fa-bookmark" style="font-size:3rem;color:var(--accent);margin-bottom:20px;display:block;"></i>
      <h4 style="margin-bottom:12px;">Réserver : ${listing.title}</h4>
      <p style="color:var(--text-light);margin-bottom:24px;">Votre demande de réservation sera envoyée à <strong>${listing.user}</strong></p>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button onclick="confirmReservation(${id})" style="padding:12px 28px;background:var(--primary);color:white;border-radius:50px;font-weight:700;border:none;cursor:pointer;font-family:inherit;">
          <i class="fas fa-check"></i> Confirmer
        </button>
        <button onclick="closeModal()" style="padding:12px 28px;background:var(--bg-2);color:var(--text);border-radius:50px;font-weight:700;border:none;cursor:pointer;font-family:inherit;">
          Annuler
        </button>
      </div>
    </div>
  `);
}

function confirmReservation(id) {
  const listing = listings.find(l => l.id === id);
  if (listing) {
    listing.status = 'Réservée';
    // Add reservation notification for owner
    const reservations = JSON.parse(localStorage.getItem('barcha5ir_reservations') || '[]');
    reservations.push({
      listingId: id,
      listingTitle: listing.title,
      requester: currentUser.name,
      requesterPhone: currentUser.phone,
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    });
    localStorage.setItem('barcha5ir_reservations', JSON.stringify(reservations));
    closeModal();
    showToast('Demande de réservation envoyée ! 📩');
    showDetail(id);
  }
}

function showStatusModal(id) {
  const listing = listings.find(l => l.id === id);
  openModal('Modifier le statut', `
    <p style="margin-bottom:20px;color:var(--text-light);">Choisissez le nouveau statut pour : <strong>${listing.title}</strong></p>
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${['Disponible', 'Réservée', 'Donnée', 'Terminée'].map(s => `
        <button onclick="updateStatus(${id}, '${s}')" style="padding:14px;border-radius:var(--radius-sm);font-weight:600;font-family:inherit;cursor:pointer;border:2px solid var(--border);background:${listing.status === s ? 'var(--primary)' : 'white'};color:${listing.status === s ? 'white' : 'var(--text)'};">
          ${s}
        </button>
      `).join('')}
    </div>
  `);
}

function updateStatus(id, newStatus) {
  const listing = listings.find(l => l.id === id);
  if (listing) {
    listing.status = newStatus;
    closeModal();
    showToast(`Statut mis à jour : ${newStatus}`);
    showDetail(id);
    renderHomeListings();
    renderMainListings();
  }
}

// ===== PROFILE =====
function renderProfile() {
  const container = document.getElementById('profileContainer');
  if (!container || !currentUser) return;

  const userListings = listings.filter(l => l.user === currentUser.name);
  const available = userListings.filter(l => l.status === 'Disponible').length;
  const given = userListings.filter(l => l.status === 'Donnée').length;

  const reservations = JSON.parse(localStorage.getItem('barcha5ir_reservations') || '[]');

  container.innerHTML = `
    <div class="profile-header">
      <div class="profile-avatar">${currentUser.name.charAt(0).toUpperCase()}</div>
      <div class="profile-info">
        <h2>${currentUser.name}</h2>
        <p><i class="fas fa-envelope" style="color:var(--primary);"></i> ${currentUser.email}</p>
        <p><i class="fas fa-phone" style="color:var(--primary);"></i> ${currentUser.phone || 'Non renseigné'}</p>
        <p><i class="fas fa-map-marker-alt" style="color:var(--primary);"></i> ${currentUser.gov || ''} ${currentUser.city ? '/ ' + currentUser.city : ''}</p>
        <div class="profile-stats">
          <div class="pstat">
            <span class="pstat-num">${userListings.length}</span>
            <span class="pstat-lbl">Annonces</span>
          </div>
          <div class="pstat">
            <span class="pstat-num">${available}</span>
            <span class="pstat-lbl">Disponibles</span>
          </div>
          <div class="pstat">
            <span class="pstat-num">${given}</span>
            <span class="pstat-lbl">Données</span>
          </div>
        </div>
      </div>
    </div>

    <div class="profile-tabs">
      <button class="ptab active" id="ptab-mes" onclick="switchPTab('mes')">
        <i class="fas fa-th-list"></i> Mes annonces (${userListings.length})
      </button>
      <button class="ptab" id="ptab-reservations" onclick="switchPTab('reservations')">
        <i class="fas fa-bookmark"></i> Réservations (${reservations.length})
      </button>
      <button class="ptab" id="ptab-infos" onclick="switchPTab('infos')">
        <i class="fas fa-user-edit"></i> Mes informations
      </button>
    </div>

    <div class="profile-content" id="profileContent">
      ${renderMyListings(userListings)}
    </div>
  `;
}

function switchPTab(tab) {
  document.querySelectorAll('.ptab').forEach(t => t.classList.remove('active'));
  document.getElementById('ptab-' + tab).classList.add('active');

  const userListings = listings.filter(l => l.user === currentUser.name);
  const content = document.getElementById('profileContent');

  if (tab === 'mes') content.innerHTML = renderMyListings(userListings);
  if (tab === 'reservations') content.innerHTML = renderReservations();
  if (tab === 'infos') content.innerHTML = renderUserInfos();
}

function renderMyListings(userListings) {
  if (userListings.length === 0) return `
    <div class="empty-state">
      <i class="fas fa-inbox"></i>
      <h3>Aucune annonce publiée</h3>
      <p>Commencez à partager avec votre communauté !</p>
      <button onclick="showPage('publish')" style="margin-top:16px;padding:12px 28px;background:var(--primary);color:white;border-radius:50px;font-weight:700;border:none;cursor:pointer;font-family:inherit;">
        <i class="fas fa-plus"></i> Publier ma première annonce
      </button>
    </div>
  `;

  return `
    <div class="my-listings-grid">
      ${userListings.map(l => `
        <div class="my-listing-card">
          <div class="mlc-img">
            <img src="${getListingImage(l)}" alt="${l.title}"/>
          </div>
          <div class="mlc-body">
            <p class="mlc-title">${l.title}</p>
            <p class="mlc-loc"><i class="fas fa-map-marker-alt"></i> ${l.gov} / ${l.city}</p>
            <span class="status-pill ${l.status.toLowerCase().replace('é','e').replace('é','e').replace('é','e')}" style="font-size:0.75rem;margin-bottom:12px;display:inline-flex;">
              ${l.status}
            </span>
            <div class="mlc-actions">
              <button class="mlc-btn-edit" onclick="showStatusModal(${l.id});renderProfile();">
                <i class="fas fa-edit"></i> Statut
              </button>
              <button class="mlc-btn-delete" onclick="deleteListing(${l.id})">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderReservations() {
  const reservations = JSON.parse(localStorage.getItem('barcha5ir_reservations') || '[]');
  const myReservations = reservations.filter(r => {
    const l = listings.find(li => li.id === r.listingId);
    return l && l.user === currentUser.name;
  });

  if (myReservations.length === 0) return `
    <div class="empty-state">
      <i class="fas fa-bookmark"></i>
      <h3>Aucune demande de réservation</h3>
      <p>Les demandes de réservation pour vos annonces apparaîtront ici.</p>
    </div>
  `;

  return `
    <div class="reservation-list">
      ${myReservations.map((r, i) => `
        <div class="reservation-item">
          <div class="res-info">
            <h4>${r.listingTitle}</h4>
            <p><i class="fas fa-user"></i> Demandé par : <strong>${r.requester}</strong></p>
            <p><i class="fas fa-phone"></i> ${r.requesterPhone}</p>
            <p><i class="fas fa-calendar"></i> ${formatDate(r.date)}</p>
          </div>
          <div class="res-actions">
            <button class="res-btn-confirm" onclick="confirmRes(${i})">
              <i class="fas fa-check"></i> Confirmer
            </button>
            <button class="res-btn-decline" onclick="declineRes(${i})">
              <i class="fas fa-times"></i> Refuser
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function confirmRes(index) {
  const reservations = JSON.parse(localStorage.getItem('barcha5ir_reservations') || '[]');
  const res = reservations[index];
  if (res) {
    const listing = listings.find(l => l.id === res.listingId);
    if (listing) listing.status = 'Donnée';
    reservations.splice(index, 1);
    localStorage.setItem('barcha5ir_reservations', JSON.stringify(reservations));
    showToast('Réservation confirmée ! 🎉');
    renderProfile();
  }
}

function declineRes(index) {
  const reservations = JSON.parse(localStorage.getItem('barcha5ir_reservations') || '[]');
  const res = reservations[index];
  if (res) {
    const listing = listings.find(l => l.id === res.listingId);
    if (listing) listing.status = 'Disponible';
    reservations.splice(index, 1);
    localStorage.setItem('barcha5ir_reservations', JSON.stringify(reservations));
    showToast('Réservation refusée');
    renderProfile();
  }
}

function renderUserInfos() {
  return `
    <div style="max-width:500px;">
      <h4 style="margin-bottom:24px;font-size:1.1rem;color:var(--dark);">Mes informations personnelles</h4>
      <form onsubmit="updateUserInfos(event)">
        <div class="form-group">
          <label><i class="fas fa-user"></i> Nom complet</label>
          <input type="text" id="editName" value="${currentUser.name}"/>
        </div>
        <div class="form-group">
          <label><i class="fas fa-envelope"></i> Email</label>
          <input type="email" id="editEmail" value="${currentUser.email}"/>
        </div>
        <div class="form-group">
          <label><i class="fas fa-phone"></i> Téléphone</label>
          <input type="tel" id="editPhone" value="${currentUser.phone || ''}"/>
        </div>
        <div class="form-group">
          <label><i class="fas fa-map-marker-alt"></i> Ville</label>
          <input type="text" id="editCity" value="${currentUser.city || ''}"/>
        </div>
        <button type="submit" style="padding:14px 32px;background:var(--primary);color:white;border-radius:50px;font-weight:700;font-family:inherit;cursor:pointer;border:none;display:flex;align-items:center;gap:8px;">
          <i class="fas fa-save"></i> Sauvegarder
        </button>
      </form>
    </div>
  `;
}

function updateUserInfos(e) {
  e.preventDefault();
  currentUser.name = document.getElementById('editName').value;
  currentUser.email = document.getElementById('editEmail').value;
  currentUser.phone = document.getElementById('editPhone').value;
  currentUser.city = document.getElementById('editCity').value;
  localStorage.setItem('barcha5ir_currentUser', JSON.stringify(currentUser));
  showToast('Informations mises à jour ! ✅');
}

function deleteListing(id) {
  openModal('Supprimer l\'annonce', `
    <div style="text-align:center;padding:20px;">
      <i class="fas fa-exclamation-triangle" style="font-size:3rem;color:var(--danger);margin-bottom:20px;display:block;"></i>
      <p style="margin-bottom:24px;color:var(--text-light);">Êtes-vous sûr de vouloir supprimer cette annonce ? Cette action est irréversible.</p>
      <div style="display:flex;gap:12px;justify-content:center;">
        <button onclick="confirmDelete(${id})" style="padding:12px 28px;background:var(--danger);color:white;border-radius:50px;font-weight:700;border:none;cursor:pointer;font-family:inherit;">
          <i class="fas fa-trash"></i> Supprimer
        </button>
        <button onclick="closeModal()" style="padding:12px 28px;background:var(--bg-2);color:var(--text);border-radius:50px;font-weight:700;border:none;cursor:pointer;font-family:inherit;">
          Annuler
        </button>
      </div>
    </div>
  `);
}

function confirmDelete(id) {
  listings = listings.filter(l => l.id !== id);
  filteredListings = [...listings];
  closeModal();
  showToast('Annonce supprimée');
  renderProfile();
  renderMainListings();
}

// ===== CATEGORY COUNTS =====
function updateCategoryCount() {
  const obj = listings.filter(l => l.cat === 'Objet').length;
  const srv = listings.filter(l => l.cat === 'Service').length;
  const comp = listings.filter(l => l.cat === 'Compétence').length;
  const el1 = document.getElementById('countObjets');
  const el2 = document.getElementById('countServices');
  const el3 = document.getElementById('countCompetences');
  if (el1) el1.textContent = `${obj} annonces`;
  if (el2) el2.textContent = `${srv} annonces`;
  if (el3) el3.textContent = `${comp} annonces`;
}

// ===== STATS ANIMATION =====
function animateStats() {
  animateNumber('statDons', 0, listings.length, 1500);
  animateNumber('statVilles', 0, 24, 1500);
  animateNumber('statUsers', 0, 1200, 2000);
}

function animateNumber(id, from, to, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const step = (to - from) / (duration / 16);
  let current = from;
  const timer = setInterval(() => {
    current += step;
    if (current >= to) { current = to; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString();
  }, 16);
}

// ===== QUOTE CAROUSEL =====
function startQuoteCarousel() {
  const quotes = document.querySelectorAll('.quote-item');
  const dotsContainer = document.getElementById('quoteDots');
  if (!dotsContainer) return;

  quotes.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = `quote-dot ${i === 0 ? 'active' : ''}`;
    dot.onclick = () => goToQuote(i);
    dotsContainer.appendChild(dot);
  });

  quoteInterval = setInterval(() => {
    goToQuote((currentQuote + 1) % quotes.length);
  }, 4000);
}

function goToQuote(index) {
  const quotes = document.querySelectorAll('.quote-item');
  const dots = document.querySelectorAll('.quote-dot');
  quotes.forEach(q => q.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));
  quotes[index]?.classList.add('active');
  dots[index]?.classList.add('active');
  currentQuote = index;
}

// ===== MODAL =====
function openModal(title, body) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = body;
  document.getElementById('modalOverlay').classList.add('active');
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.getElementById('modal').classList.remove('active');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== HELPERS =====
function getListingImage(l) {
  if (l.img) return l.img;
  const imgs = categoryImages[l.cat];
  return imgs[l.id % imgs.length];
}

function getStatusClass(status) {
  const map = {
    'Disponible': 'status-disponible',
    'Réservée': 'status-reservee',
    'Donnée': 'status-donnee',
    'Terminée': 'status-terminee'
  };
  return map[status] || 'status-disponible';
}

function getCatClass(cat) {
  const map = { 'Objet': 'cat-objet', 'Service': 'cat-service', 'Compétence': 'cat-competence' };
  return map[cat] || '';
}

function getCatIcon(cat) {
  const map = { 'Objet': 'fas fa-couch', 'Service': 'fas fa-hands-helping', 'Compétence': 'fas fa-graduation-cap' };
  return map[cat] || 'fas fa-tag';
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-TN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// ===== KEYBOARD ESCAPE =====
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});