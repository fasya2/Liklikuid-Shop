// toggle class active untuk hamurger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// toogle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// toogle class active untuk shopping cart
const shoppingForm = document.querySelector(".shopping-cart");
// ketika shopping cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingForm.classList.toggle("active");
  e.preventDefault();
};

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailModal2 = document.querySelector("#item-detail-modal2");
const itemDetailModal3 = document.querySelector("#item-detail-modal3");
const itemDetailModal4 = document.querySelector("#item-detail-modal4");
const itemDetailModal5 = document.querySelector("#item-detail-modal5");
const itemDetailModal6 = document.querySelector("#item-detail-modal6");
const itemDetailModal7 = document.querySelector("#item-detail-modal7");
const itemDetailModal8 = document.querySelector("#item-detail-modal8");

const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const itemDetailButtons2 = document.querySelectorAll(".item-detail-button2");
const itemDetailButtons3 = document.querySelectorAll(".item-detail-button3");
const itemDetailButtons4 = document.querySelectorAll(".item-detail-button4");
const itemDetailButtons5 = document.querySelectorAll(".item-detail-button5");
const itemDetailButtons6 = document.querySelectorAll(".item-detail-button6");
const itemDetailButtons7 = document.querySelectorAll(".item-detail-button7");
const itemDetailButtons8 = document.querySelectorAll(".item-detail-button8");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons2.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal2.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons3.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal3.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons4.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal4.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons5.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal5.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons6.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal6.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons7.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal7.classList.toggle("active");
    e.preventDefault();
  };
});
itemDetailButtons8.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal8.classList.toggle("active");
    e.preventDefault();
  };
});

// close modal box
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.classList.remove("active");
  e.preventDefault();
};

document.querySelector(".modal .close-icon2").onclick = (e) => {
  itemDetailModal2.classList.remove("active");
  e.preventDefault();
};
document.querySelector(".modal .close-icon3").onclick = (e) => {
  itemDetailModal3.classList.remove("active");
  e.preventDefault();
};
document.querySelector(".modal .close-icon4").onclick = (e) => {
  itemDetailModal4.classList.remove("active");
  e.preventDefault();
};
document.querySelector(".modal .close-icon5").onclick = (e) => {
  itemDetailModal5.classList.remove("active");
  e.preventDefault();
};
document.querySelector(".modal .close-icon6").onclick = (e) => {
  itemDetailModal6.classList.remove("active");
  e.preventDefault();
};
document.querySelector(".modal .close-icon7").onclick = (e) => {
  itemDetailModal7.classList.remove("active");
  e.preventDefault();
};
document.querySelector(".modal .close-icon8").onclick = (e) => {
  itemDetailModal8.classList.remove("active");
  e.preventDefault();
};

// klik diluar untuk menghilangkan elemennt

const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingButton.contains(e.target) && !shoppingForm.contains(e.target)) {
    shoppingForm.classList.remove("active");
  }
});