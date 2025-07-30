document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.getElementById("navDropdown");
  const btn = document.getElementById("btn_menu_toggle");
  const breakpoint = 1024;

  btn.addEventListener("click", () => dropdown.classList.toggle("show"));

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
      dropdown.classList.remove("show");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= breakpoint) dropdown.classList.remove("show");
  });
});
