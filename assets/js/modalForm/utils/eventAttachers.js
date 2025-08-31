// =========================
// Main Event Attachers
// =========================

// =========================
// Keyboard Listeners
// =========================
const attachKeyboardListeners = (eventHandlers) => {
  document.addEventListener("keydown", eventHandlers.escape);
};

// =========================
// Mobile Menu Listeners
// =========================
const attachMobileMenuListeners = (eventHandlers) => {
  if (mobileMenuRefs?.toggleButton) {
    mobileMenuRefs.toggleButton.addEventListener("click", eventHandlers.mobileMenu);
  }
};

// =========================
// Modal Listeners
// =========================
const attachModalListeners = (eventHandlers) => {
  if (buttonRefs?.signupButtonDesktop) {
    buttonRefs.signupButtonDesktop.addEventListener("click", eventHandlers.register);
  }
  if (buttonRefs?.signupButtonMobile) {
    buttonRefs.signupButtonMobile.addEventListener("click", eventHandlers.register);
  }
  if (buttonRefs?.modalCloseButton) {
    buttonRefs.modalCloseButton.addEventListener("click", eventHandlers.modalClose);
  }
};

// =========================
// Confirmation Listeners
// =========================
const attachConfirmationListeners = (eventHandlers) => {
  if (confirmRefs?.confirmCloseButton) {
    confirmRefs.confirmCloseButton.addEventListener("click", eventHandlers.confirmClose);
  }
};

// =========================
// Form Listeners
// =========================
const attachFormListeners = () => {
  if (buttonRefs?.modalSubmitButton) {
    buttonRefs.modalSubmitButton.addEventListener("click", handleFormSubmission);
  }
  if (formRefs?.formSignup) {
    formRefs.formSignup.addEventListener("submit", handleFormSubmission);
  }
};

// =========================
// Window Exports
// =========================
window.attachKeyboardListeners = attachKeyboardListeners;
window.attachMobileMenuListeners = attachMobileMenuListeners;
window.attachModalListeners = attachModalListeners;
window.attachConfirmationListeners = attachConfirmationListeners;
window.attachFormListeners = attachFormListeners;
