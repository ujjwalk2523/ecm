// detail.js
(function(){
  function qs(key){ const u = new URL(location.href); return u.searchParams.get(key); }
  const id = qs('id');
  const root = document.getElementById('detail-root');
  const cartCountEls = document.querySelectorAll('#cart-count');

  function getCart(){ try{ return JSON.parse(localStorage.getItem('srm_cart')) || []; }catch(e){ return []; } }
  function setCart(c){ localStorage.setItem('srm_cart', JSON.stringify(c)); updateCount(); }
  function updateCount(){ const count = getCart().reduce((s,i)=> s + (i.qty||1), 0); cartCountEls.forEach(e=>e.textContent = count); }

  function addToCart(id, qty){
    const prod = PRODUCTS.find(p=>p.id===id);
    if(!prod) return;
    const cart = getCart();
    const existing = cart.find(i=>i.id===id);
    if(existing) existing.qty = (existing.qty||1) + qty;
    else cart.push({ id: prod.id, title: prod.title, price: prod.price, img: prod.img, qty: qty });
    setCart(cart);
    alert(`${prod.title} added to cart (${qty})`);
  }

  function render(){
    const p = PRODUCTS.find(x=>x.id===id);
    if(!p){
      root.innerHTML = '<p>Product not found. <a href="index.html">Back to products</a></p>';
      return;
    }
    root.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="detail-info">
        <h2>${p.title}</h2>
        <div class="small">₹ ${p.price} / day</div>
        <p style="color:var(--muted);margin-top:10px">${p.long}</p>
        <div class="qty">
          <label class="small">Quantity:</label>
          <button id="dec">-</button>
          <input id="qty" type="number" value="1" min="1" style="width:56px;padding:6px;border-radius:6px;border:1px solid #ddd">
          <button id="inc">+</button>
        </div>
        <div style="margin-top:12px">
          <button id="addToCart" class="btn">Add to Cart</button>
          <a href="cart.html" style="margin-left:12px" class="btn" id="goCart">View Cart</a>
        </div>
      </div>
    `;
    // events
    document.getElementById('dec').addEventListener('click', ()=>{
      const q = document.getElementById('qty');
      q.value = Math.max(1, Number(q.value) - 1);
    });
    document.getElementById('inc').addEventListener('click', ()=>{
      const q = document.getElementById('qty');
      q.value = Number(q.value) + 1;
    });
    document.getElementById('addToCart').addEventListener('click', ()=>{
      const qty = Math.max(1, Number(document.getElementById('qty').value || 1));
      addToCart(id, qty);
    });
    updateCount();
  }

  document.addEventListener('DOMContentLoaded', render);
})();
