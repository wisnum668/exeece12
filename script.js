const cartItems = [];
let cartTotal = 0;

function tambahkanKeKeranjang(namaProduk, hargaProduk) {
    cartItems.push({ nama: namaProduk, harga: hargaProduk });
    cartTotal += hargaProduk;
    updateKeranjang();
}

function updateKeranjang() {
    const cartItemsList = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    cartItemsList.innerHTML = "";
    cartItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nama} - $${item.harga}`;
        cartItemsList.appendChild(li);
    });

    cartTotalElement.textContent = cartTotal;
}