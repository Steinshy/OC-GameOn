// =========================
// DOM Ready Initialization
// =========================
document.addEventListener("DOMContentLoaded", () => {
  // Footer year update
  document.getElementById("footer_year").textContent = new Date().getFullYear();
  initializeModalForm();

});

// =========================
// Initialization Functions
// =========================
const initializeModalForm = () => {
  if (setupEventListeners) {
    setupEventListeners();
  }
};

// =========================
// Window Exports
// =========================
window.initializeModalForm = initializeModalForm;
