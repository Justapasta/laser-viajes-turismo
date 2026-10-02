/**
 * LASER VIAJES Y TURISMO - PUCALLPA, UCAYALI
 * Interactive Script: Currency Switcher, Live Calculator, WhatsApp Dispatcher, Filter Tabs & Itinerary Drawer
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- STATE ---
  let currentCurrency = 'PEN'; // 'PEN' or 'USD'
  const EXCHANGE_RATE = 3.65; // PEN per 1 USD
  const AGENCY_WHATSAPP = '51961900512'; // Laser Viajes WhatsApp oficial en Pucallpa

  // --- ITINERARIES DATA (Auténticos de Ucayali y Perú) ---
  const itineraries = {
    yarinacocha: {
      title: "Expedición Yarinacocha, Delfines de Río & San Francisco",
      tag: "Turismo Fluvial & Comunidad Nativa",
      duration: "Full Day (8:30 AM – 3:30 PM)",
      pricePEN: 85,
      priceUSD: 24,
      timeline: [
        { time: "08:30 AM", title: "Punto de encuentro y embarque en Puerto Callao", desc: "Recepción en Puerto Callao (Yarinacocha), colocación de chalecos salvavidas certificados y abordaje de nuestra embarcación tradicional techada." },
        { time: "09:30 AM", title: "Navegación y avistamiento de delfines de río", desc: "Recorrido por las aguas calmas de la laguna en busca de bufeos colorados (delfines rosados) y bufeos grises en su hábitat natural." },
        { time: "11:00 AM", title: "Visita a la Comunidad Nativa Shipibo-Konibo de San Francisco", desc: "Bienvenida por autoridades comunales. Demostración del arte ancestral Kené en telares y cerámica utilitaria. Oportunidad de adquirir artesanías directas sin intermediarios." },
        { time: "01:00 PM", title: "Almuerzo típico amazónico a orillas de la laguna", desc: "Degustación de Juane de gallina de chacra o Patarashca de pescado fresco, acompañado de plátanos asados y refresco helado de camu camu." },
        { time: "02:30 PM", title: "Paseo botánico y regreso a Puerto Callao", desc: "Observación de aves (garzas, Martín pescador) y árboles de Lupuna gigante antes de desembarcar." }
      ],
      includes: [
        "Transporte fluvial con chalecos normados",
        "Guía oficial de turismo de la región Ucayali",
        "Visita a la comunidad San Francisco",
        "Almuerzo típico selvático completo",
        "Botiquín de primeros auxilios a bordo"
      ]
    },
    aguaytia: {
      title: "Aventura Cañón de Padre Abad & Catarata Velo de la Novia",
      tag: "Aventura & Naturaleza Viva",
      duration: "Full Day (6:30 AM – 6:00 PM)",
      pricePEN: 135,
      priceUSD: 38,
      timeline: [
        { time: "06:30 AM", title: "Partida desde nuestra oficina en Jr. Tarapacá 859", desc: "Salida en minivan turística con aire acondicionado rumbo a la provincia de Padre Abad (Aguaytía)." },
        { time: "09:00 AM", title: "Cruce de la Cordillera Azul y Boquerón del Padre Abad", desc: "Espectacular cañón natural donde el río Yuracyacu corta los Andes amazónicos con paredes rocosas de más de 100 metros de altura." },
        { time: "10:30 AM", title: "Catarata Ducha del Diablo", desc: "Parada fotográfica en la enigmática caída de agua que dibuja el perfil rocoso del diablo entre la vegetación tropical." },
        { time: "11:45 AM", title: "Catarata Velo de la Novia & Baño refrescante", desc: "Caminata corta hasta el mirador principal y acceso a las pozas de aguas cristalinas para nadar rodeados de orquídeas y helechos gigantes." },
        { time: "01:30 PM", title: "Almuerzo en Aguaytía y visita al puente colgante", desc: "Degustación de cecina con tacacho en restaurante local y visita al puente más largo de la Amazonía peruana." },
        { time: "06:00 PM", title: "Retorno a la ciudad de Pucallpa", desc: "Llegada al centro de la ciudad de Pucallpa." }
      ],
      includes: [
        "Transporte turístico Pucallpa - Aguaytía - Pucallpa",
        "Ingresos a la Catarata Velo de la Novia y Boquerón",
        "Guía certificado durante toda la excursión",
        "Almuerzo típico regional",
        "Seguro SOAT turístico activo"
      ]
    },
    shipibo: {
      title: "Ruta Cultural Shipibo-Konibo & Botánica Ancestral",
      tag: "Cultura Viva & Conocimiento Tradicional",
      duration: "Medio Día (8:30 AM – 1:30 PM)",
      pricePEN: 95,
      priceUSD: 27,
      timeline: [
        { time: "08:30 AM", title: "Traslado hacia el embarcadero y travesía fluvial", desc: "Navegación corta hacia la comunidad nativa 11 de Agosto o San Francisco." },
        { time: "09:30 AM", title: "Taller vivencial de bordado y diseño Kené", desc: "Aprende el significado espiritual de los patrones geométricos que representan los ríos, las constelaciones y las canciones (íkaros) de la selva." },
        { time: "11:00 AM", title: "Recorrido de plantas medicinales con el sabio botánico", desc: "Identificación de corteza de chuchuhuasi, uña de gato, sangre de grado y plantas de protección amazónica." },
        { time: "12:30 PM", title: "Danza tradicional de bienvenida y despedida", desc: "Música en vivo con tambores y quenas tradicionales shipibas." }
      ],
      includes: [
        "Traslados completos terrestres y fluviales",
        "Aporte directo de conservación a la comunidad nativa",
        "Taller guiado con materiales de artesanía",
        "Degustación de frutas de estación (aguaje, cocona)"
      ]
    },
    cusco: {
      title: "Cusco Imperial, Valle Sagrado & Ciudadela de Machu Picchu",
      tag: "Patrimonio de la Humanidad",
      duration: "4 Días / 3 Noches",
      pricePEN: 1190,
      priceUSD: 330,
      timeline: [
        { time: "Día 1", title: "Vuelo a Cusco y City Tour Arqueológico", desc: "Recepción en el aeropuerto de Cusco, traslado a hotel céntrico, mate de coca de bienvenida y visita a Sacsayhuamán, Qenqo y el Qorikancha." },
        { time: "Día 2", title: "Valle Sagrado de los Incas & Tren a Aguas Calientes", desc: "Pisaq, mercado artesanal, fortaleza de Ollantaytambo y abordaje del tren panorámico rumbo al pueblo de Machu Picchu." },
        { time: "Día 3", title: "Amanecer en Machu Picchu & Retorno a Cusco", desc: "Subida en bus Consettur, tour guiado de 2.5 horas por los circuitos principales de la maravilla mundial. Tarde de regreso en tren." },
        { time: "Día 4", title: "Mañana libre y vuelo de retorno", desc: "Desayuno en hotel, compra de chocolates y artesanías en San Pedro y traslado al aeropuerto." }
      ],
      includes: [
        "3 Noches de hotel 3★ con desayuno buffet andino",
        "Boletos de tren turístico ida y vuelta (Inca Rail / Perurail)",
        "Ticket de ingreso oficial garantizado a Machu Picchu",
        "Buses de subida y bajada a la ciudadela",
        "Todos los traslados y guías profesionales bilingües"
      ]
    },
    cancun: {
      title: "Escape Caribeño: Cancún & Riviera Maya All Inclusive",
      tag: "Sol, Playa & Todo Incluido",
      duration: "5 Días / 4 Noches",
      pricePEN: 2850,
      priceUSD: 790,
      timeline: [
        { time: "Día 1", title: "Vuelo internacional y llegada a Cancún", desc: "Traslado privado del aeropuerto al Resort frente al mar turquesa. Check-in con cóctel de bienvenida." },
        { time: "Día 2", title: "Día de relax total y deportes acuáticos", desc: "Disfrute ilimitado de buffets internacionales, restaurantes temáticos y piscina infinita." },
        { time: "Día 3", title: "Tour opcional a Chichén Itzá y Cenote Sagrado", desc: "Visita a las pirámides mayas y nado refrescante en aguas subterráneas transparentes." },
        { time: "Día 4", title: "Noche de espectáculos y fiesta caribeña", desc: "Cenas gourmet y shows nocturnos en el resort." },
        { time: "Día 5", title: "Última mañana de compras y vuelo de retorno", desc: "Desayuno con vista al mar y traslado al aeropuerto para tu viaje de regreso." }
      ],
      includes: [
        "Vuelos internacionales ida y vuelta",
        "4 noches en Resort 5 Estrellas frente a la playa",
        "Sistema TODO INCLUIDO (comidas y bebidas premium ilimitadas)",
        "Traslados aeropuerto - hotel - aeropuerto",
        "Tarjeta de asistencia médica internacional al viajero"
      ]
    }
  };

  // --- ELEMENT SELECTORS ---
  const currencyButtons = document.querySelectorAll('.btn-curr');
  const priceElements = document.querySelectorAll('.tour-card');
  const tourTabs = document.querySelectorAll('.tab-btn');
  const toursGrid = document.getElementById('toursGrid');
  const siteHeader = document.getElementById('siteHeader');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');

  // Calculator elements
  const calcDestino = document.getElementById('calcDestino');
  const calcPersonas = document.getElementById('calcPersonas');
  const btnMinusPeople = document.getElementById('btnMinusPeople');
  const btnPlusPeople = document.getElementById('btnPlusPeople');
  const calcFecha = document.getElementById('calcFecha');
  const calcEstilo = document.getElementById('calcEstilo');
  const sumCurrency = document.getElementById('sumCurrency');
  const sumPriceTotal = document.getElementById('sumPriceTotal');
  const btnSendQuoteWhatsapp = document.getElementById('btnSendQuoteWhatsapp');

  // Hero Quick Search
  const heroDestino = document.getElementById('heroDestino');
  const btnBuscarHero = document.getElementById('btnBuscarHero');

  // Modal elements
  const itineraryModal = document.getElementById('itineraryModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTag = document.getElementById('modalTag');
  const modalTitle = document.getElementById('modalTitle');
  const modalDuration = document.getElementById('modalDuration');
  const modalBody = document.getElementById('modalBody');
  const modalPrice = document.getElementById('modalPrice');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

  // WhatsApp Floating Widget
  const whatsappBubble = document.getElementById('whatsappBubble');
  const btnWhatsappFloat = document.getElementById('btnWhatsappFloat');
  const bubbleCloseBtn = document.getElementById('bubbleCloseBtn');

  // Quick form
  const quickContactForm = document.getElementById('quickContactForm');

  // --- 1. SET MINIMUM DATE FOR CALCULATOR TO TODAY ---
  if (calcFecha) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    calcFecha.min = `${yyyy}-${mm}-${dd}`;
    // Default to +7 days ahead
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 7);
    const fyyyy = futureDate.getFullYear();
    const fmm = String(futureDate.getMonth() + 1).padStart(2, '0');
    const fdd = String(futureDate.getDate()).padStart(2, '0');
    calcFecha.value = `${fyyyy}-${fmm}-${fdd}`;
  }

  // --- 2. CURRENCY SWITCHER LOGIC ---
  function updateCurrency(currency) {
    currentCurrency = currency;

    currencyButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.currency === currency);
    });

    // Update cards
    priceElements.forEach(card => {
      const pen = parseFloat(card.dataset.pricePen || 0);
      const usd = parseFloat(card.dataset.priceUsd || Math.round(pen / EXCHANGE_RATE));
      const symbolSpan = card.querySelector('.price-symbol');
      const valSpan = card.querySelector('.price-val');

      if (symbolSpan && valSpan) {
        if (currency === 'PEN') {
          symbolSpan.textContent = 'S/';
          valSpan.textContent = pen;
        } else {
          symbolSpan.textContent = '$';
          valSpan.textContent = usd;
        }
      }
    });

    // Update calculator
    updateCalculatorTotal();
  }

  currencyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      updateCurrency(btn.dataset.currency);
    });
  });

  // --- 3. FILTER TABS (Pucallpa, Nacional, Internacional, Vuelos) ---
  tourTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tourTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const selectedCategory = tab.dataset.category;

      priceElements.forEach(card => {
        const cardCat = card.dataset.category;
        if (selectedCategory === 'todos' || cardCat === selectedCategory) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 4. CALCULATOR INTERACTIVITY ---
  function updateCalculatorTotal() {
    if (!calcDestino || !calcPersonas || !sumPriceTotal) return;

    const selectedOption = calcDestino.options[calcDestino.selectedIndex];
    const basePen = parseFloat(selectedOption.dataset.basePen || 85);
    const peopleCount = parseInt(calcPersonas.value, 10) || 1;

    let total = basePen * peopleCount;

    // Small group discount if >= 4 people
    if (peopleCount >= 4) {
      total = Math.round(total * 0.92); // 8% group perk
    }

    if (currentCurrency === 'PEN') {
      sumCurrency.textContent = 'S/';
      sumPriceTotal.textContent = total.toLocaleString('es-PE');
    } else {
      const totalUSD = Math.round(total / EXCHANGE_RATE);
      sumCurrency.textContent = '$';
      sumPriceTotal.textContent = totalUSD.toLocaleString('en-US');
    }
  }

  if (btnMinusPeople && btnPlusPeople && calcPersonas) {
    btnMinusPeople.addEventListener('click', () => {
      let val = parseInt(calcPersonas.value, 10);
      if (val > 1) {
        calcPersonas.value = val - 1;
        updateCalculatorTotal();
      }
    });

    btnPlusPeople.addEventListener('click', () => {
      let val = parseInt(calcPersonas.value, 10);
      if (val < 30) {
        calcPersonas.value = val + 1;
        updateCalculatorTotal();
      }
    });

    calcDestino.addEventListener('change', updateCalculatorTotal);
  }

  // Initial calculation
  updateCalculatorTotal();

  // Send Calculator Quote to WhatsApp
  if (btnSendQuoteWhatsapp) {
    btnSendQuoteWhatsapp.addEventListener('click', () => {
      const tour = calcDestino.value;
      const people = calcPersonas.value;
      const date = calcFecha.value || 'Por definir';
      const style = calcEstilo.value;
      const totalText = `${sumCurrency.textContent} ${sumPriceTotal.textContent}`;

      const message = `¡Hola Laser Viajes! 🌿 Deseo cotizar desde su web:\n\n` +
        `• *Destino:* ${tour}\n` +
        `• *Personas:* ${people} viajero(s)\n` +
        `• *Fecha tentativa:* ${date}\n` +
        `• *Estilo:* ${style}\n` +
        `• *Presupuesto aprox.:* ${totalText}\n\n` +
        `¿Tienen disponibilidad y me podrían dar más información de salidas? ¡Muchas gracias!`;

      const encodedMsg = encodeURIComponent(message);
      const url = `https://wa.me/${AGENCY_WHATSAPP}?text=${encodedMsg}`;
      window.open(url, '_blank', 'noopener');
    });
  }

  // --- 5. HERO SEARCH BUTTON ---
  if (btnBuscarHero && heroDestino) {
    btnBuscarHero.addEventListener('click', () => {
      const val = heroDestino.value;
      
      // Scroll to destinos section
      const destinosSection = document.getElementById('destinos');
      if (destinosSection) {
        destinosSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Automatically activate relevant tab
      let targetTab = 'todos';
      if (val === 'yarinacocha' || val === 'aguaytia') targetTab = 'pucallpa';
      if (val === 'cusco') targetTab = 'nacional';
      if (val === 'caribe') targetTab = 'internacional';
      if (val === 'vuelos') targetTab = 'vuelos';

      const matchTab = Array.from(tourTabs).find(t => t.dataset.category === targetTab);
      if (matchTab) {
        matchTab.click();
      }
    });
  }

  // --- 6. ITINERARY MODAL DRAWER ---
  function openItinerary(tourKey) {
    const data = itineraries[tourKey];
    if (!data) return;

    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDuration.textContent = data.duration;

    // Build timeline HTML
    let timelineHTML = '<div class="timeline">';
    data.timeline.forEach(step => {
      timelineHTML += `
        <div class="timeline-step">
          <div class="timeline-time">${step.time}</div>
          <div class="timeline-title">${step.title}</div>
          <p class="timeline-desc">${step.desc}</p>
        </div>
      `;
    });
    timelineHTML += '</div>';

    // Build includes HTML
    let includesHTML = `
      <div class="modal-includes-box">
        <div class="modal-includes-title">¿Qué incluye este tour?</div>
        <ul class="modal-includes-list">
          ${data.includes.map(inc => `<li>${inc}</li>`).join('')}
        </ul>
      </div>
    `;

    modalBody.innerHTML = timelineHTML + includesHTML;

    // Price
    if (currentCurrency === 'PEN') {
      modalPrice.textContent = `S/ ${data.pricePEN}`;
    } else {
      modalPrice.textContent = `$ ${data.priceUSD}`;
    }

    // Modal WhatsApp Button
    const message = `¡Hola Laser Viajes! Deseo reservar el tour: *${data.title}* (${data.duration}). ¿Cuáles son las fechas disponibles?`;
    modalWhatsappBtn.href = `https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(message)}`;

    itineraryModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeItinerary() {
    itineraryModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-itinerary').forEach(btn => {
    btn.addEventListener('click', () => {
      openItinerary(btn.dataset.tour);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeItinerary);
  if (itineraryModal) {
    itineraryModal.addEventListener('click', (e) => {
      if (e.target === itineraryModal) closeItinerary();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && itineraryModal.classList.contains('open')) {
      closeItinerary();
    }
  });

  // --- 7. FLOATING WHATSAPP BUBBLE ---
  if (btnWhatsappFloat && whatsappBubble) {
    btnWhatsappFloat.addEventListener('click', () => {
      whatsappBubble.classList.toggle('hidden');
    });
  }

  if (bubbleCloseBtn) {
    bubbleCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      whatsappBubble.classList.add('hidden');
    });
  }

  // --- 8. QUICK CONTACT FORM DISPATCH ---
  if (quickContactForm) {
    quickContactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('quickName').value.trim();
      const query = document.getElementById('quickDestino').value.trim();

      const message = `¡Hola Laser Viajes! Mi nombre es *${name}* y les escribo desde su página web para consultar por: "${query}". ¿Me podrían dar información?`;
      window.open(`https://wa.me/${AGENCY_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
    });
  }

  // --- 9. STICKY HEADER & SCROLL BEHAVIOR ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });

  // --- 10. MOBILE MENU TOGGLE ---
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });

    mainNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('active');
      });
    });
  }

  // --- 11. FAQ ACCORDION ---
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  faqTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.closest('.faq-item');
      if (!parent) return;

      const isOpen = parent.classList.contains('active');

      // Cerrar otros para mantener limpieza visual
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const btn = item.querySelector('.faq-trigger');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        parent.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- 12. HERO SLIDER CAROUSEL (5 DESTINOS CON AUTOPLAY) ---
  const heroSlides = document.querySelectorAll('.hero-slide');
  const heroDots = document.querySelectorAll('.hero-dot');
  const heroLocationSpan = document.getElementById('heroSlideLocation');
  const heroPrevBtn = document.getElementById('heroPrevBtn');
  const heroNextBtn = document.getElementById('heroNextBtn');
  let currentSlideIndex = 0;
  let heroTimer = null;

  function showHeroSlide(index) {
    if (heroSlides.length === 0) return;
    if (index < 0) index = heroSlides.length - 1;
    if (index >= heroSlides.length) index = 0;

    currentSlideIndex = index;

    heroSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlideIndex);
    });

    heroDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlideIndex);
    });

    const activeSlide = heroSlides[currentSlideIndex];
    if (activeSlide && heroLocationSpan) {
      heroLocationSpan.textContent = '📍 ' + (activeSlide.dataset.location || 'Pucallpa, Ucayali');
    }
  }

  function startHeroTimer() {
    stopHeroTimer();
    heroTimer = setInterval(() => {
      showHeroSlide(currentSlideIndex + 1);
    }, 5500);
  }

  function stopHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
  }

  if (heroPrevBtn) {
    heroPrevBtn.addEventListener('click', () => {
      showHeroSlide(currentSlideIndex - 1);
      startHeroTimer();
    });
  }

  if (heroNextBtn) {
    heroNextBtn.addEventListener('click', () => {
      showHeroSlide(currentSlideIndex + 1);
      startHeroTimer();
    });
  }

  heroDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.dataset.index, 10);
      showHeroSlide(idx);
      startHeroTimer();
    });
  });

  const heroSliderElem = document.getElementById('heroSlider');
  if (heroSliderElem) {
    heroSliderElem.addEventListener('mouseenter', stopHeroTimer);
    heroSliderElem.addEventListener('mouseleave', startHeroTimer);

    // Swipe táctil en móvil para Hero
    let touchStartX = 0;
    heroSliderElem.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    heroSliderElem.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 50) {
        showHeroSlide(currentSlideIndex + 1); // Deslizar izquierda
        startHeroTimer();
      } else if (touchEndX - touchStartX > 50) {
        showHeroSlide(currentSlideIndex - 1); // Deslizar derecha
        startHeroTimer();
      }
    }, { passive: true });
  }

  startHeroTimer();

  // --- 13. GALLERY CAROUSEL TRACK ---
  const galleryTrack = document.getElementById('galleryTrack');
  const galPrevBtn = document.getElementById('galPrevBtn');
  const galNextBtn = document.getElementById('galNextBtn');
  const galCounter = document.getElementById('galCounter');
  const galleryCards = document.querySelectorAll('.gallery-card');

  function updateGalleryCounter() {
    if (!galleryTrack || galleryCards.length === 0 || !galCounter) return;
    const cardWidth = 340;
    const current = Math.min(Math.round(galleryTrack.scrollLeft / cardWidth) + 1, galleryCards.length);
    galCounter.textContent = `${Math.max(1, current)} / ${galleryCards.length}`;
  }

  if (galPrevBtn && galleryTrack) {
    galPrevBtn.addEventListener('click', () => {
      galleryTrack.scrollBy({ left: -340, behavior: 'smooth' });
      setTimeout(updateGalleryCounter, 300);
    });
  }

  if (galNextBtn && galleryTrack) {
    galNextBtn.addEventListener('click', () => {
      galleryTrack.scrollBy({ left: 340, behavior: 'smooth' });
      setTimeout(updateGalleryCounter, 300);
    });
  }

  if (galleryTrack) {
    galleryTrack.addEventListener('scroll', updateGalleryCounter, { passive: true });
  }

  // --- 14. GOOGLE REVIEWS SLIDER ---
  const reviewsTrack = document.getElementById('reviewsTrack');
  const reviewPrevBtn = document.getElementById('reviewPrevBtn');
  const reviewNextBtn = document.getElementById('reviewNextBtn');

  if (reviewPrevBtn && reviewsTrack) {
    reviewPrevBtn.addEventListener('click', () => {
      reviewsTrack.scrollBy({ left: -340, behavior: 'smooth' });
    });
  }

  if (reviewNextBtn && reviewsTrack) {
    reviewNextBtn.addEventListener('click', () => {
      reviewsTrack.scrollBy({ left: 340, behavior: 'smooth' });
    });
  }

});


