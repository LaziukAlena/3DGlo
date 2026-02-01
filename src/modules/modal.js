import { animate } from "./helpers.js";

const modal = () => {
  const modal = document.querySelector(".popup");

  const openModal = () => {
    modal.style.display = "block";

    // Для мобильных — без анимации
    if (window.innerWidth < 768) {
      modal.style.opacity = 1;
      return;
    }

    animate({
      duration: 500,
      timing(timeFraction) {
        return timeFraction;
      },
      draw(progress) {
        modal.style.opacity = progress;
      },
    });
  };

  const closeModal = () => {
    modal.style.display = "none";
    modal.style.opacity = 0;
  };

  // Делегирование открытия
  document.addEventListener("click", (e) => {
    if (e.target.closest(".popup-btn")) {
      openModal();
    }
  });

  // Закрытие модалки
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-close") || e.target === modal) {
      closeModal();
    }
  });
};

export default modal;
