// Reusable Project Detail Page Engine for VR Real Estates
import { projectDetailsData } from '../data/projectDetails.js';
import { renderHeader } from '../components/header.js';
import { renderFooter } from '../components/footer.js';
import { renderPlotMasterPlan, initPlotMasterPlan } from '../components/plotMasterPlan.js';

export function renderProjectDetail(projectId) {
  const project = projectDetailsData[projectId] || projectDetailsData['vr-prime-meadows'];

  // Render Stats Grid
  const statsHtml = project.stats.map(st => `
    <div class="pstat-item">
      <div class="pstat-icon">${getIconSvg(st.icon)}</div>
      <div class="pstat-content">
        ${!st.isText ? `<span class="pstat-val">${st.value}</span>` : ''}
        <span class="pstat-lbl">${st.label}</span>
      </div>
    </div>
  `).join('');

  // Render Highlights Grid
  const highlightsHtml = project.highlights.map(h => `
    <div class="highlight-card">
      <div class="highlight-icon">${getHighlightIconSvg(h.icon)}</div>
      <span class="highlight-title">${h.title}</span>
    </div>
  `).join('');

  // Render Advantages Grid
  const advantagesHtml = project.advantages.map(adv => `
    <div class="advantage-card">
      <div class="adv-icon">${getHighlightIconSvg(adv.icon)}</div>
      <span class="adv-title">${adv.title}</span>
    </div>
  `).join('');

  // Render Configurations (for Villas, Apartments, Farmlands)
  let configSectionHtml = '';
  if (project.configurations && project.configurations.length > 0) {
    const configCards = project.configurations.map((cfg, idx) => `
      <div class="config-card">
        <div class="config-card-header">
          <span class="config-badge">${cfg.plotSize}</span>
          <h4 class="config-title">${cfg.type}</h4>
          <div class="config-size">${cfg.size} &bull; ${cfg.facing}</div>
        </div>
        <div class="config-features">
          ${cfg.features.map(f => `<div class="cfg-feature-item"><span class="cfg-check">✓</span><span>${f}</span></div>`).join('')}
        </div>
        <div class="config-footer">
          <div class="cfg-price">
            <span class="cfg-price-lbl">Starting from</span>
            <span class="cfg-price-val">${cfg.price}</span>
          </div>
          <button class="cfg-btn" onclick="window.openSiteVisitModal('${project.name} - ${cfg.type}')">Enquire Now</button>
        </div>
      </div>
    `).join('');

    configSectionHtml = `
      <section class="project-config-section" id="configurations-section">
        <div class="ref-container">
          <div class="detail-section-title-wrap">
            <h3 class="detail-section-title">Available Configurations & Floor Plans</h3>
            <p class="detail-section-sub">Choose from carefully crafted unit plans tailored for luxury, comfort and high value.</p>
          </div>
          <div class="config-grid">
            ${configCards}
          </div>
        </div>
      </section>
    `;
  }

  // Render Connectivity Distance Table
  const distanceRowsHtml = project.connectivity.distances.map(d => `
    <div class="distance-row">
      <div class="dist-left">
        <span class="dist-icon">${getConnectivityIconSvg(d.icon)}</span>
        <span class="dist-name">${d.destination}</span>
      </div>
      <div class="dist-right">
        <span class="dist-km">${d.distance}</span>
        <span class="dist-time">(${d.time})</span>
      </div>
    </div>
  `).join('');

  // Render Gallery Thumbnails
  const galleryThumbnailsHtml = project.gallery.thumbnails.map((t, idx) => `
    <div class="gallery-thumb-item" data-idx="${idx}">
      <img src="${t.img}" alt="${t.title}" loading="lazy" />
      <span class="gallery-thumb-caption">${t.title}</span>
    </div>
  `).join('');

  const html = `
    ${renderHeader()}

    <main class="project-detail-main">
      
      <!-- Top Breadcrumbs & Project Hero Banner -->
      <section class="project-hero-header">
        <div class="ref-container">
          
          <!-- Breadcrumbs -->
          <nav class="p-breadcrumbs" aria-label="Breadcrumbs">
            <a href="#/">Home</a>
            <span class="p-sep">&gt;</span>
            <a href="${project.categoryLink}">${project.category}</a>
            <span class="p-sep">&gt;</span>
            <span class="p-current">${project.name}</span>
          </nav>

          <!-- Main Hero Content Row -->
          <div class="p-hero-row">
            
            <!-- Left Info -->
            <div class="p-hero-info">
              <h1 class="p-hero-title">${project.name}</h1>
              <p class="p-hero-location">${project.tagline}</p>
              <p class="p-hero-desc">${project.subtitle}</p>

              <!-- Verification Badges -->
              <div class="p-hero-badges">
                ${project.badges.map(b => `
                  <span class="p-badge">
                    <span class="p-badge-icon">✓</span>
                    <span>${b.text}</span>
                  </span>
                `).join('')}
              </div>
            </div>

            <!-- Right Script Flourish & Quick Stats -->
            <div class="p-hero-right-flourish">
              <div class="script-callout">
                <span class="script-text">${project.scriptCallout}</span>
                <svg class="script-underline" width="160" height="12" viewBox="0 0 160 12" fill="none">
                  <path d="M2 9C50 2 110 3 158 8" stroke="#1A3B2B" stroke-width="2.2" stroke-linecap="round"/>
                </svg>
              </div>

              <!-- Stats Strip Grid -->
              <div class="p-stats-strip">
                ${statsHtml}
              </div>
            </div>

          </div>

          <!-- Project Section Tabs Navigation -->
          <div class="p-tabs-nav-bar">
            <div class="p-tabs-list" id="p-tabs-list">
              ${project.tabs.map(t => `
                <a href="#${t.id}-section" class="p-tab-btn ${t.active ? 'active' : ''}" data-tab="${t.id}">
                  ${t.label}
                </a>
              `).join('')}
            </div>
          </div>

        </div>
      </section>

      <!-- Plot Master Plan (For VR Prime Meadows) or Overview Configurations -->
      ${project.hasMasterPlan ? renderPlotMasterPlan(project) : configSectionHtml}

      <!-- Project Highlights Section -->
      <section class="detail-section highlights-section" id="amenities-section">
        <div class="ref-container">
          <div class="detail-section-header">
            <h3 class="detail-section-title">Project Highlights</h3>
            <a href="#/contact" class="detail-see-all-mob">See All &rarr;</a>
          </div>

          <div class="highlights-grid">
            ${highlightsHtml}
          </div>
        </div>
      </section>

      <!-- Key Advantages Section -->
      <section class="detail-section advantages-section" id="project-overview-section">
        <div class="ref-container">
          <div class="detail-section-header">
            <h3 class="detail-section-title">Key Advantages</h3>
          </div>

          <div class="advantages-grid">
            ${advantagesHtml}
          </div>
        </div>
      </section>

      <!-- Location & Connectivity + Project Gallery Section -->
      <section class="detail-section location-gallery-section" id="location-connectivity-section">
        <div class="ref-container">
          <div class="loc-gal-grid">
            
            <!-- Left: Location & Connectivity (Schematic + Distance Table) -->
            <div class="location-col">
              <div class="detail-section-header">
                <h3 class="detail-section-title">Location & Connectivity</h3>
                <a href="https://maps.google.com" target="_blank" rel="noopener" class="detail-see-all-mob">See All &rarr;</a>
              </div>

              <div class="location-connectivity-card">
                
                <!-- Schematic Network Route Map -->
                <div class="schematic-map-wrap">
                  <div class="schematic-map-svg-box">
                    ${renderSchematicMapSvg(project.name)}
                  </div>
                </div>

                <!-- Distance from Major Locations Table -->
                <div class="distance-table-wrap">
                  <h4 class="dist-table-heading">Distance from Major Locations</h4>
                  <div class="distance-list">
                    ${distanceRowsHtml}
                  </div>

                  <div class="dist-gmaps-btn-wrap">
                    <a href="https://maps.google.com" target="_blank" rel="noopener" class="dist-gmaps-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

            <!-- Right: Project Gallery -->
            <div class="gallery-col" id="gallery-section">
              <div class="detail-section-header">
                <h3 class="detail-section-title">Project Gallery</h3>
                <a href="#gallery-section" class="detail-view-all-link">View All &rarr;</a>
              </div>

              <div class="gallery-card">
                <!-- Large Featured Photo -->
                <div class="gallery-featured-wrap">
                  <img src="${project.gallery.featured.img}" alt="${project.gallery.featured.title}" class="gallery-featured-img" />
                  <div class="gallery-featured-caption">${project.gallery.featured.title}</div>
                </div>

                <!-- 2x2 Grid Thumbnails -->
                <div class="gallery-thumbs-grid">
                  ${galleryThumbnailsHtml}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Luxury CTA Banner -->
      <section class="project-cta-banner-section" id="brochure-section">
        <div class="ref-container">
          <div class="project-cta-banner">
            <div class="cta-banner-content">
              <h2 class="cta-banner-headline">${project.cta.headline}</h2>
              <p class="cta-banner-sub">${project.cta.subtitle}</p>
            </div>
            <div class="cta-banner-action">
              <button class="cta-banner-gold-btn" onclick="window.openSiteVisitModal('${project.name}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>${project.cta.btnText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom 3-Feature Value Strip -->
      <section class="project-bottom-strip-section">
        <div class="ref-container">
          <div class="bottom-strip-grid">
            ${project.footerPoints.map(pt => `
              <div class="bstrip-item">
                <div class="bstrip-icon-wrap">${getHighlightIconSvg(pt.icon)}</div>
                <div class="bstrip-info">
                  <h4 class="bstrip-title">${pt.title}</h4>
                  <p class="bstrip-desc">${pt.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

    </main>

    ${renderFooter()}
  `;

  return {
    html,
    init: () => {
      // Initialize master plan if this project has it
      if (project.hasMasterPlan) {
        initPlotMasterPlan(project);
      }

      // Initialize tabs scrolling
      const tabBtns = document.querySelectorAll('.p-tab-btn');
      tabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
        });
      });
    }
  };
}

// Helper SVG generator for Schematic Route Connectivity Map
function renderSchematicMapSvg(projectName) {
  return `
    <svg viewBox="0 0 380 240" class="schematic-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="node-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
        </filter>
      </defs>

      <!-- Background Soft Map Grid -->
      <rect width="380" height="240" fill="#F8FAFC" rx="10"/>
      <path d="M 0 60 L 380 60 M 0 120 L 380 120 M 0 180 L 380 180" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 4"/>
      <path d="M 90 0 L 90 240 M 190 0 L 190 240 M 290 0 L 290 240" stroke="#E2E8F0" stroke-width="1" stroke-dasharray="4 4"/>

      <!-- Connecting Road Corridors -->
      <!-- Airport to Project -->
      <line x1="95" y1="55" x2="165" y2="135" stroke="#0284C7" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="95" y1="55" x2="165" y2="135" stroke="#BAE6FD" stroke-width="1" stroke-dasharray="4 3"/>

      <!-- ORR to Project -->
      <line x1="265" y1="55" x2="165" y2="135" stroke="#10B981" stroke-width="3.5" stroke-linecap="round"/>
      <line x1="265" y1="55" x2="165" y2="135" stroke="#D1FAE5" stroke-width="1" stroke-dasharray="4 3"/>

      <!-- Bus Stand to Project -->
      <line x1="75" y1="170" x2="165" y2="135" stroke="#EF4444" stroke-width="3.5" stroke-linecap="round"/>

      <!-- Town to Project -->
      <line x1="105" y1="215" x2="165" y2="135" stroke="#3B82F6" stroke-width="3" stroke-linecap="round"/>

      <!-- NH-44 to Project -->
      <line x1="265" y1="195" x2="165" y2="135" stroke="#059669" stroke-width="3.5" stroke-linecap="round"/>

      <!-- NODE 1: Airport (Top Left) -->
      <g transform="translate(40, 30)" filter="url(#node-shadow)">
        <rect width="110" height="42" rx="8" fill="#FFFFFF" stroke="#0284C7" stroke-width="1.5"/>
        <circle cx="20" cy="21" r="12" fill="#0284C7"/>
        <path d="M 15 21 L 25 21 M 21 17 L 25 21 L 21 25" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
        <text x="38" y="16" fill="#0F172A" font-size="8.5" font-weight="700">Rajiv Gandhi Int. Airport</text>
        <text x="38" y="27" fill="#0284C7" font-size="8" font-weight="800">25 km</text>
        <text x="65" y="27" fill="#64748B" font-size="7.5">(30 mins)</text>
      </g>

      <!-- NODE 2: ORR (Top Right) -->
      <g transform="translate(230, 30)" filter="url(#node-shadow)">
        <rect width="115" height="42" rx="8" fill="#FFFFFF" stroke="#10B981" stroke-width="1.5"/>
        <circle cx="20" cy="21" r="12" fill="#10B981"/>
        <circle cx="20" cy="21" r="6" fill="#FFFFFF"/>
        <text x="38" y="16" fill="#0F172A" font-size="8.5" font-weight="700">Outer Ring Road (ORR)</text>
        <text x="38" y="27" fill="#059669" font-size="8" font-weight="800">12 km</text>
        <text x="65" y="27" fill="#64748B" font-size="7.5">(20 mins)</text>
      </g>

      <!-- NODE 3: Shadnagar Bus Stand (Middle Left) -->
      <g transform="translate(15, 140)" filter="url(#node-shadow)">
        <rect width="90" height="40" rx="8" fill="#FFFFFF" stroke="#EF4444" stroke-width="1.5"/>
        <circle cx="18" cy="20" r="10" fill="#EF4444"/>
        <text x="34" y="15" fill="#0F172A" font-size="8" font-weight="700">Bus Stand</text>
        <text x="34" y="26" fill="#DC2626" font-size="7.5" font-weight="800">8 km <tspan fill="#64748B" font-weight="500">(15m)</tspan></text>
      </g>

      <!-- NODE 4: Shadnagar Town (Bottom Left) -->
      <g transform="translate(50, 195)" filter="url(#node-shadow)">
        <rect width="90" height="38" rx="8" fill="#FFFFFF" stroke="#3B82F6" stroke-width="1.5"/>
        <circle cx="18" cy="19" r="10" fill="#3B82F6"/>
        <text x="34" y="14" fill="#0F172A" font-size="8" font-weight="700">Town Center</text>
        <text x="34" y="25" fill="#2563EB" font-size="7.5" font-weight="800">8 km <tspan fill="#64748B" font-weight="500">(15m)</tspan></text>
      </g>

      <!-- NODE 5: NH-44 Highway (Bottom Right) -->
      <g transform="translate(230, 175)" filter="url(#node-shadow)">
        <rect width="90" height="40" rx="8" fill="#FFFFFF" stroke="#059669" stroke-width="1.5"/>
        <circle cx="18" cy="20" r="10" fill="#059669"/>
        <text x="34" y="15" fill="#0F172A" font-size="8" font-weight="700">NH-44 Highway</text>
        <text x="34" y="26" fill="#047857" font-size="7.5" font-weight="800">8 km <tspan fill="#64748B" font-weight="500">(15m)</tspan></text>
      </g>

      <!-- CENTER HUB NODE: Project Destination -->
      <g transform="translate(130, 115)" filter="url(#node-shadow)">
        <rect width="115" height="42" rx="21" fill="#1A3B2B" stroke="#D4AF37" stroke-width="2"/>
        <circle cx="21" cy="21" r="13" fill="#D4AF37"/>
        <path d="M 21 14 C 18 14 16 16.5 16 19 C 16 23 21 27 21 27 C 21 27 26 23 26 19 C 26 16.5 24 14 21 14 Z" fill="#1A3B2B"/>
        <circle cx="21" cy="19" r="2" fill="#D4AF37"/>
        <text x="40" y="25" fill="#FFFFFF" font-size="9" font-weight="800" letter-spacing="0.5">${projectName.split(' ')[0]} ${projectName.split(' ')[1] || ''}</text>
      </g>

    </svg>
  `;
}

// Icon Helper
function getIconSvg(type) {
  switch (type) {
    case 'land':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="m21 16-4 4-5-5-6 6M3 21h18M3 10l5 5 4-4 8 8"/></svg>`;
    case 'grid':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;
    case 'tree':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="M12 22v-8M7 14l5-5 5 5M8 10l4-4 4 4M9 6l3-3 3 3"/></svg>`;
    case 'clubhouse':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>`;
    case 'road':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="M4 19L8 5m8 14l4-14M12 7v3m0 4v3"/></svg>`;
    case 'play':
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><circle cx="12" cy="5" r="3"/><path d="M12 8v8M8 12h8M9 20l3-4 3 4"/></svg>`;
    default:
      return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><circle cx="12" cy="12" r="9"/></svg>`;
  }
}

function getHighlightIconSvg(type) {
  switch (type) {
    case 'shield-check':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
    case 'gate':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><rect x="3" y="4" width="4" height="16"/><rect x="17" y="4" width="4" height="16"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>`;
    case 'arch':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M4 21V10a8 8 0 0 1 16 0v11M2 21h20"/></svg>`;
    case 'road-wide':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M4 19L8 5m8 14l4-14M10 9h4m-5 6h6"/></svg>`;
    case 'tree-park':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22v-6M8 12c-2 0-3-1-3-3s2-4 4-4c1-2 3-3 5-3s4 1 5 3c2 0 4 2 4 4s-1 3-3 3H8z"/></svg>`;
    case 'club-house':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M10 9h4v4h-4z"/></svg>`;
    case 'play-area':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="5" r="2.5"/><path d="M12 7.5v7m-4-4 8 2M9 20l3-5.5 3 5.5"/></svg>`;
    case 'dumbbell':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12"/></svg>`;
    case 'pipe':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M3 7h6a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4h4M3 11h4a4 4 0 0 1 4 4v2M17 17h4"/></svg>`;
    case 'leaf-row':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`;
    case 'pin-star':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;
    case 'leaf':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`;
    case 'compass-grid':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;
    case 'doc-check':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`;
    case 'chart-up':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
    case 'shield-lock':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="2"/></svg>`;
    case 'home-heart':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11c-1.5-1.5-3.5 0-3.5 1.5 0 2 3.5 4.5 3.5 4.5s3.5-2.5 3.5-4.5c0-1.5-2-3-3.5-1.5z"/></svg>`;
    case 'award':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`;
    case 'target':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;
    case 'sparkle':
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}

function getConnectivityIconSvg(type) {
  switch (type) {
    case 'plane':
      return `✈️`;
    case 'bus':
      return `🚌`;
    case 'building':
      return `🏢`;
    case 'road':
      return `🛣️`;
    case 'hospital':
      return `🏥`;
    case 'school':
      return `🎓`;
    case 'shopping':
      return `🛍️`;
    default:
      return `📍`;
  }
}
