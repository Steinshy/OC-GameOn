// =========================
// Get Required Fields
// =========================
const getRequiredFields = () => {
  // Return actual form fields, radio buttons and checkboxes that require validation
  const fields = formInputsMapRefs || {};
  const radioButtons = validationRefs?.radioButtonsInputs || {};
  const checkboxes = validationRefs?.checkboxesInputs || {};
  return [
    ...Object.values(fields),
    ...Object.values(radioButtons),
    ...Object.values(checkboxes)
  ].filter(Boolean);
};

// =========================
// Setup Real-time Validation
// =========================
const setupRealTimeValidation = () => {
  if (!validateField || !handleRealTimeValidation) {
    console.warn("Real-time validation dependencies not available");
    return;
  }

  const requiredFields = getRequiredFields();
  requiredFields.forEach((input) => {
    // Add listeners based on input type
    if (input.type === "radio" || input.type === "checkbox") {
      input.addEventListener("change", handleRealTimeValidation);
    } else {
      input.addEventListener("input", handleRealTimeValidation);
    }
  });
};

// =========================
// Window Exports
// =========================
window.setupRealTimeValidation = setupRealTimeValidation;
window.getRequiredFields = getRequiredFields;
