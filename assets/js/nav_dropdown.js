const navDropdown = {
  init() {
    this.dropdown = document.getElementById("navDropdown");
    this.dropdownButton = document.querySelector(".dropbtn");
    this.breakpoint = 1300;

    this.setupEventListeners();
  },

  setupEventListeners() {
    this.dropdownButton.addEventListener("click", () => this.toggle());
    document.addEventListener("click", (e) => this.handleDocumentClick(e));
    window.addEventListener("resize", () => this.handleResize());
  },

  toggle() {
    this.dropdown.classList.toggle("show");
  },

  close() {
    this.dropdown.classList.remove("show");
  },

  handleDocumentClick(event) {
    if (
      !this.dropdown.contains(event.target) &&
      !this.dropdownButton.contains(event.target)
    ) {
      this.close();
    }
  },

  handleResize() {
    if (window.innerWidth >= this.breakpoint) {
      this.close();
    }
  },
};

document.addEventListener("DOMContentLoaded", () => navDropdown.init());
