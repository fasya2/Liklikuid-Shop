document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "PARADEWA ANGGUR ATHENA", img: "p1.png", price: 140000 },
      { id: 2, name: "PARADEWA ANGGUR SALT", img: "p2.png", price: 125000 },
      { id: 3, name: "PARADEWA APEL ZEUS", img: "p3.png", price: 140000 },
      { id: 4, name: "PARADEWA CHOCOLOKI", img: "p4.png", price: 150000 },
      {
        id: 5,
        name: "PARADEWA CHOCOLOKI PODS FRENDLY",
        img: "p5.png",
        price: 95000,
      },
      { id: 6, name: "PARADEWA CHOCOLOKI SALT", img: "p6.png", price: 125000 },
      { id: 7, name: "PARADEWA MANGGAHERA", img: "p7.png", price: 140000 },
      { id: 8, name: "PARADEWA MANGGAHERA SALT", img: "p8.png", price: 125000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // jika item suda ada di cart maka tidak perlu penambahan item
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika belum ada pada cart
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // ambil item yang mau diremove berdasarkan id nya
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari satu
      if (cartItem.quantity > 1) {
        // telusuri 1
        this.items = this.items.map((item) => {
          // jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity == 1) {
        // jika barangnya sisa satu
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// form validation
const checkoutButton = document.querySelector(".checkout-button");
checkoutButton.disabled = true;

const form = document.querySelector("#checkoutForm");

form.addEventListener("keyup", function () {
  for (let i = 0; i < form.elements.lenght; i++) {
    if (form.elements[i].value.lenght !== 0) {
      checkoutButton.classList.remove("disabled");
      checkoutButton.classList.add("disabled");
    } else {
      return false;
    }
  }
  checkoutButton.disabled = false;
  checkoutButton.classList.remove("disabled");
});

// kirim data ketika tombol checkout di klik
checkoutButton.addEventListener("click", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = new URLSearchParams(formData);
  const objData = Object.fromEntries(data);
  //   const massage = formatMassage(objData);
  //   window.open("http://wa.me/6285210947034?text=" + encodeURIComponent(massage));

  // minta transaction token
  try {
    const response = await fetch("php/placeOrder.php", {
      method: "POST",
      body: data,
    });
    const token = await response.text();
    // console.log(token);
    window.snap.pay(token);
  } catch (err) {
    console.log(err.message);
  }
});
// format pesanan whatsapp
const formatMassage = (obj) => {
  return `Data Costumer 
  Nama: ${obj.name}
  Email: ${obj.email}
  No HP: ${obj.phone}
  Data Pesanan
  ${JSON.parse(obj.items).map(
    (item) => `${item.name} (${item.quantity} * ${rupiah(item.total)}) \n`
  )}
  TOTAL: ${rupiah(obj.total)}
  Terima Kasih`;
};

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
