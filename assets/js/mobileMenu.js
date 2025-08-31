// =========================
// DOM Element References
// =========================
const mobileMenuRefs = {
  menu: document.getElementById("mobile_menu"),
  toggleButton: document.getElementById("btn_mobile_menu"),
};

// =========================
// Mobile Menu Functions
// =========================
const openMobileMenu = () => {
  mobileMenuRefs.menu.classList.add("show");
  mobileMenuRefs.toggleButton.setAttribute("aria-expanded", "true");
  mobileMenuRefs.menu.setAttribute("aria-hidden", "false");
};

const closeMobileMenu = () => {
  mobileMenuRefs.menu.classList.remove("show");
  mobileMenuRefs.toggleButton.setAttribute("aria-expanded", "false");
  mobileMenuRefs.menu.setAttribute("aria-hidden", "true");
};

const toggleMobileMenu = () => mobileMenuRefs.menu.classList.contains("show") ? closeMobileMenu() : openMobileMenu();

const isMobileMenuVisible = () => mobileMenuRefs.menu.classList.contains("show");

// =========================
// Window Exports
// =========================
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.mobileMenuRefs = mobileMenuRefs;
