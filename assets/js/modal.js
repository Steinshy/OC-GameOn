// Modal logic refactored for clarity and robustness
document.addEventListener("DOMContentLoaded", () => {
  const signupBtn = document.getElementById("btn_signup");
  const modal = document.querySelector(".modal_container");
  const closeBtn = document.querySelector(".close-btn");

  function openModal() {
    modal.classList.add("show");
  }

  function closeModal() {
    modal.classList.remove("show");
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openModal();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeModal();
    });
  }

  // Close modal when clicking outside modal content
  document.addEventListener("click", (e) => {
    if (
      modal.classList.contains("show") &&
      !modal.querySelector(".modal_content").contains(e.target) &&
      e.target !== signupBtn
    ) {
      closeModal();
    }
  });

  // Optional: Close modal on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});
