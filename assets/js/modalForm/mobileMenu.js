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
const openMobileMenu = () => mobileMenuRefs.menu.classList.add("show");
const closeMobileMenu = () => mobileMenuRefs.menu.classList.remove("show");
const toggleMobileMenu = () => {
  const isMenuOpen = mobileMenuRefs.menu.classList.contains("show");
  isMenuOpen ? closeMobileMenu() : openMobileMenu();
};
const isMobileMenuVisible = () =>
  mobileMenuRefs.menu.classList.contains("show");

// =========================
// Window Exports
// =========================
window.openMobileMenu = openMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.mobileMenuRefs = mobileMenuRefs;
