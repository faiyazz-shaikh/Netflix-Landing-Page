const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

function selectItem(e) {
  tabItems.forEach((item) => item.classList.remove("tab-border"));
  this.classList.add("tab-border");

  tabContentItems.forEach((item) => {
    item.classList.remove("show");
  });

  const slectedTabContentItem = document.querySelector(`#${this.id}-content`);
  slectedTabContentItem.classList.add("show");
}

tabItems.forEach((item) => item.addEventListener("click", selectItem));
