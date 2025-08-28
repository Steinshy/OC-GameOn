// =========================
// DOM Element References
// =========================
const mobileMenuElements = {
  mobileMenu: document.getElementById("mobile_menu"),
  btnMobileMenu: document.getElementById("btn_mobile_menu"),
};

// =========================
// Mobile Menu Functions
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
// Utility Functions
// =========================
const isMobileMenuOpen = () => {
  return mobileMenuElements.mobileMenu.classList.contains("show");
};

// =========================
// Export Functions and Constants
// =========================
window.GameOnMobileMenu = {
  openMobileMenu,
  closeMobileMenu,
  toggleMobileMenu,
  isMobileMenuOpen,
  mobileMenuElements,
};
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.mobileMenuElements = mobileMenuElements;
