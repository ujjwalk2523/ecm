// script.js - homepage rendering + simple add-to-cart
(function(){
  const grid = document.getElementById('products-grid');
  const cartCountEl = document.getElementById('cart-count');

  function getCart(){
    try{
      return JSON.parse(localStorage.getItem('srm_cart')) || [];
    }catch(e){
      return [];
    }
  }
  function setCart(cart){ localStorage.setItem('srm_cart', JSON.stringify(cart)); updateCartCount(); }

  function updateCartCount(){
    const count = getCart().reduce((s,i)=> s + (i.qty||1), 0);
    const el = document.getElementById('cart-count');
    if(el) el.textContent = count;
  }

  function addToCart(productId, qty=1){
    const prod = PRODUCTS.find(p=>p.id===productId);
    if(!prod) return;
    const cart = getCart();
    const existing = cart.find(i=>i.id===productId);
    if(existing){
      existing.qty = (existing.qty || 1) + qty;
    } else {
      cart.push({ id: prod.id, title: prod.title, price: prod.price, img: prod.img, qty: qty });
    }
    setCart(cart);
    alert(`${prod.title} added to cart`);
  }

  function renderCard(p){
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <div class="product-title">${p.title}</div>
      <div class="small">${p.short}</div>
      <div class="price-row">
        <div class="price">₹ ${p.price} / day</div>
        <div class="small">Availability: In Lab</div>
      </div>
      <div class="card-actions">
        <button class="btn-sm view-btn" data-id="${p.id}">View</button>
        <button class="btn-sm add-btn" data-id="${p.id}">Add to Cart</button>
      </div>
    `;
    // events
    div.querySelector('.view-btn').addEventListener('click', ()=> {
      location.href = `detail.html?id=${p.id}`;
    });
    div.querySelector('.add-btn').addEventListener('click', ()=> {
      addToCart(p.id, 1);
    });
    return div;
  }

  function init(){
    // render products
    if(!grid) return;
    grid.innerHTML = '';
    PRODUCTS.forEach(p => grid.appendChild(renderCard(p)));
    updateCartCount();
  }

  // init on DOM ready
  document.addEventListener('DOMContentLoaded', init);
})();
/* Simple slider with auto-play, arrows and dots.
   Replace media files (videos/slide1.mp4 and images/slide2.jpg, slide3.jpg)
   with your real assets later.
*/

document.addEventListener('DOMContentLoaded', () => {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dotsContainer = document.getElementById('dots');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  let activeIndex = 0;
  let autoplayTimer = null;
  const AUTO_DELAY = 6000; // 6s

  // create dots
  slides.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.setAttribute('data-index', i);
    if (i === 0) btn.classList.add('active');
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  });

  function setActive(i) {
    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === i);
    });
    // update dots
    Array.from(dotsContainer.children).forEach((d, idx) => {
      d.classList.toggle('active', idx === i);
    });
    activeIndex = i;
  }

  function prev() {
    goTo((activeIndex - 1 + slides.length) % slides.length);
  }
  function next() {
    goTo((activeIndex + 1) % slides.length);
  }

  function goTo(i) {
    setActive(i);
    resetAutoplay();
  }

  // autoplay
  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      next();
    }, AUTO_DELAY);
  }
  function resetAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
    startAutoplay();
  }

  prevBtn.addEventListener('click', prev);
  nextBtn.addEventListener('click', next);

  // pause on hover
  const slider = document.getElementById('slider');
  slider.addEventListener('mouseenter', () => { if (autoplayTimer) clearInterval(autoplayTimer); });
  slider.addEventListener('mouseleave', () => { resetAutoplay(); });

  // init
  setActive(0);
  startAutoplay();
});
