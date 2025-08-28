// =========================
// DOM Element References
// =========================
const pageRefs = {
  body: document.body,
};

const modalRefs = {
  modal: document.getElementById("register_modal"),
  header: document.getElementById("modal_header"),
  closeButton: document.getElementById("register_modal_close"),
  content: document.getElementById("modal_content"),
  contentForm: document.getElementById("modal_content_form"),
};

const registrationFormRefs = {
  form: document.getElementById("register_form"),
  firstName: document.getElementById("first_name_field"),
  lastName: document.getElementById("last_name_field"),
  email: document.getElementById("email_field"),
  birthdate: document.getElementById("birthdate_field"),
  tournamentCount: document.getElementById("tournament_count_field"),
  tournamentFieldset: document.getElementById("tournament_fieldset"),
  newsletterFieldset: document.getElementById("newsletter_fieldset"),
  termsFieldset: document.getElementById("terms_fieldset"),
};

const confirmationRefs = {
  container: document.getElementById("register_confirmation"),
  closeButton: document.getElementById("confirmation_close"),
};

const buttonRefs = {
  signup: document.getElementById("btn_signup"),
  submit: document.getElementById("submit_btn"),
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
