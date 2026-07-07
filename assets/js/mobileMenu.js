// =========================
// Mobile Navigation Menu
// =========================
const mobileMenu = document.getElementById("mobile_menu");
const mobileMenuButton = document.getElementById("btn_mobile_menu");

const closeMobileMenu = () => {
  mobileMenu.classList.remove("show");
  mobileMenuButton.setAttribute("aria-expanded", "false");
};

const toggleMobileMenu = () => {
  const isOpen = mobileMenu.classList.toggle("show");
  mobileMenuButton.setAttribute("aria-expanded", isOpen);
};

mobileMenuButton.addEventListener("click", toggleMobileMenu);

// Close when clicking outside the menu
document.addEventListener("click", (event) => {
  if (
    mobileMenu.classList.contains("show") &&
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    closeMobileMenu();
  }
});

// Close with the Escape key
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});
