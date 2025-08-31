// Register DOM Element References
const mobileMenuRefs = {
  menu: document.getElementById("mobile_menu"),
  toggleButton: document.getElementById("btn_mobile_menu")
};

// Open Mobile Menu
const openMobileMenu = () => {
  mobileMenuRefs.menu.classList.add("show");
  mobileMenuRefs.toggleButton.setAttribute("aria-expanded", "true");
  mobileMenuRefs.menu.setAttribute("aria-hidden", "false");
};

// Close Mobile Menu by Field ID
const closeMobileMenu = () => {
  mobileMenuRefs.menu.classList.remove("show");
  mobileMenuRefs.toggleButton.setAttribute("aria-expanded", "false");
  mobileMenuRefs.menu.setAttribute("aria-hidden", "true");
};

// Toggle Mobile Menu
const toggleMobileMenu = () =>
  mobileMenuRefs.menu.classList.contains("show")
    ? closeMobileMenu()
    : openMobileMenu();

// Check if Mobile Menu is Visible
const isMobileMenuVisible = () =>
  mobileMenuRefs.menu.classList.contains("show");

// =========================
// Window Exports
// =========================
window.closeMobileMenu = closeMobileMenu;
window.toggleMobileMenu = toggleMobileMenu;
window.mobileMenuRefs = mobileMenuRefs;
