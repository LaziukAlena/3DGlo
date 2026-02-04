const validate = () => {
  const calcInputs = document.querySelectorAll(
    ".calc-square, .calc-count, .calc-day",
  );

  calcInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^\d]/g, "");
    });
  });

  const textInputs = document.querySelectorAll(
    'input[type="text"]:not(.calc-square):not(.calc-count):not(.calc-day), input[placeholder="Ваше сообщение"]',
  );

  textInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^а-яёА-ЯЁ\s-]/g, "");
    });
  });

  const emailInputs = document.querySelectorAll('input[type="email"]');

  emailInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^a-zA-Z0-9@\-_.!~*']/g, "");
    });
  });

  const phoneInputs = document.querySelectorAll('input[type="tel"]');

  phoneInputs.forEach((input) => {
    input.addEventListener("input", () => {
      input.value = input.value.replace(/[^0-9+()-]/g, "");
    });
  });
};

export default validate;
