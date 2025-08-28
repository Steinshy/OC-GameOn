document.addEventListener("DOMContentLoaded", () => {
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
  window.setupEventListeners();
  const footerYear = document.getElementById("footer_year");
  footerYear.textContent = new Date().getFullYear();
});
