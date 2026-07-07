// =========================
// Validation Rules
// =========================
const validationPatterns = {
  name: /^(?!.*[ -]{2,})[A-Za-zÀ-ÿ]+(?:[ -][A-Za-zÀ-ÿ]+)*$/,
  email:
    /^(?!.*\.\.)([a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*)@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
  birthdate: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  tournamentCount: /^(0|[1-9]\d?)$/
};

// Validators keyed by input id
const validators = {
  first_name: (value) =>
    value.length >= 2 && validationPatterns.name.test(value),
  last_name: (value) =>
    value.length >= 2 && validationPatterns.name.test(value),
  email: (value) => validationPatterns.email.test(value),
  birthdate: (value) => {
    if (!validationPatterns.birthdate.test(value)) return false;
    const date = new Date(value);
    const today = new Date();
    const oldest = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate()
    );
    return date <= today && date >= oldest;
  },
  tournament_count: (value) => validationPatterns.tournamentCount.test(value)
};

// =========================
// Field State Helpers
// =========================
// Toggle the error/success attributes styled by modal.css
const setFieldState = (container, hasError, hasSuccess) => {
  if (!container) return;
  container.setAttribute("data-error-visible", hasError);
  container.setAttribute("data-success-visible", hasSuccess);
};

const clearFieldState = (container) => setFieldState(container, false, false);

// =========================
// Field Validation
// =========================
// Validate a single text/email/date/number input
const validateInput = (input) => {
  const value = input.value.trim();
  const isValid = Boolean(value) && validators[input.id](value);
  setFieldState(input.closest(".info_field"), !isValid, isValid);
  return isValid;
};

// Validate the tournament location radio group
const validateRadioGroup = () => {
  const isChecked = formRefs.radios.some((radio) => radio.checked);
  setFieldState(formRefs.radioFieldset, !isChecked, isChecked);
  return isChecked;
};

// Validate the terms of service checkbox
const validateTerms = () => {
  const isChecked = formRefs.termsCheckbox.checked;
  setFieldState(
    formRefs.termsCheckbox.closest(".field"),
    !isChecked,
    isChecked
  );
  return isChecked;
};

// Validate the whole form; true only when every field passes
const validateAllFields = () => {
  const results = [
    ...formRefs.inputs.map(validateInput),
    validateRadioGroup(),
    validateTerms()
  ];
  return results.every(Boolean);
};

// =========================
// Real-time Validation
// =========================
// Attached once at startup; gives immediate feedback while typing
const setupRealTimeValidation = () => {
  formRefs.inputs.forEach((input) =>
    input.addEventListener("input", () => validateInput(input))
  );
  formRefs.radios.forEach((radio) =>
    radio.addEventListener("change", validateRadioGroup)
  );
  formRefs.termsCheckbox.addEventListener("change", validateTerms);
};
