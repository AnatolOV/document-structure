let buttonAdd = document.querySelector(".tasks__add");
let listOfDeal = document.querySelector(".tasks__list");
let inPut = document.querySelector(".tasks__input");
let deal;
let removeDeal;
let dealTitle;

inPut.onkeyup = function (e) {
  e = e || window.event;
  if (e.keyCode === 13) {
   // console.log(9);
  }
};

 buttonAdd.addEventListener("click", createDeal);

function createDeal() {
  deal = document.createElement("div");
  deal.className = "task";

  dealTitle = document.createElement("div");
  dealTitle.innerText = inPut.value;

  removeDeal = document.createElement("a");
  removeDeal.className = "task__remove";
  removeDeal.innerHTML = "&times;";
  removeDeal.href = "#";

  if (dealTitle.innerText) {
    listOfDeal.append(deal);
    deal.append(dealTitle);
    deal.append(removeDeal);
  }

  removeDeal.addEventListener("click", deleteDeal);
}

function deleteDeal() {
  //console.log("delete");
  deal.remove();
}
