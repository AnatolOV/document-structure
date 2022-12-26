let hasToolTip = document.querySelectorAll(".has-tooltip");

for (let i = 0; i < hasToolTip.length; i++) {
  hasToolTip[i].onclick = function () {

    if (hasToolTip[i].querySelector("div") == null) {
      let toolTip = document.createElement("div");
      toolTip.style = "left: 0; top: 0";
      toolTip.className = "tooltip tooltip_active";
      toolTip.innerText = hasToolTip[i].getAttribute("title");
      hasToolTip[i].appendChild(toolTip);
      return false;
    } else {
      hasToolTip[i].querySelector("div").remove();
      return false;
    }
  };
}
