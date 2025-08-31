// =========================
// Form Submission Handler
// =========================
const handleFormSubmission = (e) => {
  e.preventDefault();

  if (window.validateAllFields && window.validateAllFields()) {
    // Show confirmation
    window.showConfirmation();
    // Hide form sections but keep modal content visible for confirmation
    window.hideFormSections();
  }
};

// =========================
// Real-time Validation Handler
// =========================
const handleRealTimeValidation = (e) => {
  // Validate field
  if (window.validateField) {
    window.validateField(e.target);
  }
};

// =========================
// Window Exports
// =========================
window.handleFormSubmission = handleFormSubmission;
window.handleRealTimeValidation = handleRealTimeValidation;
