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
      <button class="header-enquire-btn" onclick="window.openSiteVisitModal ? window.openSiteVisitModal('VR Header') : alert('Site Visit / Enquiry')">
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
  `}var s=[{id:`feat-villas`,category:`villas`,badge:`★ Featured`,badgeClass:`badge-gold`,name:`VR Green Villas`,location:`Kompally, Hyderabad`,type:`Villas`,typeIcon:`🏠`,spec2:`Gated Community`,spec2Icon:`👥`,spec3:`Green Living`,spec3Icon:`🍃`,price:`₹1.25 Cr*`,image:`/images/ref/feat-villa-clean.jpg`,link:`#/villas`},{id:`feat-plots`,category:`openplots`,badge:`🔥 High Demand`,badgeClass:`badge-orange`,name:`VR Prime Meadows`,location:`Shadnagar, Hyderabad`,type:`Open Plots`,typeIcon:`🗺️`,spec2:`HMDA Approved`,spec2Icon:`🏛️`,spec3:`High Growth`,spec3Icon:`📊`,price:`₹29.9 Lakhs*`,image:`/images/ref/feat-plots-clean.jpg`,link:`#/amodha`},{id:`feat-apts`,category:`apartments`,badge:`🚀 New Launch`,badgeClass:`badge-teal`,name:`VR Heights`,location:`Nallagandla, Hyderabad`,type:`Apartments`,typeIcon:`🏢`,spec2:`2 & 3 BHK`,spec2Icon:`🏠`,spec3:`Modern Amenities`,spec3Icon:`🏊`,price:`₹65 Lakhs*`,image:`/images/ref/feat-apts-clean.jpg`,link:`#/apartments`},{id:`feat-farms`,category:`farmlands`,badge:`🌱 Invest Wise`,badgeClass:`badge-green`,name:`VR Agro Lands`,location:`Shankarpally, Hyderabad`,type:`Farm Lands`,typeIcon:`🌾`,spec2:`Managed Farmlands`,spec2Icon:`🌲`,spec3:`Long-Term Value`,spec3Icon:`📈`,price:`₹18 Lakhs*`,image:`/images/ref/feat-farm-clean.jpg`,link:`#/farmlands`}];function c(){return`
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

        <!-- Carousel Indicators -->
        <div class="ref-projects-dots" id="ref-projects-dots">
          <span class="dot active"></span>
          <span class="dot"></span>
          <span class="dot"></span>
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
  `,init:()=>{t(),m();let e=document.getElementById(`property-detail-enquiry-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault();let n=document.getElementById(`enquiry-name`).value;e.reset(),v(`Thank you, ${n}! Your enquiry for ${r.title} has been received. Our team will contact you shortly.`)});let n=document.getElementById(`btn-scroll-enquiry`),i=document.getElementById(`tab-enquire-btn`),a=document.getElementById(`enquiry-form-card`),o=()=>{if(a){a.scrollIntoView({behavior:`smooth`,block:`center`});let e=document.getElementById(`enquiry-name`);e&&e.focus()}};n&&n.addEventListener(`click`,o),i&&i.addEventListener(`click`,o)}}}function S(n,r,i,a=`#/`){return{html:`
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
  `,init:()=>{t(),m();let e=document.getElementById(`static-contact-form`);e&&e.addEventListener(`submit`,t=>{t.preventDefault(),e.reset(),v(`Message sent! Our property advisor will reach out to you.`)})}}}function C(){return S(`ABOUT VR REAL ESTATES`,`Find Your Dream Asset with complete confidence, transparency, and legal due diligence.`,`
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
    `,`#/about`)}function w(){return S(`OUR SERVICES`,`Comprehensive real estate advisory from land verification to registration and management.`,`
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
    `,`#/services`)}function T(){return S(`CONTACT US`,`Get in touch with VR Real Estates advisors for plots, villas, and site visits.`,`
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
    `,`#/contact`)}function E(){return S(`RESOURCES & BUYER GUIDES`,`Comprehensive guides and regulatory resources for land buyers in AP & Telangana.`,`
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
    `,`#/resources`)}function D(){return S(`MEDIA & PROJECT HIGHLIGHTS`,`Watch walkthrough videos, drone surveys, and layout development updates.`,`
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
    `,`#/media`)}function O(e=`villas`){let t={villas:`LUXURY VILLAS`,apartments:`PREMIUM APARTMENTS`,farmlands:`MANAGED FARM LANDS`},n={villas:`/images/cat-villas.jpg`,apartments:`/images/cat-apartments.jpg`,farmlands:`/images/cat-farmlands.jpg`},r=t[e]||`PROPERTIES`,i=n[e]||`/images/cat-villas.jpg`;return S(r,`Explore premium ${e} verified by VR Real Estates.`,`
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
    `,`#/${e}`)}var k={"/":h,"/open-plots":_,"/open-plots.html":_,"/amodha":()=>x(`amodha`),"/amodha.html":()=>x(`amodha`),"/about":C,"/services":w,"/resources":E,"/media":D,"/contact":T,"/villas":()=>O(`villas`),"/apartments":()=>O(`apartments`),"/farmlands":()=>O(`farmlands`)};function A(){let e=window.location.hash||`#/`,t=e.replace(/^#/,``).split(`?`)[0],n=document.getElementById(`app`);if(!n)return;if(window.scrollTo(0,0),k[t]){let e=k[t]();n.innerHTML=e.html,e.init&&e.init();return}if(t.startsWith(`/property/`)){let e=x(t.replace(`/property/`,``));n.innerHTML=e.html,e.init&&e.init();return}if(t.startsWith(`/guides/`)){let r=t.replace(`/guides/`,``).replace(/-/g,` `).toUpperCase(),i=S(`${r} BUYER GUIDE`,`Complete legal, connectivity, and development insights.`,`
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
      `,e);n.innerHTML=i.html,i.init&&i.init();return}if(t.startsWith(`/location/`)){let r=t.replace(`/location/`,``).toUpperCase(),i=S(`PROPERTY IN ${r}`,`Explore high-potential real estate and open plot opportunities across ${r}.`,`
        <p style="margin-bottom: 20px;">Discover verified properties and fast-appreciating ventures in <strong>${r}</strong>. All projects are hand-picked and vetted for clear titles, approved layouts, and immediate registration.</p>
        <div style="margin-top: 24px;">
          <a href="#/open-plots" class="hero-split-btn">
            <span class="hero-btn-main">Explore Open Plots in ${r}</span>
            <span class="hero-btn-arrow">&raquo;</span>
          </a>
        </div>
      `,e);n.innerHTML=i.html,i.init&&i.init();return}let r=h();n.innerHTML=r.html,r.init&&r.init()}window.addEventListener(`hashchange`,A),document.readyState===`loading`?window.addEventListener(`DOMContentLoaded`,A):A();