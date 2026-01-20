const greetingEl = document.getElementById("greeting");
const dayEl = document.getElementById("day");
const timeEl = document.getElementById("current-time");
const daysEl = document.getElementById("days-to-new-year");

const updateTime = () => {
  const now = new Date();

  // Приветствие
  const hours = now.getHours();
  let greeting = "";
  if (hours >= 5 && hours < 12) greeting = "Доброе утро";
  else if (hours >= 12 && hours < 18) greeting = "Добрый день";
  else if (hours >= 18 && hours < 23) greeting = "Добрый вечер";
  else greeting = "Доброй ночи";
  greetingEl.textContent = greeting;

  // День недели
  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  dayEl.textContent = `Сегодня: ${daysOfWeek[now.getDay()]}`;

  // Текущее время (12-часовой формат с AM/PM)
  let hours12 = hours % 12 || 12;
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";
  const format = (n) => (n < 10 ? `0${n}` : n);
  timeEl.textContent = `Текущее время: ${format(hours12)}:${format(minutes)}:${format(seconds)} ${ampm}`;

  // До нового года осталось дней
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diffTime = newYear - now;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  daysEl.textContent = `До нового года осталось ${diffDays} дней`;
};

// Обновляем время каждую секунду
updateTime();
setInterval(updateTime, 1000);
