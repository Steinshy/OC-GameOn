document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const mobileMenu = document.getElementById("mobile_menu");
  const btnMobileMenu = document.getElementById("btn_mobile_menu");
  const registerModal = document.getElementById("register_modal");
  const registerModalClose = document.getElementById("register_modal_close");
  const signupBtn = document.getElementById("btn_signup");
  const submitBtn = document.getElementById("submit_btn");
  const registerConfirmation = document.getElementById("register_confirmation");
  const registerForm = document.getElementById("register_form");
  const modalContainer = document.getElementById("modal_container");

  // =========================
  //    Functions
  // =========================
  function openModal() {
    body.classList.add("scroll_lock");
    registerModal.classList.add("show");
  }

  function closeModal() {
    body.classList.remove("scroll_lock");
    registerModal.classList.remove("show");
  }

  function openMobileMenu() {
    mobileMenu.classList.add("show");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("show");
  }

  function openConfirmation() {
    registerConfirmation.classList.add("show");
    registerForm.style.display = "none";
  }

  function closeConfirmation() {
    registerModal.classList.remove("show");
    // Empty the form && url params
  }

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openConfirmation();
  });

  signupBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openModal();
  });

  registerModalClose.addEventListener("click", (e) => {
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
});

// =========================
//    Register Form
// =========================
// Get elements
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const tournamentCount = document.getElementById("tournament_count");

const tournamentFieldset = document.getElementById("tournament_fieldset");
const tournamentItems = tournamentFieldset.querySelectorAll(".radio-item");

const termsCheckbox = document.getElementById("terms_checkbox");
const newsletterCheckbox = document.getElementById("newsletter_checkbox");