// =========================
// Event Listeners Setup
// =========================
const setupEventListeners = () => {
  const mobileMenuElements = window.mobileMenuElements;
  const registerModalElements = window.registerModalElements;
  const registerConfirmationElements = window.registerConfirmationElements;
  const buttonElements = window.buttonElements;

  const createEventHandler = (handler) => (e) => {
    e.stopPropagation();
    handler(e);
  };

  const eventHandlers = {
    escape: (e) => {
      if (e.key === "Escape") {
        if (registerModalElements.registerModal.classList.contains("show"))
          window.closeModal();
        if (mobileMenuElements.mobileMenu.classList.contains("show"))
          window.closeMobileMenu();
      }
    },

    mobileMenu: createEventHandler(() => window.toggleMobileMenu()),
    signup: createEventHandler(() => window.openModal()),
    confirmationClose: createEventHandler(() => window.closeModal()),
    modalClose: createEventHandler(() => window.closeModal()),
  };

  // Global events
  document.addEventListener("keydown", eventHandlers.escape);

  // Mobile menu
  if (mobileMenuElements.btnMobileMenu) {
    mobileMenuElements.btnMobileMenu.addEventListener(
      "click",
      eventHandlers.mobileMenu
    );
  }

  // Modal actions
  if (buttonElements.signupBtn) {
    buttonElements.signupBtn.addEventListener("click", eventHandlers.signup);
  }

  if (registerConfirmationElements.confirmationClose) {
    registerConfirmationElements.confirmationClose.addEventListener(
      "click",
      eventHandlers.confirmationClose
    );
  }

  if (registerModalElements.registerModalClose) {
    registerModalElements.registerModalClose.addEventListener(
      "click",
      eventHandlers.modalClose
    );
  }

  // Form submission
  if (buttonElements.submitBtn) {
    buttonElements.submitBtn.addEventListener(
      "click",
      window.handleFormSubmission
    );
  }

  if (document.getElementById("register_form")) {
    document
      .getElementById("register_form")
      .addEventListener("submit", window.handleFormSubmission);
  }
};

// =========================
// Export Functions
// =========================
window.setupEventListeners = setupEventListeners;
