import timer from "./modules/timer.js";
import menu from "./modules/menu.js";
import modal from "./modules/modal.js";
import validate from "./modules/validate.js";
import tabs from "./modules/tabs.js";
import slider from "./modules/slider.js";
import calc from "./modules/calc.js";
import sendForm from "./modules/sendForm.js";

timer("31 march 2026");
menu();
modal();
validate();
tabs();
slider();
calc(100);
sendForm({
  formId: "form1",
  someElem: [
    {
      type: "block",
      id: "total",
    },
  ],
});
sendForm({
  formId: "form2",
});

sendForm({
  formId: "form3",
});
