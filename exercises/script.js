const images = [
  "DSC_8136.jpg",
  "DSC_8138.jpg",
  "DSC_8152.jpg",
  "DSC_8299.jpg",
  "DSC_8334.jpg",
  "DSC_8144.jpg",
  "DSC_8147.jpg",
];
let index = 0;

function updateViewer() {
  document.getElementById("viewer").src = images[index];
  document.getElementById("status-text").textContent = `Image ${index + 1} of ${
    images.length
  }`;
}

function nextImage() {
  index = (index + 1) % images.length;
  updateViewer();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  updateViewer();
}

function closeWindow() {
  document.getElementById("appWindow").style.display = "none";
}

function openTab(tabName) {
  // Hide all content
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.remove("active");
  });

  // Remove active from tabs
  document.querySelectorAll(".tab").forEach((el) => {
    el.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabName).classList.add("active");

  // Highlight clicked tab
  event.target.classList.add("active");

  // 🔥 SHOW/HIDE STATUS BAR
  const statusBar = document.getElementById("statusBar");

  if (tabName === "images") {
    statusBar.style.display = "flex";
  } else {
    statusBar.style.display = "none";
  }
  function loadInstagram() {
    const container = document.getElementById("instagram-widget");

    // prevent re-loading multiple times
    if (container.dataset.loaded) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    container.appendChild(script);

    const widget = document.createElement("div");
    widget.className = "elfsight-app-1ef98065-2c50-4ef7-8d3a-3c15ae172d18";
    widget.setAttribute("data-elfsight-app-lazy", "");

    container.appendChild(widget);

    container.dataset.loaded = "true";
  }
  if (tabName === "instagram") {
    loadInstagram();
  }
}
