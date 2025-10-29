// cart.js
(function () {
  const list = document.getElementById('cart-list');
  const summary = document.getElementById('cart-summary');
  const cartCountEls = document.querySelectorAll('#cart-count');

  // Retrieve cart from localStorage
  function getCart() {
    try {
      return JSON.parse(localStorage.getItem('srm_cart')) || [];
    } catch (e) {
      return [];
    }
  }

  // Save cart and update display
  function setCart(c) {
    localStorage.setItem('srm_cart', JSON.stringify(c));
    updateCount();
    render();
  }

  // Update cart item count in UI
  function updateCount() {
    const count = getCart().reduce((s, i) => s + (i.qty || 1), 0);
    cartCountEls.forEach(e => e.textContent = count);
  }

  // Remove specific item
  function removeItem(id) {
    const cart = getCart().filter(i => i.id !== id);
    setCart(cart);
  }

  // Render cart items and total
  function render() {
    const cart = getCart();
    if (!list || !summary) return;

    list.innerHTML = '';
    if (cart.length === 0) {
      list.innerHTML = `
        <div class="empty-cart">
          Your cart is empty. <a href="index.html">Browse equipment</a>
        </div>
      `;
      summary.innerHTML = '';
      updateCount();
      return;
    }

    let total = 0;
    cart.forEach(item => {
      total += item.price * (item.qty || 1);
      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.img}" alt="${item.title}">
        <div class="meta">
          <div style="font-weight:700">${item.title}</div>
          <div class="small">₹ ${item.price} / day • Qty: ${item.qty}</div>
        </div>
        <div style="text-align:right">
          <div style="font-weight:800">₹ ${item.price * (item.qty || 1)}</div>
          <div style="margin-top:8px">
            <button class="remove-btn" data-id="${item.id}">Remove</button>
          </div>
        </div>
      `;
      list.appendChild(div);

      div.querySelector('.remove-btn').addEventListener('click', (e) => {
        removeItem(e.currentTarget.getAttribute('data-id'));
      });
    });

    summary.innerHTML = `
      <div style="font-weight:800">Total: ₹ ${total}</div>
      <div>
        <button class="checkout-btn" id="checkout">Checkout</button>
      </div>
    `;

 document.getElementById('checkout').addEventListener('click', async () => {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Split cart into up to 10 smaller orders
  const maxOrders = 10;
  const chunkSize = Math.ceil(cart.length / maxOrders);
  const orders = [];

  for (let i = 0; i < cart.length; i += chunkSize) {
    const chunk = cart.slice(i, i + chunkSize);
    const orderData = {
      customerName: "Ujjwal",
      email: "ujjwal@example.com",
      phone: "9876543210",
      items: JSON.stringify(chunk),
      totalAmount: chunk.reduce((sum, item) => sum + item.price * (item.qty || 1), 0),
      paymentMode: "COD"
    };
    orders.push(orderData);
  }

  try {
    const response = await fetch("http://localhost:8080/api/orders/create-multiple", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orders)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    console.log("✅ Orders created:", result);

    alert(`Successfully placed ${result.length} orders!`);
    localStorage.removeItem('srm_cart');
    updateCount();
    render();
  } catch (error) {
    console.error("❌ Backend connection error:", error);
    alert("Backend connection failed. Please ensure backend is running on port 8080.");
  }
});



    updateCount();
  } 
   

  document.addEventListener('DOMContentLoaded', render);
})();
