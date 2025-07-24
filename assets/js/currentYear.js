const currentYear = {
  init() {
    this.yearElem = document.getElementById("currentYear");
    if (this.yearElem) {
      this.yearElem.textContent = new Date().getFullYear();
    }
  },
};

document.addEventListener("DOMContentLoaded", () => currentYear.init());
