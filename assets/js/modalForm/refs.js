// =========================
// Modal Form DOM References
// =========================
// Modal layout elements
const modalRefs = {
  modal: document.getElementById("modal-signup"),
  content: document.getElementById("modal-content"),
  header: document.getElementById("modal-header"),
  footer: document.getElementById("modal-footer"),
  formSection: document.getElementById("form-section"),
  confirm: document.getElementById("confirm")
};

// Form and its validated fields
const formRefs = {
  form: document.getElementById("form-signup"),
  inputs: [
    "first_name",
    "last_name",
    "email",
    "birthdate",
    "tournament_count"
  ].map((id) => document.getElementById(id)),
  radios: Array.from(document.getElementsByName("location")),
  radioFieldset: document.getElementById("radio-tournament"),
  termsCheckbox: document.getElementById("terms_of_service")
};

// Modal action buttons
const buttonRefs = {
  openButtons: [
    document.getElementById("signup-desktop"),
    document.getElementById("signup-mobile")
  ],
  closeButton: document.getElementById("modal-close"),
  confirmCloseButton: document.getElementById("modal-confirm-close")
};
