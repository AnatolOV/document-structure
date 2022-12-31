let buttonAdd = document.querySelector(".tasks__add");
let listOfDeal = document.querySelector(".tasks__list");
let inPut = document.querySelector(".tasks__input");
let deal;

buttonAdd.addEventListener("click", createDeal);

function createDeal() {
  

  deal = document.createElement("div");
  deal.className = "task";

  let dealTitle = document.createElement("div");
  dealTitle.innerText = inPut.value;

  let removeDeal = document.createElement("a");
  removeDeal.className = "task__remove";
  removeDeal.innerHTML = "&times;";
  removeDeal.href = "#";

  if (dealTitle.innerText) {
    listOfDeal.append(deal);
    deal.append(dealTitle);
    deal.append(removeDeal);
  }

  removeDeal.addEventListener("click", deleteDeal);
 
  event.preventDefault();
  
}

function deleteDeal() {
  this.closest('div').remove()

}
