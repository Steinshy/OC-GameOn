document.addEventListener("DOMContentLoaded", () => {
  // =========================
  //    Variables
  // =========================
  const body = document.body;
  const mobileMenu = document.getElementById("mobile_menu");
  const btnMobileMenu = document.getElementById("btn_mobile_menu");
  const registerModal = document.getElementById("register_modal");
  const registerModalClose = document.getElementById("register_modal_close");
  const signupBtn = document.getElementById("btn_signup");
  const submitBtn = document.getElementById("submit_btn");
  const registerConfirmation = document.getElementById("register_confirmation");
  const registerForm = document.getElementById("register_form");
  const modalContentForm = document.getElementById("modal_content_form");
  const modalHeader = document.getElementById("modal_header");
  const confirmationClose = document.getElementById("confirmation_close");

  const resetForm = () => {
    registerForm.reset();
    document.querySelectorAll(".form_data").forEach((element) => {
      element.setAttribute("data-error-visible", "false");
      element.setAttribute("data-success-visible", "false");
      if (element.type === "radio") element.checked = false;
      if (element.type === "checkbox") element.checked = false;
    });
    registerConfirmation.classList.remove("show");
    modalContentForm.classList.remove("hide");
  };

  const openModal = () => {
    resetForm();
    body.classList.add("scroll_lock");
    registerModal.classList.add("show");
    modalContentForm.scrollTop = 0;

    registerForm.querySelectorAll('input').forEach(input => {
      input.removeEventListener("input", handleInputChange);
      input.addEventListener("input", handleInputChange);
    });
  };

  const handleInputChange = (e) => {
    if (e.target.type === "radio") validateRadio(e.target);
    if (e.target.type === "checkbox" && e.target.id === "terms_of_service") validateCheckbox(e.target);
    if (e.target.type === "text" || e.target.type === "number" || e.target.type === "email") validateInput(e.target);
    if (e.target.type === "date") validateDate(e.target);
  };

  const closeModal = () => {
    body.classList.remove("scroll_lock");
    registerModal.classList.remove("show");
  };

  const openMobileMenu = () => mobileMenu.classList.add("show");
  const closeMobileMenu = () => mobileMenu.classList.remove("show");

  signupBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal();
  });

  registerModalClose.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
  });

  confirmationClose.addEventListener("click", (e) => {
    e.stopPropagation();
    closeModal();
  });

  btnMobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    (mobileMenu.classList.contains("show") ? closeMobileMenu : openMobileMenu)();
  });

  // Escape key to close Register Modal or Mobile Menu
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (registerModal.classList.contains("show")) closeModal();
      if (mobileMenu.classList.contains("show")) closeMobileMenu();
    }
  });

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
  });

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm();
  });


  // =========================
  //    Form Validation
  // =========================
  const validateRadio = (element) => {
    const checked = document.querySelector('input[name="location"]:checked') !== null;
    const parent = element.closest(".form_data");
    if (!checked) {
      parent.setAttribute("data-error-visible", "true");
      return false;
    } else {
      parent.setAttribute("data-error-visible", "false");
      parent.setAttribute("data-success-visible", "true");
      return true;
    }
  };

  const validateCheckbox = (element) => {
    const checked = element.checked;
    const parent = element.closest(".form_data");

    if (!checked) {
      parent.setAttribute("data-error-visible", "true");
      return false;
    }
    else {
      parent.setAttribute("data-error-visible", "false");
      parent.setAttribute("data-success-visible", "true");
      return true;
    }
  };

  const validateInput = (element) => {
    const value = element.value.trim(), pattern = element.dataset.pattern;

    if (!value) {
      element.parentElement.setAttribute("data-error-visible", "true");
      return false;
    }

    if (pattern) {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        element.parentElement.setAttribute("data-error-visible", "true");
        return false;
      } else {
        element.parentElement.setAttribute("data-error-visible", "false");
        element.parentElement.setAttribute("data-success-visible", "true");
        return true;
      }
    }
  };

  const validateDate = (element) => {
    const value = element.value.trim();

    if (!value) {
      element.parentElement.setAttribute("data-error-visible", "true");
      return false;
    }

    // Date can't be in the future or more than 100 years ago
    const today = new Date(), date = new Date(value);

    if (date > today || date < new Date(today.getFullYear() - 100, today.getMonth(), today.getDate())) {
      element.parentElement.setAttribute("data-error-visible", "true");
      return false;
    }
    else {
      element.parentElement.setAttribute("data-error-visible", "false");
      element.parentElement.setAttribute("data-success-visible", "true");
      return true;
    }
  };

  const validateForm = () => {
    let isValid = true;

    document.querySelectorAll(".form_data:not(.optional) input").forEach((element) => {
      let fieldValid = false;

      if (element.type === "radio") fieldValid = validateRadio(element);
      if (element.type === "checkbox" && element.id === "terms_of_service") fieldValid = validateCheckbox(element);
      if (element.type === "text" || element.type === "number" || element.type === "email") fieldValid = validateInput(element);
      if (element.type === "date") fieldValid = validateDate(element);
      if (!fieldValid) isValid = false;
    });

    // if (isValid) submitForm();
    submitForm();
  };

  // =========================
  //    Form Submission
  // =========================
  const submitForm = () => {
    registerConfirmation.classList.add("show");
    modalContentForm.classList.add("hide");
    modalHeader.classList.add("hide");
  };

});