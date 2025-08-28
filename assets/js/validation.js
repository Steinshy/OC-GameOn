// =========================
// Utility Functions
// =========================
const setFormFieldState = (element, hasError, hasSuccess) => {
  element.setAttribute("data-error-visible", hasError);
  element.setAttribute("data-success-visible", hasSuccess);
};

const getRequiredFormFields = () => {
  return document.querySelectorAll(".form_data:not(.optional) input");
};

const getRequiredRadioGroups = () => {
  const radioButtons = document.querySelectorAll(
    ".form_data:not(.optional) input[type='radio']"
  );
  const groups = new Set();
  radioButtons.forEach((radio) => {
    if (radio.name) groups.add(radio.name);
  });
  return Array.from(groups).map((groupName) =>
    document.querySelector(`input[name="${groupName}"]`)
  );
};

// =========================
// Form Field Element References
// =========================
const getFormElements = () => {
  return {
    tournamentFieldset: document.getElementById("tournament_fieldset"),
    newsletterFieldset: document.getElementById("newsletter_fieldset"),
    termsFieldset: document.getElementById("terms_fieldset"),
  };
};

// =========================
// Validation Rules
// =========================
const validationRules = {
  radio: (element) => {
    const radioGroup = document.querySelectorAll(
      `input[name="${element.name}"]`
    );
    const isAnyChecked = Array.from(radioGroup).some((radio) => radio.checked);

    const formElements = getFormElements();
    const containerMap = {
      location: formElements.tournamentFieldset,
      newsletter: formElements.newsletterFieldset,
      terms_of_service: formElements.termsFieldset,
    };

    const container =
      containerMap[element.name] ||
      element.closest("fieldset") ||
      element.closest(".form_data");

    if (container) {
      setFormFieldState(container, !isAnyChecked, isAnyChecked);
    } else {
      setFormFieldState(element, !isAnyChecked, isAnyChecked);
    }

    return isAnyChecked;
  },

  checkbox: (element) => {
    const isChecked = element.checked;

    const container = element.closest(".form_data");
    if (container) {
      setFormFieldState(container, !isChecked, isChecked);
    } else {
      setFormFieldState(element, !isChecked, isChecked);
    }

    return isChecked;
  },

  text: (element) => {
    const value = element.value.trim();
    const pattern = element.dataset.pattern;

    // Find the closest form_data container
    const container = element.closest(".form_data");
    const target = container || element;

    if (!value) {
      setFormFieldState(target, true, false);
      return false;
    }

    if (pattern && !new RegExp(pattern).test(value)) {
      setFormFieldState(target, true, false);
      return false;
    }

    setFormFieldState(target, false, true);
    return true;
  },

  number: (element) => {
    const value = element.value.trim();

    // Find the closest form_data container
    const container = element.closest(".form_data");
    const target = container || element;

    if (!value) {
      setFormFieldState(target, true, false);
      return false;
    }

    setFormFieldState(target, false, true);
    return true;
  },

  email: (element) => {
    const value = element.value.trim();

    // Find the closest form_data container
    const container = element.closest(".form_data");
    const target = container || element;

    if (!value) {
      setFormFieldState(target, true, false);
      return false;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(value)) {
      setFormFieldState(target, true, false);
      return false;
    }

    setFormFieldState(target, false, true);
    return true;
  },

  date: (element) => {
    const value = element.value.trim();
    const today = new Date();
    const selectedDate = new Date(value);
    const minDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate()
    );

    // Find the closest form_data container
    const container = element.closest(".form_data");
    const target = container || element;

    if (!value || selectedDate > today || selectedDate < minDate) {
      setFormFieldState(target, true, false);
      return false;
    }

    setFormFieldState(target, false, true);
    return true;
  },
};

// =========================
// Validation Functions
// =========================
const validateField = (element) => {
  const { type, id } = element;

  switch (type) {
    case "radio":
      return validationRules.radio(element);

    case "checkbox":
      return id === "terms_of_service"
        ? validationRules.checkbox(element)
        : true;

    case "text":
      return validationRules.text(element);

    case "number":
      return validationRules.number(element);

    case "email":
      return validationRules.email(element);

    case "date":
      return validationRules.date(element);

    default:
      return true;
  }
};

const handleRealTimeValidation = (e) => {
  validateField(e.target);
};

const validateAllFields = () => {
  const requiredFields = getRequiredFormFields();
  const requiredRadioGroups = getRequiredRadioGroups();
  let isFormValid = true;

  // Validate all regular fields
  requiredFields.forEach((field) => {
    if (field.type !== "radio") {
      // Skip radio buttons here, handle them separately
      const isFieldValid = validateField(field);
      if (!isFieldValid) isFormValid = false;
    }
  });

  // Validate radio button groups
  requiredRadioGroups.forEach((radioButton) => {
    const isGroupValid = validateField(radioButton);
    if (!isGroupValid) isFormValid = false;
  });

  return isFormValid;
};

// =========================
// Field State Management
// =========================
const clearFormFieldState = (element) => {
  setFormFieldState(element, false, false);
  if (element.type === "radio" || element.type === "checkbox") {
    element.checked = false;
  }
};

// =========================
// Export Functions
// =========================
// Make functions available globally for use by other modules
if (typeof window !== "undefined") {
  window.GameOnValidation = {
    // Core validation functions
    validateField,
    validateAllFields,
    handleRealTimeValidation,
    setFormFieldState,
    clearFormFieldState,
    getRequiredFormFields,
    getRequiredRadioGroups,
    validationRules,
    getFormElements,
  };

  window.validateField = validateField;
  window.validateAllFields = validateAllFields;
  window.handleRealTimeValidation = handleRealTimeValidation;
  window.setFormFieldState = setFormFieldState;
  window.clearFormFieldState = clearFormFieldState;
  window.getRequiredFormFields = getRequiredFormFields;
  window.getRequiredRadioGroups = getRequiredRadioGroups;
}
