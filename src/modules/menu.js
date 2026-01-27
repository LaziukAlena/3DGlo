const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menuBlock = document.querySelector("menu");

  const toggleMenu = () => {
    menuBlock.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", toggleMenu);

  menuBlock.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("close-btn") ||
      target.closest("ul > li > a")
    ) {
      toggleMenu();
    }
  });
};

export default menu;
