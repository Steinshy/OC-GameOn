// =========================
// Validation Helper Functions
// =========================
// Set Form Field State
const setFormFieldState = (key, hasError, hasSuccess) => {
  const containers = formContainerMapRefs || {};

  const element =
    containers[key] ||
    (typeof key === "string"
      ? document.getElementById(key)?.closest(".field, .info_field, fieldset")
      : key);

  if (element) {
    element.setAttribute("data-error-visible", hasError);
    element.setAttribute("data-success-visible", hasSuccess);
  }
};

// Clear Form Field State
const clearFormFieldState = (input) => {
  setFormFieldState(input.id || input.name, false, false);
  if (input.type === "radio" || input.type === "checkbox")
    input.checked = false;
};

// =========================
// Window Exports
// =========================
window.setFormFieldState = setFormFieldState;
window.clearFormFieldState = clearFormFieldState;
