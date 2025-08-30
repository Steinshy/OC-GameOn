// =========================
// Utility Functions
// =========================
const setFormFieldState = (element, hasError, hasSuccess) => {
  element.setAttribute("data-error-visible", hasError);
  element.setAttribute("data-success-visible", hasSuccess);
};

const getRequiredFormFields = () => {
  return document.querySelectorAll(".field:not(.optional) input, .info_field:not(.optional) input");
};

const getRequiredRadioGroups = () => {
  const radioButtons = document.querySelectorAll(
    ".field:not(.optional) input[type='radio'], .info_field:not(.optional) input[type='radio']"
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
    tournamentFieldset: document.getElementById("tournament-fieldset"),
    newsletterFieldset: document.getElementById("newsletter-fieldset"),
    termsFieldset: document.getElementById("terms-fieldset"),
  };
};

// =========================
// Pattern Definitions
// =========================
const fieldPatterns = {
  name: /^[A-Za-zÀ-ÿ\s-]{2,}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  birthdate: /^\d{4}-\d{2}-\d{2}$/,
  tournament_count: /^\d+$/,
};

// =========================
// Field Validation Rules
// =========================
const validateName = (value) => {
  const pattern = fieldPatterns.name;
  return value.length >= 2 && pattern.test(value);
};

const fieldValidators = {
  first_name: validateName,
  last_name: validateName,

  email: (value) => {
    const pattern = fieldPatterns.email;
    return pattern.test(value);
  },

  birthdate: (value) => {
    const pattern = fieldPatterns.birthdate;
    if (!pattern.test(value)) return false;

    const today = new Date();
    const selectedDate = new Date(value);
    const minDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate()
    );

    return selectedDate <= today && selectedDate >= minDate;
  },

  tournament_count: (value) => {
    const pattern = fieldPatterns.tournament_count;
    const numValue = parseInt(value, 10);
    return pattern.test(value) && numValue >= 0 && numValue <= 99;
  },
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
      element.closest(".field") ||
      element.closest(".info_field");

    if (container) {
      setFormFieldState(container, !isAnyChecked, isAnyChecked);
    } else {
      setFormFieldState(element, !isAnyChecked, isAnyChecked);
    }

    return isAnyChecked;
  },

  checkbox: (element) => {
    const isChecked = element.checked;

    const container = element.closest(".field") || element.closest(".info_field");
    if (container) {
      setFormFieldState(container, !isChecked, isChecked);
    } else {
      setFormFieldState(element, !isChecked, isChecked);
    }

    return isChecked;
  },

  validateInput: (element) => {
    const value = element.value.trim();
    const validator = fieldValidators[element.id];

    // Find the closest field container
    const container = element.closest(".field") || element.closest(".info_field");
    const target = container || element;

    if (!value) {
      setFormFieldState(target, true, false);
      return false;
    }

    // Use specific validator if available
    if (validator) {
      const isValid = validator(value);
      setFormFieldState(target, !isValid, isValid);
      return isValid;
    }

    // Fallback: field is valid if it has a value
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
    case "number":
    case "email":
    case "date":
      return validationRules.validateInput(element);

    default:
      return true;
  }
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
// Window Exports
// =========================
window.validateField = validateField;
window.validateAllFields = validateAllFields;
window.setFormFieldState = setFormFieldState;
window.clearFormFieldState = clearFormFieldState;
window.getRequiredFormFields = getRequiredFormFields;
window.fieldValidators = fieldValidators;
window.fieldPatterns = fieldPatterns;
window.validateName = validateName;
