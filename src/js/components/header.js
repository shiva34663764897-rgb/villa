export function renderHeader(options = {}) {
  const { currentPath = '#/', isDetail = false, isOpenPlots = false, backUrl = '#/open-plots' } = options;

  let leftNavElement = '';
  let rightNavElement = '';

  if (isDetail) {
    leftNavElement = `
      <a href="${backUrl}" class="nav-back-btn" id="header-back-btn">
        <span>&larr;</span> Back
      </a>
    `;
    rightNavElement = `
      <button class="header-enquire-btn" onclick="window.openSiteVisitModal('Amodha')">
        Enquire Now &rarr;
      </button>
    `;
  } else if (isOpenPlots) {
    rightNavElement = `
      <button class="header-enquire-btn" onclick="window.openSiteVisitModal('Open Plots')">
        Enquire Now &rarr;
      </button>
    `;
  } else {
    rightNavElement = `
      <button class="header-enquire-btn" onclick="window.openSiteVisitModal ? window.openSiteVisitModal('VR Header') : alert('Site Visit / Enquiry')">
        Enquire Now &rarr;
      </button>
    `;
  }

  return `
    <header class="ref-header" id="main-header">
      <div class="ref-header-inner">
        <!-- Brand Logo Area -->
        <a href="#/" class="ref-brand-block" title="VR REAL ESTATES">
          <img src="/images/vr-logo.png" alt="VR REAL ESTATES" class="ref-brand-logo-img" />
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="ref-nav-menu" id="ref-nav-menu">
          ${leftNavElement}
          <a href="#/" class="ref-nav-link ${currentPath === '#/' ? 'active' : ''}">
            Home
          </a>
          <a href="#/about" class="ref-nav-link ${currentPath === '#/about' ? 'active' : ''}">
            About Us
          </a>
          <a href="#/projects" class="ref-nav-link ${currentPath === '#/projects' ? 'active' : ''}">
            Projects
          </a>
          <div class="ref-nav-item has-dropdown">
            <a href="#/open-plots" class="ref-nav-link dropdown-toggle ${currentPath.includes('plots') || currentPath.includes('villas') || currentPath.includes('apartments') || currentPath.includes('farmlands') ? 'active' : ''}">
              Properties <svg class="dropdown-chevron" width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <div class="ref-dropdown-menu">
              <a href="#/open-plots" class="ref-dropdown-item">Open Plots</a>
              <a href="#/villas" class="ref-dropdown-item">Luxury Villas</a>
              <a href="#/apartments" class="ref-dropdown-item">Apartments</a>
              <a href="#/farmlands" class="ref-dropdown-item">Farm Lands</a>
            </div>
          </div>
          <a href="#/locations" class="ref-nav-link ${currentPath === '#/locations' ? 'active' : ''}">
            Locations
          </a>
          <a href="#/resources" class="ref-nav-link ${currentPath === '#/resources' ? 'active' : ''}">
            Insights
          </a>
          <a href="#/contact" class="ref-nav-link ${currentPath === '#/contact' ? 'active' : ''}">
            Contact
          </a>
        </nav>

        <!-- Right Side Contact & CTA -->
        <div class="ref-header-actions">
          ${rightNavElement}
          <button class="ref-mobile-toggle" id="ref-mobile-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <!-- Mobile Nav Drawer -->
      <div class="ref-mobile-drawer" id="ref-mobile-drawer">
        <a href="#/" class="ref-mobile-link ${currentPath === '#/' ? 'active' : ''}">Home</a>
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
  `;
}

export function initStickyNav() {
  const header = document.getElementById('main-header');
  const toggle = document.getElementById('ref-mobile-toggle');
  const drawer = document.getElementById('ref-mobile-drawer');

  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      drawer.classList.toggle('open');
      toggle.classList.toggle('active');
    });

    drawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('open');
        toggle.classList.remove('active');
      });
    });
  }

  if (header) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.removeEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScroll, { passive: true });
  }
}
