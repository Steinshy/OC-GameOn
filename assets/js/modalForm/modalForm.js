// DOM Element References
const pageRefs = {
  body: document.body
};

// Register Modal References
const modalRefs = {
  modalSignup: document.getElementById("modal-signup"),
  modalContent: document.getElementById("modal-content"),
  modalHeader: document.getElementById("modal-header"),
  modalFooter: document.getElementById("modal-footer")
};

// Register Confirmation References
const confirmRefs = {
  confirm: document.getElementById("confirm"),
  confirmCloseButton: document.getElementById("modal-confirm-close")
};

// Register Form References
const formRefs = {
  formSection: document.getElementById("form-section"),
  formSignup: document.getElementById("form-signup")
};

// Button References
const buttonRefs = {
  signupButtonDesktop: document.getElementById("signup-desktop"),
  signupButtonMobile: document.getElementById("signup-mobile"),
  modalCloseButton: document.getElementById("modal-close"),
  modalSubmitButton: document.getElementById("modal-submit-button")
};

// Register Form Inputs References
const formInputsRefs = {
  firstNameInput: document.getElementById("first_name"),
  lastNameInput: document.getElementById("last_name"),
  emailInput: document.getElementById("email"),
  birthdateInput: document.getElementById("birthdate"),
  tournamentCountInput: document.getElementById("tournament_count")
};

// Register Form Inputs Map References
const formInputsMapRefs = {
  firstName: formInputsRefs.firstNameInput,
  lastName: formInputsRefs.lastNameInput,
  email: formInputsRefs.emailInput,
  birthdate: formInputsRefs.birthdateInput,
  tournamentCount: formInputsRefs.tournamentCountInput
};

// Register Form Container References
const formContainerRefs = {
  firstNameContainer: document.getElementById("info-first-name"),
  lastNameContainer: document.getElementById("info-last-name"),
  emailContainer: document.getElementById("info-email"),
  birthdateContainer: document.getElementById("info-birthdate"),
  tournamentCountContainer: document.getElementById("info-tournament-count"),
  tournamentRadio: document.getElementById("radio-tournament"),
  termsCheckbox: document.getElementById("checkbox-terms"),
  newsletterCheckbox: document.getElementById("checkbox-newsletter")
};

// Register Form Container Map References
const formContainerMapRefs = {
  firstName: formContainerRefs.firstNameContainer,
  lastName: formContainerRefs.lastNameContainer,
  email: formContainerRefs.emailContainer,
  birthdate: formContainerRefs.birthdateContainer,
  tournamentCount: formContainerRefs.tournamentCountContainer,
  location: formContainerRefs.tournamentRadio,
  terms: formContainerRefs.termsCheckbox,
  newsletter: formContainerRefs.newsletterCheckbox
};

// Register Validation References
const validationRefs = {
  errorMessagesInputs: {
    firstName: document.getElementById("first-name-error"),
    lastName: document.getElementById("last-name-error"),
    email: document.getElementById("email-error"),
    birthdate: document.getElementById("birthdate-error"),
    tournamentCount: document.getElementById("tournament-count-error"),
    location: document.getElementById("location-error"),
    tournament: document.getElementById("tournament-error"),
    terms: document.getElementById("terms-error"),
    newsletter: document.getElementById("newsletter-error")
  },

  successMessagesInputs: {
    firstName: document.getElementById("first-name-success"),
    lastName: document.getElementById("last-name-success"),
    email: document.getElementById("email-success"),
    birthdate: document.getElementById("birthdate-success"),
    tournamentCount: document.getElementById("tournament-count-success"),
    location: document.getElementById("location-success"),
    tournament: document.getElementById("tournament-success"),
    terms: document.getElementById("terms-success"),
    newsletter: document.getElementById("newsletter-success")
  },

  radioButtonsInputs: {
    newYork: document.getElementById("radio-new-york"),
    sanFrancisco: document.getElementById("radio-san-francisco"),
    seattle: document.getElementById("radio-seattle"),
    chicago: document.getElementById("radio-chicago"),
    boston: document.getElementById("radio-boston"),
    portland: document.getElementById("radio-portland")
  },

  checkboxesInputs: {
    terms: document.getElementById("terms_of_service"),
    newsletter: document.getElementById("newsletter")
  }
};

// =========================
// Window Exports
// =========================
window.pageRefs = pageRefs;
window.modalRefs = modalRefs;
window.buttonRefs = buttonRefs;
window.formRefs = formRefs;
window.confirmRefs = confirmRefs;
window.formInputsRefs = formInputsRefs;
window.formContainerRefs = formContainerRefs;
window.validationRefs = validationRefs;
window.formContainerMapRefs = formContainerMapRefs;
window.formInputsMapRefs = formInputsMapRefs;

// Initialize the module modal form
if (window.initializeModalForm) {
  window.initializeModalForm();
}
