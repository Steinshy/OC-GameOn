// =========================
// Event Listeners Setup
// =========================
const setupEventListeners = () => {
  const createEventHandler = (handler) => (e) => {
    e.stopPropagation();
    handler(e);
  };

  const eventHandlers = {
    escape: (e) => {
      if (e.key === "Escape") {
        if (window.modalRefs?.modal?.classList.contains("show")) {
          window.closeModal();
        }
        if (window.mobileMenuRefs?.menu?.classList.contains("show")) {
          window.closeMobileMenu();
        }
      }
    },

    mobileMenu: createEventHandler(() => window.toggleMobileMenu()),
    register: createEventHandler(() => window.openModal()),
    confirmationClose: createEventHandler(() => window.closeModal()),
    modalClose: createEventHandler(() => window.closeModal()),
  };

  // Global events
  document.addEventListener("keydown", eventHandlers.escape);

  // Mobile menu
  if (window.mobileMenuRefs?.toggleButton) {
    window.mobileMenuRefs.toggleButton.addEventListener(
      "click",
      eventHandlers.mobileMenu
    );
  }

  // Modal actions
  if (window.buttonRefs?.signupDesktop) {
    window.buttonRefs.signupDesktop.addEventListener("click", eventHandlers.register);
  }

  if (window.buttonRefs?.signupMobile) {
    window.buttonRefs.signupMobile.addEventListener("click", eventHandlers.register);
  }

  if (window.confirmationRefs?.closeButton) {
    window.confirmationRefs.closeButton.addEventListener(
      "click",
      eventHandlers.confirmationClose
    );
  }

  if (window.modalRefs?.closeButton) {
    window.modalRefs.closeButton.addEventListener(
      "click",
      eventHandlers.modalClose
    );
  }

  // Form submission
  if (window.buttonRefs?.submit) {
    window.buttonRefs.submit.addEventListener(
      "click",
      window.handleFormSubmission
    );
  }

  if (document.getElementById("signup-form")) {
    document
      .getElementById("signup-form")
      .addEventListener("submit", window.handleFormSubmission);
  }
};

// =========================
// Export Functions
// =========================
window.setupEventListeners = setupEventListeners;
