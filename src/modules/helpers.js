export const animate = ({ duration, timing, draw }) => {
  let start = performance.now();

  function frame(time) {
    let timeFraction = (time - start) / duration;

    if (timeFraction > 1) {
      timeFraction = 1;
    }

    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
};
