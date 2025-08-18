document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // DOM Element References
  // =========================
  const elements = {
    // Core elements
    body: document.body,
    footerYear: document.getElementById("footer_year"),

    // Mobile menu
    mobileMenu: document.getElementById("mobile_menu"),
    btnMobileMenu: document.getElementById("btn_mobile_menu"),

    // Registration modal
    registerModal: document.getElementById("register_modal"),
    registerModalClose: document.getElementById("register_modal_close"),
    registerConfirmation: document.getElementById("register_confirmation"),
    confirmationClose: document.getElementById("confirmation_close"),

    // Form elements
    registerForm: document.getElementById("register_form"),
    modalContentForm: document.getElementById("modal_content_form"),
    modalHeader: document.getElementById("modal_header"),
    submitBtn: document.getElementById("submit_btn"),

    // Buttons
    signupBtn: document.getElementById("btn_signup"),

    // Data
    currentYear: new Date().getFullYear()
  };

  // =========================
  // App Initialization
  // =========================
  const init = () => {
    initializeApp();
    setupEventListeners();
  };

  // =========================
  // Initialization
  // =========================
  const initializeApp = () => {
    elements.footerYear.textContent = elements.currentYear;
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

    // Reset radio buttons and checkboxes
    if (element.type === "radio" || element.type === "checkbox") {
      element.checked = false;
    }
  };

  const getRequiredFormFields = () => {
    return document.querySelectorAll(".form_data:not(.optional) input");
  };

  // =========================
  // Modal Management
  // =========================
  const resetForm = () => {
    elements.registerForm.reset();

    // Clear all form field states
    document.querySelectorAll(".form_data").forEach(clearFormFieldState);

    // Show form, hide confirmation
    elements.registerConfirmation.classList.remove("show");
    elements.modalContentForm.classList.remove("hide");
  };

  const openModal = () => {
    resetForm();

    // Lock body scroll and show modal
    elements.body.classList.add("scroll_lock");
    elements.modalContentForm.scrollTop = 0;
    elements.registerModal.classList.add("show");

    // Set up real-time validation for all form fields
    getRequiredFormFields().forEach(input => {
      input.removeEventListener("input", handleRealTimeValidation);
      input.addEventListener("input", handleRealTimeValidation);
    });
  };

  const closeModal = () => {
    elements.body.classList.remove("scroll_lock");
    elements.registerModal.classList.remove("show");
  };

  // =========================
  // Mobile Menu Management
  // =========================
  const openMobileMenu = () => elements.mobileMenu.classList.add("show");
  const closeMobileMenu = () => elements.mobileMenu.classList.remove("show");

  const toggleMobileMenu = () => {
    const isMenuOpen = elements.mobileMenu.classList.contains("show");
    isMenuOpen ? closeMobileMenu() : openMobileMenu();
  };

  // =========================
  // Form Validation
  // =========================
  const validationRules = {
    radio: (element) => {
      const isLocationSelected = document.querySelector('input[name="location"]:checked') !== null;
      const formField = element.closest(".form_data");
      setFormFieldState(formField, !isLocationSelected, isLocationSelected);
      return isLocationSelected;
    },

    checkbox: (element) => {
      const isChecked = element.checked;
      const formField = element.closest(".form_data");
      setFormFieldState(formField, !isChecked, isChecked);
      return isChecked;
    },

    text: (element) => {
      const value = element.value.trim();
      const pattern = element.dataset.pattern;
      const formField = element.parentElement;

      if (!value) {
        setFormFieldState(formField, true, false);
        return false;
      }

      if (pattern && !new RegExp(pattern).test(value)) {
        setFormFieldState(formField, true, false);
        return false;
      }

      setFormFieldState(formField, false, true);
      return true;
    },

    number: (element) => {
      const value = element.value.trim();
      const formField = element.parentElement;

      if (!value) {
        setFormFieldState(formField, true, false);
        return false;
      }

      setFormFieldState(formField, false, true);
      return true;
    },

    email: (element) => {
      const value = element.value.trim();
      const formField = element.parentElement;

      if (!value) {
        setFormFieldState(formField, true, false);
        return false;
      }

      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        setFormFieldState(formField, true, false);
        return false;
      }

      setFormFieldState(formField, false, true);
      return true;
    },

    date: (element) => {
      const value = element.value.trim();
      const today = new Date();
      const selectedDate = new Date(value);
      const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
      const formField = element.parentElement;

      if (!value || selectedDate > today || selectedDate < minDate) {
        setFormFieldState(formField, true, false);
        return false;
      }

      setFormFieldState(formField, false, true);
      return true;
    }
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
        return id === "terms_of_service" ? validationRules.checkbox(element) : true;

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
    let isFormValid = true;

    // Validate all fields and show all errors
    requiredFields.forEach(field => {
      const isFieldValid = validateField(field);
      if (!isFieldValid) isFormValid = false;
    });

    return isFormValid;
  };

  // =========================
  // Form Submission
  // =========================
  const submitForm = () => {
    elements.registerConfirmation.classList.add("show");
    elements.modalHeader.classList.add("hide");
    elements.modalContentForm.classList.add("hide");
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
        if (elements.registerModal.classList.contains("show")) closeModal();
        if (elements.mobileMenu.classList.contains("show")) closeMobileMenu();
      }
    },

    mobileMenu: createEventHandler(() => toggleMobileMenu()),
    signup: createEventHandler(() => openModal()),
    confirmationClose: createEventHandler(() => closeModal()),
    modalClose: createEventHandler(() => closeModal())
  };

  // =========================
  // Event Listeners Setup
  // =========================
  const setupEventListeners = () => {
    // Global events
    document.addEventListener("keydown", eventHandlers.escape);

    // Mobile menu
    elements.btnMobileMenu.addEventListener("click", eventHandlers.mobileMenu);

    // Modal actions
    elements.signupBtn.addEventListener("click", eventHandlers.signup);
    elements.confirmationClose.addEventListener("click", eventHandlers.confirmationClose);
    elements.registerModalClose.addEventListener("click", eventHandlers.modalClose);

    // Form submission
    elements.submitBtn.addEventListener("click", handleFormSubmission);
    elements.registerForm.addEventListener("submit", handleFormSubmission);

  };
  init();
});