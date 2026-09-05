(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e={}){let{currentPath:t=`#/`,isDetail:n=!1,isOpenPlots:r=!1,backUrl:i=`#/open-plots`}=e,a=``,o=``;return n?(a=`
      <a href="${i}" class="nav-back-btn" id="header-back-btn">
        <span>&larr;</span> Back
      </a>
    `,o=`
      <button class="header-enquire-btn" onclick="window.openSiteVisitModal('Amodha')">
        Enquire Now &rarr;
      </button>
    `):o=r?`
      <button class="header-enquire-btn" onclick="window.openSiteVisitModal('Open Plots')">
        Enquire Now &rarr;
      </button>
    `:`
      <div class="header-contact-meta">
        <a href="tel:+919876543210" class="header-meta-link" title="Call VR Real Estates">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <span>+91 98765 43210</span>
        </a>
        <a href="mailto:info@vrrealestates.com" class="header-meta-link" title="Email VR Real Estates">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span>info@vrrealestates.com</span>
        </a>
      </div>
      <button class="header-enquire-btn" onclick="window.openSiteVisitFlow ? window.openSiteVisitFlow(null, 'form') : window.openSiteVisitModal('VR Header')">
        Enquire Now &rarr;
      </button>
    `,`
    <header class="ref-header" id="main-header">
      <div class="ref-header-inner">
        <!-- Brand Logo Area -->
        <a href="#/" class="ref-brand-block" title="VR REAL ESTATES">
          <img src="/images/vr-logo.png" alt="VR REAL ESTATES" class="ref-brand-logo-img" />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="ref-nav-menu" id="ref-nav-menu">
          ${a}
          <a href="#/" class="ref-nav-link ${t===`#/`?`active`:``}">
            Home
          </a>
          <a href="#/about" class="ref-nav-link ${t===`#/about`?`active`:``}">
            About Us
          </a>
          <a href="#/projects" class="ref-nav-link ${t===`#/projects`?`active`:``}">
            Projects
          </a>
          <div class="ref-nav-item has-dropdown">
            <a href="#/open-plots" class="ref-nav-link dropdown-toggle ${t.includes(`plots`)||t.includes(`villas`)||t.includes(`apartments`)||t.includes(`farmlands`)?`active`:``}">
              Properties <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="ref-dropdown-menu">
              <a href="#/open-plots" class="ref-dropdown-item">Open Plots</a>
              <a href="#/villas" class="ref-dropdown-item">Luxury Villas</a>
              <a href="#/apartments" class="ref-dropdown-item">Apartments</a>
              <a href="#/farmlands" class="ref-dropdown-item">Farm Lands</a>
            </div>
          </div>
          <a href="#/locations" class="ref-nav-link ${t===`#/locations`?`active`:``}">
            Locations
          </a>
          <a href="#/resources" class="ref-nav-link ${t===`#/resources`?`active`:``}">
            Insights
          </a>
          <a href="#/contact" class="ref-nav-link ${t===`#/contact`?`active`:``}">
            Contact
          </a>
        </nav>

        <!-- Right Side Contact & CTA -->
        <div class="ref-header-actions">
          ${o}
          <button class="ref-mobile-toggle" id="ref-mobile-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Nav Drawer -->
      <div class="ref-mobile-drawer" id="ref-mobile-drawer">
        <a href="#/" class="ref-mobile-link ${t===`#/`?`active`:``}">Home</a>
        <a href="#/about" class="ref-mobile-link">About Us</a>
        <a href="#/projects" class="ref-mobile-link">Projects</a>
        <a href="#/open-plots" class="ref-mobile-link">Open Plots</a>
        <a href="#/villas" class="ref-mobile-link">Luxury Villas</a>
        <a href="#/apartments" class="ref-mobile-link">Apartments</a>
        <a href="#/farmlands" class="ref-mobile-link">Farm Lands</a>
        <a href="#/locations" class="ref-mobile-link">Locations</a>
        <a href="#/resources" class="ref-mobile-link">Insights</a>
        <a href="#/contact" class="ref-mobile-link">Contact</a>
        <div class="ref-mobile-contact">
          <a href="tel:+919490634829" class="mobile-contact-item">📞 +91 94906 34829</a>
          <a href="mailto:info@vrrealestates.com" class="mobile-contact-item">✉️ info@vrrealestates.com</a>
        </div>
      </div>
    </header>
  `}function t(){let e=document.getElementById(`main-header`),t=document.getElementById(`ref-mobile-toggle`),n=document.getElementById(`ref-mobile-drawer`);if(t&&n&&(t.addEventListener(`click`,()=>{n.classList.toggle(`open`),t.classList.toggle(`active`)}),n.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{n.classList.remove(`open`),t.classList.remove(`active`)})})),e){let t=()=>{window.scrollY>20?e.classList.add(`scrolled`):e.classList.remove(`scrolled`)};window.removeEventListener(`scroll`,t),window.addEventListener(`scroll`,t,{passive:!0})}}var n=[{id:`farmlands`,category:`FARM LANDS`,categoryIcon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,titleLine1:`A Greener<br/>Tomorrow,`,titleLine2:`A Wiser Investment`,desc:`Managed farm lands that bring you closer to nature and long-term value.`,primaryCta:`Explore Farm Lands`,primaryLink:`#/farmlands`,secondaryCta:`Talk to an Expert`,benefits:[{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`,title:`Clean &`,subtitle:`Green Living`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,title:`High Growth`,subtitle:`Potential`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,title:`Transparent`,subtitle:`& Secure`}],taglineHtml:`<span class="ref-handwritten">Land for a Better Life</span>`,image:`/assets/hero-farm-B4nyslIM.jpeg`,imageTagline:`Invest in a Healthier Tomorrow`,floatingCardText:`Nature Generates Wealth`},{id:`villas`,category:`LUXURY VILLAS`,categoryIcon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,titleLine1:`Your Dream<br/>Home, A Brighter`,titleLine2:`Tomorrow`,desc:`Thoughtfully designed villas that offer modern living, more space and a better future for you and your family.`,primaryCta:`Explore Villas`,primaryLink:`#/villas`,secondaryCta:`Talk to an Expert`,benefits:[{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`,title:`Spacious`,subtitle:`Living`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 12 14 22 4"></polyline></svg>`,title:`Prime`,subtitle:`Locations`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,title:`Trusted`,subtitle:`Investment`}],taglineHtml:`<span class="ref-handwritten">Spaces for a Better Tomorrow</span>`,image:`/assets/hero-villa-DU8CdqJJ.jpeg`,imageTagline:`Live Greener Own Greater`,floatingCardText:`Modern Homes for a Healthier Tomorrow`},{id:`openplots`,category:`OPEN PLOTS`,categoryIcon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,titleLine1:`Invest in Land,<br/>Invest in a`,titleLine2:`Better Tomorrow`,desc:`HMDA & DTCP approved open plots in fast-growing corridors of Telangana & Andhra Pradesh.`,primaryCta:`Explore Open Plots`,primaryLink:`#/open-plots`,secondaryCta:`Talk to an Expert`,benefits:[{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`,title:`Prime`,subtitle:`Locations`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,title:`High Growth`,subtitle:`Potential`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 12 14 22 4"></polyline></svg>`,title:`Clear Titles`,subtitle:`& Secure Investment`}],taglineHtml:`<div class="ref-sub-line"><span class="sub-rule"></span><span class="sub-text">LAND BUILDS LEGACIES</span><span class="sub-rule"></span></div>`,image:`/assets/hero-apartments-DS1lQdKG.jpeg`,imageTagline:`Land for Generations`,floatingCardText:`Strategic Locations Stronger Futures`},{id:`apartments`,category:`PREMIUM APARTMENTS`,categoryIcon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="8" y1="6" x2="8" y2="6.01"></line><line x1="16" y1="6" x2="16" y2="6.01"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line></svg>`,titleLine1:`Elevated Living,`,titleLine2:`A Brighter Future`,desc:`Modern 2 & 3 BHK apartments with world-class amenities in prime locations.`,primaryCta:`Explore Apartments`,primaryLink:`#/apartments`,secondaryCta:`Talk to an Expert`,benefits:[{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,title:`Modern`,subtitle:`Amenities`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,title:`Prime`,subtitle:`Locations`},{icon:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 12 14 22 4"></polyline></svg>`,title:`Trusted`,subtitle:`Investment`}],taglineHtml:`<div class="ref-sub-line"><span class="sub-rule"></span><span class="sub-text">HOMES THAT GROW WITH YOU</span><span class="sub-rule"></span></div>`,image:`/assets/hero-plots-DMKDzuCp.jpeg`,imageTagline:`Live Better Every Day`,floatingCardText:`Sustainable Communities Stronger Tomorrows`}];function r(){return`
    <section class="ref-hero-section" id="ref-hero-section">
      <!-- SVG clip-path definition for organic hero image shape matching reference exactly -->
      <svg width="0" height="0" style="position:absolute; width:0; height:0; opacity:0; pointer-events:none; overflow:hidden;" aria-hidden="true">
        <defs>
          <clipPath id="hero-organic-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.257,0 C 0.162,0 0.1061,0.0298 0.0838,0.0909 C 0.067,0.1364 0,0.2926 0,0.3849 C 0,0.4631 0.1006,0.7614 0.1464,0.8679 C 0.1687,0.9205 0.2011,1 0.257,1 L 0.95,1 Q 1,1 1,0.94 L 1,0.06 Q 1,0 0.95,0 Z" />
          </clipPath>
        </defs>
      </svg>

      <!-- Background subtle leaves flourish -->
      <div class="ref-hero-bg-flourish"></div>

      <div class="ref-hero-container">
        <div class="ref-hero-slider-track" id="ref-hero-track">
          ${n.map((e,t)=>`
      <div class="ref-hero-slide ${t===0?`active`:``}" data-slide-index="${t}" id="hero-slide-${t}">
        <div class="ref-hero-left">
          <!-- Category Eyebrow -->
          <div class="ref-hero-category">
            <span class="ref-hero-cat-icon">${e.categoryIcon}</span>
            <span class="ref-hero-cat-name">${e.category}</span>
          </div>

          <!-- Large Serif Headline with Split Colors -->
          <h1 class="ref-hero-headline">
            <span class="headline-green">${e.titleLine1}</span><br/>
            <span class="headline-gold">${e.titleLine2}</span>
          </h1>

          <!-- Supporting Text -->
          <p class="ref-hero-desc">${e.desc}</p>

          <!-- Dual CTAs -->
          <div class="ref-hero-ctas">
            <a href="${e.primaryLink}" class="ref-hero-btn-primary">
              <span>${e.primaryCta}</span>
              <span class="btn-arrow">&rarr;</span>
            </a>
            <button class="ref-hero-btn-secondary" onclick="window.openSiteVisitModal ? window.openSiteVisitModal('${e.category}') : window.location.href='tel:+919490634829'">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>${e.secondaryCta}</span>
            </button>
          </div>

          <!-- 3 Benefits Items -->
          <div class="ref-hero-benefits">
            ${e.benefits.map(e=>`
              <div class="ref-benefit-item">
                <div class="ref-benefit-icon-circle">
                  ${e.icon}
                </div>
                <div class="ref-benefit-label">
                  <strong>${e.title}</strong>
                  <span>${e.subtitle}</span>
                </div>
              </div>
            `).join(``)}
          </div>

          <!-- Decorative Tagline -->
          <div class="ref-hero-tagline-wrap">
            ${e.taglineHtml}
          </div>
        </div>

        <!-- Right Side: Property Visual with Organic Boundary -->
        <div class="ref-hero-right">
          <div class="ref-hero-visual-container">
            <img src="${e.image}" alt="${e.category}" class="ref-hero-main-img" />
            
            <!-- Cursive Image Tagline Overlay -->
            <div class="ref-hero-image-tagline">
              <span class="ref-hero-image-tagline-text">${e.imageTagline}</span>
            </div>

            <!-- Floating Info Card Overlay -->
            <div class="ref-hero-floating-card">
              <div class="ref-hero-floating-card-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <div class="ref-hero-floating-card-text">${e.floatingCardText}</div>
            </div>

            <!-- Interactive Arrow Controls Overlay matching screenshot placement -->
            <div class="ref-hero-arrows-overlay">
              <button class="ref-hero-nav-arrow prev" aria-label="Previous Slide" data-action="prev">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>
              <button class="ref-hero-nav-arrow next" aria-label="Next Slide" data-action="next">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join(``)}
        </div>

        <!-- 4 Slide Indicator Pills at Bottom -->
        <div class="ref-hero-indicators" id="ref-hero-indicators">
          ${n.map((e,t)=>`
            <button class="ref-hero-dot ${t===0?`active`:``}" data-index="${t}" aria-label="Go to slide ${t+1}"></button>
          `).join(``)}
        </div>
      </div>
    </section>
  `}function i(){window.__heroAutoplayTimer&&(clearInterval(window.__heroAutoplayTimer),window.__heroAutoplayTimer=null);let e=document.querySelectorAll(`.ref-hero-slide`),t=document.querySelectorAll(`.ref-hero-dot`),n=document.querySelectorAll(`.ref-hero-nav-arrow`),r=document.getElementById(`ref-hero-section`);if(!e.length)return;let i=0;e.forEach((e,t)=>{e.classList.contains(`active`)&&(i=t)});let a=n=>{e.forEach(e=>e.classList.remove(`active`)),t.forEach(e=>e.classList.remove(`active`)),i=(n+e.length)%e.length,e[i].classList.add(`active`),t[i]&&t[i].classList.add(`active`)},o=()=>a(i+1),s=()=>a(i-1),c=()=>{window.__heroAutoplayTimer&&(clearInterval(window.__heroAutoplayTimer),window.__heroAutoplayTimer=null)},l=()=>{c(),r&&r.matches(`:hover`)||(window.__heroAutoplayTimer=setInterval(o,4e3))},u=()=>{c(),l()};n.forEach(e=>{e.onclick=t=>{t.preventDefault(),t.stopPropagation(),e.getAttribute(`data-action`)===`prev`?s():o(),u()}}),t.forEach(e=>{e.onclick=t=>{t.preventDefault();let n=parseInt(e.getAttribute(`data-index`),10);a(n),u()}}),r&&(r.onmouseenter=()=>{c()},r.onmouseleave=()=>{l()}),l()}var a=[{id:`villas`,title:`Villas`,badgeText:`Live
Better`,desc:`Premium gated community villas designed for modern living.`,btnText:`EXPLORE VILLAS`,link:`#/villas`,image:`/images/ref/exp-villa-clean.jpg`,iconSvg:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`},{id:`openplots`,title:`Open Plots`,badgeText:`Build
Your Future`,desc:`HMDA & DTCP approved plots in fast-growing locations.`,btnText:`EXPLORE OPEN PLOTS`,link:`#/open-plots`,image:`/images/ref/exp-plots-clean.jpg`,iconSvg:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>`},{id:`apartments`,title:`Apartments`,badgeText:`More
Possibilities`,desc:`2 & 3 BHK apartments with world-class amenities.`,btnText:`EXPLORE APARTMENTS`,link:`#/apartments`,image:`/images/ref/exp-apts-clean.jpg`,iconSvg:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="9" y1="22" x2="9" y2="2"></line><line x1="8" y1="6" x2="8" y2="6.01"></line><line x1="16" y1="6" x2="16" y2="6.01"></line><line x1="8" y1="10" x2="8" y2="10.01"></line><line x1="16" y1="10" x2="16" y2="10.01"></line><line x1="8" y1="14" x2="8" y2="14.01"></line><line x1="16" y1="14" x2="16" y2="14.01"></line><line x1="8" y1="18" x2="8" y2="18.01"></line><line x1="16" y1="18" x2="16" y2="18.01"></line></svg>`},{id:`farmlands`,title:`Farm Lands`,badgeText:`A Greener
Tomorrow`,desc:`Managed farmlands for lifestyle, leisure and long-term value.`,btnText:`EXPLORE FARM LANDS`,link:`#/farmlands`,image:`/images/ref/exp-farm-clean.jpg`,iconSvg:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`}];function o(){return`
    <section class="ref-explore-section" id="explore-our-properties">
      <div class="ref-container">
        <!-- Section Header -->
        <div class="ref-section-header text-center">
          <div class="ref-eyebrow-line">
            <span class="eyebrow-rule"></span>
            <span class="eyebrow-text">WHAT WE OFFER</span>
            <span class="eyebrow-rule"></span>
          </div>
          
          <h2 class="ref-section-title">
            <span class="headline-green">Explore Our</span> <span class="headline-gold">Properties</span>
          </h2>

          <p class="ref-section-subtitle">
            Discover premium real estate opportunities across Andhra Pradesh &amp; Telangana.<br/>
            Thoughtfully selected for your lifestyle, investment and future.
          </p>
        </div>

        <!-- 4 Cards in 1 Row -->
        <div class="ref-explore-grid">
          ${a.map(e=>`
    <div class="ref-explore-card" data-category="${e.id}">
      <div class="ref-explore-img-wrap">
        <img src="${e.image}" alt="${e.title}" class="ref-explore-img" loading="lazy" />
        <span class="ref-explore-img-badge">${e.badgeText.replace(`
`,`<br/>`)}</span>
      </div>

      <!-- Overlapping Floating Circular Icon Container -->
      <div class="ref-explore-icon-bubble">
        <div class="ref-explore-icon-inner">
          ${e.iconSvg}
        </div>
      </div>

      <div class="ref-explore-card-body">
        <h3 class="ref-explore-title">${e.title}</h3>
        <p class="ref-explore-desc">${e.desc}</p>
        
        <div class="ref-explore-action-row">
          <a href="${e.link}" class="ref-explore-link">
            <span>${e.btnText}</span>
          </a>
          <a href="${e.link}" class="ref-explore-circle-btn" aria-label="${e.btnText}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `).join(``)}
        </div>

        <!-- Bottom Flourish -->
        <div class="ref-explore-bottom-flourish">
          <div class="flourish-center">
            <span class="sub-rule"></span>
            <span class="sub-text">INVEST TODAY &nbsp; GROW TOMORROW</span>
            <span class="sub-rule"></span>
          </div>
          <div class="flourish-right">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            </svg>
            <span class="ref-handwritten">Land for a Brighter Tomorrow</span>
          </div>
        </div>
      </div>
    </section>
  `}var s=[{id:`feat-villas`,category:`villas`,badge:`★ Featured`,badgeClass:`badge-gold`,name:`VR Green Villas`,location:`Kompally, Hyderabad`,type:`Villas`,typeIcon:`🏠`,spec2:`Gated Community`,spec2Icon:`👥`,spec3:`Green Living`,spec3Icon:`🍃`,price:`₹1.25 Cr*`,image:`/images/ref/feat-villa-clean.jpg`,link:`#/vr-green-villas`},{id:`feat-plots`,category:`openplots`,badge:`🔥 High Demand`,badgeClass:`badge-orange`,name:`VR Prime Meadows`,location:`Shadnagar, Hyderabad`,type:`Open Plots`,typeIcon:`🗺️`,spec2:`HMDA Approved`,spec2Icon:`🏛️`,spec3:`High Growth`,spec3Icon:`📊`,price:`₹29.9 Lakhs*`,image:`/images/ref/feat-plots-clean.jpg`,link:`#/vr-prime-meadows`},{id:`feat-apts`,category:`apartments`,badge:`🚀 New Launch`,badgeClass:`badge-teal`,name:`VR Heights`,location:`Nallagandla, Hyderabad`,type:`Apartments`,typeIcon:`🏢`,spec2:`2 & 3 BHK`,spec2Icon:`🏠`,spec3:`Modern Amenities`,spec3Icon:`🏊`,price:`₹65 Lakhs*`,image:`/images/ref/feat-apts-clean.jpg`,link:`#/vr-heights`},{id:`feat-farms`,category:`farmlands`,badge:`🌱 Invest Wise`,badgeClass:`badge-green`,name:`VR Agro Lands`,location:`Shankarpally, Hyderabad`,type:`Farm Lands`,typeIcon:`🌾`,spec2:`Managed Farmlands`,spec2Icon:`🌲`,spec3:`Long-Term Value`,spec3Icon:`📈`,price:`₹18 Lakhs*`,image:`/images/ref/feat-farm-clean.jpg`,link:`#/vr-agro-lands`}];function c(){return`
    <section class="ref-projects-section" id="featured-projects">
      <div class="ref-container">
        <!-- Section Header -->
        <div class="ref-section-header text-center">
          <div class="ref-eyebrow-line">
            <span class="eyebrow-rule"></span>
            <span class="eyebrow-text">FEATURED PROJECTS</span>
            <span class="eyebrow-rule"></span>
          </div>

          <h2 class="ref-section-title">
            <span class="headline-green">Properties That Build</span><br/>
            <span class="headline-gold">A Brighter Tomorrow</span>
          </h2>

          <p class="ref-section-subtitle">
            Discover our handpicked projects in prime locations, designed for modern living and long-term value.
          </p>
        </div>

        <!-- Filter Buttons Bar -->
        <div class="ref-projects-filter-bar">
          <button class="ref-filter-btn active" data-filter="all">All Projects</button>
          <button class="ref-filter-btn" data-filter="villas">Villas</button>
          <button class="ref-filter-btn" data-filter="openplots">Open Plots</button>
          <button class="ref-filter-btn" data-filter="apartments">Apartments</button>
          <button class="ref-filter-btn" data-filter="farmlands">Farm Lands</button>
        </div>

        <!-- Project Cards Grid with Floating Nav Arrows -->
        <div class="ref-projects-carousel-wrap">
          <button class="ref-carousel-arrow prev" id="feat-prev-btn" aria-label="Previous Projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div class="ref-projects-grid" id="ref-projects-grid">
            ${s.map((e,t)=>`
    <div class="ref-project-card" data-category="${e.category}" data-index="${t}">
      <div class="ref-project-img-wrap">
        <img src="${e.image}" alt="${e.name}" class="ref-project-img" loading="lazy" />
        <span class="ref-project-badge ${e.badgeClass}">${e.badge}</span>
      </div>

      <div class="ref-project-body">
        <h3 class="ref-project-title">${e.name}</h3>
        
        <div class="ref-project-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>${e.location}</span>
        </div>

        <div class="ref-project-specs">
          <span class="spec-tag">${e.typeIcon} ${e.type}</span>
          <span class="spec-tag">${e.spec2Icon} ${e.spec2}</span>
          <span class="spec-tag">${e.spec3Icon} ${e.spec3}</span>
        </div>

        <div class="ref-project-footer">
          <div class="ref-project-price">
            <span class="price-caption">Starting from</span>
            <span class="price-val">${e.price}</span>
          </div>

          <a href="${e.link}" class="ref-project-btn">
            <span>Explore Project</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  `).join(``)}
          </div>

          <button class="ref-carousel-arrow next" id="feat-next-btn" aria-label="Next Projects">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>


        <!-- View All Projects CTA -->
        <div class="ref-projects-cta-row">
          <a href="#/open-plots" class="ref-view-all-btn">
            <span>View All Projects</span>
            <span class="btn-arrow">&rarr;</span>
          </a>
        </div>

        <!-- Bottom Architectural Skyline Flourish -->
        <div class="ref-projects-bottom-flourish">
          <div class="flourish-left">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            </svg>
            <span class="flourish-txt">INVEST IN SPACES THAT MATTER</span>
            <span class="sub-rule"></span>
          </div>

          <div class="flourish-right">
            <img src="/images/ref/skyline-gold.png" alt="City Skyline" class="flourish-skyline" onerror="this.style.display='none'" />
            <span class="flourish-txt">BETTER PLACES &bull; BRIGHTER TOMORROWS</span>
          </div>
        </div>
      </div>
    </section>
  `}function l(){let e=document.querySelectorAll(`.ref-filter-btn`),t=document.querySelectorAll(`.ref-project-card`),n=document.getElementById(`feat-prev-btn`),r=document.getElementById(`feat-next-btn`),i=document.getElementById(`ref-projects-grid`);e.length&&(e.forEach(n=>{n.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`);let r=n.getAttribute(`data-filter`);t.forEach(e=>{r===`all`||e.getAttribute(`data-category`)===r?(e.style.display=`flex`,e.style.opacity=`1`):e.style.display=`none`})})}),n&&r&&i&&(n.addEventListener(`click`,()=>{i.scrollBy({left:-320,behavior:`smooth`})}),r.addEventListener(`click`,()=>{i.scrollBy({left:320,behavior:`smooth`})})))}function u(){return`
    <section class="ref-find-section" id="find-your-property">
      <div class="ref-container">
        <div class="ref-find-split-wrap">
          
          <!-- LEFT SIDE: Interactive Search Form -->
          <div class="ref-find-left">
            <div class="ref-find-eyebrow">
              <span class="eyebrow-text">FIND YOUR PROPERTY</span>
              <span class="eyebrow-rule"></span>
            </div>

            <h2 class="ref-find-title">
              <span class="headline-green">Let's Find a Property</span><br/>
              <span class="headline-gold">That Fits Your Future</span>
            </h2>

            <p class="ref-find-desc">
              Tell us what you're looking for. We'll help you discover the best properties that match your lifestyle, budget and goals.
            </p>

            <!-- Property Type Selector Cards -->
            <div class="ref-find-type-selector" id="find-type-selector">
              <button type="button" class="find-type-btn active" data-type="openplots">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
                  <line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line>
                </svg>
                <span>Open Plots</span>
              </button>

              <button type="button" class="find-type-btn" data-type="villas">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span>Villas</span>
              </button>

              <button type="button" class="find-type-btn" data-type="apartments">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                  <line x1="9" y1="22" x2="9" y2="2"></line>
                </svg>
                <span>Apartments</span>
              </button>

              <button type="button" class="find-type-btn" data-type="farmlands">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                </svg>
                <span>Farm Lands</span>
              </button>
            </div>

            <!-- 4 Dropdowns (2x2 Grid) -->
            <form class="ref-find-form" id="ref-find-form" onsubmit="event.preventDefault(); window.handleFindPropertySearch();">
              <div class="ref-find-fields-grid">
                <!-- Location -->
                <div class="ref-field-group">
                  <label class="field-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    <span>Preferred Location</span>
                  </label>
                  <div class="ref-select-wrap">
                    <select id="find-location" class="ref-select">
                      <option value="">Select Location</option>
                      <option value="Shadnagar">Shadnagar, Hyderabad</option>
                      <option value="Kompally">Kompally, Hyderabad</option>
                      <option value="Nallagandla">Nallagandla, Hyderabad</option>
                      <option value="Shankarpally">Shankarpally, Hyderabad</option>
                      <option value="Amaravati">Amaravati, AP</option>
                      <option value="Tirupati">Tirupati, AP</option>
                    </select>
                    <span class="select-arrow">&#9662;</span>
                  </div>
                </div>

                <!-- Budget -->
                <div class="ref-field-group">
                  <label class="field-label">
                    <span style="font-weight: 700; font-size: 0.95rem;">&#8377;</span>
                    <span>Budget</span>
                  </label>
                  <div class="ref-select-wrap">
                    <select id="find-budget" class="ref-select">
                      <option value="">Select Budget</option>
                      <option value="under30">Under ₹30 Lakhs</option>
                      <option value="30to60">₹30 Lakhs - ₹60 Lakhs</option>
                      <option value="60to1cr">₹60 Lakhs - ₹1 Crore</option>
                      <option value="above1cr">Above ₹1 Crore</option>
                    </select>
                    <span class="select-arrow">&#9662;</span>
                  </div>
                </div>

                <!-- Size / BHK -->
                <div class="ref-field-group">
                  <label class="field-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
                    <span>Size / BHK</span>
                  </label>
                  <div class="ref-select-wrap">
                    <select id="find-size" class="ref-select">
                      <option value="">Select Size / BHK</option>
                      <option value="150-200">150 - 250 Sq.Yds</option>
                      <option value="250-400">250 - 400 Sq.Yds</option>
                      <option value="2bhk">2 BHK (1100 - 1350 sq.ft)</option>
                      <option value="3bhk">3 BHK (1550 - 2100 sq.ft)</option>
                      <option value="villa">4 BHK Luxury Villa</option>
                      <option value="farmland">0.5 - 2 Acres Farm</option>
                    </select>
                    <span class="select-arrow">&#9662;</span>
                  </div>
                </div>

                <!-- Purpose -->
                <div class="ref-field-group">
                  <label class="field-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                    <span>Purpose</span>
                  </label>
                  <div class="ref-select-wrap">
                    <select id="find-purpose" class="ref-select">
                      <option value="">Home / Investment</option>
                      <option value="residential">Residential Living</option>
                      <option value="high-roi">High ROI Investment</option>
                      <option value="weekend">Weekend Retreat</option>
                      <option value="legacy">Long-term Family Asset</option>
                    </select>
                    <span class="select-arrow">&#9662;</span>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <button type="submit" class="ref-find-submit-btn">
                <span>Find My Property</span>
                <span class="btn-arrow">&rarr;</span>
              </button>
            </form>

            <!-- Tagline Line -->
            <div class="ref-find-tagline-wrap">
              <span class="sub-rule"></span>
              <span class="sub-text">SIMPLE SEARCH. BRIGHTER TOMORROWS.</span>
              <span class="sub-rule"></span>
            </div>

            <!-- 4 Benefits Row -->
            <div class="ref-find-benefits-row">
              <div class="find-benefit">
                <div class="benefit-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 11 12 14 22 4"></polyline></svg>
                </div>
                <span>Verified Properties</span>
              </div>

              <div class="find-benefit">
                <div class="benefit-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <span>Prime Locations</span>
              </div>

              <div class="find-benefit">
                <div class="benefit-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                </div>
                <span>Best Prices</span>
              </div>

              <div class="find-benefit">
                <div class="benefit-circle">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span>Expert Guidance</span>
              </div>
            </div>

          </div>

          <!-- RIGHT SIDE: Grand Entrance Property Visual & Stats -->
          <div class="ref-find-right">
            <div class="ref-find-visual-container">
              <img src="/images/ref/find-prop.jpg" alt="VR Real Estates Entrance" class="ref-find-img" />
              
              <!-- Floating Glass Card -->
              <div class="ref-find-glass-badge">
                <div class="badge-leaf">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>
                </div>
                <div class="badge-txt">
                  <strong>More than Properties</strong>
                  <span>We Build Better Lives</span>
                </div>
              </div>
            </div>

            <!-- Bottom Statistics & Cursive Element -->
            <div class="ref-find-stats-row">
              <div class="stat-col">
                <div class="stat-num">10+</div>
                <div class="stat-label">Projects</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-col">
                <div class="stat-num">500+</div>
                <div class="stat-label">Happy Families</div>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-col">
                <div class="stat-num">3+</div>
                <div class="stat-label">Cities</div>
              </div>
              <div class="stat-cursive">
                <span class="ref-handwritten">Invest Today<br/>Live Better Tomorrow</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function d(){let e=document.querySelectorAll(`.find-type-btn`),t=`openplots`;e.forEach(n=>{n.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),n.classList.add(`active`),t=n.getAttribute(`data-type`)})}),window.handleFindPropertySearch=()=>{let e=document.getElementById(`find-location`)?.value||``,n=document.getElementById(`find-budget`)?.value||``;document.getElementById(`find-size`)?.value,document.getElementById(`find-purpose`)?.value,t===`openplots`?window.location.hash=`#/open-plots`:window.openSiteVisitModal?window.openSiteVisitModal(`Custom Match: ${t} in ${e||`Anywhere`} (Budget: ${n||`Flexible`})`):alert(`Searching properties for ${t} in ${e||`AP & Telangana`}...`)}}function f(){return`
    <section class="ref-final-cta-section" id="final-cta">
      <div class="ref-container">
        <div class="ref-cta-banner-wrapper">
          <!-- Background illuminated modern villa visual -->
          <div class="ref-cta-bg-image">
            <img src="/images/ref/cta-villa-pure.jpg" alt="Luxury Villa Sunset" class="cta-bg-img" />
            <!-- Cursive text in sky -->
            <div class="ref-cta-cursive-sky">
              <span class="ref-handwritten">Your Next Chapter<br/>Starts Here</span>
            </div>
          </div>

          <!-- Rounded Off-White/Cream Panel Overlapping on Left -->
          <div class="ref-cta-panel">
            <div class="ref-cta-eyebrow">
              <span class="eyebrow-text">READY TO FIND YOUR PERFECT PROPERTY?</span>
              <span class="eyebrow-rule"></span>
            </div>

            <h2 class="ref-cta-headline">
              <span class="headline-green">Let's Build Your</span><br/>
              <span class="headline-gold">Brighter Tomorrow</span>
            </h2>

            <p class="ref-cta-desc">
              Get expert guidance, personalised recommendations, and exclusive property options &mdash; all in one place.
            </p>

            <!-- Dual CTA Buttons -->
            <div class="ref-cta-buttons-row">
              <button class="ref-cta-btn-enquire" onclick="window.openSiteVisitModal ? window.openSiteVisitModal('Final CTA') : alert('Enquiry Modal')">
                <span>Enquire Now</span>
                <span class="btn-arrow">&rarr;</span>
              </button>

              <a href="tel:+919490634829" class="ref-cta-btn-call">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Call Us Now</span>
              </a>
            </div>

            <!-- 3 Benefit Items -->
            <div class="ref-cta-benefits-row">
              <div class="cta-benefit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                <span>Free Consultation</span>
              </div>

              <div class="cta-benefit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>Expert Guidance</span>
              </div>

              <div class="cta-benefit">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                <span>No Hidden Costs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `}function p(){return`
    <footer class="ref-footer-section" id="site-footer">
      <div class="ref-container">
        <!-- 5-Column Grid -->
        <div class="ref-footer-main-grid">
          
          <!-- Column 1: Brand Info & Socials -->
          <div class="ref-footer-col brand-col">
            <a href="#/" class="footer-brand-wrap">
              <img src="/images/vr-logo.png" alt="VR Real Estates" class="footer-brand-logo" onerror="this.style.display='none'" />
              <div class="footer-brand-heading">
                <span class="brand-title">VR REAL ESTATES</span>
                <span class="brand-sub">LAND TODAY &bull; A BRIGHTER TOMORROW</span>
              </div>
            </a>
            
            <p class="footer-brand-desc">
              At VR Real Estates, we believe property is more than just land or a home &mdash; it's the foundation for a brighter tomorrow. We bring you verified properties, expert guidance and complete support, helping you make confident real estate decisions.
            </p>

            <div class="footer-social-icons">
              <a href="#" class="social-circle" title="Facebook" aria-label="Facebook">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="social-circle" title="Instagram" aria-label="Instagram">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" class="social-circle" title="YouTube" aria-label="YouTube">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="#" class="social-circle" title="LinkedIn" aria-label="LinkedIn">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="ref-footer-col">
            <h4 class="ref-footer-heading">Quick Links</h4>
            <ul class="ref-footer-links">
              <li><a href="#/">Home</a></li>
              <li><a href="#/projects">Projects</a></li>
              <li><a href="#/open-plots">Properties</a></li>
              <li><a href="#/locations">Locations</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/contact">Contact Us</a></li>
              <li><a href="#/resources">Blog</a></li>
            </ul>
          </div>

          <!-- Column 3: Our Properties -->
          <div class="ref-footer-col">
            <h4 class="ref-footer-heading">Our Properties</h4>
            <ul class="ref-footer-links">
              <li><a href="#/open-plots">Open Plots</a></li>
              <li><a href="#/villas">Villas</a></li>
              <li><a href="#/apartments">Apartments</a></li>
              <li><a href="#/farmlands">Farm Lands</a></li>
              <li><a href="#/commercial">Commercial Spaces</a></li>
              <li><a href="#/villas">Luxury Properties</a></li>
            </ul>
          </div>

          <!-- Column 4: Support -->
          <div class="ref-footer-col">
            <h4 class="ref-footer-heading">Support</h4>
            <ul class="ref-footer-links">
              <li><a href="#/faq">FAQs</a></li>
              <li><a href="javascript:void(0)" onclick="window.openSiteVisitModal ? window.openSiteVisitModal('Site Visit Request') : null">Site Visit</a></li>
              <li><a href="#/booking">Booking Process</a></li>
              <li><a href="#/payment">Payment Options</a></li>
              <li><a href="#/terms">Terms &amp; Conditions</a></li>
              <li><a href="#/privacy">Privacy Policy</a></li>
              <li><a href="#/refund">Refund Policy</a></li>
            </ul>
          </div>

          <!-- Column 5: Get in Touch -->
          <div class="ref-footer-col">
            <h4 class="ref-footer-heading">Get in Touch</h4>
            <div class="footer-contact-details">
              <div class="contact-line">
                <svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C59B3F" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <div class="contact-text">
                  <strong>VR Real Estates</strong><br/>
                  <span>Tirupati, Andhra Pradesh - 517501<br/>India</span>
                </div>
              </div>

              <div class="contact-line">
                <svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C59B3F" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <div class="contact-text">
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </div>

              <div class="contact-line">
                <svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C59B3F" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <div class="contact-text">
                  <a href="mailto:info@vrrealestates.com">info@vrrealestates.com</a>
                </div>
              </div>

              <div class="contact-line">
                <svg class="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C59B3F" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <div class="contact-text">
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span><br/>
                  <span>Sunday: 10:00 AM - 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Architectural Skyline SVG & Gold Line Divider -->
        <div class="ref-footer-skyline-row">
          <div class="footer-skyline-svg">
            <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
              <!-- City skyline silhouette -->
              <g opacity="0.25" fill="#C59B3F">
                <!-- Left buildings -->
                <rect x="20" y="80" width="30" height="40"/>
                <rect x="55" y="60" width="20" height="60"/>
                <rect x="80" y="70" width="25" height="50"/>
                <rect x="110" y="45" width="35" height="75"/>
                <rect x="150" y="55" width="22" height="65"/>
                <rect x="177" y="40" width="28" height="80"/>
                <rect x="210" y="65" width="18" height="55"/>
                <rect x="233" y="50" width="30" height="70"/>
                <!-- Trees -->
                <ellipse cx="275" cy="90" rx="14" ry="10"/>
                <rect x="272" y="100" width="6" height="20"/>
                <ellipse cx="305" cy="85" rx="10" ry="8"/>
                <rect x="302" y="93" width="6" height="27"/>
                <!-- Center buildings -->
                <rect x="330" y="30" width="40" height="90"/>
                <rect x="375" y="50" width="25" height="70"/>
                <rect x="405" y="20" width="50" height="100"/>
                <rect x="460" y="45" width="30" height="75"/>
                <rect x="495" y="35" width="45" height="85"/>
                <rect x="545" y="55" width="22" height="65"/>
                <!-- Antenna on center tall building -->
                <rect x="426" y="10" width="4" height="20"/>
                <!-- More buildings right -->
                <rect x="575" y="40" width="35" height="80"/>
                <rect x="615" y="60" width="25" height="60"/>
                <rect x="645" y="30" width="40" height="90"/>
                <rect x="690" y="50" width="28" height="70"/>
                <rect x="723" y="65" width="20" height="55"/>
                <!-- Trees right -->
                <ellipse cx="755" cy="88" rx="12" ry="9"/>
                <rect x="752" y="97" width="6" height="23"/>
                <ellipse cx="780" cy="83" rx="10" ry="8"/>
                <rect x="777" y="91" width="6" height="29"/>
                <!-- Far right buildings -->
                <rect x="800" y="55" width="30" height="65"/>
                <rect x="835" y="45" width="22" height="75"/>
                <rect x="862" y="70" width="28" height="50"/>
                <rect x="895" y="40" width="35" height="80"/>
                <rect x="935" y="60" width="20" height="60"/>
                <rect x="960" y="75" width="25" height="45"/>
                <rect x="990" y="85" width="18" height="35"/>
              </g>
              <!-- Ground line -->
              <line x1="0" y1="120" x2="1200" y2="120" stroke="#C59B3F" stroke-width="0.5" opacity="0.3"/>
            </svg>
          </div>
          <div class="footer-tagline-bar">
            <span class="sub-rule"></span>
            <span class="sub-text">LAND TODAY &bull; A BRIGHTER TOMORROW</span>
            <span class="sub-rule"></span>
          </div>
        </div>

        <!-- Copyright & Bottom Handwritten Script -->
        <div class="ref-footer-bottom-bar">
          <div class="footer-copyright">
            &copy; 2026 VR Real Estates. All rights reserved.
          </div>

          <div class="footer-bottom-right">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C59B3F" stroke-width="1.8">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
            </svg>
            <span class="ref-handwritten">Invest Today<br/>Live Better Tomorrow</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Floating WhatsApp Button -->
    <a href="https://wa.me/919876543210?text=Hi%20VR%20Real%20Estates,%20I%20am%20interested%20in%20exploring%20properties." target="_blank" rel="noopener" class="ref-floating-whatsapp" id="ref-floating-whatsapp" title="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
    </a>

    <!-- Scroll to Top Button -->
    <button class="ref-scroll-top-btn" id="ref-scroll-top-btn" aria-label="Scroll to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `}function m(){let e=document.getElementById(`ref-scroll-top-btn`);if(!e)return;let t=()=>{window.scrollY>300?e.classList.add(`visible`):e.classList.remove(`visible`)};e.addEventListener(`click`,()=>{window.scrollTo({top:0,behavior:`smooth`})}),window.removeEventListener(`scroll`,t),window.addEventListener(`scroll`,t,{passive:!0})}function h(){return{html:`
    <div class="page-home">
      ${e({currentPath:`#/`})}
      <main>
        ${r()}
        ${o()}
        ${c()}
        ${u()}
        ${f()}
      </main>
      ${p()}
    </div>
  `,init:()=>{t(),i(),l(),d(),m()}}}var g=[{id:`amodha`,title:`Amodha`,tagline:`The Joy of Living`,location:`Burgula`,state:`Telangana`,stateType:`telangana`,image:`/images/plot-amodha-clean.jpg`,logo:`/images/logo-amodha.png`,link:`#/amodha`,type:`Open Plot`,status:`Available`,price:`Price on Request`,approval:`DTCP / HMDA Approved`,size:`150 - 400 Sq. Yds`,facing:`East / West / North`,desc:`Amodha is a premium villa plots community located strategically at Burgula near Shadnagar on the fast-growing Bangalore Highway corridor. Enjoy world-class amenities, blacktop roads, underground drainage, and lush greenery.`},{id:`fortune-avenue`,title:`Fortune Avenue`,tagline:`Luxury Villa Plots @ Shadnagar`,location:`Shadnagar`,state:`Telangana`,stateType:`telangana`,image:`/images/plot-fortune-avenue.jpg`,logo:`/images/logo-fortune-avenue.png`,link:`#/property/fortune-avenue`,type:`Open Plot`,status:`Available`,price:`Price on Request`,approval:`HMDA Approved`,size:`167 - 350 Sq. Yds`,facing:`East / West / North`,desc:`Fortune Avenue offers prime residential villa plots right near Shadnagar town center with quick access to the Hyderabad-Bangalore Highway and upcoming Regional Ring Road.`},{id:`sez-city`,title:`SEZ CITY`,tagline:`Commercial & Residential Plots`,location:`Balanagar (Shadnagar)`,state:`Telangana`,stateType:`telangana`,image:`/images/plot-sez-city.jpg`,logo:`/images/logo-sez-city.png`,link:`#/property/sez-city`,type:`Open Plot`,status:`Available`,price:`Price on Request`,approval:`DTCP Approved`,size:`200 - 500 Sq. Yds`,facing:`All Facings Available`,desc:`SEZ City is located close to major Special Economic Zones and manufacturing corridors in Balanagar, providing high growth potential for savvy property investors.`},{id:`shadnagar-heights`,title:`Shadnagar Heights`,tagline:`Eeshanya's Shadnagar Heights`,location:`Mogiligidda`,state:`Telangana`,stateType:`telangana`,image:`/images/plot-shadnagar-heights.jpg`,logo:`/images/logo-shadnagar-heights.png`,link:`#/property/shadnagar-heights`,type:`Open Plot`,status:`Available`,price:`Price on Request`,approval:`HMDA & DTCP Approved`,size:`150 - 300 Sq. Yds`,facing:`East / West`,desc:`Nestled in a peaceful, serene green location at Mogiligidda, Shadnagar Heights is an idyllic gated development with club facilities and high capital appreciation prospects.`},{id:`vrindavan`,title:`Vrindavan`,tagline:`The Harmony Enclave`,location:`Shadnagar Town`,state:`Telangana`,stateType:`telangana`,image:`/images/plot-vrindavan.jpg`,logo:`/images/logo-vrindavan.png`,link:`#/property/vrindavan`,type:`Open Plot`,status:`Available`,price:`Price on Request`,approval:`HMDA Approved`,size:`180 - 450 Sq. Yds`,facing:`East / North / South`,desc:`Vrindavan The Harmony Enclave offers ready-to-construct open plots right within Shadnagar Municipality limits, surrounded by established schools, hospitals, and transit.`},{id:`eeshanya-county`,title:`Eeshanya County`,tagline:`Welcome to a New Lifestyle`,location:`Raikal, Shadnagar`,state:`Telangana`,stateType:`telangana`,image:`/images/plot-eeshanya-county.jpg`,logo:`/images/logo-eeshanya-county.png`,link:`#/property/eeshanya-county`,type:`Open Plot`,status:`Available`,price:`Price on Request`,approval:`DTCP Approved Layout`,size:`150 - 350 Sq. Yds`,facing:`East / West`,desc:`Eeshanya County at Raikal is a master-planned plotted layout on the Bangalore Expressway axis, featuring grand arch entrance, avenue plantation, and crystal clear titles.`}];function _(){let n=g.map(e=>`
    <a href="${e.link}" class="plot-item-card" data-state="${e.stateType}">
      <div class="plot-card-media">
        <img src="${e.image}" alt="${e.title}" loading="lazy" />
      </div>
      <div class="plot-card-footer">
        <div class="plot-brand-box">
          <img src="${e.logo}" alt="${e.title} logo" />
        </div>
        <div class="plot-info-box">
          <h3 class="plot-card-title">${e.title}</h3>
          <span class="plot-card-location">&#128205; ${e.location}</span>
        </div>
      </div>
    </a>
  `).join(``);return{html:`
    <div class="page-open-plots">
      ${e({currentPath:`#/open-plots`,isOpenPlots:!0})}
      
      <!-- Banner Title -->
      <div class="page-title-banner">
        <div class="container">
          <h1 class="page-title-heading">OPEN PLOTS PROPERTIES</h1>
        </div>
      </div>

      <div class="container">
        <!-- Shadnagar Callout Card -->
        <div class="plots-callout-wrap">
          <div class="shadnagar-callout-card">
            <div class="callout-content-left">
              <h2 class="callout-title">
                <span>&#128205;</span> Looking for plots in Shadnagar?
              </h2>
              <p class="callout-desc">
                HMDA &amp; DTCP approved projects on the Bangalore Highway corridor &mdash; Eeshanya County, Shadnagar Heights, Amodha &amp; more
              </p>
            </div>
            <a href="#/open-plots?region=shadnagar" class="callout-btn" id="view-shadnagar-btn">
              View Shadnagar Plots &rarr;
            </a>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-tabs-row">
          <button class="filter-tab-btn all active" data-filter="all">ALL PROPERTIES</button>
          <button class="filter-tab-btn telangana" data-filter="telangana">TELANGANA</button>
          <button class="filter-tab-btn ap" data-filter="ap">ANDHRA PRADESH</button>
        </div>

        <!-- Plots Grid -->
        <div class="plots-grid" id="plots-container">
          ${n}
        </div>
      </div>

      ${p()}
    </div>
  `,init:()=>{t(),m();let e=document.querySelectorAll(`.filter-tab-btn`),n=document.querySelectorAll(`.plot-item-card`);e.forEach(t=>{t.addEventListener(`click`,()=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`);let r=t.getAttribute(`data-filter`);n.forEach(e=>{let t=e.getAttribute(`data-state`);r===`all`||t===r?e.style.display=`flex`:e.style.display=`none`})})})}}}function v(e){let t=document.getElementById(`toast-container`);if(!t)return;let n=document.createElement(`div`);n.className=`toast`,n.innerHTML=`
    <span style="color: #10b981;">&#10004;</span>
    <span>${e}</span>
  `,t.appendChild(n),setTimeout(()=>{n.style.opacity=`0`,n.style.transform=`translateY(-10px)`,n.style.transition=`all 0.3s ease`,setTimeout(()=>n.remove(),300)},3500)}function y(e=`Property`){let t=document.getElementById(`modal-container`);if(!t)return;t.innerHTML=`
    <div class="modal-overlay" id="site-visit-modal-overlay">
      <div class="modal-card">
        <button class="modal-close-btn" onclick="window.closeModal()">&times;</button>
        <h3 class="modal-title">Book Free Site Visit</h3>
        <p class="modal-subtitle">Schedule a guided site visit for <strong>${e}</strong>. We arrange free transport from pickup points.</p>
        
        <form id="site-visit-form" class="enquiry-form-body">
          <div class="form-group">
            <input type="text" id="modal-name" placeholder="Your Name *" required />
          </div>
          <div class="form-group">
            <input type="tel" id="modal-phone" placeholder="Mobile Number *" required />
          </div>
          <div class="form-group">
            <select id="modal-time-slot" required>
              <option value="" disabled selected>Preferred Visit Day</option>
              <option value="This Saturday">This Saturday</option>
              <option value="This Sunday">This Sunday</option>
              <option value="Next Weekend">Next Weekend</option>
              <option value="Weekday by Appointment">Weekday by Appointment</option>
            </select>
          </div>
          <div class="form-group">
            <select id="modal-pickup">
              <option value="Self Drive">Self Vehicle (Meet at Site)</option>
              <option value="Cab Pickup">Request Company Pickup (Hyderabad)</option>
            </select>
          </div>
          <button type="submit" class="btn-send-enquiry">
            Confirm Free Site Visit
          </button>
        </form>
      </div>
    </div>
  `;let n=document.getElementById(`site-visit-modal-overlay`);n.addEventListener(`click`,e=>{e.target===n&&window.closeModal()}),document.getElementById(`site-visit-form`).addEventListener(`submit`,e=>{e.preventDefault();let t=document.getElementById(`modal-name`).value;window.closeModal(),v(`Thank you, ${t}! Your site visit request has been scheduled.`)})}function b(e=`Amodha`){let t=document.getElementById(`modal-container`);if(!t)return;let n=window.location.href;t.innerHTML=`
    <div class="modal-overlay" id="share-modal-overlay">
      <div class="modal-card">
        <button class="modal-close-btn" onclick="window.closeModal()">&times;</button>
        <h3 class="modal-title">Share Property</h3>
        <p class="modal-subtitle">Share <strong>${e}</strong> with friends or family.</p>
        
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
          <input type="text" value="${n}" readonly id="share-link-input" style="flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px;" />
          <button class="callout-btn" onclick="window.copyShareLink()">Copy</button>
        </div>

        <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this property: `+e+` - `+n)}" target="_blank" class="btn-whatsapp-enquiry" style="text-decoration: none;">
          Share via WhatsApp
        </a>
      </div>
    </div>
  `;let r=document.getElementById(`share-modal-overlay`);r.addEventListener(`click`,e=>{e.target===r&&window.closeModal()})}window.closeModal=function(){let e=document.getElementById(`modal-container`);e&&(e.innerHTML=``)},window.openSiteVisitModal=y,window.openShareModal=b,window.copyShareLink=function(){let e=document.getElementById(`share-link-input`);e&&(e.select(),navigator.clipboard.writeText(e.value),v(`Link copied to clipboard!`))};function x(n=`amodha`){let r=g.find(e=>e.id===n)||g[0];return{html:`
    <div class="page-property-detail">
      ${e({currentPath:`#/amodha`,isDetail:!0,backUrl:`#/open-plots`})}

      <div class="detail-page-wrap">
        <div class="container">
          <!-- Location Line -->
          <div class="detail-location-bar">
            <span>&#128205;</span>
            <span>${r.location}, ${r.state}</span>
          </div>

          <!-- Main Layout Grid -->
          <div class="detail-layout-grid">
            <!-- Left Column: Media, Details, Specs -->
            <div class="detail-main-col">
              <!-- Hero Photo Frame with Badges -->
              <div class="detail-hero-frame">
                <img src="${r.image}" alt="${r.title}" id="detail-main-image" />
                <div class="detail-badge-top-left">${r.type}</div>
                <div class="detail-badge-top-right">&#10004; ${r.status}</div>
                <button class="detail-badge-bottom-right" onclick="window.openShareModal('${r.title}')">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                  </svg>
                  Share
                </button>
              </div>

              <!-- Price & Enquire Row -->
              <div class="detail-price-row">
                <div class="detail-price-text">${r.price}</div>
                <button class="detail-enquire-btn" id="btn-scroll-enquiry">
                  <span>&#128197;</span> Enquire Now
                </button>
              </div>

              <!-- Detail Tabs -->
              <div class="detail-tabs-nav">
                <button class="detail-tab-pill active">Overview</button>
                <button class="detail-tab-pill" id="tab-enquire-btn">Enquire</button>
              </div>

              <!-- Blue Want to see in person card -->
              <div class="detail-site-visit-card">
                <div class="visit-card-left">
                  <h3>Want to see this property in person?</h3>
                  <p>Location చూడండి, complete details తెలుసుకోండి, తర్వాతే మీ decision తీసుకోండి.</p>
                </div>
                <button class="visit-card-btn" onclick="window.openSiteVisitModal('${r.title}')">
                  <span>&#128197;</span> Book Free Site Visit
                </button>
              </div>

              <!-- Property Description -->
              <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
                <h3 style="font-family: var(--font-heading); font-size: 1.25rem; font-weight: 700; color: #1e293b; margin-bottom: 12px;">About ${r.title}</h3>
                <p style="color: #4b5563; line-height: 1.7;">${r.desc}</p>
              </div>

              <!-- Property Details / Specifications Table -->
              <div class="detail-specs-box">
                <div class="detail-specs-header">Property Details</div>
                <div class="detail-specs-grid">
                  <div class="spec-item">
                    <span class="spec-label"><span>&#127968;</span> Property Type</span>
                    <span class="spec-value">${r.type}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#128205;</span> Location</span>
                    <span class="spec-value">${r.location}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#127963;</span> State</span>
                    <span class="spec-value">${r.state}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#128220;</span> Approval</span>
                    <span class="spec-value">${r.approval}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#128207;</span> Plot/Unit Size</span>
                    <span class="spec-value">${r.size}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#128176;</span> Starting Price</span>
                    <span class="spec-value">${r.price}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#129517;</span> Facing</span>
                    <span class="spec-value">${r.facing}</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label"><span>&#9989;</span> Status</span>
                    <span class="spec-value">${r.status}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column: Sticky Enquiry Form -->
            <div class="enquiry-card-sidebar" id="enquiry-form-card">
              <h3 class="enquiry-heading">Send an enquiry for this property</h3>
              <p class="enquiry-telugu-note">ముందు Location చూడండి... నచ్చితేనే Decision తీసుకోండి.</p>

              <form id="property-detail-enquiry-form" class="enquiry-form-body">
                <div class="form-group">
                  <input type="text" id="enquiry-name" placeholder="Your Name *" required />
                </div>
                <div class="form-group">
                  <input type="tel" id="enquiry-mobile" placeholder="Mobile Number *" required />
                </div>
                <div class="form-group">
                  <select id="enquiry-budget" required>
                    <option value="" disabled selected>Budget Range</option>
                    <option value="Below ₹20 Lakhs">Below ₹20 Lakhs</option>
                    <option value="₹20 Lakhs - ₹50 Lakhs">₹20 Lakhs - ₹50 Lakhs</option>
                    <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                    <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                  </select>
                </div>
                <div class="form-group">
                  <select id="enquiry-timeline" required>
                    <option value="" disabled selected>Purchase Timeline</option>
                    <option value="Immediate (Within 15 days)">Immediate (Within 15 days)</option>
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="Planning / Exploring">Planning / Exploring</option>
                  </select>
                </div>

                <button type="submit" class="btn-send-enquiry">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  SEND ENQUIRY
                </button>

                <a href="https://wa.me/919876543210?text=Hi%20VR%20Real%20Estates,%20I%20am%20interested%20in%20${encodeURIComponent(r.title+` at `+r.location)}" target="_blank" rel="noopener" class="btn-whatsapp-enquiry" style="text-decoration: none;">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  WHATSAPP NOW
                </a>

                <div class="enquiry-privacy-note">
                  <span>&#128274;</span>
                  <span>Your details are used only to respond to this property enquiry.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      ${p()}
    </div>
  `,init:()=>{t(),m();let e=document.getElementById(`property-detail-enquiry-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`enquiry-name`).value;e.reset(),v(`Thank you, ${n}! Your enquiry for ${r.title} has been received. Our team will contact you shortly.`)});let n=document.getElementById(`btn-scroll-enquiry`),i=document.getElementById(`tab-enquire-btn`),a=document.getElementById(`enquiry-form-card`),o=()=>{if(a){a.scrollIntoView({behavior:`smooth`,block:`center`});let e=document.getElementById(`enquiry-name`);e&&e.focus()}};n&&n.addEventListener(`click`,o),i&&i.addEventListener(`click`,o)}}}var S={"vr-green-meadows":{id:`vr-green-meadows`,name:`VR Green Meadows`,category:`Open Plots`,categoryLink:`#/open-plots`,categorySlug:`open-plots`,tagline:`Premium open plots in Shadnagar, Hyderabad`,subtitle:`A perfect blend of nature, connectivity and modern living.`,priceBadge:`₹29.9 Lakhs onwards*`,location:`Shadnagar, Hyderabad`,badges:[{text:`HMDA Approved`,icon:`check`},{text:`RERA Registered`,icon:`check`},{text:`Gated Community`,icon:`check`}],scriptCallout:`Invest Today Live Better Tomorrow`,stats:[{label:`Acres`,value:`50`,icon:`land`},{label:`Plots`,value:`350`,icon:`grid`},{label:`Parks & Greenery`,value:`Parks & Greenery`,isText:!0,icon:`tree`},{label:`Clubhouse`,value:`Clubhouse`,isText:!0,icon:`clubhouse`},{label:`Wide Roads`,value:`Wide Roads`,isText:!0,icon:`road`},{label:`Children's Play Area`,value:`Children's Play Area`,isText:!0,icon:`play`}],tabs:[{id:`master-plan`,label:`Master Plan`,active:!0},{id:`project-overview`,label:`Project Overview`},{id:`amenities`,label:`Amenities`},{id:`location-connectivity`,label:`Location & Connectivity`},{id:`gallery`,label:`Gallery`},{id:`brochure`,label:`Brochure`}],hasMasterPlan:!0,plots:[{id:`P01`,num:`P01`,mapLabel:`P01`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Near North Arch`,x:194,y:72,w:52,h:56},{id:`P02`,num:`P02`,mapLabel:`P02`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`sold`,approval:`HMDA Approved`,location:`North Avenue`,x:252,y:72,w:52,h:56},{id:`P03`,num:`P03`,mapLabel:`P03`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`North Avenue`,x:310,y:72,w:52,h:56},{id:`P04`,num:`P04`,mapLabel:`P04`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`North Avenue`,x:368,y:72,w:52,h:56},{id:`P05`,num:`P05`,mapLabel:`P05`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`North Avenue`,x:426,y:72,w:52,h:56},{id:`P06`,num:`P06`,mapLabel:`P06`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`North Avenue`,x:484,y:72,w:52,h:56},{id:`P07`,num:`P07`,mapLabel:`P07`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`North Avenue`,x:542,y:72,w:52,h:56},{id:`P08`,num:`P08`,mapLabel:`P08`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`East Boundary`,x:600,y:72,w:52,h:56},{id:`P09`,num:`P09`,mapLabel:`P09`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Park`,x:194,y:138,w:52,h:54},{id:`P10`,num:`P10`,mapLabel:`P10`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Park`,x:252,y:138,w:52,h:54},{id:`P11`,num:`P11`,mapLabel:`P11`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Sector`,x:310,y:138,w:52,h:54},{id:`P12`,num:`P12`,mapLabel:`P12`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Sector`,x:368,y:138,w:52,h:54},{id:`P13`,num:`P13`,mapLabel:`P13`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Sector`,x:426,y:138,w:52,h:54},{id:`P14`,num:`P14`,mapLabel:`P14`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Sector`,x:484,y:138,w:52,h:54},{id:`P15`,num:`P15`,mapLabel:`P15`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Sector`,x:542,y:138,w:52,h:54},{id:`P16`,num:`P16`,mapLabel:`P16`,size:180,dim:`30 × 54 ft`,price:`₹28,80,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`East Boundary`,x:600,y:138,w:52,h:54},{id:`P17`,num:`P17`,mapLabel:`P17`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Clubhouse View`,x:194,y:204,w:52,h:56},{id:`P18`,num:`P118`,mapLabel:`P18`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Park`,x:252,y:204,w:52,h:56,isDefaultSelected:!0},{id:`P19`,num:`P19`,mapLabel:`P19`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`reserved`,approval:`HMDA Approved`,location:`Central Boulevard`,x:310,y:204,w:52,h:56},{id:`P20`,num:`P20`,mapLabel:`P20`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`reserved`,approval:`HMDA Approved`,location:`Central Boulevard`,x:368,y:204,w:52,h:56},{id:`P21`,num:`P21`,mapLabel:`P21`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Boulevard`,x:426,y:204,w:52,h:56},{id:`P22`,num:`P22`,mapLabel:`P22`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Boulevard`,x:484,y:204,w:52,h:56},{id:`P23`,num:`P23`,mapLabel:`P23`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Central Boulevard`,x:542,y:204,w:52,h:56},{id:`P24`,num:`P24`,mapLabel:`P24`,size:200,dim:`30 × 60 ft`,price:`₹32,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`sold`,approval:`HMDA Approved`,location:`East Boulevard`,x:600,y:204,w:52,h:56},{id:`P25`,num:`P25`,mapLabel:`P25`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Clubhouse`,x:194,y:274,w:52,h:54},{id:`P26`,num:`P26`,mapLabel:`P26`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Clubhouse`,x:252,y:274,w:52,h:54},{id:`P27`,num:`P27`,mapLabel:`P27`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Park View`,x:310,y:274,w:52,h:54},{id:`P28`,num:`P28`,mapLabel:`P28`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`North`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`Park View`,x:368,y:274,w:52,h:54},{id:`P29`,num:`P29`,mapLabel:`P29`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`South Sector`,x:426,y:274,w:52,h:54},{id:`P30`,num:`P30`,mapLabel:`P30`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`South Sector`,x:484,y:274,w:52,h:54},{id:`P31`,num:`P31`,mapLabel:`P31`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`sold`,approval:`HMDA Approved`,location:`South Sector`,x:542,y:274,w:52,h:54},{id:`P32`,num:`P32`,mapLabel:`P32`,size:220,dim:`33 × 60 ft`,price:`₹35,20,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`South`,road:`30 ft`,status:`available`,approval:`HMDA Approved`,location:`East Boundary`,x:600,y:274,w:52,h:54},{id:`P33`,num:`P33`,mapLabel:`P33`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Entrance`,x:194,y:348,w:52,h:56},{id:`P34`,num:`P34`,mapLabel:`P34`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`Near Entrance`,x:252,y:348,w:52,h:56},{id:`P35`,num:`P35`,mapLabel:`P35`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`South Avenue`,x:310,y:348,w:52,h:56},{id:`P36`,num:`P36`,mapLabel:`P36`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`East`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`South Avenue`,x:368,y:348,w:52,h:56},{id:`P37`,num:`P37`,mapLabel:`P37`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`South Avenue`,x:426,y:348,w:52,h:56},{id:`P38`,num:`P38`,mapLabel:`P38`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`South Avenue`,x:484,y:348,w:52,h:56},{id:`P39`,num:`P39`,mapLabel:`P39`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`South Avenue`,x:542,y:348,w:52,h:56},{id:`P40`,num:`P40`,mapLabel:`P40`,size:250,dim:`35 × 64 ft`,price:`₹40,00,000`,rate:`₹16,00,000 / Sq.Yd`,facing:`West`,road:`40 ft`,status:`available`,approval:`HMDA Approved`,location:`South Avenue`,x:600,y:348,w:52,h:56}],highlights:[{title:`HMDA Approved Layout`,icon:`shield-check`},{title:`Gated Community`,icon:`gate`},{title:`Grand Entrance Arch`,icon:`arch`},{title:`Wide 40 & 60 ft Blacktop Roads`,icon:`road-wide`},{title:`Parks & Green Spaces`,icon:`tree-park`},{title:`Clubhouse`,icon:`club-house`},{title:`Children's Play Area`,icon:`play-area`},{title:`Gym & Fitness Area`,icon:`dumbbell`},{title:`Underground Utilities`,icon:`pipe`},{title:`Avenue Plantation`,icon:`leaf-row`}],advantages:[{title:`Prime Location with Excellent Connectivity`,icon:`pin-star`},{title:`Clean & Green Environment`,icon:`leaf`},{title:`Well Planned Layout`,icon:`compass-grid`},{title:`Ready for Construction`,icon:`doc-check`},{title:`High Appreciation Potential`,icon:`chart-up`},{title:`Safe & Secure Community`,icon:`shield-lock`},{title:`Ideal for Investment or Dream Home`,icon:`home-heart`}],connectivity:{distances:[{destination:`Rajiv Gandhi International Airport`,distance:`25 km`,time:`30 mins`,icon:`plane`},{destination:`Shadnagar Bus Stand`,distance:`8 km`,time:`15 mins`,icon:`bus`},{destination:`Shadnagar Town`,distance:`8 km`,time:`15 mins`,icon:`building`},{destination:`Outer Ring Road (ORR)`,distance:`12 km`,time:`20 mins`,icon:`road`},{destination:`NH-44`,distance:`8 km`,time:`15 mins`,icon:`road`},{destination:`Kothur`,distance:`10 km`,time:`20 mins`,icon:`building`},{destination:`TSPA Junction`,distance:`18 km`,time:`25 mins`,icon:`road`},{destination:`Hospitals`,distance:`10 – 20 km`,time:`15 mins`,icon:`hospital`},{destination:`Schools & Colleges`,distance:`5 – 15 km`,time:`10 mins`,icon:`school`},{destination:`Shopping & Malls`,distance:`10 – 20 km`,time:`20 mins`,icon:`shopping`}]},gallery:{featured:{title:`VR Green Meadows Grand Entrance Arch`,img:`/images/journey/gallery_entrance.jpg`},thumbnails:[{title:`Clubhouse`,img:`/images/journey/gallery_clubhouse.jpg`},{title:`Park & Greenery`,img:`/images/journey/gallery_park.jpg`},{title:`Children's Play Area`,img:`/images/journey/gallery_play.jpg`},{title:`Internal Roads`,img:`/images/journey/gallery_roads.jpg`}]},cta:{headline:`Your Future Begins Here`,subtitle:`Invest in VR Green Meadows and be part of a well-planned, greener and brighter tomorrow.`,btnText:`Book a Site Visit`},footerPoints:[{title:`Premium Plots`,desc:`Well-planned plots in a secure, gated community.`,icon:`award`},{title:`Strategic Location`,desc:`Close to airport, ORR, NH-44 and key locations.`,icon:`target`},{title:`Better Tomorrow`,desc:`A perfect place to build your dream home or invest for the future.`,icon:`sparkle`}]},"vr-green-villas":{id:`vr-green-villas`,name:`VR Green Villas`,category:`Luxury Villas`,categoryLink:`#/villas`,categorySlug:`villas`,tagline:`Ultra-luxury triplex villas in Kompally, Hyderabad`,subtitle:`Crafted for refined elegance, expansive living, and lifetime peace.`,priceBadge:`₹1.25 Cr onwards*`,location:`Kompally, Hyderabad`,badges:[{text:`HMDA Approved`,icon:`check`},{text:`RERA Registered`,icon:`check`},{text:`100% Vastu Compliant`,icon:`check`}],scriptCallout:`Live Extraordinary in Pure Harmony`,stats:[{label:`Acres`,value:`25`,icon:`land`},{label:`Villas`,value:`180`,icon:`grid`},{label:`Private Gardens`,value:`Private Gardens`,isText:!0,icon:`tree`},{label:`Grand Clubhouse`,value:`Grand Clubhouse`,isText:!0,icon:`clubhouse`},{label:`3 & 4 BHK`,value:`3 & 4 BHK`,isText:!0,icon:`road`},{label:`Swimming Pool`,value:`Swimming Pool`,isText:!0,icon:`play`}],tabs:[{id:`project-overview`,label:`Villa Overview`,active:!0},{id:`configurations`,label:`Configurations`},{id:`amenities`,label:`Amenities`},{id:`location-connectivity`,label:`Location & Connectivity`},{id:`gallery`,label:`Gallery`},{id:`brochure`,label:`Brochure`}],hasMasterPlan:!1,configurations:[{type:`3 BHK Triplex Villa`,size:`2,450 Sq.Ft`,facing:`East / West Facing`,plotSize:`167 Sq.Yds`,features:[`3 Master Bedrooms`,`Home Theatre Lounge`,`Private Terrace Garden`,`Covered Double Car Parking`],price:`₹1.25 Cr*`},{type:`4 BHK Luxury Triplex Villa`,size:`3,200 Sq.Ft`,facing:`East Facing`,plotSize:`220 Sq.Yds`,features:[`4 En-Suite Bedrooms`,`Private Lift Provision`,`Grand Double-Height Living`,`Outdoor Deck & Lawn`],price:`₹1.65 Cr*`},{type:`4 BHK Royal Estate Villa`,size:`3,850 Sq.Ft`,facing:`North-East Corner`,plotSize:`300 Sq.Yds`,features:[`Private Plunge Pool`,`Servant Quarters`,`Solar Power Backup`,`Smart Home Automation`],price:`₹2.10 Cr*`}],highlights:[{title:`HMDA Approved & RERA Registered`,icon:`shield-check`},{title:`24x7 Security & CCTV Surveillance`,icon:`gate`},{title:`15,000 Sq.Ft Grand Clubhouse`,icon:`club-house`},{title:`Temperature Controlled Swimming Pool`,icon:`play`},{title:`Fully Equipped Gym & Yoga Pavilion`,icon:`dumbbell`},{title:`Tennis & Badminton Courts`,icon:`award`},{title:`Underground Cabling & Concealed Drainage`,icon:`pipe`},{title:`EV Charging Points for Each Villa`,icon:`sparkle`},{title:`100% Power Backup`,icon:`target`},{title:`Lush Landscaped Greenery`,icon:`tree-park`}],advantages:[{title:`Prime Kompally Corridor with Direct NH-44 Access`,icon:`pin-star`},{title:`10 Mins from Top International Schools`,icon:`school`},{title:`Surrounded by Pristine Natural Green Belts`,icon:`leaf`},{title:`Zero Pollution Living with Resort-Style Comfort`,icon:`compass-grid`},{title:`High Rental Yield & Capital Growth Corridor`,icon:`chart-up`},{title:`Reputed Quality Construction with Premium Brands`,icon:`doc-check`},{title:`Community of High-Net-Worth Like-Minded Families`,icon:`home-heart`}],connectivity:{distances:[{destination:`Outer Ring Road (ORR) Junction`,distance:`6 km`,time:`8 mins`,icon:`road`},{destination:`Kompally Commercial Center`,distance:`3 km`,time:`5 mins`,icon:`shopping`},{destination:`Secunderabad Railway Station`,distance:`16 km`,time:`25 mins`,icon:`building`},{destination:`HITEC City / Financial District`,distance:`28 km`,time:`35 mins via ORR`,icon:`building`},{destination:`DRS International School`,distance:`2.5 km`,time:`5 mins`,icon:`school`},{destination:`Malla Reddy Multi-Speciality Hospital`,distance:`4 km`,time:`7 mins`,icon:`hospital`},{destination:`Medchal Town`,distance:`7 km`,time:`10 mins`,icon:`building`},{destination:`Rajiv Gandhi International Airport (RGIA)`,distance:`48 km`,time:`50 mins via ORR`,icon:`plane`}]},gallery:{featured:{title:`Grand Villa Façade & Entrance`,img:`/images/hero-villas.jpg`},thumbnails:[{title:`Luxury Villa Living Room`,img:`/images/ref/feat-villa-clean.jpg`},{title:`Designer Clubhouse`,img:`/images/cat-villas.jpg`},{title:`Private Terrace & Garden`,img:`/images/ref/cta-villa-pure.jpg`},{title:`Community Boulevard`,img:`/images/featured-anvaya.jpg`}]},cta:{headline:`Experience Villa Living at its Finest`,subtitle:`Schedule an exclusive private tour of model villas at VR Green Villas today.`,btnText:`Book Private Villa Tour`},footerPoints:[{title:`Luxury Triplex Villas`,desc:`Crafted with premium architecture and expansive private gardens.`,icon:`award`},{title:`Kompally Highway Access`,desc:`Just minutes away from ORR, top schools and healthcare hubs.`,icon:`target`},{title:`Gated Haven`,desc:`24/7 security with a modern 15,000 sq.ft clubhouse lifestyle.`,icon:`sparkle`}]},"vr-heights":{id:`vr-heights`,name:`VR Heights`,category:`Premium Apartments`,categoryLink:`#/apartments`,categorySlug:`apartments`,tagline:`Premium 2 & 3 BHK high-rise residences in Nallagandla`,subtitle:`Elevated lifestyle towers overlooking scenic cityscapes and lush greens.`,priceBadge:`₹65 Lakhs onwards*`,location:`Nallagandla, Hyderabad`,badges:[{text:`GHMC Approved`,icon:`check`},{text:`TS RERA Registered`,icon:`check`},{text:`IGBC Green Certified`,icon:`check`}],scriptCallout:`Rise Above the Ordinary Everyday`,stats:[{label:`Acres`,value:`8`,icon:`land`},{label:`Units`,value:`450`,icon:`grid`},{label:`Towers`,value:`4 Towers (G+18)`,isText:!0,icon:`clubhouse`},{label:`Sky Lounge`,value:`Sky Lounge`,isText:!0,icon:`tree`},{label:`Clubhouse`,value:`25,000 Sq.Ft Club`,isText:!0,icon:`road`},{label:`Infinity Pool`,value:`Infinity Pool`,isText:!0,icon:`play`}],tabs:[{id:`project-overview`,label:`Tower Overview`,active:!0},{id:`configurations`,label:`Floor Plans`},{id:`amenities`,label:`Sky Amenities`},{id:`location-connectivity`,label:`Location & Connectivity`},{id:`gallery`,label:`Gallery`},{id:`brochure`,label:`Brochure`}],hasMasterPlan:!1,configurations:[{type:`2 BHK Premium Apartment`,size:`1,250 Sq.Ft`,facing:`East / West Facing`,plotSize:`Unit Type A`,features:[`2 Large Bedrooms + 2 Bathrooms`,`Spacious Balcony with Sky Views`,`Modular Kitchen Layout`,`Covered Reserved Parking`],price:`₹65 Lakhs*`},{type:`3 BHK Comfort Apartment`,size:`1,650 Sq.Ft`,facing:`East Facing Corner`,plotSize:`Unit Type B`,features:[`3 Bedrooms + 3 Bathrooms`,`Separate Dining & Foyer`,`Pooja Room Provision`,`Dual Balconies`],price:`₹85 Lakhs*`},{type:`3 BHK Royal Sky Suite`,size:`1,950 Sq.Ft`,facing:`North-East Corner`,plotSize:`Unit Type C`,features:[`3 En-Suite Bedrooms + Powder Room`,`Walk-in Wardrobe`,`Unobstructed Panoramic Views`,`Double Car Parking`],price:`₹1.05 Cr*`}],highlights:[{title:`GHMC Approved High-Rise G+18 Towers`,icon:`shield-check`},{title:`Rooftop Infinity Swimming Pool`,icon:`play`},{title:`25,000 Sq.Ft World-Class Clubhouse`,icon:`club-house`},{title:`High-Speed Automated Elevators`,icon:`gate`},{title:`AC Gymnasium & Aerobics Studio`,icon:`dumbbell`},{title:`Multi-Tier 24/7 Security & Intercom`,icon:`shield-lock`},{title:`Covered Multi-Level Basements`,icon:`road-wide`},{title:`Banquet Hall & Guest Suites`,icon:`arch`},{title:`Landscaped Podium Garden & Jogging Track`,icon:`tree-park`},{title:`100% Generator Backup for Entire Complex`,icon:`target`}],advantages:[{title:`Strategic Nallagandla Corridor close to Financial District`,icon:`pin-star`},{title:`10 Mins from HITEC City and Gachibowli IT Hubs`,icon:`building`},{title:`Top International Schools within 3 km Radius`,icon:`school`},{title:`Walkable Distance to Supermarkets & Clinics`,icon:`shopping`},{title:`Exceptional Rental Appreciation in IT Corridor`,icon:`chart-up`},{title:`Vastu Compliant Layouts with Superior Natural Light`,icon:`compass-grid`},{title:`IGBC Green Building Certified for Low Maintenance`,icon:`leaf`}],connectivity:{distances:[{destination:`Financial District / Wipro Circle`,distance:`7 km`,time:`12 mins`,icon:`building`},{destination:`HITEC City Cyber Towers`,distance:`11 km`,time:`18 mins`,icon:`building`},{destination:`Lingampally MMTS Station`,distance:`3 km`,time:`6 mins`,icon:`bus`},{destination:`Outer Ring Road (ORR) Gachibowli`,distance:`6 km`,time:`10 mins`,icon:`road`},{destination:`Citizen Multi-Speciality Hospital`,distance:`1.5 km`,time:`3 mins`,icon:`hospital`},{destination:`Chirec International School`,distance:`5 km`,time:`8 mins`,icon:`school`},{destination:`Inorbit Mall Madhapur`,distance:`13 km`,time:`20 mins`,icon:`shopping`},{destination:`Rajiv Gandhi International Airport (RGIA)`,distance:`34 km`,time:`35 mins via ORR`,icon:`plane`}]},gallery:{featured:{title:`VR Heights Iconic Towers`,img:`/images/hero-apartments.jpg`},thumbnails:[{title:`Designer High-Rise Living Room`,img:`/images/ref/feat-apts-clean.jpg`},{title:`Rooftop Lounge & Pool`,img:`/images/cat-apartments.jpg`},{title:`Tower Podium Greenery`,img:`/images/ref/exp-apts-clean.jpg`},{title:`Master Bedroom Suite`,img:`/images/ref/feat-apts-pure.jpg`}]},cta:{headline:`Elevate Your Life at VR Heights`,subtitle:`Schedule a visit to view model apartments and experience the skyline views.`,btnText:`Book Site Visit Now`},footerPoints:[{title:`Sky-High Living`,desc:`Luxurious 2 & 3 BHK residences with grand panoramic city views.`,icon:`award`},{title:`Minutes from IT Corridor`,desc:`Superb connectivity to Gachibowli, Financial District & MMTS.`,icon:`target`},{title:`World-Class Amenities`,desc:`Rooftop infinity pool, clubhouse, gym, and podium parks.`,icon:`sparkle`}]},"vr-agro-lands":{id:`vr-agro-lands`,name:`VR Agro Lands`,category:`Farm Lands`,categoryLink:`#/farmlands`,categorySlug:`farmlands`,tagline:`Managed organic farm lands in Shankarpally, Hyderabad`,subtitle:`Where peaceful weekend retreat meets high-yielding agricultural appreciation.`,priceBadge:`₹18 Lakhs onwards*`,location:`Shankarpally, Hyderabad`,badges:[{text:`Clear Title Deeds`,icon:`check`},{text:`Drip Irrigation Setup`,icon:`check`},{text:`Managed Plantation`,icon:`check`}],scriptCallout:`Cultivate Prosperity, Own Pure Nature`,stats:[{label:`Acres`,value:`100`,icon:`land`},{label:`Farmlands`,value:`80`,icon:`grid`},{label:`Fruit Trees`,value:`Malgoa & Sandalwood`,isText:!0,icon:`tree`},{label:`Weekend Club`,value:`Resort & Cottages`,isText:!0,icon:`clubhouse`},{label:`Farm Sizes`,value:`0.5 to 2 Acres`,isText:!0,icon:`road`},{label:`Water Security`,value:`24/7 Drip & Bore`,isText:!0,icon:`play`}],tabs:[{id:`project-overview`,label:`Farm Overview`,active:!0},{id:`configurations`,label:`Land Units`},{id:`amenities`,label:`Retreat Amenities`},{id:`location-connectivity`,label:`Location & Connectivity`},{id:`gallery`,label:`Gallery`},{id:`brochure`,label:`Brochure`}],hasMasterPlan:!1,configurations:[{type:`0.5 Acre Farm Estate (20 Guntas)`,size:`2,420 Sq.Yds`,facing:`East / North Facing`,plotSize:`20 Guntas`,features:[`30 High-Yield Fruit Bearing Trees`,`Automated Drip Irrigation Line`,`Pre-fenced with Iron Gate`,`Wooden Gazebo Setup Option`],price:`₹18 Lakhs*`},{type:`1.0 Acre Signature Agro Plot`,size:`4,840 Sq.Yds`,facing:`Corner Agro Land`,plotSize:`40 Guntas`,features:[`60 Mango & Sandalwood Trees`,`Dedicated Farm Maintenance Crew`,`Water & Power Connection`,`Access to Weekend Resort Club`],price:`₹34 Lakhs*`},{type:`2.0 Acre Imperial Agro Estate`,size:`9,680 Sq.Yds`,facing:`Prime Boulevard Facing`,plotSize:`80 Guntas`,features:[`Full Organic Farm Management`,`Private Farmhouse Construction Permitted`,`Cattle & Dairy Farming Facility`,`Permanent Road Access`],price:`₹65 Lakhs*`}],highlights:[{title:`100% Clear Title Freehold Agro Lands`,icon:`shield-check`},{title:`Professional 5-Year Farm Management`,icon:`leaf`},{title:`Scientific Drip Irrigation & Borewells`,icon:`pipe`},{title:`Resort Style Weekend Clubhouse & Cottages`,icon:`club-house`},{title:`High Yield Sandalwood & Mango Trees`,icon:`tree-park`},{title:`Solar Powered Perimeter Fencing`,icon:`gate`},{title:`30 & 40 ft Wide Internal Gravel Roads`,icon:`road-wide`},{title:`Organic Vegetable Cultivation Support`,icon:`leaf-row`},{title:`Children's Petting Zoo & Play Zone`,icon:`play-area`},{title:`24/7 On-Site Security & Caretaker Staff`,icon:`shield-lock`}],advantages:[{title:`High Growth Shankarpally – Mokila Highway Corridor`,icon:`pin-star`},{title:`Tax-Free Agricultural Income from Crop Yields`,icon:`chart-up`},{title:`Perfect Weekend Getaway within 45 Mins of City`,icon:`home-heart`},{title:`Rapid Land Value Appreciation Potential`,icon:`compass-grid`},{title:`Pollution-Free Eco-Friendly Environment`,icon:`leaf`},{title:`Zero Maintenance Hassle with Expert Agro Team`,icon:`doc-check`},{title:`Safe Long-Term Inter-Generational Asset`,icon:`target`}],connectivity:{distances:[{destination:`Shankarpally Railway Station`,distance:`6 km`,time:`8 mins`,icon:`bus`},{destination:`Mokila Residential Hub`,distance:`14 km`,time:`15 mins`,icon:`building`},{destination:`Outer Ring Road (ORR) Muthangi`,distance:`22 km`,time:`25 mins`,icon:`road`},{destination:`Financial District / Kokapet`,distance:`32 km`,time:`35 mins via 4-Lane Highway`,icon:`building`},{destination:`IIT Hyderabad (Kandi)`,distance:`16 km`,time:`20 mins`,icon:`school`},{destination:`ICFAI University Campus`,distance:`12 km`,time:`15 mins`,icon:`school`},{destination:`Proposed Regional Ring Road (RRR)`,distance:`8 km`,time:`10 mins`,icon:`road`},{destination:`Rajiv Gandhi International Airport (RGIA)`,distance:`46 km`,time:`50 mins via ORR`,icon:`plane`}]},gallery:{featured:{title:`VR Agro Lands Lush Estate`,img:`/images/hero-farmlands.jpg`},thumbnails:[{title:`Organic Mango Plantation`,img:`/images/ref/feat-farm-clean.jpg`},{title:`Weekend Cottage Resort`,img:`/images/cat-farmlands.jpg`},{title:`Drip Irrigated Groves`,img:`/images/featured-sanjeevani.jpg`},{title:`Farm Avenue & Boundary`,img:`/images/ref/exp-farm-clean.jpg`}]},cta:{headline:`Claim Your Piece of Pure Nature`,subtitle:`Book a guided weekend site visit with organic farm lunch for your family.`,btnText:`Book Weekend Farm Visit`},footerPoints:[{title:`Managed Farmlands`,desc:`Expert farm maintenance with regular returns from fruit & timber crops.`,icon:`award`},{title:`Shankarpally Growth Axis`,desc:`Fast connecting to Financial District, Mokila and Proposed RRR.`,icon:`target`},{title:`Eco-Retreat Living`,desc:`Resort amenities, cottages and organic farm recreation for families.`,icon:`sparkle`}]}};S[`vr-prime-meadows`]=S[`vr-green-meadows`];var C=null;function w(){return C||{id:`unit-101`,projectName:`VR Elite Towers`,unitName:`Unit 101 - 3 BHK`,location:`Kokapet, Hyderabad`,price:`₹ 92 Lakhs*`,priceSub:`(All inclusive)`,size:`1620 Sq.Ft.`,facing:`East Facing`,beds:`3 Bedrooms`,baths:`3 Bathrooms`,balconies:`2 Balconies`,status:`Available`,image:`/images/journey/visit_screen1_living.jpg`,thumb:`/images/journey/selected_property_thumb.jpg`,backUrl:`#/apartments`}}function T(e=null,t=`form`){e&&(C={...w(),...e});let n=w(),r=document.getElementById(`modal-container`);if(!r)return;r.innerHTML=`
    <div class="sv-modal-overlay" id="sv-modal-overlay">
      <div class="sv-modal-dialog" id="sv-modal-dialog">
        <!-- Content will be rendered dynamically -->
        <div id="sv-flow-container"></div>
      </div>
    </div>
  `;let i=document.getElementById(`sv-modal-overlay`);i.addEventListener(`click`,e=>{e.target===i&&E()}),t===`details`?D(n):O(n)}function E(){let e=document.getElementById(`modal-container`);e&&(e.innerHTML=``)}function D(e){let t=document.getElementById(`sv-flow-container`);t&&(t.innerHTML=`
    <div class="sv-screen sv-screen-details">
      <!-- Mobile / Modal Top Header -->
      <div class="sv-top-header">
        <button type="button" class="sv-back-btn" onclick="window.closeSiteVisitFlow()">
          &larr; Back to ${e.projectName||`Project`}
        </button>
        <button type="button" class="sv-close-x" onclick="window.closeSiteVisitFlow()">&times;</button>
      </div>

      <!-- Main Property Image Showcase -->
      <div class="sv-hero-image-wrap">
        <img src="${e.image||`/images/journey/visit_screen1_living.jpg`}" alt="${e.unitName}" class="sv-hero-image" id="sv-main-view-img" />
        <span class="sv-image-counter">1/5</span>
        <button type="button" class="sv-fav-btn" aria-label="Save Property">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>

      <!-- Thumbnails Carousel Strip -->
      <div class="sv-thumbs-strip">
        <img src="/images/journey/room_living.jpg" class="sv-thumb-img active" onclick="document.getElementById('sv-main-view-img').src=this.src" />
        <img src="/images/journey/room_thumb_1.jpg" class="sv-thumb-img" onclick="document.getElementById('sv-main-view-img').src=this.src" />
        <img src="/images/journey/room_thumb_2.jpg" class="sv-thumb-img" onclick="document.getElementById('sv-main-view-img').src=this.src" />
        <img src="/images/journey/room_thumb_3.jpg" class="sv-thumb-img" onclick="document.getElementById('sv-main-view-img').src=this.src" />
        <img src="/images/journey/room_thumb_4.jpg" class="sv-thumb-img" onclick="document.getElementById('sv-main-view-img').src=this.src" />
      </div>

      <!-- Property Summary -->
      <div class="sv-details-body">
        <div class="sv-unit-header-row">
          <div>
            <h2 class="sv-unit-title">${e.unitName||`Unit 101 - 3 BHK`}</h2>
            <div class="sv-unit-loc">${e.location||`Kokapet, Hyderabad`}</div>
          </div>
          <span class="sv-badge-available">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
            ${e.status||`Available`}
          </span>
        </div>

        <!-- Spec Tags Grid -->
        <div class="sv-specs-grid">
          <div class="sv-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
            <span>${e.size||`1620 Sq.Ft.`}</span>
          </div>
          <div class="sv-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><polygon points="12 3 14 10 21 12 14 14 12 21 10 14 3 12 10 10 12 3"/></svg>
            <span>${e.facing||`East Facing`}</span>
          </div>
          <div class="sv-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20M2 14h20M4 10h16a2 2 0 0 1 2 2v2H2v-2a2 2 0 0 1 2-2zM6 4h12v6H6z"/></svg>
            <span>${e.beds||`3 Bedrooms`}</span>
          </div>
          <div class="sv-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 12h10M5 20h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1a4 4 0 0 0-8 0H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"/></svg>
            <span>${e.baths||`3 Bathrooms`}</span>
          </div>
          <div class="sv-spec-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="12" rx="2"/><line x1="3" y1="12" x2="21" y2="12"/></svg>
            <span>${e.balconies||`2 Balconies`}</span>
          </div>
        </div>

        <!-- Price -->
        <div class="sv-price-row">
          <span class="sv-price-val">${e.price||`₹ 92 Lakhs*`}</span>
          <span class="sv-price-sub">${e.priceSub||`(All inclusive)`}</span>
        </div>

        <!-- Actions -->
        <div class="sv-action-buttons">
          <button type="button" class="sv-btn-secondary" onclick="window.switchToEnquiry()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>Send Enquiry</span>
          </button>
          
          <button type="button" class="sv-btn-primary" onclick="window.renderScreen2Form()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <span>Book Site Visit</span>
          </button>

          <a href="https://maps.google.com/?q=${encodeURIComponent(e.location||`Kokapet, Hyderabad`)}" target="_blank" rel="noopener" class="sv-btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>View on Google Maps</span>
          </a>
        </div>
      </div>
    </div>
  `)}function O(e=null){let t=e||w(),n=document.getElementById(`sv-flow-container`);if(!n)return;let r=new Date().toISOString().split(`T`)[0];n.innerHTML=`
    <div class="sv-screen sv-screen-form">
      <div class="sv-top-header">
        <button type="button" class="sv-back-btn" onclick="window.closeSiteVisitFlow()">
          &larr; Back
        </button>
        <button type="button" class="sv-close-x" onclick="window.closeSiteVisitFlow()">&times;</button>
      </div>

      <div class="sv-form-wrapper">
        <h2 class="sv-form-title">Book a Site Visit</h2>
        <p class="sv-form-subtitle">
          Share your details and preferred date.<br/>Our team will contact you to confirm the visit.
        </p>

        <!-- Selected Property Card (Preserved across all interactions) -->
        <div class="sv-property-preview-card">
          <div class="sv-prev-label">Selected Property</div>
          <div class="sv-prev-content">
            <img src="${t.thumb||t.image||`/images/journey/selected_property_thumb.jpg`}" alt="${t.projectName}" class="sv-prev-thumb" />
            <div class="sv-prev-info">
              <div class="sv-prev-name">${t.projectName||`VR Elite Towers`}</div>
              <div class="sv-prev-unit">${t.unitName||`Unit 101 - 3 BHK`}</div>
              <div class="sv-prev-loc">${t.location||`Kokapet, Hyderabad`}</div>
              <div class="sv-prev-price">${t.price||`₹ 92 Lakhs*`}</div>
            </div>
          </div>
        </div>

        <!-- Form Fields with Strict Validation -->
        <form id="sv-booking-form" class="sv-form-body">
          <div class="sv-input-group">
            <label class="sv-label" for="sv-input-name">Full Name *</label>
            <input type="text" id="sv-input-name" class="sv-input" placeholder="Siva Prasad" required />
            <span class="sv-error-msg" id="err-name"></span>
          </div>

          <div class="sv-input-group">
            <label class="sv-label" for="sv-input-mobile">Mobile Number *</label>
            <input type="tel" id="sv-input-mobile" class="sv-input" placeholder="9876543210" maxlength="10" required />
            <span class="sv-error-msg" id="err-mobile"></span>
          </div>

          <div class="sv-input-group">
            <label class="sv-label" for="sv-input-email">Email</label>
            <input type="email" id="sv-input-email" class="sv-input" placeholder="siva@example.com" />
            <span class="sv-error-msg" id="err-email"></span>
          </div>

          <div class="sv-input-group">
            <label class="sv-label" for="sv-input-date">Preferred Date *</label>
            <input type="date" id="sv-input-date" class="sv-input" value="${r}" required />
            <span class="sv-error-msg" id="err-date"></span>
          </div>

          <div class="sv-input-group">
            <label class="sv-label" for="sv-input-time">Preferred Time Slot *</label>
            <div class="sv-select-wrap">
              <select id="sv-input-time" class="sv-select" required>
                <option value="10:00 AM - 12:00 PM" selected>10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 02:00 PM">12:00 PM - 02:00 PM</option>
                <option value="02:00 PM - 04:00 PM">02:00 PM - 04:00 PM</option>
                <option value="04:00 PM - 06:00 PM">04:00 PM - 06:00 PM</option>
              </select>
            </div>
            <span class="sv-error-msg" id="err-time"></span>
          </div>

          <div class="sv-input-group">
            <label class="sv-label" for="sv-input-msg">Any Message (Optional)</label>
            <textarea id="sv-input-msg" class="sv-textarea" rows="2" placeholder="I would like to visit with my family."></textarea>
          </div>

          <button type="submit" class="sv-submit-btn" id="sv-submit-btn">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  `,document.getElementById(`sv-booking-form`).addEventListener(`submit`,e=>{e.preventDefault();let n=document.getElementById(`sv-input-name`).value.trim(),r=document.getElementById(`sv-input-mobile`).value.trim(),i=document.getElementById(`sv-input-email`).value.trim(),a=document.getElementById(`sv-input-date`).value,o=document.getElementById(`sv-input-time`).value,s=!1;!n||n.length<2?(document.getElementById(`err-name`).textContent=`Please enter your full name`,s=!0):document.getElementById(`err-name`).textContent=``,/^[6-9]\d{9}$/.test(r)?document.getElementById(`err-mobile`).textContent=``:(document.getElementById(`err-mobile`).textContent=`Please enter a valid 10-digit mobile number`,s=!0),a?document.getElementById(`err-date`).textContent=``:(document.getElementById(`err-date`).textContent=`Please choose a preferred visit date`,s=!0),!s&&k({...t,customerName:n,customerMobile:r,customerEmail:i,visitDate:a,visitTime:o})})}function k(e){let t=document.getElementById(`sv-flow-container`);t&&(t.innerHTML=`
    <div class="sv-screen sv-screen-success">
      <div class="sv-top-header">
        <button type="button" class="sv-close-x right-only" onclick="window.closeSiteVisitFlow()">&times;</button>
      </div>

      <div class="sv-success-content">
        <!-- Big Green Success Icon -->
        <div class="sv-success-icon-wrap">
          <div class="sv-green-circle">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>

        <h2 class="sv-success-title">Site Visit Request Submitted!</h2>
        
        <p class="sv-success-msg">
          Thank you, <strong>${e.customerName||`Siva Prasad`}</strong>!<br/>
          Your site visit request has been submitted. Our team will contact you shortly to confirm the visit.
        </p>

        <!-- Selected Property Card (Persisted on Success) -->
        <div class="sv-property-preview-card success-card">
          <div class="sv-prev-label">Selected Property</div>
          <div class="sv-prev-content">
            <img src="${e.thumb||e.image||`/images/journey/selected_property_thumb.jpg`}" alt="${e.projectName}" class="sv-prev-thumb" />
            <div class="sv-prev-info">
              <div class="sv-prev-name">${e.projectName||`VR Elite Towers`}</div>
              <div class="sv-prev-unit">${e.unitName||`Unit 101 - 3 BHK`}</div>
              <div class="sv-prev-loc">${e.location||`Kokapet, Hyderabad`}</div>
              <div class="sv-prev-price">${e.price||`₹ 92 Lakhs*`}</div>
            </div>
          </div>
        </div>

        <!-- What Happens Next 3-Step Guide -->
        <div class="sv-next-steps-card">
          <h3 class="sv-next-title">What happens next?</h3>
          
          <div class="sv-step-row">
            <div class="sv-step-badge">1</div>
            <div class="sv-step-desc">Our team will review your request.</div>
          </div>

          <div class="sv-step-row">
            <div class="sv-step-badge">2</div>
            <div class="sv-step-desc">The owner will call you to confirm the site visit.</div>
          </div>

          <div class="sv-step-row">
            <div class="sv-step-badge">3</div>
            <div class="sv-step-desc">Once confirmed, you will receive a confirmation message on WhatsApp.</div>
          </div>
        </div>

        <button type="button" class="sv-back-project-btn" onclick="window.closeSiteVisitFlow()">
          Back to Project
        </button>
      </div>
    </div>
  `)}window.openSiteVisitFlow=T,window.closeSiteVisitFlow=E,window.renderScreen2Form=()=>O(),window.switchToEnquiry=()=>{window.closeSiteVisitFlow(),window.openApartmentEnquiry&&window.openApartmentEnquiry()};function A(e){let t=e.plots||[],n=t.find(e=>e.isDefaultSelected)||t[0];return`
    <section class="master-plan-section" id="master-plan-section">
      <div class="mp-container">
        
        <!-- Desktop 3-Column Grid -->
        <div class="mp-layout-grid">
          
          <!-- Column 1: Find Your Plot Filters -->
          <div class="mp-filter-card">
            <div class="filter-card-header">
              <h3 class="filter-title">Find Your Plot</h3>
              <button type="button" class="filter-reset-btn" id="mp-filter-reset">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                </svg>
                <span>Reset</span>
              </button>
            </div>

            <form id="mp-filter-form" class="filter-form">
              <div class="filter-group">
                <label class="filter-label">Plot Size (Sq.Yds)</label>
                <div class="select-wrap">
                  <select id="filter-size" class="filter-select">
                    <option value="all">Any Size</option>
                    <option value="180">180 Sq.Yds</option>
                    <option value="200">200 Sq.Yds</option>
                    <option value="220">220 Sq.Yds</option>
                    <option value="250">250 Sq.Yds</option>
                  </select>
                </div>
              </div>

              <div class="filter-group">
                <label class="filter-label">Budget</label>
                <div class="select-wrap">
                  <select id="filter-budget" class="filter-select">
                    <option value="all">Any Budget</option>
                    <option value="30">Under ₹30 Lakhs</option>
                    <option value="35">₹30L - ₹35 Lakhs</option>
                    <option value="40">Above ₹35 Lakhs</option>
                  </select>
                </div>
              </div>

              <div class="filter-group">
                <label class="filter-label">Facing</label>
                <div class="select-wrap">
                  <select id="filter-facing" class="filter-select">
                    <option value="all">Any Facing</option>
                    <option value="East">East</option>
                    <option value="West">West</option>
                    <option value="North">North</option>
                    <option value="South">South</option>
                  </select>
                </div>
              </div>

              <div class="filter-group">
                <label class="filter-label">Road Width</label>
                <div class="select-wrap">
                  <select id="filter-road" class="filter-select">
                    <option value="all">Any Width</option>
                    <option value="30 ft">30 ft Road</option>
                    <option value="40 ft">40 ft Road</option>
                  </select>
                </div>
              </div>

              <div class="filter-group">
                <label class="filter-label">Availability</label>
                <div class="checkbox-options">
                  <label class="custom-checkbox">
                    <input type="checkbox" id="avail-available" value="available" checked>
                    <span class="chk-box"></span>
                    <span class="chk-lbl">Available</span>
                  </label>
                  <label class="custom-checkbox">
                    <input type="checkbox" id="avail-reserved" value="reserved">
                    <span class="chk-box"></span>
                    <span class="chk-lbl">Reserved</span>
                  </label>
                  <label class="custom-checkbox">
                    <input type="checkbox" id="avail-sold" value="sold">
                    <span class="chk-box"></span>
                    <span class="chk-lbl">Sold</span>
                  </label>
                </div>
              </div>

              <button type="button" id="mp-apply-btn" class="mp-apply-btn">Apply Filters</button>
            </form>
          </div>

          <!-- Column 2: Interactive Master Plan Center -->
          <div class="mp-viewport-card" id="mp-viewport-container">
            <!-- Legend Bar -->
            <div class="mp-legend-bar">
              <div class="legend-item"><span class="legend-dot available"></span> Available</div>
              <div class="legend-item"><span class="legend-dot reserved"></span> Reserved</div>
              <div class="legend-item"><span class="legend-dot sold"></span> Sold</div>
            </div>

            <!-- Map Stage -->
            <div class="mp-stage-wrap" id="mp-stage-wrap">
              <!-- Compass Rose -->
              <div class="mp-compass" title="Layout Orientation">
                <div class="compass-n">N</div>
                <div class="compass-arrow">✦</div>
                <div class="compass-ring"></div>
              </div>

              <!-- Floating Controls -->
              <div class="mp-zoom-controls">
                <button type="button" class="zoom-btn" id="mp-zoom-in" title="Zoom In">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
                </button>
                <button type="button" class="zoom-btn" id="mp-zoom-out" title="Zoom Out">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg>
                </button>
                <button type="button" class="zoom-btn" id="mp-zoom-reset" title="Reset View">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/></svg>
                </button>
                <button type="button" class="zoom-btn" id="mp-toggle-fullscreen" title="Full Screen Master Plan">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                  </svg>
                </button>
              </div>

              <!-- SVG Interactive Layout Canvas -->
              <div class="mp-canvas-scroll" id="mp-canvas-scroll">
                <div class="mp-canvas-transform" id="mp-canvas-transform">
                  ${j(t,n.id)}
                </div>
              </div>
            </div>

            <!-- Mobile Quick Actions Strip -->
            <div class="mp-mobile-quick-actions">
              <button class="mp-mob-btn primary" onclick="window.openSiteVisitModal('${e.name}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>Book a Site Visit</span>
              </button>
              <a href="https://maps.google.com" target="_blank" rel="noopener" class="mp-mob-btn secondary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>View on Google Maps</span>
              </a>
            </div>
          </div>

          <!-- Column 3: Selected Plot Details Panel -->
          <div class="mp-details-card" id="mp-details-card">
            ${M(n,e.name)}
          </div>

        </div>

      </div>
    </section>

    <!-- Mobile Full Screen Modal Overlay -->
    <div class="mp-fullscreen-modal" id="mp-fullscreen-modal" style="display: none;">
      <div class="fs-header">
        <button type="button" class="fs-exit-btn" id="fs-exit-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
          <span>Exit Full Screen</span>
        </button>
        <span class="fs-title">${e.name} &bull; Master Plan</span>
        <div class="fs-legend">
          <span class="legend-dot available"></span> Available
          <span class="legend-dot reserved"></span> Reserved
          <span class="legend-dot sold"></span> Sold
        </div>
      </div>

      <div class="fs-body">
        <div class="fs-stage" id="fs-stage">
          <div class="mp-zoom-controls fs-controls">
            <button type="button" class="zoom-btn" id="fs-zoom-in" title="Zoom In"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg></button>
            <button type="button" class="zoom-btn" id="fs-zoom-out" title="Zoom Out"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14"/></svg></button>
            <button type="button" class="zoom-btn" id="fs-zoom-reset" title="Reset View"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="2"/></svg></button>
          </div>
          
          <div class="fs-canvas-scroll" id="fs-canvas-scroll">
            <div class="fs-canvas-transform" id="fs-canvas-transform">
              ${j(t,n.id,`fs`)}
            </div>
          </div>
        </div>

        <!-- Floating Selected Plot Card in Fullscreen -->
        <div class="fs-plot-panel" id="fs-plot-panel">
          ${M(n,e.name,!0)}
        </div>
      </div>

      <div class="fs-footer">
        <span>Pan, zoom and explore the master plan freely</span>
      </div>
    </div>
  `}function j(e,t,n=`mp`){return`
    <svg class="master-plan-svg" viewBox="0 0 704 600" xmlns="http://www.w3.org/2000/svg" id="${n}-svg">
      <defs>
        <filter id="${n}-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#00C2FF" flood-opacity="0.9"/>
        </filter>
      </defs>

      <!-- Exact Master Plan Reference Artwork -->
      <image href="/images/journey/master_plan_base.jpg" x="0" y="0" width="704" height="600" preserveAspectRatio="none" />

      <!-- INTERACTIVE PLOTS GRID -->
      <g class="plots-layer" id="${n}-plots-group">
        ${e.map(e=>{let r=e.id===t,i=`url(#${n}-plot-avail)`,a=`#15803D`,o=`#14532D`;e.status===`reserved`?(i=`url(#${n}-plot-res)`,a=`#B45309`,o=`#78350F`):e.status===`sold`&&(i=`url(#${n}-plot-sold)`,a=`#B91C1C`,o=`#7F1D1D`);let s=``,c=``,l=`1.2`;return r&&(s=`plot-selected`,a=`#0284C7`,l=`3`,c=`filter="url(#${n}-glow)"`,i=`#38BDF8`,o=`#082F49`),`
            <g class="plot-item ${s}" 
               data-plot-id="${e.id}" 
               data-status="${e.status}"
               data-size="${e.size}"
               data-facing="${e.facing}"
               data-road="${e.road}"
               data-price="${e.price}"
               cursor="pointer"
               role="button"
               tabindex="0"
               aria-label="Plot ${e.num}, ${e.status}, ${e.size} Sq.Yds">
              
              <rect x="${e.x}" y="${e.y}" width="${e.w}" height="${e.h}" 
                    rx="3" 
                    fill="${i}" 
                    stroke="${a}" 
                    stroke-width="${l}"
                    ${c}
                    class="plot-rect" />

              <text x="${e.x+e.w/2}" y="${e.y+e.h/2+3.5}" 
                    fill="${o}" 
                    font-size="8" 
                    font-weight="${r?`800`:`700`}" 
                    text-anchor="middle"
                    pointer-events="none"
                    class="plot-num-text">
                ${e.num}
              </text>
            </g>
          `}).join(``)}
      </g>
    </svg>
  `}function M(e,t,n=!1){if(!e)return`<div class="no-plot-selected">Select a plot from the master plan to view details.</div>`;let r=e.status.charAt(0).toUpperCase()+e.status.slice(1),i=`status-badge ${e.status}`;return`
    <div class="plot-details-wrapper" data-active-plot="${e.id}">
      
      <!-- Card Header -->
      <div class="pd-header">
        <h3 class="pd-title">Plot Details</h3>
        <button type="button" class="pd-close-btn" id="${n?`fs`:`mp`}-details-close" title="Close Plot Details">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>

      <!-- Status Pill -->
      <div class="pd-status-row">
        <span class="${i}">
          <span class="status-icon">✓</span>
          <span>${r}</span>
        </span>
      </div>

      <!-- Plot Main ID & Dimensions -->
      <div class="pd-main-id">
        <div class="pd-plot-number">${e.num}</div>
        <div class="pd-plot-sub">${e.size} Sq.Yds (${e.dim})</div>
      </div>

      <!-- Price Box -->
      <div class="pd-price-box">
        <div class="pd-price-val">${e.price}</div>
        <div class="pd-price-rate">(${e.rate})</div>
      </div>

      <!-- Specifications Grid (2 columns) -->
      <div class="pd-specs-grid">
        <div class="pd-spec-item">
          <div class="spec-icon-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
          </div>
          <div class="spec-info">
            <span class="spec-label">Facing</span>
            <span class="spec-value">${e.facing}</span>
          </div>
        </div>

        <div class="pd-spec-item">
          <div class="spec-icon-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M4 19L8 5m8 14l4-14M10 9h4m-5 6h6"/></svg>
          </div>
          <div class="spec-info">
            <span class="spec-label">Road Width</span>
            <span class="spec-value">${e.road}</span>
          </div>
        </div>

        <div class="pd-spec-item">
          <div class="spec-icon-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></svg>
          </div>
          <div class="spec-info">
            <span class="spec-label">Dimensions</span>
            <span class="spec-value">${e.dim}</span>
          </div>
        </div>

        <div class="pd-spec-item">
          <div class="spec-icon-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
          </div>
          <div class="spec-info">
            <span class="spec-label">Plot Area</span>
            <span class="spec-value">${e.size} Sq.Yds</span>
          </div>
        </div>

        <div class="pd-spec-item">
          <div class="spec-icon-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div class="spec-info">
            <span class="spec-label">Approval</span>
            <span class="spec-value">${e.approval}</span>
          </div>
        </div>

        <div class="pd-spec-item">
          <div class="spec-icon-wrap">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
          <div class="spec-info">
            <span class="spec-label">Location</span>
            <span class="spec-value">${e.location}</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pd-actions">
        <button type="button" class="pd-btn primary-choose" onclick="window.openPlotSiteVisit('${e.id}')">
          <span>Choose This Plot</span>
          <span class="btn-arrow">&rarr;</span>
        </button>

        <button type="button" class="pd-btn secondary-visit" onclick="window.openPlotSiteVisit('${e.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>Book a Site Visit</span>
        </button>

        <a href="https://maps.google.com/?q=Shadnagar+Hyderabad" target="_blank" rel="noopener" class="pd-btn flat-maps">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>View on Google Maps</span>
        </a>
      </div>

    </div>
  `}function N(e){let t=e.plots||[],n=1,r=1;window.openPlotSiteVisit=function(n){let r=(t||[]).find(e=>e.id===n)||t[0];r&&T({id:r.id,projectName:e.name||`VR Green Meadows`,unitName:`Plot ${r.num} (${r.size} Sq.Yds)`,location:e.location||`Shadnagar, Hyderabad`,price:r.price,priceSub:`(${r.rate})`,size:`${r.size} Sq.Yds`,facing:`${r.facing} Facing`,beds:`${r.road} Road`,baths:r.approval,balconies:r.location,status:r.status.charAt(0).toUpperCase()+r.status.slice(1),image:`/images/journey/gallery_entrance.jpg`,thumb:`/images/journey/gallery_entrance.jpg`},`form`)};let i=document.getElementById(`mp-canvas-transform`),a=document.getElementById(`fs-canvas-transform`),o=document.getElementById(`mp-details-card`),s=document.getElementById(`fs-plot-panel`),c=document.getElementById(`mp-fullscreen-modal`),l=document.getElementById(`mp-zoom-in`),u=document.getElementById(`mp-zoom-out`),d=document.getElementById(`mp-zoom-reset`),f=document.getElementById(`mp-toggle-fullscreen`),p=document.getElementById(`fs-exit-btn`),m=document.getElementById(`fs-zoom-in`),h=document.getElementById(`fs-zoom-out`),g=document.getElementById(`fs-zoom-reset`);function _(e){n=Math.min(Math.max(e,.7),2.2),i&&(i.style.transform=`scale(${n})`,i.style.transformOrigin=`center center`)}function v(e){r=Math.min(Math.max(e,.8),2.8),a&&(a.style.transform=`scale(${r})`,a.style.transformOrigin=`center center`)}l&&l.addEventListener(`click`,()=>_(n+.2)),u&&u.addEventListener(`click`,()=>_(n-.2)),d&&d.addEventListener(`click`,()=>_(1)),m&&m.addEventListener(`click`,()=>v(r+.25)),h&&h.addEventListener(`click`,()=>v(r-.25)),g&&g.addEventListener(`click`,()=>v(1)),f&&c&&f.addEventListener(`click`,()=>{c.style.display=`flex`,document.body.style.overflow=`hidden`,v(1)}),p&&c&&p.addEventListener(`click`,()=>{c.style.display=`none`,document.body.style.overflow=``});function y(n){let r=t.find(e=>e.id===n);r&&(o&&(o.innerHTML=M(r,e.name,!1),o.classList.add(`mobile-open`),b()),s&&(s.innerHTML=M(r,e.name,!0),s.style.display=`block`,b()),document.querySelectorAll(`.plot-item`).forEach(e=>{let t=e.getAttribute(`data-plot-id`)===n,r=e.querySelector(`.plot-rect`),i=e.querySelector(`.plot-num-text`),a=e.getAttribute(`data-status`);if(t)e.classList.add(`plot-selected`),r&&(r.setAttribute(`fill`,`#38BDF8`),r.setAttribute(`stroke`,`#0284C7`),r.setAttribute(`stroke-width`,`3`),r.setAttribute(`filter`,`url(#mp-glow)`)),i&&(i.setAttribute(`fill`,`#082F49`),i.setAttribute(`font-weight`,`800`));else{e.classList.remove(`plot-selected`);let t=`url(#mp-plot-avail)`,n=`#15803D`,o=`#14532D`;a===`reserved`?(t=`url(#mp-plot-res)`,n=`#B45309`,o=`#78350F`):a===`sold`&&(t=`url(#mp-plot-sold)`,n=`#B91C1C`,o=`#7F1D1D`),r&&(r.setAttribute(`fill`,t),r.setAttribute(`stroke`,n),r.setAttribute(`stroke-width`,`1.2`),r.removeAttribute(`filter`)),i&&(i.setAttribute(`fill`,o),i.setAttribute(`font-weight`,`700`))}}))}document.querySelectorAll(`.plot-item`).forEach(e=>{e.addEventListener(`click`,t=>{y(e.getAttribute(`data-plot-id`))})});function b(){let e=document.getElementById(`mp-details-close`),t=document.getElementById(`fs-details-close`);e&&e.addEventListener(`click`,()=>{o&&o.classList.remove(`mobile-open`)}),t&&t.addEventListener(`click`,()=>{s&&(s.style.display=`none`)})}b();let x=document.getElementById(`filter-size`),S=document.getElementById(`filter-budget`),C=document.getElementById(`filter-facing`),w=document.getElementById(`filter-road`),E=document.getElementById(`avail-available`),D=document.getElementById(`avail-reserved`),O=document.getElementById(`avail-sold`),k=document.getElementById(`mp-apply-btn`),A=document.getElementById(`mp-filter-reset`);function j(){let e=x?x.value:`all`,t=S?S.value:`all`,n=C?C.value:`all`,r=w?w.value:`all`,i=[];E&&E.checked&&i.push(`available`),D&&D.checked&&i.push(`reserved`),O&&O.checked&&i.push(`sold`),document.querySelectorAll(`.plot-item`).forEach(a=>{let o=parseInt(a.getAttribute(`data-size`),10),s=a.getAttribute(`data-facing`),c=a.getAttribute(`data-road`),l=a.getAttribute(`data-status`),u=!0;e!==`all`&&o!==parseInt(e,10)&&(u=!1),n!==`all`&&s!==n&&(u=!1),r!==`all`&&c!==r&&(u=!1),i.length>0&&!i.includes(l)&&(u=!1),t===`30`&&o>180&&(u=!1),t===`35`&&(o<200||o>220)&&(u=!1),t===`40`&&o<250&&(u=!1),u?(a.style.opacity=`1`,a.style.pointerEvents=`auto`):(a.style.opacity=`0.15`,a.style.pointerEvents=`none`)})}k&&k.addEventListener(`click`,j),A&&A.addEventListener(`click`,()=>{x&&(x.value=`all`),S&&(S.value=`all`),C&&(C.value=`all`),w&&(w.value=`all`),E&&(E.checked=!0),D&&(D.checked=!1),O&&(O.checked=!1),j()})}function P(t){let n=S[t]||S[`vr-prime-meadows`],r=n.stats.map(e=>`
    <div class="pstat-item">
      <div class="pstat-icon">${F(e.icon)}</div>
      <div class="pstat-content">
        ${e.isText?``:`<span class="pstat-val">${e.value}</span>`}
        <span class="pstat-lbl">${e.label}</span>
      </div>
    </div>
  `).join(``),i=n.highlights.map(e=>`
    <div class="highlight-card">
      <div class="highlight-icon">${I(e.icon)}</div>
      <span class="highlight-title">${e.title}</span>
    </div>
  `).join(``),a=n.advantages.map(e=>`
    <div class="advantage-card">
      <div class="adv-icon">${I(e.icon)}</div>
      <span class="adv-title">${e.title}</span>
    </div>
  `).join(``),o=``;n.configurations&&n.configurations.length>0&&(o=`
      <section class="project-config-section" id="configurations-section">
        <div class="ref-container">
          <div class="detail-section-title-wrap">
            <h3 class="detail-section-title">Available Configurations & Floor Plans</h3>
            <p class="detail-section-sub">Choose from carefully crafted unit plans tailored for luxury, comfort and high value.</p>
          </div>
          <div class="config-grid">
            ${n.configurations.map((e,t)=>`
      <div class="config-card">
        <div class="config-card-header">
          <span class="config-badge">${e.plotSize}</span>
          <h4 class="config-title">${e.type}</h4>
          <div class="config-size">${e.size} &bull; ${e.facing}</div>
        </div>
        <div class="config-features">
          ${e.features.map(e=>`<div class="cfg-feature-item"><span class="cfg-check">✓</span><span>${e}</span></div>`).join(``)}
        </div>
        <div class="config-footer">
          <div class="cfg-price">
            <span class="cfg-price-lbl">Starting from</span>
            <span class="cfg-price-val">${e.price}</span>
          </div>
          <button class="cfg-btn" onclick="window.openSiteVisitModal('${n.name} - ${e.type}')">Enquire Now</button>
        </div>
      </div>
    `).join(``)}
          </div>
        </div>
      </section>
    `);let s=n.connectivity.distances.map(e=>`
    <div class="distance-row">
      <div class="dist-left">
        <span class="dist-icon">${L(e.icon)}</span>
        <span class="dist-name">${e.destination}</span>
      </div>
      <div class="dist-right">
        <span class="dist-km">${e.distance}</span>
        <span class="dist-time">(${e.time})</span>
      </div>
    </div>
  `).join(``),c=n.gallery.thumbnails.map((e,t)=>`
    <div class="gallery-thumb-item" data-idx="${t}">
      <img src="${e.img}" alt="${e.title}" loading="lazy" />
      <span class="gallery-thumb-caption">${e.title}</span>
    </div>
  `).join(``);return{html:`
    ${e()}

    <main class="project-detail-main">
      
      <!-- Top Breadcrumbs & Project Hero Banner -->
      <section class="project-hero-header">
        <div class="ref-container">
          
          <!-- Breadcrumbs -->
          <nav class="p-breadcrumbs" aria-label="Breadcrumbs">
            <a href="#/">Home</a>
            <span class="p-sep">&gt;</span>
            <a href="${n.categoryLink}">${n.category}</a>
            <span class="p-sep">&gt;</span>
            <span class="p-current">${n.name}</span>
          </nav>

          <!-- Main Hero Content Row -->
          <div class="p-hero-row">
            
            <!-- Left Info -->
            <div class="p-hero-info">
              <h1 class="p-hero-title">${n.name}</h1>
              <p class="p-hero-location">${n.tagline}</p>
              <p class="p-hero-desc">${n.subtitle}</p>

              <!-- Verification Badges -->
              <div class="p-hero-badges">
                ${n.badges.map(e=>`
                  <span class="p-badge">
                    <span class="p-badge-icon">✓</span>
                    <span>${e.text}</span>
                  </span>
                `).join(``)}
              </div>
            </div>

            <!-- Right Script Flourish & Quick Stats -->
            <div class="p-hero-right-flourish">
              <div class="script-callout">
                <span class="script-text">${n.scriptCallout}</span>
                <svg class="script-underline" width="160" height="12" viewBox="0 0 160 12" fill="none">
                  <path d="M2 9C50 2 110 3 158 8" stroke="#1A3B2B" stroke-width="2.2" stroke-linecap="round"/>
                </svg>
              </div>

              <!-- Stats Strip Grid -->
              <div class="p-stats-strip">
                ${r}
              </div>
            </div>

          </div>

          <!-- Project Section Tabs Navigation -->
          <div class="p-tabs-nav-bar">
            <div class="p-tabs-list" id="p-tabs-list">
              ${n.tabs.map(e=>`
                <a href="#${e.id}-section" class="p-tab-btn ${e.active?`active`:``}" data-tab="${e.id}">
                  ${e.label}
                </a>
              `).join(``)}
            </div>
          </div>

        </div>
      </section>

      <!-- Plot Master Plan (For VR Prime Meadows) or Overview Configurations -->
      ${n.hasMasterPlan?A(n):o}

      <!-- Project Highlights Section -->
      <section class="detail-section highlights-section" id="amenities-section">
        <div class="ref-container">
          <div class="detail-section-header">
            <h3 class="detail-section-title">Project Highlights</h3>
            <a href="#/contact" class="detail-see-all-mob">See All &rarr;</a>
          </div>

          <div class="highlights-grid">
            ${i}
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
            ${a}
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
                    ${ee(n.name)}
                  </div>
                </div>

                <!-- Distance from Major Locations Table -->
                <div class="distance-table-wrap">
                  <h4 class="dist-table-heading">Distance from Major Locations</h4>
                  <div class="distance-list">
                    ${s}
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
                  <img src="${n.gallery.featured.img}" alt="${n.gallery.featured.title}" class="gallery-featured-img" />
                  <div class="gallery-featured-caption">${n.gallery.featured.title}</div>
                </div>

                <!-- 2x2 Grid Thumbnails -->
                <div class="gallery-thumbs-grid">
                  ${c}
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
              <h2 class="cta-banner-headline">${n.cta.headline}</h2>
              <p class="cta-banner-sub">${n.cta.subtitle}</p>
            </div>
            <div class="cta-banner-action">
              <button class="cta-banner-gold-btn" onclick="window.openSiteVisitFlow ? window.openSiteVisitFlow({ projectName: '${n.name}', unitName: 'Plot Selection', location: 'Shadnagar, Hyderabad', price: '₹ 32,00,000', image: '/images/journey/gallery_entrance.jpg', thumb: '/images/journey/gallery_entrance.jpg' }, 'form') : window.openSiteVisitModal('${n.name}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                <span>${n.cta.btnText}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Bottom 3-Feature Value Strip -->
      <section class="project-bottom-strip-section">
        <div class="ref-container">
          <div class="bottom-strip-grid">
            ${n.footerPoints.map(e=>`
              <div class="bstrip-item">
                <div class="bstrip-icon-wrap">${I(e.icon)}</div>
                <div class="bstrip-info">
                  <h4 class="bstrip-title">${e.title}</h4>
                  <p class="bstrip-desc">${e.desc}</p>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      </section>

    </main>

    ${p()}
  `,init:()=>{n.hasMasterPlan&&N(n);let e=document.querySelectorAll(`.p-tab-btn`);e.forEach(t=>{t.addEventListener(`click`,n=>{e.forEach(e=>e.classList.remove(`active`)),t.classList.add(`active`)})})}}}function ee(e){return`
    <div style="width: 100%; height: 100%; min-height: 240px; display: flex; align-items: center; justify-content: center; background: #F8FAFC; border-radius: 10px; overflow: hidden;">
      <img src="/images/journey/plot_location_map.jpg" alt="${e} Location & Connectivity" style="width: 100%; height: 100%; max-height: 280px; object-fit: contain; display: block;" />
    </div>
  `}function F(e){switch(e){case`land`:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="m21 16-4 4-5-5-6 6M3 21h18M3 10l5 5 4-4 8 8"/></svg>`;case`grid`:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`;case`tree`:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="M12 22v-8M7 14l5-5 5 5M8 10l4-4 4 4M9 6l3-3 3 3"/></svg>`;case`clubhouse`:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>`;case`road`:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><path d="M4 19L8 5m8 14l4-14M12 7v3m0 4v3"/></svg>`;case`play`:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><circle cx="12" cy="5" r="3"/><path d="M12 8v8M8 12h8M9 20l3-4 3 4"/></svg>`;default:return`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="1.8"><circle cx="12" cy="12" r="9"/></svg>`}}function I(e){switch(e){case`shield-check`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;case`gate`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><rect x="3" y="4" width="4" height="16"/><rect x="17" y="4" width="4" height="16"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="17" y2="12"/><line x1="7" y1="16" x2="17" y2="16"/></svg>`;case`arch`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M4 21V10a8 8 0 0 1 16 0v11M2 21h20"/></svg>`;case`road-wide`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M4 19L8 5m8 14l4-14M10 9h4m-5 6h6"/></svg>`;case`tree-park`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22v-6M8 12c-2 0-3-1-3-3s2-4 4-4c1-2 3-3 5-3s4 1 5 3c2 0 4 2 4 4s-1 3-3 3H8z"/></svg>`;case`club-house`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M10 9h4v4h-4z"/></svg>`;case`play-area`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="5" r="2.5"/><path d="M12 7.5v7m-4-4 8 2M9 20l3-5.5 3 5.5"/></svg>`;case`dumbbell`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M6 5v14M18 5v14M2 9v6M22 9v6M6 12h12"/></svg>`;case`pipe`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M3 7h6a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4h4M3 11h4a4 4 0 0 1 4 4v2M17 17h4"/></svg>`;case`leaf-row`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`;case`pin-star`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`;case`leaf`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>`;case`compass-grid`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`;case`doc-check`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="m9 15 2 2 4-4"/></svg>`;case`chart-up`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;case`shield-lock`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="12" r="2"/></svg>`;case`home-heart`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M12 11c-1.5-1.5-3.5 0-3.5 1.5 0 2 3.5 4.5 3.5 4.5s3.5-2.5 3.5-4.5c0-1.5-2-3-3.5-1.5z"/></svg>`;case`award`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`;case`target`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`;case`sparkle`:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"/></svg>`;default:return`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3B2B" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`}}function L(e){switch(e){case`plane`:return`✈️`;case`bus`:return`🚌`;case`building`:return`🏢`;case`road`:return`🛣️`;case`hospital`:return`🏥`;case`school`:return`🎓`;case`shopping`:return`🛍️`;default:return`📍`}}var R=`listing`,z=`all`,B=`Tower A`,V=`7th Floor`,H={id:`A-704`,unitName:`A-704 · 3 BHK`,projectName:`VR Elite Towers`,location:`Kokapet, Hyderabad`,price:`₹ 1.25 Cr`,priceSub:`(All inclusive)`,size:`1,450 Sq.Ft.`,superBuiltUp:`1,450 Sq.Ft.`,floor:`7th Floor`,facing:`East Facing`,bedrooms:`3 Bedrooms`,bathrooms:`3 Bathrooms`,balconies:`2 Balconies`,status:`Available`,heroImage:`/images/journey/apt_overview_hero.jpg`,thumb:`/images/journey/apt_elite_towers.jpg`,activeRoom:`Living Room`},U=[{id:`vr-elite-towers`,name:`VR Elite Towers`,location:`Kokapet, Hyderabad`,price:`₹ 75 Lakhs*`,bhk:`2 & 3 BHK`,image:`/images/journey/apt_elite_towers.jpg`,rera:`RERA Approved`,area:`5 Acres`,towers:`3 Towers`,floors:`G+20 Floors`,amenities:`World Class Amenities`},{id:`vr-urban-heights`,name:`VR Urban Heights`,location:`Nallagandla, Hyderabad`,price:`₹ 68 Lakhs*`,bhk:`2 & 3 BHK`,image:`/images/journey/apt_urban_heights.jpg`,rera:`RERA Approved`,area:`4 Acres`,towers:`2 Towers`,floors:`G+18 Floors`,amenities:`World Class Amenities`},{id:`vr-lake-view`,name:`VR Lake View Residency`,location:`Patancheru, Hyderabad`,price:`₹ 62 Lakhs*`,bhk:`2 & 3 BHK`,image:`/images/journey/apt_lake_view.jpg`,rera:`RERA Approved`,area:`3.5 Acres`,towers:`2 Towers`,floors:`G+15 Floors`,amenities:`World Class Amenities`}],W=[{id:`A-701`,name:`A-701`,type:`2 BHK`,size:`1,200 Sq.Ft.`,price:`₹ 95 Lakhs`,status:`available`,facing:`North Facing`,beds:`2 Bedrooms`,baths:`2 Bathrooms`,balconies:`1 Balcony`},{id:`A-702`,name:`A-702`,type:`3 BHK`,size:`1,450 Sq.Ft.`,price:`₹ 1.20 Cr`,status:`available`,facing:`East Facing`,beds:`3 Bedrooms`,baths:`3 Bathrooms`,balconies:`2 Balconies`},{id:`A-703`,name:`A-703`,type:`3 BHK`,size:`1,500 Sq.Ft.`,price:`₹ 1.28 Cr`,status:`available`,facing:`West Facing`,beds:`3 Bedrooms`,baths:`3 Bathrooms`,balconies:`2 Balconies`},{id:`A-704`,name:`A-704`,type:`3 BHK`,size:`1,450 Sq.Ft.`,price:`₹ 1.25 Cr`,status:`available`,facing:`East Facing`,beds:`3 Bedrooms`,baths:`3 Bathrooms`,balconies:`2 Balconies`,selected:!0},{id:`A-705`,name:`A-705`,type:`2 BHK`,size:`1,220 Sq.Ft.`,price:`₹ 98 Lakhs`,status:`available`,facing:`North Facing`,beds:`2 Bedrooms`,baths:`2 Bathrooms`,balconies:`1 Balcony`},{id:`A-706`,name:`A-706`,type:`3 BHK`,size:`1,480 Sq.Ft.`,price:`₹ 1.24 Cr`,status:`available`,facing:`South Facing`,beds:`3 Bedrooms`,baths:`3 Bathrooms`,balconies:`2 Balconies`}],G={"Living Room":{image:`/images/journey/room_living.jpg`,desc:`Spacious living area with large windows and natural light.`},Kitchen:{image:`/images/journey/room_thumb_1.jpg`,desc:`Modern modular kitchen with granite platform and premium fittings.`},"Master Bedroom":{image:`/images/journey/room_thumb_2.jpg`,desc:`Lavish master bedroom with attached bathroom and wooden flooring.`},"Bedroom 2":{image:`/images/journey/room_thumb_3.jpg`,desc:`Comfortable guest/family bedroom with ample ventilation and wardrobe space.`},Bathroom:{image:`/images/journey/room_thumb_4.jpg`,desc:`Contemporary branded sanitary ware with anti-skid ceramic tiling.`},Balcony:{image:`/images/journey/room_thumb_5.jpg`,desc:`Scenic open balcony overlooking landscaped gardens and city skyline.`}};function K(n=`listing`){return R=n,{html:`
    <div class="apartments-journey-wrapper" id="apartments-journey-root">
      ${e({currentPath:`#/apartments`})}
      <main class="apt-main-content" id="apt-screen-host">
        ${q()}
      </main>
      ${p()}
    </div>
  `,init:()=>{t(),m(),ie()}}}function q(){switch(R){case`overview`:return Y();case`floorplan`:return X();case`details`:return te();case`enquiry`:return ne();case`success`:return re();default:return J()}}function J(){let e=U.filter(e=>z===`2bhk`?e.bhk.includes(`2`):z!==`3bhk`||e.bhk.includes(`3`)).map(e=>`
    <div class="apt-project-card" data-project="${e.id}">
      <div class="apt-card-img-wrap">
        <img src="${e.image}" alt="${e.name}" class="apt-card-img" />
      </div>
      <div class="apt-card-info">
        <div class="apt-card-loc">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${e.location}
        </div>
        <h3 class="apt-card-title">${e.name}</h3>
        <div class="apt-card-price-row">
          <div class="apt-card-price">${e.price}</div>
          <div class="apt-card-bhk">${e.bhk}</div>
        </div>
        <button type="button" class="apt-view-details-btn" onclick="window.navApartmentScreen('overview', '${e.id}')">
          <span>View Details</span>
          <span class="btn-arrow">&rarr;</span>
        </button>
      </div>
    </div>
  `).join(``);return`
    <section class="apt-listing-section">
      <div class="apt-container">
        <!-- Main Heading matching Reference Screen 1 -->
        <div class="apt-listing-header">
          <span class="apt-eyebrow">Apartments</span>
          <h1 class="apt-main-heading">Modern Homes for a Better Lifestyle</h1>
          <p class="apt-subtext">2 & 3 BHK apartments with world-class amenities in prime locations.</p>
          
          <!-- Filter Tabs -->
          <div class="apt-filter-tabs">
            <button class="apt-tab-btn ${z===`all`?`active`:``}" onclick="window.filterApartments('all')">
              All Projects
            </button>
            <button class="apt-tab-btn ${z===`2bhk`?`active`:``}" onclick="window.filterApartments('2bhk')">
              2 BHK
            </button>
            <button class="apt-tab-btn ${z===`3bhk`?`active`:``}" onclick="window.filterApartments('3bhk')">
              3 BHK
            </button>
          </div>
        </div>

        <!-- Project Cards Grid -->
        <div class="apt-cards-grid">
          ${e}
        </div>
      </div>
    </section>
  `}function Y(){let e=U[0];return`
    <section class="apt-overview-section">
      <div class="apt-container">
        <!-- Breadcrumb & Back -->
        <div class="apt-nav-trail">
          <button type="button" class="apt-trail-back" onclick="window.navApartmentScreen('listing')">
            &larr; Back
          </button>
          <div class="apt-breadcrumb">
            <span>Home</span> &gt; <span>Projects</span> &gt; <strong>${e.name}</strong>
          </div>
        </div>

        <!-- Project Header Title & RERA -->
        <div class="apt-overview-title-block">
          <div>
            <h1 class="apt-overview-title">${e.name}</h1>
            <div class="apt-overview-loc">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${e.location}
            </div>
          </div>
          <div class="apt-rera-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#15803D" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>RERA Approved</span>
          </div>
        </div>

        <!-- Hero Showcase with Carousel Arrows -->
        <div class="apt-hero-showcase">
          <div class="apt-hero-main-img-wrap">
            <img src="${e.image}" alt="${e.name}" class="apt-hero-main-img" id="apt-overview-main-img" />
            <button type="button" class="apt-carousel-nav prev" aria-label="Previous image">&lsaquo;</button>
            <button type="button" class="apt-carousel-nav next" aria-label="Next image">&rsaquo;</button>
          </div>
          
          <!-- Image Thumbnails below -->
          <div class="apt-overview-thumbs">
            <img src="/images/journey/overview_thumb_1.jpg" class="apt-ov-thumb active" onclick="document.getElementById('apt-overview-main-img').src=this.src" />
            <img src="/images/journey/overview_thumb_2.jpg" class="apt-ov-thumb" onclick="document.getElementById('apt-overview-main-img').src=this.src" />
            <img src="/images/journey/overview_thumb_3.jpg" class="apt-ov-thumb" onclick="document.getElementById('apt-overview-main-img').src=this.src" />
            <img src="/images/journey/overview_thumb_4.jpg" class="apt-ov-thumb" onclick="document.getElementById('apt-overview-main-img').src=this.src" />
          </div>
        </div>

        <!-- Stats Grid (Configurations, Project Area, Towers, Amenities) -->
        <div class="apt-stats-strip">
          <div class="apt-stat-box">
            <div class="stat-value">2 &amp; 3 BHK</div>
            <div class="stat-label">Configurations</div>
          </div>
          <div class="apt-stat-box">
            <div class="stat-value">5 Acres</div>
            <div class="stat-label">Project Area</div>
          </div>
          <div class="apt-stat-box">
            <div class="stat-value">3 Towers</div>
            <div class="stat-label">G+20 Floors</div>
          </div>
          <div class="apt-stat-box">
            <div class="stat-value">World Class</div>
            <div class="stat-label">Amenities</div>
          </div>
        </div>

        <!-- Sub Tabs -->
        <div class="apt-sub-tabs">
          <button class="apt-sub-tab active">Overview</button>
          <button class="apt-sub-tab">Amenities</button>
          <button class="apt-sub-tab">Location</button>
          <button class="apt-sub-tab">Gallery</button>
          <button class="apt-sub-tab" onclick="window.navApartmentScreen('floorplan')">Floor Plan</button>
        </div>

        <!-- About Project Section -->
        <div class="apt-about-block">
          <h2 class="apt-about-title">About the Project</h2>
          <p class="apt-about-text">
            VR Elite Towers is a premium residential community in the heart of Kokapet, offering spacious 2 &amp; 3 BHK apartments with modern amenities, excellent connectivity, and a lifestyle designed for the future.
          </p>

          <div class="apt-overview-actions">
            <button type="button" class="apt-btn-primary" onclick="window.navApartmentScreen('floorplan')">
              <span>View Floor Plan</span>
              <span class="btn-arrow">&rarr;</span>
            </button>
            <button type="button" class="apt-btn-outline" onclick="alert('Downloading VR Elite Towers Brochure...')">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>Download Brochure</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  `}function X(){return`
    <section class="apt-floorplan-section">
      <div class="apt-container">
        <!-- Breadcrumb -->
        <div class="apt-nav-trail">
          <button type="button" class="apt-trail-back" onclick="window.navApartmentScreen('overview')">
            &larr; Back
          </button>
          <div class="apt-breadcrumb">
            <span>Home</span> &gt; <span>VR Elite Towers</span> &gt; <strong>Floor Plan</strong>
          </div>
        </div>

        <h1 class="apt-screen-title">Floor Plan</h1>

        <!-- Selectors Row -->
        <div class="apt-fp-selectors">
          <div class="apt-select-box">
            <label class="apt-sel-label">Select Tower</label>
            <div class="apt-sel-wrap">
              <select id="fp-select-tower" onchange="window.changeTower(this.value)">
                <option value="Tower A" ${B===`Tower A`?`selected`:``}>Tower A</option>
                <option value="Tower B">Tower B</option>
                <option value="Tower C">Tower C</option>
              </select>
            </div>
          </div>

          <div class="apt-select-box">
            <label class="apt-sel-label">Select Floor</label>
            <div class="apt-sel-wrap">
              <select id="fp-select-floor" onchange="window.changeFloor(this.value)">
                <option value="7th Floor" ${V===`7th Floor`?`selected`:``}>7th Floor</option>
                <option value="6th Floor">6th Floor</option>
                <option value="5th Floor">5th Floor</option>
                <option value="4th Floor">4th Floor</option>
                <option value="3rd Floor">3rd Floor</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Legend Bar -->
        <div class="apt-fp-legend">
          <div class="leg-item"><span class="leg-dot avail"></span> Available</div>
          <div class="leg-item"><span class="leg-dot booked"></span> Booked</div>
          <div class="leg-item"><span class="leg-dot hold"></span> On Hold</div>
        </div>

        <!-- Interactive Apartment Floor Plan Stage -->
        <div class="apt-fp-stage-card">
          <!-- Compass Arrow North -->
          <div class="apt-fp-compass">
            <div class="compass-n">N</div>
            <div class="compass-arr">&uarr;</div>
          </div>

          <!-- Floor Plan Layout with Exact Units (A-701 to A-706) -->
          <div class="apt-fp-blueprint-wrap">
            <div class="apt-blueprint-grid">
              
              <!-- Top Row: A-701, A-702, A-703 -->
              <div class="bp-row top-row">
                <button type="button" class="bp-unit-btn ${H.id===`A-701`?`selected`:``}" onclick="window.selectFloorUnit('A-701')">
                  <div class="bp-u-code">A-701</div>
                  <div class="bp-u-type">2 BHK</div>
                </button>
                <button type="button" class="bp-unit-btn ${H.id===`A-702`?`selected`:``}" onclick="window.selectFloorUnit('A-702')">
                  <div class="bp-u-code">A-702</div>
                  <div class="bp-u-type">3 BHK</div>
                </button>
                <button type="button" class="bp-unit-btn ${H.id===`A-703`?`selected`:``}" onclick="window.selectFloorUnit('A-703')">
                  <div class="bp-u-code">A-703</div>
                  <div class="bp-u-type">3 BHK</div>
                </button>
              </div>

              <!-- Central Core (Lifts, Lobby & Corridor) -->
              <div class="bp-core-row">
                <div class="bp-core-shaft">
                  <span class="core-icon">&#9632;&#9632;</span>
                  <span class="core-lbl">LIFTS &amp; LOBBY</span>
                </div>
              </div>

              <!-- Bottom Row: A-704 (Selected/Active Highlight), A-705, A-706 -->
              <div class="bp-row bottom-row">
                <button type="button" class="bp-unit-btn highlight-gold ${H.id===`A-704`?`selected`:``}" onclick="window.selectFloorUnit('A-704')">
                  <div class="bp-u-code">A-704</div>
                  <div class="bp-u-type">3 BHK</div>
                </button>
                <button type="button" class="bp-unit-btn ${H.id===`A-705`?`selected`:``}" onclick="window.selectFloorUnit('A-705')">
                  <div class="bp-u-code">A-705</div>
                  <div class="bp-u-type">2 BHK</div>
                </button>
                <button type="button" class="bp-unit-btn ${H.id===`A-706`?`selected`:``}" onclick="window.selectFloorUnit('A-706')">
                  <div class="bp-u-code">A-706</div>
                  <div class="bp-u-type">3 BHK</div>
                </button>
              </div>

            </div>
          </div>

          <div class="apt-fp-hint">
            Click on a unit to view details
          </div>
        </div>

      </div>
    </section>
  `}function te(){let e=H.activeRoom||`Living Room`,t=G[e]||G[`Living Room`];return`
    <section class="apt-details-section">
      <div class="apt-container">
        <!-- Breadcrumb -->
        <div class="apt-nav-trail">
          <button type="button" class="apt-trail-back" onclick="window.navApartmentScreen('floorplan')">
            &larr; Back
          </button>
          <div class="apt-breadcrumb">
            <span>Home</span> &gt; <span>VR Elite Towers</span> &gt; <span>Tower A</span> &gt; <strong>${H.id}</strong>
          </div>
        </div>

        <!-- Main Showcase Area with Left Vertical Room Selector -->
        <div class="apt-rooms-studio">
          <!-- Room Navigation Sidebar -->
          <div class="apt-room-nav">
            <button type="button" class="room-nav-item ${e===`Living Room`?`active`:``}" onclick="window.switchRoom('Living Room')">
              <span class="room-nav-icon">&#9634;</span>
              <span class="room-nav-text">Living Room</span>
            </button>
            <button type="button" class="room-nav-item ${e===`Kitchen`?`active`:``}" onclick="window.switchRoom('Kitchen')">
              <span class="room-nav-icon">&#9635;</span>
              <span class="room-nav-text">Kitchen</span>
            </button>
            <button type="button" class="room-nav-item ${e===`Master Bedroom`?`active`:``}" onclick="window.switchRoom('Master Bedroom')">
              <span class="room-nav-icon">&#9636;</span>
              <span class="room-nav-text">Master Bedroom</span>
            </button>
            <button type="button" class="room-nav-item ${e===`Bedroom 2`?`active`:``}" onclick="window.switchRoom('Bedroom 2')">
              <span class="room-nav-icon">&#9637;</span>
              <span class="room-nav-text">Bedroom 2</span>
            </button>
            <button type="button" class="room-nav-item ${e===`Bathroom`?`active`:``}" onclick="window.switchRoom('Bathroom')">
              <span class="room-nav-icon">&#9638;</span>
              <span class="room-nav-text">Bathroom</span>
            </button>
            <button type="button" class="room-nav-item ${e===`Balcony`?`active`:``}" onclick="window.switchRoom('Balcony')">
              <span class="room-nav-icon">&#9639;</span>
              <span class="room-nav-text">Balcony</span>
            </button>
          </div>

          <!-- Room Visual Display -->
          <div class="apt-room-viewport">
            <div class="apt-room-img-wrap">
              <img src="${t.image}" alt="${e}" class="apt-room-display-img" id="apt-room-display-img" />
            </div>
            
            <div class="apt-room-info-meta">
              <h3 class="apt-room-title">${e}</h3>
              <p class="apt-room-desc">${t.desc}</p>
            </div>

            <!-- Room Thumbnails row -->
            <div class="apt-room-thumbs-row">
              <img src="/images/journey/room_living.jpg" class="r-thumb ${e===`Living Room`?`active`:``}" onclick="window.switchRoom('Living Room')" />
              <img src="/images/journey/room_thumb_1.jpg" class="r-thumb ${e===`Kitchen`?`active`:``}" onclick="window.switchRoom('Kitchen')" />
              <img src="/images/journey/room_thumb_2.jpg" class="r-thumb ${e===`Master Bedroom`?`active`:``}" onclick="window.switchRoom('Master Bedroom')" />
              <img src="/images/journey/room_thumb_3.jpg" class="r-thumb ${e===`Bedroom 2`?`active`:``}" onclick="window.switchRoom('Bedroom 2')" />
              <img src="/images/journey/room_thumb_4.jpg" class="r-thumb ${e===`Bathroom`?`active`:``}" onclick="window.switchRoom('Bathroom')" />
              <img src="/images/journey/room_thumb_5.jpg" class="r-thumb ${e===`Balcony`?`active`:``}" onclick="window.switchRoom('Balcony')" />
            </div>
          </div>
        </div>

        <!-- Property Information Card -->
        <div class="apt-details-card">
          <div class="apt-detail-top-row">
            <div>
              <h2 class="apt-detail-unit-title">${H.unitName}</h2>
              <div class="apt-detail-price">${H.price} <span class="sub">${H.priceSub}</span></div>
            </div>
            <span class="apt-detail-avail-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
              Available
            </span>
          </div>

          <!-- Specs List -->
          <div class="apt-detail-specs-grid">
            <div class="d-spec"><span class="icon">&#9633;</span> <strong>${H.superBuiltUp}</strong> Super Built-up</div>
            <div class="d-spec"><span class="icon">&#9671;</span> <strong>${H.floor}</strong> Floor No.</div>
            <div class="d-spec"><span class="icon">&#9684;</span> <strong>${H.facing}</strong> Facing</div>
            <div class="d-spec"><span class="icon">&#9646;</span> <strong>${H.bedrooms}</strong></div>
            <div class="d-spec"><span class="icon">&#9647;</span> <strong>${H.bathrooms}</strong></div>
            <div class="d-spec"><span class="icon">&#9648;</span> <strong>${H.balconies}</strong></div>
          </div>

          <!-- Action Buttons (Send Enquiry, Book Site Visit, Google Maps) -->
          <div class="apt-detail-actions">
            <button type="button" class="apt-action-btn primary" onclick="window.navApartmentScreen('enquiry')">
              <span>Send Enquiry</span>
              <span class="arr">&rarr;</span>
            </button>

            <button type="button" class="apt-action-btn secondary" onclick="window.bookApartmentSiteVisit()">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Book Site Visit</span>
            </button>

            <a href="https://maps.google.com/?q=Kokapet+Hyderabad" target="_blank" rel="noopener" class="apt-action-btn outline">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>View on Google Maps</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  `}function ne(){return`
    <section class="apt-enquiry-section">
      <div class="apt-container-narrow">
        <!-- Top Nav -->
        <div class="apt-nav-trail">
          <button type="button" class="apt-trail-back" onclick="window.navApartmentScreen('details')">
            &larr; Back
          </button>
        </div>

        <div class="apt-enquiry-card">
          <div class="apt-enquiry-header">
            <h1 class="apt-enquiry-title">Send Enquiry</h1>
            <p class="apt-enquiry-subtitle">Get in touch with our team. We will call you shortly.</p>
          </div>

          <!-- Form Body -->
          <form id="apt-enquiry-form" class="apt-enquiry-form" onsubmit="window.handleApartmentEnquirySubmit(event)">
            <div class="apt-field-group">
              <label class="apt-label" for="apt-name">Full Name *</label>
              <input type="text" id="apt-name" class="apt-input" placeholder="Enter your name" required />
            </div>

            <div class="apt-field-group">
              <label class="apt-label" for="apt-mobile">Mobile Number *</label>
              <input type="tel" id="apt-mobile" class="apt-input" placeholder="Enter mobile number" maxlength="10" required />
            </div>

            <div class="apt-field-group">
              <label class="apt-label" for="apt-email">Email</label>
              <input type="email" id="apt-email" class="apt-input" placeholder="Enter your email" />
            </div>

            <div class="apt-field-group">
              <label class="apt-label" for="apt-message">Message (Optional)</label>
              <textarea id="apt-message" class="apt-textarea" rows="3">I am interested in ${H.id} (${H.type||`3 BHK`}) at ${H.projectName}. Please share more details.</textarea>
            </div>

            <!-- Selected Property Details Card (Carried automatically) -->
            <div class="apt-selected-prop-card">
              <div class="sel-prop-label">Selected Property Details</div>
              <div class="sel-prop-row">
                <img src="${H.thumb||`/images/journey/apt_elite_towers.jpg`}" alt="${H.projectName}" class="sel-prop-thumb" />
                <div class="sel-prop-meta">
                  <div class="sel-prop-title">${H.unitName}</div>
                  <div class="sel-prop-project">${H.projectName}</div>
                  <div class="sel-prop-loc">${H.location}</div>
                  <div class="sel-prop-price">${H.price}</div>
                </div>
              </div>
            </div>

            <button type="submit" class="apt-submit-enquiry-btn">
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  `}function re(){return`
    <section class="apt-success-section">
      <div class="apt-container-narrow">
        <div class="apt-success-card">
          <!-- Green Success Check Circle -->
          <div class="apt-success-check-wrap">
            <div class="apt-success-circle">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
          </div>

          <h1 class="apt-success-heading">Enquiry Submitted!</h1>
          <p class="apt-success-sub">Thank you for your interest.<br/>Our team will contact you shortly.</p>

          <!-- What Happens Next? 3 Steps -->
          <div class="apt-what-next-box">
            <h3 class="what-next-title">What happens next?</h3>

            <div class="what-next-step">
              <div class="step-num">1</div>
              <div class="step-desc">Our team will review your details.</div>
            </div>

            <div class="what-next-step">
              <div class="step-num">2</div>
              <div class="step-desc">You will receive a call from our sales team.</div>
            </div>

            <div class="what-next-step">
              <div class="step-num">3</div>
              <div class="step-desc">Get ready to explore your dream home!</div>
            </div>
          </div>

          <button type="button" class="apt-back-project-btn" onclick="window.navApartmentScreen('overview')">
            Back to Project
          </button>

          <!-- Bottom Foliage Artwork Pattern (from reference screenshot) -->
          <div class="apt-success-foliage-wrap">
            <img src="/images/journey/success_leaves_bg.png" alt="VR Real Estates" class="apt-success-leaves" />
          </div>
        </div>
      </div>
    </section>
  `}function ie(){window.navApartmentScreen=(e,t=null)=>{R=e,window.scrollTo({top:0,behavior:`smooth`});let n=document.getElementById(`apt-screen-host`);n&&(n.innerHTML=q())},window.filterApartments=e=>{z=e,window.navApartmentScreen(`listing`)},window.changeTower=e=>{B=e},window.changeFloor=e=>{V=e},window.selectFloorUnit=e=>{let t=W.find(t=>t.id===e);t&&(H={...H,id:t.id,unitName:`${t.id} · ${t.type}`,price:t.price,size:t.size,superBuiltUp:t.size,facing:t.facing,bedrooms:t.beds,bathrooms:t.baths,balconies:t.balconies,status:`Available`},window.navApartmentScreen(`details`))},window.switchRoom=e=>{H.activeRoom=e;let t=document.getElementById(`apt-screen-host`);t&&(t.innerHTML=q())},window.handleApartmentEnquirySubmit=e=>{e.preventDefault();let t=document.getElementById(`apt-name`).value,n=document.getElementById(`apt-mobile`).value;if(!t||n.length<10){alert(`Please provide your full name and valid 10-digit mobile number.`);return}window.navApartmentScreen(`success`)},window.bookApartmentSiteVisit=()=>{T({id:H.id,projectName:H.projectName,unitName:H.unitName,location:H.location,price:H.price,priceSub:H.priceSub,size:H.size,facing:H.facing,beds:H.bedrooms,baths:H.bathrooms,balconies:H.balconies,status:`Available`,image:`/images/journey/visit_screen1_living.jpg`,thumb:H.thumb||`/images/journey/apt_elite_towers.jpg`},`form`)}}window.openApartmentEnquiry=()=>{window.navApartmentScreen(`enquiry`)};function Z(n,r,i,a=`#/`){return{html:`
    <div class="page-static">
      ${e({currentPath:a})}
      
      <div class="page-title-banner">
        <div class="container">
          <h1 class="page-title-heading">${n}</h1>
        </div>
      </div>

      <div class="container" style="padding-top: 50px; padding-bottom: 80px; max-width: 960px;">
        ${r?`<p style="font-size: 1.2rem; color: #475569; margin-bottom: 30px; line-height: 1.6;">${r}</p>`:``}
        <div class="static-content" style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 40px; box-shadow: var(--shadow-sm); line-height: 1.8; color: #334155;">
          ${i}
        </div>
      </div>

      ${p()}
    </div>
  `,init:()=>{t(),m();let e=document.getElementById(`static-contact-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault(),e.reset(),v(`Message sent! Our property advisor will reach out to you.`)})}}}function ae(){return Z(`ABOUT VR REAL ESTATES`,`Find Your Dream Asset with complete confidence, transparency, and legal due diligence.`,`
      <h2 style="font-family: var(--font-heading); font-size: 1.8rem; color: #0e4b9e; margin-bottom: 16px;">Who We Are</h2>
      <p style="margin-bottom: 20px;">
        VR Real Estates is a premier real estate advisory and land acquisition company operating across prime corridors in Telangana and Andhra Pradesh. Built on principles of transparency, trust, and verified documentation, we assist individual home seekers, NRI investors, and institutional clients in identifying high-growth land assets and luxury properties.
      </p>
      <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #1e293b; margin-top: 30px; margin-bottom: 14px;">Our Core Expertise</h3>
      <ul style="padding-left: 20px; margin-bottom: 24px;">
        <li style="margin-bottom: 8px;"><strong>HMDA &amp; DTCP Approved Open Plots:</strong> Strategic layouts along emerging growth hubs like Shadnagar, Balanagar, and Regional Ring Road corridors.</li>
        <li style="margin-bottom: 8px;"><strong>Luxury Gated Villas:</strong> Ultra-modern architecture, private amenities, and sustainable community living.</li>
        <li style="margin-bottom: 8px;"><strong>Premium High-Rise Apartments:</strong> 2 &amp; 3 BHK luxury residences in established city centers.</li>
        <li style="margin-bottom: 8px;"><strong>Managed Farmlands:</strong> Sustainable green escapes offering sandalwood, agarwood, and high long-term appreciation.</li>
      </ul>
      <div style="margin-top: 36px; padding: 24px; background: #f0f7ff; border-radius: 12px; border-left: 4px solid #0e4b9e;">
        <h4 style="color: #0e4b9e; font-size: 1.1rem; margin-bottom: 8px;">Our Promise to Every Buyer:</h4>
        <p>ముందుగా Location చూడండి... నచ్చితేనే Decision తీసుకోండి. We always recommend inspecting the actual site, verifying town-planning approvals, and understanding future appreciation potential before committing.</p>
      </div>
    `,`#/about`)}function oe(){return Z(`OUR SERVICES`,`Comprehensive real estate advisory from land verification to registration and management.`,`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem; margin-bottom: 8px;">📜 Due Diligence &amp; Title Verification</h3>
          <p>Complete 30-year link document verification, master plan conformity checks, HMDA, DTCP, and RERA approval audits.</p>
        </div>
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem; margin-bottom: 8px;">🚗 Free Guided Site Visits</h3>
          <p>Complimentary escorted site visits from Hyderabad with expert property consultants explaining on-ground milestones.</p>
        </div>
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem; margin-bottom: 8px;">🌐 NRI &amp; Remote Buyer Assistance</h3>
          <p>Dedicated desk for Telugus in Bengaluru, USA, and Gulf countries with video walkthroughs and legal power-of-attorney support.</p>
        </div>
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem; margin-bottom: 8px;">💼 Resale &amp; Portfolio Management</h3>
          <p>Strategic advisory on when to enter, hold, and exit plotted land investments to maximize compounding capital returns.</p>
        </div>
      </div>
    `,`#/services`)}function se(){return Z(`CONTACT US`,`Get in touch with VR Real Estates advisors for plots, villas, and site visits.`,`
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 36px;">
        <div>
          <h3 style="font-family: var(--font-heading); font-size: 1.4rem; color: #0e4b9e; margin-bottom: 16px;">Send Us a Message</h3>
          <form id="static-contact-form" class="enquiry-form-body">
            <div class="form-group">
              <input type="text" placeholder="Full Name *" required />
            </div>
            <div class="form-group">
              <input type="tel" placeholder="Mobile Number *" required />
            </div>
            <div class="form-group">
              <input type="email" placeholder="Email Address *" required />
            </div>
            <div class="form-group">
              <select required>
                <option value="" disabled selected>Interested In</option>
                <option value="Open Plots">Open Plots</option>
                <option value="Villas">Villas</option>
                <option value="Apartments">Apartments</option>
                <option value="Farmlands">Farm Lands</option>
              </select>
            </div>
            <div class="form-group">
              <textarea placeholder="Your Requirement or Query..." rows="4" style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px;"></textarea>
            </div>
            <button type="submit" class="btn-send-enquiry">Send Message</button>
          </form>
        </div>

        <div style="background: #f8fafc; border-radius: 12px; padding: 28px; border: 1px solid #e2e8f0;">
          <h3 style="font-family: var(--font-heading); font-size: 1.3rem; color: #1e293b; margin-bottom: 20px;">Direct Contact</h3>
          <p style="margin-bottom: 14px;"><strong>📞 Phone:</strong> <a href="tel:+919490634829" style="color: #0e4b9e; font-weight: 600;">+91-9490-634829</a></p>
          <p style="margin-bottom: 14px;"><strong>✉️ Email:</strong> <a href="mailto:info@vrrealestates.com" style="color: #0e4b9e; font-weight: 600;">info@vrrealestates.com</a></p>
          <p style="margin-bottom: 14px;"><strong>📍 Locations:</strong> Hyderabad, Shadnagar, Amaravati &amp; Visakhapatnam</p>
          <div style="margin-top: 24px;">
            <a href="https://wa.me/919490634829" target="_blank" class="btn-whatsapp-enquiry" style="text-decoration: none;">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    `,`#/contact`)}function ce(){return Z(`RESOURCES & BUYER GUIDES`,`Comprehensive guides and regulatory resources for land buyers in AP & Telangana.`,`
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem;">Amaravati Capital Region Buyer Guide</h3>
          <p>Essential checklist for open plots and commercial ventures in the CRDA zone, capital infrastructure timelines, and land pooling schemes.</p>
        </div>
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem;">HMDA vs DTCP: What Every Telangana Buyer Must Know</h3>
          <p>Understanding layout norms, mortgage plot releases, open space reservations, and conversion approvals before you sign.</p>
        </div>
        <div style="padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h3 style="color: #0e4b9e; font-size: 1.25rem;">Bengaluru Telugu Techies: Investing in Hyderabad &amp; AP</h3>
          <p>Why Bangalore tech professionals are acquiring assets along the Bangalore-Hyderabad expressway corridor.</p>
        </div>
      </div>
    `,`#/resources`)}function le(){return Z(`MEDIA & PROJECT HIGHLIGHTS`,`Watch walkthrough videos, drone surveys, and layout development updates.`,`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
        <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <img src="/images/hero-openplots.jpg" style="height: 200px; width: 100%; object-fit: cover;" />
          <div style="padding: 18px;">
            <h4 style="font-weight: 700; color: #1e293b; margin-bottom: 6px;">Shadnagar Highway Corridor Drone Survey</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Aerial view of new infrastructure, 6-lane highway connectivity, and upcoming SEZs.</p>
          </div>
        </div>
        <div style="border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <img src="/images/hero-villas.jpg" style="height: 200px; width: 100%; object-fit: cover;" />
          <div style="padding: 18px;">
            <h4 style="font-weight: 700; color: #1e293b; margin-bottom: 6px;">Luxury Gated Community Clubhouse Showcase</h4>
            <p style="font-size: 0.9rem; color: #64748b;">Tour the modern architecture and resort-style amenities.</p>
          </div>
        </div>
      </div>
    `,`#/media`)}function ue(e=`villas`){let t={villas:`LUXURY VILLAS`,apartments:`PREMIUM APARTMENTS`,farmlands:`MANAGED FARM LANDS`},n={villas:`/images/cat-villas.jpg`,apartments:`/images/cat-apartments.jpg`,farmlands:`/images/cat-farmlands.jpg`},r=t[e]||`PROPERTIES`,i=n[e]||`/images/cat-villas.jpg`;return Z(r,`Explore premium ${e} verified by VR Real Estates.`,`
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 28px;">
        <div style="border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: var(--shadow-sm);">
          <img src="${i}" style="height: 260px; width: 100%; object-fit: cover;" />
          <div style="padding: 24px;">
            <h3 style="font-size: 1.35rem; color: #0e4b9e; font-weight: 800; margin-bottom: 8px;">Prime Gated Project</h3>
            <p style="color: #64748b; margin-bottom: 16px;">Strategically located in premier high-growth sectors with full legal sanctions and bank loans available.</p>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; color: #f57c00; font-size: 1.1rem;">Price on Request</span>
              <button class="nav-cta-blue" onclick="window.openSiteVisitModal('${r}')">Enquire Now</button>
            </div>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; padding: 20px;">
          <h3 style="font-size: 1.4rem; color: #1e293b; margin-bottom: 12px;">Looking for specific locations or budgets?</h3>
          <p style="color: #4b5563; line-height: 1.7; margin-bottom: 24px;">Our advisors provide custom property shortlists matching your family needs and investment goals across AP &amp; Telangana.</p>
          <button class="btn-send-enquiry" style="width: fit-content;" onclick="window.openSiteVisitModal('${r}')">Request Custom Shortlist</button>
        </div>
      </div>
    `,`#/${e}`)}var Q={"/":h,"/open-plots":_,"/open-plots.html":_,"/vr-green-meadows":()=>P(`vr-green-meadows`),"/vr-prime-meadows":()=>P(`vr-green-meadows`),"/vr-green-villas":()=>P(`vr-green-villas`),"/vr-elite-towers":()=>K(`overview`),"/vr-heights":()=>P(`vr-heights`),"/vr-agro-lands":()=>P(`vr-agro-lands`),"/amodha":()=>P(`vr-green-meadows`),"/amodha.html":()=>P(`vr-green-meadows`),"/about":ae,"/services":oe,"/resources":ce,"/media":le,"/contact":se,"/villas":()=>P(`vr-green-meadows`),"/apartments":()=>K(`listing`),"/farmlands":()=>ue(`farmlands`)};function $(){let e=window.location.hash||`#/`,t=e.replace(/^#/,``).split(`?`)[0],n=document.getElementById(`app`);if(!n)return;if(window.scrollTo(0,0),Q[t]){let e=Q[t]();n.innerHTML=e.html,e.init&&e.init();return}if(t.startsWith(`/property/`)){let e=x(t.replace(`/property/`,``));n.innerHTML=e.html,e.init&&e.init();return}if(t.startsWith(`/guides/`)){let r=t.replace(`/guides/`,``).replace(/-/g,` `).toUpperCase(),i=Z(`${r} BUYER GUIDE`,`Complete legal, connectivity, and development insights.`,`
        <p style="margin-bottom: 20px;">Welcome to the official <strong>${r} Buyer Guide</strong> by VR Real Estates. When investing in real estate, thorough due diligence and on-ground analysis are paramount.</p>
        <div style="background: #f0f7ff; border-left: 4px solid #0e4b9e; padding: 20px; border-radius: 8px; margin-bottom: 24px;">
          <h4 style="color: #0e4b9e; margin-bottom: 8px;">Key Verification Steps:</h4>
          <ul>
            <li>Verify 100% HMDA / DTCP master plan permissions and layouts.</li>
            <li>Confirm road widening, regional ring road corridors, and zone demarcations.</li>
            <li>Inspect physical boundary stones, blacktop roads, and electricity connections.</li>
          </ul>
        </div>
        <button class="nav-cta-blue" onclick="window.openSiteVisitModal('${r} Guide')">Download Full PDF Guide</button>
      `,e);n.innerHTML=i.html,i.init&&i.init();return}if(t.startsWith(`/location/`)){let r=t.replace(`/location/`,``).toUpperCase(),i=Z(`PROPERTY IN ${r}`,`Explore high-potential real estate and open plot opportunities across ${r}.`,`
        <p style="margin-bottom: 20px;">Discover verified properties and fast-appreciating ventures in <strong>${r}</strong>. All projects are hand-picked and vetted for clear titles, approved layouts, and immediate registration.</p>
        <div style="margin-top: 24px;">
          <a href="#/open-plots" class="hero-split-btn">
            <span class="hero-btn-main">Explore Open Plots in ${r}</span>
            <span class="hero-btn-arrow">&raquo;</span>
          </a>
        </div>
      `,e);n.innerHTML=i.html,i.init&&i.init();return}let r=h();n.innerHTML=r.html,r.init&&r.init()}window.addEventListener(`hashchange`,$),document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,$):$();