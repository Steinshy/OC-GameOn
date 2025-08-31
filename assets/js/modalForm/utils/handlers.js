// =========================
// Form Handlers
// =========================

// =========================
// Form Submission Handler
// =========================
const handleFormSubmission = (e) => {
  e.preventDefault();

  if (window.validateAllFields && window.validateAllFields()) {
    window.showConfirmation();
    // Hide form sections but keep modal content visible for confirmation
    window.hideFormSections();
  }
};

// =========================
// Real-time Validation Handler
// =========================
const handleRealTimeValidation = (e) => {
  if (window.validateField) {
    window.validateField(e.target);
  }
};

// =========================
// Window Exports
// =========================
window.handleFormSubmission = handleFormSubmission;
window.handleRealTimeValidation = handleRealTimeValidation;
