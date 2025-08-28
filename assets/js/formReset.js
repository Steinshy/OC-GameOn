// =========================
// DOM Element References
// =========================
const elements = {
  // Core elements
  body: document.body,
};

const registerModalElements = {
  registerModal: document.getElementById("register_modal"),
  modalHeader: document.getElementById("modal_header"),
  registerModalClose: document.getElementById("register_modal_close"),
};

const registerFormElements = {
  modalContent: document.getElementById("modal_content"),
  modalContentForm: document.getElementById("modal_content_form"),
  registerForm: document.getElementById("register_form"),
  firstNameField: document.getElementById("first_name_field"),
  lastNameField: document.getElementById("last_name_field"),
  emailField: document.getElementById("email_field"),
  birthdateField: document.getElementById("birthdate_field"),
  tournamentCountField: document.getElementById("tournament_count_field"),
  tournamentFieldset: document.getElementById("tournament_fieldset"),
  newsletterFieldset: document.getElementById("newsletter_fieldset"),
  termsFieldset: document.getElementById("terms_fieldset"),
};

const registerConfirmationElements = {
  registerConfirmation: document.getElementById("register_confirmation"),
  confirmationClose: document.getElementById("confirmation_close"),
};

const buttonElements = {
  signupBtn: document.getElementById("btn_signup"),
  submitBtn: document.getElementById("submit_btn"),
};

const getModalElements = () => {
  return {
    body: elements.body,
    registerModal: registerModalElements.registerModal,
    modalHeader: registerModalElements.modalHeader,
    registerModalClose: registerModalElements.registerModalClose,
    modalContent: registerFormElements.modalContent,
    modalContentForm: registerFormElements.modalContentForm,
    registerForm: registerFormElements.registerForm,
    firstNameField: registerFormElements.firstNameField,
    lastNameField: registerFormElements.lastNameField,
    emailField: registerFormElements.emailField,
    birthdateField: registerFormElements.birthdateField,
    tournamentCountField: registerFormElements.tournamentCountField,
    tournamentFieldset: registerFormElements.tournamentFieldset,
    newsletterFieldset: registerFormElements.newsletterFieldset,
    termsFieldset: registerFormElements.termsFieldset,
    registerConfirmation: registerConfirmationElements.registerConfirmation,
    confirmationClose: registerConfirmationElements.confirmationClose,
  };
};

// =========================
// Form Reset Functions
// =========================
const resetForm = () => {
  // Reset the HTML form
  registerFormElements.registerForm.reset();

  // Define form fields that need state clearing
  const formFields = [
    registerFormElements.firstNameField,
    registerFormElements.lastNameField,
    registerFormElements.emailField,
    registerFormElements.birthdateField,
    registerFormElements.tournamentCountField,
    registerFormElements.tournamentFieldset,
    registerFormElements.newsletterFieldset,
  ];

  // Clear validation states for form fields
  formFields.forEach((field) => {
    if (field && window.clearFormFieldState) {
      window.clearFormFieldState(field);
    }
  });

  // Clear validation states for all radio and checkbox inputs
  const allInputs = registerFormElements.registerForm.querySelectorAll("input");
  allInputs.forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") {
      if (window.clearFormFieldState) {
        window.clearFormFieldState(input);
      }
    }
  });

  // Reset modal visibility states
  registerConfirmationElements.registerConfirmation.classList.remove("show");
  registerFormElements.modalContentForm.classList.add("show");
  registerModalElements.modalHeader.classList.add("show");
};

// =========================
// Modal Management Functions
// =========================
const openModal = () => {
  // Reset form before opening
  resetForm();

  // Set modal visibility and scroll lock
  elements.body.classList.add("scroll_lock");
  registerModalElements.registerModal.classList.add("show");
  registerModalElements.modalHeader.classList.add("show");
  registerFormElements.modalContentForm.classList.add("show");

  // Scroll to top of modal content
  requestAnimationFrame(() => {
    registerFormElements.modalContentForm.scrollTop = 0;
  });

  // Setup real-time validation listeners if validation module is available
  if (window.getRequiredFormFields && window.handleRealTimeValidation) {
    window.getRequiredFormFields().forEach((input) => {
      // Remove existing listeners
      input.removeEventListener("input", window.handleRealTimeValidation);
      input.removeEventListener("change", window.handleRealTimeValidation);

      // Add new listeners based on input type
      if (input.type === "radio" || input.type === "checkbox") {
        input.addEventListener("change", window.handleRealTimeValidation);
      } else {
        input.addEventListener("input", window.handleRealTimeValidation);
      }
    });
  }
};

const closeModal = () => {
  // Remove scroll lock and hide modal
  elements.body.classList.remove("scroll_lock");
  registerModalElements.registerModal.classList.remove("show");
  registerModalElements.modalHeader.classList.remove("show");
  registerFormElements.modalContentForm.classList.remove("show");
  registerConfirmationElements.registerConfirmation.classList.remove("show");
};

// =========================
// Form Submission Success
// =========================
const showConfirmation = () => {
  // Show confirmation and hide form
  registerConfirmationElements.registerConfirmation.classList.add("show");
  registerModalElements.modalHeader.classList.remove("show");
  registerFormElements.modalContentForm.classList.remove("show");
};

// =========================
// Utility Functions
// =========================
const isModalOpen = () => {
  return registerModalElements.registerModal.classList.contains("show");
};

const isConfirmationVisible = () => {
  return registerConfirmationElements.registerConfirmation.classList.contains(
    "show"
  );
};

// =========================
// Export Functions
// =========================
window.GameOnFormReset = {
  resetForm,
  openModal,
  closeModal,
  showConfirmation,
  getModalElements,
  isModalOpen,
  isConfirmationVisible,
  elements,
  registerModalElements,
  registerFormElements,
  registerConfirmationElements,
  buttonElements,
};
window.resetForm = resetForm;
window.openModal = openModal;
window.closeModal = closeModal;
window.showConfirmation = showConfirmation;
window.getModalElements = getModalElements;
window.registerModalElements = registerModalElements;
window.registerFormElements = registerFormElements;
window.registerConfirmationElements = registerConfirmationElements;
window.buttonElements = buttonElements;
