const projects = [
  {
    title: "resonance.world",
    year: "2026",
    type: "Interactive / Web / 3D",
    url: "https://resonance-world.up.railway.app/",
    image: "/images/projects/spatial-garden.png",
    imageFit: "contain",
    imagePosition: "center center",
    aspectRatio: "16 / 9",
    stack: ["Three.js", "GSAP", "Express", "Vite", "SQLite", "Node.js"],
  },
  {
    title: "Sound Mood Atlas",
    year: "2026",
    type: "Data Visualization / Web / Sound",
    url: "https://sound-mood-atlas.vercel.app/",
    image: "/images/projects/sound-mood-atlas.png",
    stack: ["React", "Vite", "Express", "PostgreSQL", "Node.js"],
  },
  {
    title: "Garden Zones",
    year: "2023",
    type: "Command line interface app",
    url: "https://github.com/jaclynnbarrera/garden-zone-app",
    preview: "terminal",
    stack: ["Ruby", "HTTParty", "Nokogiri"],
  },
];

const carouselTrack = document.getElementById("carousel-track");
const carouselViewport = document.getElementById("carousel-viewport");
const carouselStatus = document.getElementById("carousel-status");
const carouselPrev = document.getElementById("carousel-prev");
const carouselNext = document.getElementById("carousel-next");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

let currentIndex = 0;
let isAnimating = false;
let isDragging = false;
let startX = 0;
let startY = 0;
let dragOffset = 0;
let activePointerId = null;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const SWIPE_THRESHOLD = 36;

function padIndex(num) {
  return String(num).padStart(2, "0");
}

function renderProjectVisual(project, index) {
  const visualClass = project.preview === "terminal"
    ? "carousel-visual carousel-visual--terminal"
    : "carousel-visual";
  const visualStyle = project.aspectRatio ? ` style="aspect-ratio: ${project.aspectRatio};"` : "";

  if (project.preview === "terminal") {
    return `
          <div class="${visualClass}"${visualStyle}>
            <div class="terminal">
              <div class="terminal-bar" aria-hidden="true">
                <span class="terminal-dot"></span>
                <span class="terminal-dot"></span>
                <span class="terminal-dot"></span>
                <span class="terminal-title">garden-zone-app — ruby</span>
              </div>
              <pre class="terminal-body"><code><span class="terminal-line"><span class="terminal-prompt">$</span> ruby bin/run</span>
<span class="terminal-line terminal-dim">Garden Zones · plant hardiness lookup</span>

<span class="terminal-line">Enter your zip code: <span class="terminal-accent">90012</span></span>
<span class="terminal-line terminal-dim">Looking up zone via Frostline API...</span>

<span class="terminal-line"><span class="terminal-accent">Zone 10b</span> · Los Angeles, CA</span>

<span class="terminal-line">Select a plant:</span>
<span class="terminal-line terminal-dim">  1. Tomatoes</span>
<span class="terminal-line terminal-dim">  2. Basil</span>
<span class="terminal-line terminal-dim">  3. Lavender</span>
<span class="terminal-line"><span class="terminal-prompt">&gt;</span> <span class="terminal-accent">1</span></span>

<span class="terminal-line"><span class="terminal-accent">Tomatoes</span> <span class="terminal-dim">(Solanum lycopersicum)</span></span>
<span class="terminal-line terminal-dim">  sun: full · water: regular · season: warm</span>
<span class="terminal-line terminal-dim">  plant after last frost · harvest in 60–85 days</span>

<span class="terminal-line"><span class="terminal-prompt">?</span> another plant or new zipcode<span class="terminal-cursor" aria-hidden="true">▋</span></span></code></pre>
            </div>
          </div>`;
  }

  return `
          <div class="${visualClass}"${visualStyle}>
            ${
              project.image
                ? `<img
              class="carousel-image"
              src="${project.image}"
              alt="${project.title} preview"
              style="object-fit: ${project.imageFit || "cover"}; object-position: ${
                project.imagePosition || "center top"
              };"
              loading="${index === 0 ? "eager" : "lazy"}"
              decoding="async"
            />`
                : ""
            }
            <div class="carousel-placeholder" aria-hidden="true"></div>
          </div>`;
}

function renderSlides() {
  carouselTrack.innerHTML = projects
    .map(
      (project, index) => `
    <article
      class="carousel-slide${index === 0 ? " is-active" : ""}"
      id="carousel-slide-${index}"
      aria-roledescription="slide"
      aria-label="${index + 1} of ${projects.length}"
    >
      <div class="carousel-card">
        <a
          href="${project.url}"
          class="carousel-preview-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${project.title}"
        >
          ${renderProjectVisual(project, index)}
        </a>
        <div class="carousel-caption">
          <h2 class="carousel-title">${project.title}</h2>
          <p class="carousel-meta">${project.year} · ${project.type}</p>
          ${
            project.stack?.length
              ? `<p class="carousel-stack">${project.stack.join(" · ")}</p>`
              : ""
          }
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function updateStatus() {
  const project = projects[currentIndex];
  carouselStatus.textContent = `${padIndex(currentIndex + 1)} / ${padIndex(projects.length)} · ${project.title}`;
}

function setActiveSlide(index) {
  const slides = carouselTrack.querySelectorAll(".carousel-slide");
  slides.forEach((slide, i) => {
    slide.classList.toggle("is-active", i === index);
    slide.classList.toggle("is-entering", i === index);
  });

  if (!prefersReducedMotion) {
    window.setTimeout(() => {
      slides[index]?.classList.remove("is-entering");
    }, 700);
  }
}

function setTrackTransform(offsetPx = 0, animate = true) {
  carouselTrack.style.transition = animate && !prefersReducedMotion
    ? "transform 0.9s cubic-bezier(0.22, 1.15, 0.36, 1)"
    : "none";
  carouselTrack.style.transform = `translateX(calc(-${currentIndex * 100}% + ${offsetPx}px))`;
}

function setDragTilt(degrees = 0) {
  carouselTrack.style.setProperty("--drag-tilt", `${degrees}deg`);
}

function goTo(index) {
  if (isAnimating || projects.length === 0) return;

  const nextIndex = (index + projects.length) % projects.length;
  if (nextIndex === currentIndex && dragOffset === 0) return;

  isAnimating = true;
  currentIndex = nextIndex;
  dragOffset = 0;

  setTrackTransform(0, true);
  setDragTilt(0);
  setActiveSlide(currentIndex);
  updateStatus();

  window.setTimeout(() => {
    isAnimating = false;
  }, prefersReducedMotion ? 0 : 900);
}

function snapToCurrent() {
  dragOffset = 0;
  setDragTilt(0);
  setTrackTransform(0, true);
}

function goNext() {
  goTo(currentIndex + 1, 1);
}

function goPrev() {
  goTo(currentIndex - 1, -1);
}

function bindCarouselControls() {
  carouselPrev.addEventListener("click", goPrev);
  carouselNext.addEventListener("click", goNext);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") goNext();
    if (event.key === "ArrowLeft") goPrev();
  });
}

function bindSwipe() {
  const onStart = (clientX, clientY, pointerId) => {
    if (isAnimating) return;

    isDragging = true;
    startX = clientX;
    startY = clientY;
    dragOffset = 0;
    activePointerId = pointerId;
    carouselTrack.style.transition = "none";
    carouselViewport.classList.add("is-dragging");
  };

  const onMove = (clientX) => {
    if (!isDragging) return;

    dragOffset = clientX - startX;
    setTrackTransform(dragOffset, false);
    setDragTilt(Math.max(-8, Math.min(8, dragOffset / 28)));
  };

  const onEnd = () => {
    if (!isDragging) return;

    isDragging = false;
    activePointerId = null;
    carouselViewport.classList.remove("is-dragging");

    if (Math.abs(dragOffset) >= SWIPE_THRESHOLD) {
      if (dragOffset < 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
      return;
    }

    snapToCurrent();
  };

  carouselViewport.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".carousel-preview-link")) return;
    if (event.target.closest(".carousel-btn")) return;

    onStart(event.clientX, event.clientY, event.pointerId);
    carouselViewport.setPointerCapture(event.pointerId);
  });

  carouselViewport.addEventListener("pointermove", (event) => {
    if (event.pointerId !== activePointerId) return;
    onMove(event.clientX);
  });

  carouselViewport.addEventListener("pointerup", (event) => {
    if (event.pointerId !== activePointerId) return;
    carouselViewport.releasePointerCapture(event.pointerId);
    onEnd();
  });

  carouselViewport.addEventListener("pointercancel", (event) => {
    if (event.pointerId !== activePointerId) return;
    onEnd();
  });
}

renderSlides();
setTrackTransform(0, false);
updateStatus();
bindCarouselControls();
bindSwipe();
