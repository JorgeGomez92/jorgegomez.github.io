const WEBSITES = [
  {
    id: "hauz-website",
    title: "HAUZ",
    domain: "hauz.ai",
    label: "Website",
    status: "Homepage capture",
    context: "HAUZ",
    role: "Web development",
    format: "Static homepage screenshot",
    summary: "Homepage capture from HAUZ.ai.",
    image: "media/websites/hauz-homepage.png",
    fallback: "media/websites/hauz-homepage.png",
    externalUrl: "https://www.hauz.ai/"
  },
  {
    id: "clairvant-website",
    title: "Clairvant",
    domain: "dev.clairvant.io",
    label: "Web application",
    status: "Initial login screen",
    context: "HAUZ",
    role: "Web development",
    format: "Static application screenshot",
    summary: "Initial screen capture from Clairvant.",
    image: "media/websites/clairvant-login.png",
    fallback: "media/websites/clairvant-login.png",
    externalUrl: "https://dev.clairvant.io/"
  },
  {
    id: "tlp-website",
    title: "The Line Production Lab",
    domain: "tlp.mx",
    label: "Website",
    status: "Homepage after intro",
    context: "The Line Production Lab",
    role: "Software Development",
    format: "Static homepage screenshot",
    summary: "Homepage capture from tlp.mx after the intro animation.",
    image: "media/websites/tlp-homepage.png",
    fallback: "media/websites/tlp-homepage.png",
    externalUrl: "https://tlp.mx/"
  },
  {
    id: "mi-ciudad-inteligente",
    title: "Mi Ciudad Inteligente",
    domain: "miciudadinteligente.com",
    label: "Website",
    status: "Homepage capture",
    context: "Web project",
    role: "Web development",
    format: "Static homepage screenshot",
    summary: "Homepage capture from Mi Ciudad Inteligente.",
    image: "media/websites/miciudad-homepage.png",
    fallback: "media/websites/miciudad-homepage.png",
    externalUrl: "https://www.miciudadinteligente.com/"
  }
];

const FILTERS = [
  {
    "id": "all",
    "label": "All"
  },
  {
    "id": "hauz",
    "label": "HAUZ"
  },
  {
    "id": "data-centers",
    "label": "Data Centers"
  },
  {
    "id": "the-line",
    "label": "The Line"
  },
  {
    "id": "independent",
    "label": "Independent"
  }
];

const PROJECTS = [
  {
    "id": "hauz-airdome-tech-capital-puebla",
    "title": "AirDome · Tech Capital Puebla",
    "groups": [
      "hauz",
      "data-centers"
    ],
    "label": "Data center visualization",
    "context": "HAUZ",
    "role": "Visualization development",
    "format": "3D project film",
    "summary": "Infrastructure visualization and site-context sequence in Puebla.",
    "poster": "media/posters/hauz-airdome-tech-capital-puebla.webp",
    "preview": "media/previews/hauz-airdome-tech-capital-puebla-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/hauz-airdome-tech-capital-puebla.mp4",
        "poster": "media/posters/hauz-airdome-tech-capital-puebla.webp",
        "label": "AirDome Tech Capital Puebla visualization"
      }
    ]
  },
  {
    "id": "hauz-airdome-coatzacoalcos-01",
    "title": "AirDome · Coatzacoalcos 01",
    "groups": [
      "hauz",
      "data-centers"
    ],
    "label": "Data center visualization",
    "context": "HAUZ",
    "role": "Visualization development",
    "format": "3D project film",
    "summary": "First aerial visualization study for the AirDome campus in Coatzacoalcos.",
    "poster": "media/posters/hauz-airdome-coatzacoalcos-01.webp",
    "preview": "media/previews/hauz-airdome-coatzacoalcos-01-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/hauz-airdome-coatzacoalcos-01.mp4",
        "poster": "media/posters/hauz-airdome-coatzacoalcos-01.webp",
        "label": "AirDome Coatzacoalcos study 01"
      }
    ]
  },
  {
    "id": "hauz-airdome-coatzacoalcos-02",
    "title": "AirDome · Coatzacoalcos 02",
    "groups": [
      "hauz",
      "data-centers"
    ],
    "label": "Data center visualization",
    "context": "HAUZ",
    "role": "Visualization development",
    "format": "3D project film",
    "summary": "Second aerial visualization study for the AirDome campus in Coatzacoalcos.",
    "poster": "media/posters/hauz-airdome-coatzacoalcos-02.webp",
    "preview": "media/previews/hauz-airdome-coatzacoalcos-02-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/hauz-airdome-coatzacoalcos-02.mp4",
        "poster": "media/posters/hauz-airdome-coatzacoalcos-02.webp",
        "label": "AirDome Coatzacoalcos study 02"
      }
    ]
  },
  {
    "id": "hauz-airdome-coatzacoalcos-03",
    "title": "AirDome · Coatzacoalcos 03",
    "groups": [
      "hauz",
      "data-centers"
    ],
    "label": "Data center visualization",
    "context": "HAUZ",
    "role": "Visualization development",
    "format": "3D project film",
    "summary": "Third aerial visualization study for the AirDome campus in Coatzacoalcos.",
    "poster": "media/posters/hauz-airdome-coatzacoalcos-03.webp",
    "preview": "media/previews/hauz-airdome-coatzacoalcos-03-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/hauz-airdome-coatzacoalcos-03.mp4",
        "poster": "media/posters/hauz-airdome-coatzacoalcos-03.webp",
        "label": "AirDome Coatzacoalcos study 03"
      }
    ]
  },
  {
    "id": "hauz-airpark",
    "title": "AirPark",
    "groups": [
      "hauz",
      "data-centers"
    ],
    "label": "Infrastructure visualization",
    "context": "HAUZ",
    "role": "Visualization development",
    "format": "3D project film",
    "summary": "Aerial visualization for an AirPark concept.",
    "poster": "media/posters/hauz-airpark.webp",
    "preview": "media/previews/hauz-airpark-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/hauz-airpark.mp4",
        "poster": "media/posters/hauz-airpark.webp",
        "label": "AirPark visualization"
      }
    ]
  },
  {
    "id": "the-line-aerie",
    "title": "Aerie · Brand Experience",
    "groups": [
      "the-line"
    ],
    "label": "Virtual environment",
    "context": "The Line Production Lab",
    "role": "Virtual environment development",
    "format": "3D project film",
    "summary": "Spatial visualization for an Aerie brand experience.",
    "poster": "media/posters/aerie-brand-experience.webp",
    "preview": "media/previews/aerie-brand-experience-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/aerie-brand-experience.mp4",
        "poster": "media/posters/aerie-brand-experience.webp",
        "label": "Aerie brand experience"
      }
    ]
  },
  {
    "id": "the-line-lexus",
    "title": "Lexus · Brand Experience",
    "groups": [
      "the-line"
    ],
    "label": "Virtual environment",
    "context": "The Line Production Lab",
    "role": "Virtual environment development",
    "format": "3D project film",
    "summary": "Automotive brand environment presented through a virtual walkthrough.",
    "poster": "media/posters/lexus-brand-experience.webp",
    "preview": "media/previews/lexus-brand-experience-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/lexus-brand-experience.mp4",
        "poster": "media/posters/lexus-brand-experience.webp",
        "label": "Lexus brand experience"
      }
    ]
  },
  {
    "id": "the-line-mercedes-benz",
    "title": "Mercedes-Benz · Brand Experience",
    "groups": [
      "the-line"
    ],
    "label": "Virtual environment",
    "context": "The Line Production Lab",
    "role": "Virtual environment development",
    "format": "3D project film",
    "summary": "Automotive experience visualization for Mercedes-Benz.",
    "poster": "media/posters/mercedes-benz-brand-experience.webp",
    "preview": "media/previews/mercedes-benz-brand-experience-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/mercedes-benz-brand-experience.mp4",
        "poster": "media/posters/mercedes-benz-brand-experience.webp",
        "label": "Mercedes-Benz brand experience"
      }
    ]
  },
  {
    "id": "the-line-flamin-hot",
    "title": "Flamin’ Hot · Brand Experience",
    "groups": [
      "the-line"
    ],
    "label": "Brand activation",
    "context": "The Line Production Lab",
    "role": "Virtual environment development",
    "format": "Project film",
    "summary": "Brand activation visualization and event walkthrough.",
    "poster": "media/posters/flamin-hot-brand-experience.webp",
    "preview": "media/previews/flamin-hot-brand-experience-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/flamin-hot-brand-experience.mp4",
        "poster": "media/posters/flamin-hot-brand-experience.webp",
        "label": "Flamin’ Hot brand experience"
      }
    ]
  },
  {
    "id": "motorola-ar",
    "title": "Motorola · AR Color Experience",
    "groups": [
      "independent"
    ],
    "label": "Augmented reality",
    "context": "Independent project",
    "role": "AR experience development",
    "format": "Vertical project film",
    "summary": "Mobile augmented-reality experience centered on color and public-space interaction.",
    "poster": "media/posters/motorola-ar.webp",
    "preview": "media/previews/motorola-ar-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/motorola-ar.mp4",
        "poster": "media/posters/motorola-ar.webp",
        "label": "Motorola AR color experience",
        "orientation": "portrait"
      }
    ]
  },
  {
    "id": "nissan-vr",
    "title": "Nissan · VR Experience",
    "groups": [
      "independent"
    ],
    "label": "Virtual reality",
    "context": "Independent project",
    "role": "VR experience development",
    "format": "Project film",
    "summary": "Virtual-reality automotive experience and interaction demo.",
    "poster": "media/posters/nissan-vr.webp",
    "preview": "media/previews/nissan-vr-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/nissan-vr.mp4",
        "poster": "media/posters/nissan-vr.webp",
        "label": "Nissan VR experience"
      }
    ]
  },
  {
    "id": "forklift-environment",
    "title": "Forklift Simulation · Environment",
    "groups": [
      "independent"
    ],
    "label": "Industrial simulation",
    "context": "Independent project",
    "role": "Unreal Engine simulation development",
    "format": "Environment film",
    "summary": "Interactive warehouse environment developed for a forklift training simulation.",
    "poster": "media/posters/forklift-simulation-environment.webp",
    "preview": "media/previews/forklift-simulation-environment-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/forklift-simulation-environment.mp4",
        "poster": "media/posters/forklift-simulation-environment.webp",
        "label": "Forklift simulation environment"
      }
    ]
  },
  {
    "id": "forklift-vr-training",
    "title": "Forklift Simulation · VR Training",
    "groups": [
      "independent"
    ],
    "label": "Industrial VR",
    "context": "Independent project",
    "role": "Unreal Engine simulation development",
    "format": "VR demonstration",
    "summary": "Physical virtual-reality demonstration for forklift operator training.",
    "poster": "media/posters/forklift-vr-training.webp",
    "preview": "media/previews/forklift-vr-training-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/forklift-vr-training.mp4",
        "poster": "media/posters/forklift-vr-training.webp",
        "label": "Forklift VR training demonstration"
      }
    ]
  },
  {
    "id": "architectural-visualization-reel",
    "title": "Architectural Visualization · Reel 2020",
    "groups": [
      "independent"
    ],
    "label": "Real-time 3D",
    "context": "Independent project",
    "role": "Real-time environment development",
    "format": "Visualization reel",
    "summary": "Real-time architectural and interior visualization reel.",
    "poster": "media/posters/architectural-visualization-reel.webp",
    "preview": "media/previews/architectural-visualization-reel-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/architectural-visualization-reel.mp4",
        "poster": "media/posters/architectural-visualization-reel.webp",
        "label": "Architectural visualization reel 2020"
      }
    ]
  },
  {
    "id": "residential-virtual-tour",
    "title": "Residential Virtual Tour",
    "groups": [
      "independent"
    ],
    "label": "Virtual environment",
    "context": "Independent project",
    "role": "Real-time environment development",
    "format": "Virtual tour",
    "summary": "Interactive residential environment and architectural walkthrough.",
    "poster": "media/posters/residential-virtual-tour.webp",
    "preview": "media/previews/residential-virtual-tour-preview.mp4",
    "media": [
      {
        "type": "video",
        "src": "media/full/residential-virtual-tour.mp4",
        "poster": "media/posters/residential-virtual-tour.webp",
        "label": "Residential virtual tour"
      }
    ]
  }
];

const state = {
  filter: "all",
  contentType: null,
  item: null,
  mediaIndex: 0
};

const els = {};

window.addEventListener("DOMContentLoaded", () => {
  Object.assign(els, {
    header: document.getElementById("siteHeader"),
    menuButton: document.getElementById("menuButton"),
    mainNav: document.getElementById("mainNav"),
    websiteGrid: document.getElementById("websiteGrid"),
    filterList: document.getElementById("filterList"),
    resultCount: document.getElementById("resultCount"),
    projectGrid: document.getElementById("projectGrid"),
    currentYear: document.getElementById("currentYear"),
    dialog: document.getElementById("projectDialog"),
    dialogClose: document.getElementById("dialogClose"),
    dialogType: document.getElementById("dialogType"),
    dialogTitle: document.getElementById("dialogTitle"),
    dialogMedia: document.getElementById("dialogMedia"),
    mediaControls: document.getElementById("mediaControls"),
    previousMedia: document.getElementById("previousMedia"),
    nextMedia: document.getElementById("nextMedia"),
    mediaPosition: document.getElementById("mediaPosition"),
    mediaTotal: document.getElementById("mediaTotal"),
    dialogSummary: document.getElementById("dialogSummary"),
    dialogContext: document.getElementById("dialogContext"),
    dialogRole: document.getElementById("dialogRole"),
    dialogFormat: document.getElementById("dialogFormat"),
    dialogLink: document.getElementById("dialogLink")
  });

  els.currentYear.textContent = new Date().getFullYear();
  renderWebsites();
  renderFilters();
  renderProjects();
  bindEvents();
  initRevealObserver();
  updateHeader();
});

function renderWebsites() {
  els.websiteGrid.innerHTML = WEBSITES.map((site, index) => `
    <article class="website-card reveal">
      <button class="website-open" type="button" data-website-id="${escapeHtml(site.id)}" aria-label="Open ${escapeHtml(site.title)} capture">
        <span class="website-visual">
          <span class="browser-dots" aria-hidden="true"><span></span><span></span><span></span></span>
          <img class="website-shot" src="${escapeHtml(site.image)}" data-fallback="${escapeHtml(site.fallback)}" alt="${escapeHtml(site.title)} website capture" width="1200" height="800" loading="lazy">
          <span class="website-status">${escapeHtml(site.status || "Static capture")}</span>
        </span>
        <span class="website-info">
          <span>
            <span class="card-title">${escapeHtml(site.title)}</span>
            <span class="card-meta">${escapeHtml(site.domain)}</span>
          </span>
          <span class="card-index">${String(index + 1).padStart(2, "0")}</span>
        </span>
      </button>
    </article>
  `).join("");

  bindImageFallbacks(els.websiteGrid);
}

function renderFilters() {
  els.filterList.innerHTML = FILTERS.map((filter) => {
    const count = filter.id === "all" ? PROJECTS.length : PROJECTS.filter((project) => project.groups.includes(filter.id)).length;
    return `<button class="filter-button${filter.id === state.filter ? " is-active" : ""}" type="button" data-filter="${filter.id}" aria-pressed="${filter.id === state.filter}">${filter.label}<span>${count}</span></button>`;
  }).join("");
}

function renderProjects() {
  els.projectGrid.innerHTML = PROJECTS.map((project, index) => `
    <article class="project-card reveal" data-groups="${project.groups.join(" ")}">
      <button class="project-open" type="button" data-project-id="${escapeHtml(project.id)}" aria-label="Open ${escapeHtml(project.title)}">
        <span class="project-visual">
          <img class="project-poster" src="${escapeHtml(project.poster)}" alt="${escapeHtml(project.title)} preview" width="1600" height="900" loading="lazy">
          <video class="project-preview-video" muted loop playsinline preload="none" data-src="${escapeHtml(project.preview)}" aria-hidden="true"></video>
          <span class="project-chip">${escapeHtml(project.label)}</span>
          <span class="project-play" aria-hidden="true">▶</span>
        </span>
        <span class="project-info">
          <span>
            <span class="project-title">${escapeHtml(project.title)}</span>
            <span class="project-meta">${escapeHtml(project.context)}</span>
          </span>
          <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
        </span>
      </button>
    </article>
  `).join("");

  applyFilter(state.filter, false);
  initCardPreviews();
}

function bindEvents() {
  window.addEventListener("scroll", updateHeader, { passive: true });

  els.menuButton.addEventListener("click", () => {
    const open = els.menuButton.getAttribute("aria-expanded") !== "true";
    els.menuButton.setAttribute("aria-expanded", String(open));
    els.mainNav.classList.toggle("is-open", open);
  });

  els.mainNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  els.websiteGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-website-id]");
    if (button) openWebsite(button.dataset.websiteId);
  });

  els.filterList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (button) applyFilter(button.dataset.filter, true);
  });

  els.projectGrid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (button) openProject(button.dataset.projectId);
  });

  els.dialogClose.addEventListener("click", closeDialog);
  els.dialog.addEventListener("click", (event) => {
    if (event.target === els.dialog) closeDialog();
  });
  els.dialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeDialog();
  });
  els.dialog.addEventListener("close", cleanupDialogMedia);
  els.previousMedia.addEventListener("click", () => changeMedia(-1));
  els.nextMedia.addEventListener("click", () => changeMedia(1));

  document.addEventListener("keydown", (event) => {
    if (!els.dialog.open || state.contentType !== "video") return;
    if (event.key === "ArrowLeft") changeMedia(-1);
    if (event.key === "ArrowRight") changeMedia(1);
  });
}

function updateHeader() {
  els.header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  els.menuButton.setAttribute("aria-expanded", "false");
  els.mainNav.classList.remove("is-open");
}

function applyFilter(filter, focusFirst) {
  state.filter = filter;
  let visible = 0;
  const cards = [...els.projectGrid.querySelectorAll(".project-card")];

  cards.forEach((card) => {
    const groups = card.dataset.groups.split(" ");
    const show = filter === "all" || groups.includes(filter);
    card.hidden = !show;
    if (show) visible += 1;
  });

  els.filterList.querySelectorAll("[data-filter]").forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  els.resultCount.textContent = `${visible} ${visible === 1 ? "project" : "projects"}`;
  if (focusFirst) cards.find((card) => !card.hidden)?.querySelector("button")?.focus({ preventScroll: true });
}

function initCardPreviews() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  els.projectGrid.querySelectorAll(".project-card").forEach((card) => {
    const video = card.querySelector(".project-preview-video");
    let timer;

    const start = () => {
      clearTimeout(timer);
      timer = setTimeout(async () => {
        if (!video.src) video.src = video.dataset.src;
        try {
          await video.play();
          card.classList.add("is-previewing");
        } catch {
          // Autoplay can be blocked by the browser.
        }
      }, 120);
    };

    const stop = () => {
      clearTimeout(timer);
      card.classList.remove("is-previewing");
      video.pause();
      try { video.currentTime = 0; } catch { /* Metadata may not be ready. */ }
    };

    card.addEventListener("pointerenter", start);
    card.addEventListener("pointerleave", stop);
    card.addEventListener("focusin", start);
    card.addEventListener("focusout", stop);
  });
}

function openWebsite(id) {
  const site = WEBSITES.find((item) => item.id === id);
  if (!site) return;

  state.contentType = "website";
  state.item = site;
  state.mediaIndex = 0;

  fillDialog(site);
  els.mediaControls.hidden = true;
  els.mediaTotal.textContent = "1";
  els.mediaPosition.textContent = "1";

  const image = document.createElement("img");
  image.className = "website-large";
  image.src = site.image;
  image.dataset.fallback = site.fallback;
  image.alt = `${site.title} website capture`;
  els.dialogMedia.replaceChildren(image);
  bindImageFallbacks(els.dialogMedia);

  showDialog();
}

function openProject(id) {
  const project = PROJECTS.find((item) => item.id === id);
  if (!project) return;

  state.contentType = "video";
  state.item = project;
  state.mediaIndex = 0;

  fillDialog(project);
  els.mediaTotal.textContent = project.media.length;
  els.mediaControls.hidden = project.media.length < 2;
  renderActiveMedia();
  showDialog();
}

function fillDialog(item) {
  els.dialogType.textContent = item.label;
  els.dialogTitle.textContent = item.title;
  els.dialogSummary.textContent = item.summary;
  els.dialogContext.textContent = item.context;
  els.dialogRole.textContent = item.role;
  els.dialogFormat.textContent = item.format;

  if (item.externalUrl) {
    els.dialogLink.hidden = false;
    els.dialogLink.href = item.externalUrl;
  } else {
    els.dialogLink.hidden = true;
    els.dialogLink.removeAttribute("href");
  }
}

function showDialog() {
  if (!els.dialog.open) els.dialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeDialog() {
  if (els.dialog.open) els.dialog.close();
  document.body.classList.remove("dialog-open");
  state.contentType = null;
  state.item = null;
}

function changeMedia(direction) {
  if (state.contentType !== "video" || !state.item || state.item.media.length < 2) return;
  const total = state.item.media.length;
  state.mediaIndex = (state.mediaIndex + direction + total) % total;
  renderActiveMedia();
}

function renderActiveMedia() {
  cleanupDialogMedia();
  const project = state.item;
  if (!project || state.contentType !== "video") return;

  const media = project.media[state.mediaIndex];
  els.mediaPosition.textContent = state.mediaIndex + 1;

  const video = document.createElement("video");
  video.controls = true;
  video.playsInline = true;
  video.preload = "metadata";
  video.src = media.src;
  video.poster = media.poster || project.poster;
  video.setAttribute("aria-label", media.label || project.title);
  if (media.orientation === "portrait") video.classList.add("portrait-media");
  els.dialogMedia.append(video);
}

function cleanupDialogMedia() {
  els.dialogMedia.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.removeAttribute("src");
    video.load();
  });
  els.dialogMedia.innerHTML = "";
}

function bindImageFallbacks(root) {
  root.querySelectorAll("img[data-fallback]").forEach((image) => {
    const applyFallback = () => {
      const fallback = image.dataset.fallback;
      if (fallback && image.src !== new URL(fallback, document.baseURI).href) {
        image.src = fallback;
      }
    };

    image.addEventListener("error", applyFallback, { once: true });
    if (image.complete && image.naturalWidth === 0) applyFallback();
  });
}

function initRevealObserver() {
  const elements = document.querySelectorAll(".reveal:not([data-reveal-ready])");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -25px" });

  elements.forEach((element) => {
    element.dataset.revealReady = "true";
    observer.observe(element);
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
