document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // DOM Element References
  // =========================
  const elements = {
    // Core elements
    body: document.body,
    footerYear: document.getElementById("footer_year"),
  };

  const mobileMenuElements = {
    mobileMenu: document.getElementById("mobile_menu"),
    btnMobileMenu: document.getElementById("btn_mobile_menu"),
  };

  const registerModalElements = {
    registerModal: document.getElementById("register_modal"),
    modalHeader: document.getElementById("modal_header"),
    registerModalClose: document.getElementById("register_modal_close"),
  };

  const registerFormElements = {
    modalContent: document.getElementById("modal_content"),
    modalContentForm: document.getElementById("modal_content_form"),
    registerForm: document.getElementById("register_form"),
    firstNameField: document.getElementById("first_name_field"),
    lastNameField: document.getElementById("last_name_field"),
    emailField: document.getElementById("email_field"),
    birthdateField: document.getElementById("birthdate_field"),
    tournamentCountField: document.getElementById("tournament_count_field"),
    tournamentFieldset: document.getElementById("tournament_fieldset"),
    newsletterFieldset: document.getElementById("newsletter_fieldset"),
    termsFieldset: document.getElementById("terms_fieldset"),
  };

  const registerConfirmationElements = {
    registerConfirmation: document.getElementById("register_confirmation"),
    confirmationClose: document.getElementById("confirmation_close"),
  };

  const buttonElements = {
    signupBtn: document.getElementById("btn_signup"),
    submitBtn: document.getElementById("submit_btn"),
  };

  const init = () => {
    elements.footerYear.textContent = new Date().getFullYear();
    setupEventListeners();
  };

  // =========================
  // Utility Functions
  // =========================
  const setFormFieldState = (element, hasError, hasSuccess) => {
    element.setAttribute("data-error-visible", hasError);
    element.setAttribute("data-success-visible", hasSuccess);
  };

  const clearFormFieldState = (element) => {
    setFormFieldState(element, false, false);
    if (element.type === "radio" || element.type === "checkbox") {
      element.checked = false;
    }
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
  // Modal Management
  // =========================
  const resetForm = () => {
    registerFormElements.registerForm.reset();

    const formFields = [
      registerFormElements.firstNameField,
      registerFormElements.lastNameField,
      registerFormElements.emailField,
      registerFormElements.birthdateField,
      registerFormElements.tournamentCountField,
      registerFormElements.tournamentFieldset,
      registerFormElements.newsletterFieldset,
    ];

    formFields.forEach((field) => {
      if (field) {
        clearFormFieldState(field);
      }
    });

    const allInputs =
      registerFormElements.registerForm.querySelectorAll("input");
    allInputs.forEach((input) => {
      if (input.type === "radio" || input.type === "checkbox") {
        clearFormFieldState(input);
      }
    });

    registerConfirmationElements.registerConfirmation.classList.remove("show");
    registerFormElements.modalContentForm.classList.add("show");
    registerModalElements.modalHeader.classList.add("show");
  };

  const openModal = () => {
    resetForm();

    elements.body.classList.add("scroll_lock");
    registerModalElements.registerModal.classList.add("show");
    registerModalElements.modalHeader.classList.add("show");
    registerFormElements.modalContentForm.classList.add("show");

    requestAnimationFrame(() => {
      registerFormElements.modalContentForm.scrollTop = 0;
    });

    getRequiredFormFields().forEach((input) => {
      input.removeEventListener("input", handleRealTimeValidation);
      input.removeEventListener("change", handleRealTimeValidation);

      if (input.type === "radio" || input.type === "checkbox") {
        input.addEventListener("change", handleRealTimeValidation);
      } else {
        input.addEventListener("input", handleRealTimeValidation);
      }
    });
  };

  const closeModal = () => {
    elements.body.classList.remove("scroll_lock");
    registerModalElements.registerModal.classList.remove("show");
    registerModalElements.modalHeader.classList.remove("show");
    registerFormElements.modalContentForm.classList.remove("show");
    registerConfirmationElements.registerConfirmation.classList.remove("show");
  };

  // =========================
  // Mobile Menu Management
  // =========================
  const openMobileMenu = () =>
    mobileMenuElements.mobileMenu.classList.add("show");
  const closeMobileMenu = () =>
    mobileMenuElements.mobileMenu.classList.remove("show");

  const toggleMobileMenu = () => {
    const isMenuOpen = mobileMenuElements.mobileMenu.classList.contains("show");
    isMenuOpen ? closeMobileMenu() : openMobileMenu();
  };

  // =========================
  // Form Validation
  // =========================
  const validationRules = {
    radio: (element) => {
      const radioGroup = document.querySelectorAll(
        `input[name="${element.name}"]`
      );
      const isAnyChecked = Array.from(radioGroup).some(
        (radio) => radio.checked
      );

      const containerMap = {
        location: registerFormElements.tournamentFieldset,
        newsletter: registerFormElements.newsletterFieldset,
        terms_of_service: registerFormElements.termsFieldset,
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
  // Validation Handlers
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
  // Form Submission
  // =========================
  const submitForm = () => {
    registerConfirmationElements.registerConfirmation.classList.add("show");
    registerModalElements.modalHeader.classList.remove("show");
    registerFormElements.modalContentForm.classList.remove("show");
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (validateAllFields()) {
      submitForm();
    }
  };

  // =========================
  // Event Handlers
  // =========================
  const createEventHandler = (handler) => (e) => {
    e.stopPropagation();
    handler(e);
  };

  const eventHandlers = {
    escape: (e) => {
      if (e.key === "Escape") {
        if (registerModalElements.registerModal.classList.contains("show"))
          closeModal();
        if (mobileMenuElements.mobileMenu.classList.contains("show"))
          closeMobileMenu();
      }
    },

    mobileMenu: createEventHandler(() => toggleMobileMenu()),
    signup: createEventHandler(() => openModal()),
    confirmationClose: createEventHandler(() => closeModal()),
    modalClose: createEventHandler(() => closeModal()),
  };

  // =========================
  // Event Listeners Setup
  // =========================
  const setupEventListeners = () => {
    // Global events
    document.addEventListener("keydown", eventHandlers.escape);

    // Mobile menu
    mobileMenuElements.btnMobileMenu.addEventListener(
      "click",
      eventHandlers.mobileMenu
    );

    // Modal actions
    buttonElements.signupBtn.addEventListener("click", eventHandlers.signup);
    registerConfirmationElements.confirmationClose.addEventListener(
      "click",
      eventHandlers.confirmationClose
    );
    registerModalElements.registerModalClose.addEventListener(
      "click",
      eventHandlers.modalClose
    );

    // Form submission
    buttonElements.submitBtn.addEventListener("click", handleFormSubmission);
    registerFormElements.registerForm.addEventListener(
      "submit",
      handleFormSubmission
    );
  };
  init();
});
