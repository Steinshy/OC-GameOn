const modal = {
  signupBtn: document.getElementById("btn_signup"),
  element: document.querySelector(".modal_container"),
  closeBtn: document.querySelector(".close-btn"),

  init() {
    this.hide();
    this.signupBtn?.addEventListener("click", () => this.show());
    this.closeBtn?.addEventListener("click", () => this.hide());

    this.element?.addEventListener("click", (e) => {
      if (e.target === this.element) this.hide();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) this.hide();
    });
  },

  show() {
    if (!this.element) return;
    this.element.style.display = "block";
    this.element.setAttribute("aria-hidden", "false");
    this.element.focus();
  },

  hide() {
    if (!this.element) return;
    this.element.style.display = "none";
    this.element.setAttribute("aria-hidden", "true");
    this.signupBtn?.focus();
  },

  isOpen() {
    return this.element?.style.display === "block";
  },
};

document.addEventListener("DOMContentLoaded", () => modal.init());
