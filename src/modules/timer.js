const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    if (timeRemaining <= 0) {
      return { timeRemaining: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return { timeRemaining, hours, minutes, seconds };
  };
  const updateClock = () => {
    let getTime = getTimeRemaining();

    timerHours.textContent = formatTime(getTime.hours);
    timerMinutes.textContent = formatTime(getTime.minutes);
    timerSeconds.textContent = formatTime(getTime.seconds);
  };

  const intervalId = setInterval(() => {
    updateClock();

    const time = getTimeRemaining();
    if (time.timeRemaining <= 0) {
      clearInterval(intervalId);
    }
  }, 1000);

  updateClock();
};

export default timer;
