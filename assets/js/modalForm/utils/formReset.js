// =========================
// DOM Element References
// =========================
const pageRefs = {
  body: document.body,
};

const modalRefs = {
  modal: document.getElementById("signup-modal"),
  header: document.getElementById("modal-header"),
  closeButton: document.getElementById("modal-close"),
  content: document.getElementById("modal-content"),
  contentForm: document.getElementById("form-section"),
  footer: document.getElementById("modal-footer"),
};

const registrationFormRefs = {
  form: document.getElementById("signup-form"),
  firstName: document.getElementById("first-name-field"),
  lastName: document.getElementById("last-name-field"),
  email: document.getElementById("email-field"),
  birthdate: document.getElementById("birthdate-field"),
  tournamentCount: document.getElementById("tournament-count-field"),
  tournamentFieldset: document.getElementById("tournament-fieldset"),
  newsletterFieldset: document.getElementById("newsletter-fieldset"),
  termsFieldset: document.getElementById("terms-fieldset"),
};

const confirmationRefs = {
  container: document.getElementById("confirmation"),
  closeButton: document.getElementById("confirm-close"),
};

const buttonRefs = {
  signupDesktop: document.getElementById("signup-desktop"),
  signupMobile: document.getElementById("signup-mobile"),
  submit: document.getElementById("submit-btn"),
};

const getModalElements = () => {
  return {
    body: pageRefs.body,
    registerModal: modalRefs.modal,
    modalHeader: modalRefs.header,
    registerModalClose: modalRefs.closeButton,
    modalContent: modalRefs.content,
    modalContentForm: modalRefs.contentForm,
    registerForm: registrationFormRefs.form,
    firstNameField: registrationFormRefs.firstName,
    lastNameField: registrationFormRefs.lastName,
    emailField: registrationFormRefs.email,
    birthdateField: registrationFormRefs.birthdate,
    tournamentCountField: registrationFormRefs.tournamentCount,
    tournamentFieldset: registrationFormRefs.tournamentFieldset,
    newsletterFieldset: registrationFormRefs.newsletterFieldset,
    termsFieldset: registrationFormRefs.termsFieldset,
    registerConfirmation: confirmationRefs.container,
    confirmationClose: confirmationRefs.closeButton,
    footer: modalRefs.footer,
  };
};

// =========================
// URL Management Functions
// =========================
const clearURL = () => {
  // Clear URL parameters without reloading the page
  if (window.history && window.history.replaceState) {
    window.history.replaceState({}, document.title, window.location.pathname);
  }
};

// =========================
// Form Reset Functions
// =========================
const resetForm = () => {
  registrationFormRefs.form.reset();

  const fieldsToClear = [
    registrationFormRefs.firstName,
    registrationFormRefs.lastName,
    registrationFormRefs.email,
    registrationFormRefs.birthdate,
    registrationFormRefs.tournamentCount,
    registrationFormRefs.tournamentFieldset,
    registrationFormRefs.newsletterFieldset,
  ];

  // Clear validation states for key fields
  fieldsToClear.forEach((field) => {
    if (field && window.clearFormFieldState) {
      window.clearFormFieldState(field);
    }
  });

  // Clear validation states for all radio and checkbox inputs
  const allInputs = registrationFormRefs.form.querySelectorAll("input");
  allInputs.forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") {
      if (window.clearFormFieldState) {
        window.clearFormFieldState(input);
      }
    }
  });

  // Reset modal visibility states
  confirmationRefs.container.classList.remove("show");
  modalRefs.contentForm.classList.add("show");
  modalRefs.header.classList.add("show");
  modalRefs.footer.classList.add("show");

  // Clear URL parameters
  clearURL();
};

// =========================
// Modal Management Functions
// =========================
const openModal = () => {
  // Reset form before opening
  resetForm();

  // Set modal visibility and scroll lock
  pageRefs.body.classList.add("scroll_lock");
  modalRefs.modal.classList.add("show");
  modalRefs.header.classList.add("show");
  modalRefs.contentForm.classList.add("show");
  modalRefs.footer.classList.add("show");

  // Scroll to top of modal content
  requestAnimationFrame(() => {
    modalRefs.contentForm.scrollTop = 0;
  });

  // Setup real-time validation listeners if validation module is available
  if (window.setupRealTimeValidation) {
    window.setupRealTimeValidation();
  }
};

const closeModal = () => {
  // Remove scroll lock and hide modal
  pageRefs.body.classList.remove("scroll_lock");
  modalRefs.modal.classList.remove("show");
  modalRefs.header.classList.remove("show");
  modalRefs.contentForm.classList.remove("show");
  modalRefs.footer.classList.remove("show");
  confirmationRefs.container.classList.remove("show");

  // Clear URL parameters when closing modal
  clearURL();
};

// =========================
// Form Submission Success
// =========================
const showConfirmation = () => {
  // Show confirmation and hide form
  confirmationRefs.container.classList.add("show");
  modalRefs.header.classList.remove("show");
  modalRefs.contentForm.classList.remove("show");
  modalRefs.footer.classList.remove("show");

  // Clear URL parameters after successful submission
  clearURL();
};

// =========================
// Window Exports
// =========================
window.openModal = openModal;
window.closeModal = closeModal;
window.showConfirmation = showConfirmation;
window.resetForm = resetForm;
window.clearURL = clearURL;
window.modalRefs = modalRefs;
window.confirmationRefs = confirmationRefs;
window.buttonRefs = buttonRefs;
