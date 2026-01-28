const slider = () => {
  const sliderBlock = document.querySelector(".portfolio-content");
  const slides = document.querySelectorAll(".portfolio-item");
  const timeInterval = 2000;

  let currentSlide = 0;
  let interval;

  const dotsWrapper = document.createElement("ul");
  dotsWrapper.classList.add("portfolio-dots");

  slides.forEach((_, index) => {
    const dot = document.createElement("li");
    dot.classList.add("dot");

    if (index === 0) {
      dot.classList.add("dot-active");
    }

    dotsWrapper.append(dot);
  });

  sliderBlock.append(dotsWrapper);

  const dots = dotsWrapper.querySelectorAll(".dot");

  const prevSlide = (elems, index, className) => {
    elems[index].classList.remove(className);
  };

  const nextSlide = (elems, index, className) => {
    elems[index].classList.add(className);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    currentSlide = (currentSlide + 1) % slides.length;

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  };

  const startSlide = (timer = timeInterval) => {
    stopSlide();
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (!e.target.matches(".dot, .portfolio-btn")) return;

    stopSlide();

    prevSlide(slides, currentSlide, "portfolio-item-active");
    prevSlide(dots, currentSlide, "dot-active");

    if (e.target.matches("#arrow-right")) {
      currentSlide++;
    } else if (e.target.matches("#arrow-left")) {
      currentSlide--;
    } else if (e.target.classList.contains("dot")) {
      currentSlide = [...dots].indexOf(e.target);
    }

    if (currentSlide >= slides.length) currentSlide = 0;
    if (currentSlide < 0) currentSlide = slides.length - 1;

    nextSlide(slides, currentSlide, "portfolio-item-active");
    nextSlide(dots, currentSlide, "dot-active");
  });

  sliderBlock.addEventListener(
    "mouseenter",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        stopSlide();
      }
    },
    true,
  );

  sliderBlock.addEventListener(
    "mouseleave",
    (e) => {
      if (e.target.matches(".dot, .portfolio-btn")) {
        startSlide();
      }
    },
    true,
  );

  startSlide();
};

export default slider;
