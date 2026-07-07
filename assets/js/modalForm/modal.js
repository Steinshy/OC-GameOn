// =========================
// Modal Open / Close State
// =========================
// Keep in sync with the modalSlideToTop duration in modal.css
const MODAL_CLOSE_ANIMATION_MS = 300;

const resetScroll = () => {
  [modalRefs.content, modalRefs.formSection].forEach((element) => {
    element.scrollTop = 0;
  });
};

const openModal = () => {
  resetForm();
  document.body.classList.add("scroll_lock");
  [
    modalRefs.modal,
    modalRefs.content,
    modalRefs.header,
    modalRefs.footer,
    modalRefs.formSection
  ].forEach((element) => element.classList.add("show"));
  resetScroll();
};

const closeModal = () => {
  modalRefs.modal.classList.add("closing");
  modalRefs.content.classList.add("closing");

  // Wait for the closing animation before hiding the modal
  setTimeout(() => {
    document.body.classList.remove("scroll_lock");
    modalRefs.modal.classList.remove("show", "closing");
    modalRefs.content.classList.remove("show", "closing");
    modalRefs.header.classList.remove("show");
    modalRefs.footer.classList.remove("show");
    modalRefs.formSection.classList.remove("show");
  }, MODAL_CLOSE_ANIMATION_MS);
};

// =========================
// Form Reset & Submission
// =========================
const resetForm = () => {
  formRefs.form.reset();
  formRefs.inputs.forEach((input) =>
    clearFieldState(input.closest(".info_field"))
  );
  clearFieldState(formRefs.radioFieldset);
  clearFieldState(formRefs.termsCheckbox.closest(".field"));
  modalRefs.confirm.classList.remove("show");
  resetScroll();
};

const handleFormSubmission = (event) => {
  event.preventDefault();
  if (!validateAllFields()) return;

  // Hide the form sections and show the confirmation message
  modalRefs.header.classList.remove("show");
  modalRefs.footer.classList.remove("show");
  modalRefs.formSection.classList.remove("show");
  modalRefs.confirm.classList.add("show");
};

// =========================
// Modal Event Listeners
// =========================
const setupModalForm = () => {
  buttonRefs.openButtons.forEach((button) =>
    button.addEventListener("click", openModal)
  );
  buttonRefs.closeButton.addEventListener("click", closeModal);
  buttonRefs.confirmCloseButton.addEventListener("click", closeModal);
  formRefs.form.addEventListener("submit", handleFormSubmission);

  // Close when clicking the backdrop
  modalRefs.modal.addEventListener("click", (event) => {
    if (event.target === modalRefs.modal) closeModal();
  });

  // Close with the Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modalRefs.modal.classList.contains("show")) {
      closeModal();
    }
  });

  setupRealTimeValidation();
};
