const projects = [
  {
    title: "Spatial Garden",
    year: "2026",
    type: "Interactive / Web / 3D",
    url: "https://spatial-garden-production.up.railway.app/",
    description: "My internet brain, rendered in 3D.",
    color: "#e8e4dc",
  },
  {
    title: "Sound Mood Atlas",
    year: "2026",
    type: "Data Visualization / Web / Sound",
    url: "https://sound-mood-atlas.vercel.app/",
    description: "Explore songs by mood.",
    color: "#dcd8d0",
  },
  {
    title: "Garden Zones",
    year: "2023",
    type: "Open Source",
    url: "https://github.com/jaclynnbarrera/garden-zone-app",
    description: "Simple command-line interface project that helps you identify and learn about different plants and vegetables based on your gardening zone. ",
    color: "#cbc5b8",
  },
  {
    title: "CV",
    year: "2026",
    type: "Resume",
    url: "assets/cv.pdf",
    description: "Experience, skills, and selected work.",
    color: "#d4cfc4",
  },
];

const workList = document.getElementById("work-list");
const preview = document.getElementById("preview");
const previewIndex = document.getElementById("preview-index");
const previewTitle = document.getElementById("preview-title");
const previewMeta = document.getElementById("preview-meta");
const previewVisual = document.getElementById("preview-visual");
const yearEl = document.getElementById("year");

yearEl.textContent = new Date().getFullYear();

function padIndex(num) {
  return String(num).padStart(2, "0");
}

function renderProjects() {
  workList.innerHTML = projects
    .map(
      (project, index) => `
    <li class="work-item" data-index="${index}">
      ${
        project.url
          ? `<a href="${project.url}" class="work-link" ${
              project.url.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""
            }>`
          : `<span class="work-link work-link--static">`
      }
        <span class="work-index">${padIndex(index + 1)}</span>
        <span class="work-title">${project.title}</span>
        <span class="work-year">${project.year}</span>
        <span class="work-type">${project.type}</span>
      ${project.url ? "</a>" : "</span>"}
    </li>
  `
    )
    .join("");
}

function showPreview(index) {
  const project = projects[index];
  if (!project) return;

  previewIndex.textContent = padIndex(index + 1);
  previewTitle.textContent = project.title;
  previewMeta.textContent = `${project.year} · ${project.type}`;
  previewVisual.style.background = project.color;
  previewVisual.dataset.label = project.description;

  preview.classList.add("is-visible");
  preview.setAttribute("aria-hidden", "false");
}

function hidePreview() {
  preview.classList.remove("is-visible");
  preview.setAttribute("aria-hidden", "true");
}

function bindInteractions() {
  const items = workList.querySelectorAll(".work-item");

  items.forEach((item) => {
    const index = Number(item.dataset.index);

    item.addEventListener("mouseenter", () => showPreview(index));
    item.addEventListener("focusin", () => showPreview(index));
    item.addEventListener("mouseleave", hidePreview);
    item.addEventListener("focusout", hidePreview);
  });

  workList.addEventListener("mouseleave", hidePreview);
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (prefersReducedMotion.matches) {
  preview?.remove();
}

renderProjects();
bindInteractions();
