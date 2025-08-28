const handleRealTimeValidation = (e) => {
  if (window.validateField) {
    window.validateField(e.target);
  }
};

const setupRealTimeValidation = () => {
  if (!window.getRequiredFormFields || !window.validateField) {
    console.warn("Real-time validation dependencies not available");
    return;
  }

  const requiredFields = window.getRequiredFormFields();

  requiredFields.forEach((input) => {
    // Remove existing listeners to prevent duplicates
    input.removeEventListener("input", handleRealTimeValidation);
    input.removeEventListener("change", handleRealTimeValidation);

    // Add new listeners based on input type
    if (input.type === "radio" || input.type === "checkbox") {
      input.addEventListener("change", handleRealTimeValidation);
    } else {
      input.addEventListener("input", handleRealTimeValidation);
    }
  });
};

const removeRealTimeValidation = () => {
  if (!window.getRequiredFormFields) {
    return;
  }

  const requiredFields = window.getRequiredFormFields();

  requiredFields.forEach((input) => {
    input.removeEventListener("input", handleRealTimeValidation);
    input.removeEventListener("change", handleRealTimeValidation);
  });
};

// =========================
// Window Exports
// =========================
window.handleRealTimeValidation = handleRealTimeValidation;
window.setupRealTimeValidation = setupRealTimeValidation;
window.removeRealTimeValidation = removeRealTimeValidation;
