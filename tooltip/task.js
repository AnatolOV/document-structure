let hasToolTip = document.querySelectorAll(".has-tooltip");


for (let i = 0; i < hasToolTip.length; i++) {
  hasToolTip[i].onclick = function () {
    if (hasToolTip[i].querySelector("div") == null) {
      let toolTip = document.createElement("div");

      toolTip.className = "tooltip tooltip_active";

      toolTip.innerText = hasToolTip[i].getAttribute("title");
      hasToolTip[i].appendChild(toolTip);

      let positionOfHasToolTip = hasToolTip[i].getBoundingClientRect();
      let d = `${positionOfHasToolTip.left}px`;
      console.log(d);
      toolTip.style =
        "position:absolute; left: d "; //???почему не работает шаблонная строка, сдвиг влево должен быть как у ссылки?

      //toolTip.setAttribute("style", `left:${positionOfHasToolTip.left}`);
      console.log(`${positionOfHasToolTip.left}px` + " left позиция ссылки");
      console.log(`${positionOfHasToolTip.top}` + " top позиция ссылки");

      return false;
    } else {
      hasToolTip[i].querySelector("div").remove();
      return false;
    }
  };
}
