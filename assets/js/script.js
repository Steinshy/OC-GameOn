document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Core Application Initialization
  // =========================
  const init = () => {
    const footerYear = document.getElementById("footer_year");
    footerYear.textContent = new Date().getFullYear();
    window.setupEventListeners();
  };

  // =========================
  // Form Submission
  // =========================
  const submitForm = () => {
    window.showConfirmation();
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (window.validateAllFields()) {
      submitForm();
    }
  };

  window.handleFormSubmission = handleFormSubmission;

  init();
});
