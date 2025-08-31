// =========================
// Event Listeners Setup
// =========================
const setupEventListeners = () => {
  const eventHandlers = {
    // Keyboard Escape Listeners
    escape: (e) => {
      if (e.key === "Escape") {
        if (modalRefs?.modalSignup?.classList.contains("show")) {
          setModalFormState(false);
        }
        if (mobileMenuRefs?.menu?.classList.contains("show")) {
          closeMobileMenu();
        }
      }
    },

    // Mobile Menu Open Listeners
    mobileMenu: createEventHandler(() => toggleMobileMenu()),

    // Register Open Listeners
    register: createEventHandler(() => {
      resetForm();
      setModalFormState(true);
    }),

    // Register Confirmation Listeners
    confirmClose: createEventHandler(() => {
      setModalFormState(false);
    }),

    // Register Close Listeners
    modalClose: createEventHandler(() => setModalFormState(false))
  };

  // Attach Event Listeners
  attachKeyboardListeners(eventHandlers);
  attachMobileMenuListeners(eventHandlers);
  attachModalListeners(eventHandlers);
  attachConfirmationListeners(eventHandlers);
  attachFormListeners();
};

// =========================
// Create Event Handler
// =========================
const createEventHandler = (handler) => (e) => {
  e.stopPropagation();
  handler(e);
};

// =========================
// Window Exports
// =========================
window.setupEventListeners = setupEventListeners;
window.createEventHandler = createEventHandler;
