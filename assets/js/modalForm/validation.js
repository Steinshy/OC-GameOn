// =========================
// Validation by Field ID
// =========================
const validateByFieldId = (fieldId, value) => {
  const patterns = {
    name: /^(?=.{2,})(?!.*[ -]{2,})[A-Za-zÀ-ÿ]+(?:[ -][A-Za-zÀ-ÿ]+)*$/u,
    email:
      /^(?!.*\.\.)([a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*)@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
    birthdate: /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    number: /^(0|[1-9]\d?)$/
  };

  const trimmedValue = value.trim();

  switch (fieldId) {
    case "first_name":
    case "last_name":
      return patterns.name.test(trimmedValue);

    case "email":
      return patterns.email.test(trimmedValue);

    case "birthdate":
      if (!patterns.birthdate.test(value)) return false;
      const date = new Date(value);
      const today = new Date();
      const min = new Date(
        today.getFullYear() - 100,
        today.getMonth(),
        today.getDate()
      );
      return date <= today && date >= min;

    case "tournament_count":
      return patterns.number.test(value);

    default:
      return true;
  }
};

// =========================
// Validate Input by Field ID
// =========================
const validateInput = (input) => {
  const value = input.value.trim();
  if (!value) return setFormFieldState(input.id, true, false), false;
  const isValid = validateByFieldId(input.id, value);
  return setFormFieldState(input.id, !isValid, isValid), isValid;
};

// =========================
// Validate Radio Group by Field ID
// =========================
const validateRadioGroup = (input) => {
  const checked = Object.values(validationRefs?.radioButtonsInputs || {}).some(
    (radio) => radio?.checked
  );
  return setFormFieldState(input.name, !checked, checked), checked;
};

// =========================
// Validate Checkbox by Field ID
// =========================
const validateCheckbox = (input) => {
  return (
    setFormFieldState(input.id, !input.checked, input.checked), input.checked
  );
};

// =========================
// Validate Field by Field ID
// =========================
const validateField = (input) => {
  if (input.type === "radio") return validateRadioGroup(input);
  if (input.type === "checkbox")
    return input.id === "terms_of_service" ? validateCheckbox(input) : true;
  return validateInput(input);
};

// =========================
// Validate All Fields by Field ID
// =========================
const validateAllFields = () => {
  if (!getRequiredFields) return false;

  const requiredFields = getRequiredFields();

  // Validate all fields by field id and collect results
  const results = requiredFields.map((field) => field && validateField(field));

  // Return true only if all validations by field id passed
  return results.every((result) => result);
};

// =========================
// Window Exports
// =========================
window.validateField = validateField;
window.validateAllFields = validateAllFields;
