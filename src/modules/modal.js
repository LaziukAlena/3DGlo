const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  const openModal = () => {
    modal.style.display = "block";

    if (window.innerWidth < 768) {
      modal.style.opacity = 1;
      return;
    }

    let opacity = 0;
    modal.style.opacity = opacity;

    const fadeIn = () => {
      opacity += 0.02;
      modal.style.opacity = opacity;

      if (opacity < 1) {
        requestAnimationFrame(fadeIn);
      }
    };

    requestAnimationFrame(fadeIn);
  };

  const closeModal = () => {
    modal.style.display = "none";
    modal.style.opacity = 0;
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", openModal);
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
};

export default modal;
