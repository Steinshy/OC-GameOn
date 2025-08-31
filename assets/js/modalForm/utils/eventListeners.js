// =========================
// Main Event Listeners
// =========================
const setupEventListeners = () => {
  const eventHandlers = {
    // Keyboard Listeners
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

    // Mobile Menu Listeners
    mobileMenu: createEventHandler(() => toggleMobileMenu()),

    // Modal Listeners
    register: createEventHandler(() => {
      resetForm();
      setModalFormState(true);
    }),

    // Confirmation Listeners
    confirmClose: createEventHandler(() => {
      setModalFormState(false);
    }),

    // Modal Close Listeners
    modalClose: createEventHandler(() => setModalFormState(false)),
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
