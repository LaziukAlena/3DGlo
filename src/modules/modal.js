const modal = () => {
  const modal = document.querySelector(".popup");

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

  // 1 обработчик — делегирование для кнопок открытия
  document.addEventListener("click", (e) => {
    if (e.target.closest(".popup-btn")) {
      openModal();
    }
  });

  // 2 обработчик — всё закрытие модалки
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-close") || e.target === modal) {
      closeModal();
    }
  });
};

export default modal;
