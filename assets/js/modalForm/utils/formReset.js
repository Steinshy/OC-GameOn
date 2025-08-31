// =========================
// Form Reset
// =========================

// =========================
// URL & Scroll
// =========================
const clearURL = () => window.history?.replaceState && window.history.replaceState({}, document.title, window.location.pathname);
const resetScroll = () => [modalRefs?.modalContent, formRefs?.formSection].forEach(element => element && (element.scrollTop = 0));

// =========================
// Modal Form State
// =========================
const setModalFormState = (isOpen) => {
  if (isOpen) {
    // Opening modal - add classes immediately
    pageRefs?.body?.classList.add("scroll_lock");
    modalRefs?.modalSignup?.classList.add("show");
    modalRefs?.modalContent?.classList.add("show");
    modalRefs?.modalHeader?.classList.add("show");
    modalRefs?.modalFooter?.classList.add("show");
    formRefs?.formSection?.classList.add("show");

    resetScroll();
    if (setupRealTimeValidation) {
      setupRealTimeValidation();
    }
  } else {
    // Closing modal - add closing animation classes
    modalRefs?.modalSignup?.classList.add("closing");
    modalRefs?.modalContent?.classList.add("closing");

    // Wait for animation to complete before removing classes
    setTimeout(() => {
      pageRefs?.body?.classList.remove("scroll_lock");
      modalRefs?.modalSignup?.classList.remove("show", "closing");
      modalRefs?.modalContent?.classList.remove("show", "closing");
      modalRefs?.modalHeader?.classList.remove("show");
      modalRefs?.modalFooter?.classList.remove("show");
      formRefs?.formSection?.classList.remove("show");
      clearURL();
    }, 300); // Match the animation duration (0.3s)
  }
};

// =========================
// Modal Confirmation State
// =========================
const showConfirmation = () => {
  confirmRefs?.confirm?.classList.add("show");
};

const hideFormSections = () => {
  modalRefs?.modalHeader?.classList.remove("show");
  modalRefs?.modalFooter?.classList.remove("show");
  formRefs?.formSection?.classList.remove("show");
};

// =========================
// Clear Validation States in all inputs
// =========================
const clearFormInputs = () => {
  if (formInputsMapRefs && clearFormFieldState) {
    Object.values(formInputsMapRefs).forEach((field) => {
      if (field) clearFormFieldState(field);
    });
  }
};


const clearRadios = () => {
  if (validationRefs && clearFormFieldState) {
    Object.values(validationRefs.radioButtonsInputs || {}).forEach((radio) => {
      if (radio) clearFormFieldState(radio);
    });
  }
};

const clearCheckboxes = () => {
  if (validationRefs && clearFormFieldState) {
    Object.values(validationRefs.checkboxesInputs || {}).forEach((checkbox) => {
      if (checkbox) clearFormFieldState(checkbox);
    });
  }
};

// =========================
// Form Reset Functions
// =========================
const resetForm = () => {
  formRefs?.formSignup?.reset();
  clearFormInputs();
  clearRadios();
  clearCheckboxes();
  confirmRefs?.confirm?.classList.remove("show");
  resetScroll();
};

// =========================
// Window Exports
// =========================
window.resetForm = resetForm;
window.setModalFormState = setModalFormState;
window.showConfirmation = showConfirmation;
window.hideFormSections = hideFormSections;