import option from "../../option/touchOption.js";
import DOM from "../../option/dustPageDom.js";

function touchdownEvent() {
  DOM.grapeDivList[option.counter - 1].style.backgroundColor = "";
  DOM.grapeDivList[option.counter - 1].style.opacity = "";

  DOM.grapeDivList[option.counter].style.backgroundColor = "#ff8200";
  DOM.grapeDivList[option.counter].style.opacity = "0.3";

  option.counter++;
}

function touchupEvent() {
  const currentCounter = option.counter;
  const beforeCounter = option.counter - 1;
  DOM.grapeDivList[currentCounter].style.backgroundColor = "";
  DOM.grapeDivList[currentCounter].style.opacity = "";

  DOM.grapeDivList[beforeCounter].style.backgroundColor = "#ff8200";
  DOM.grapeDivList[beforeCounter].style.opacity = "0.3";

  option.counter--;
}
