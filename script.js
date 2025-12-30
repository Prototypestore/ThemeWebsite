// Load products from JSON
fetch('product.json')
  .then(res => res.json())
  .then(products => {
    const grid = document.getElementById('product-grid');

    products.forEach(p => {
      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p class="price">$${p.price}</p>
        <a 
          href="mailto:vx100studio@outlook.com?subject=Enquiry about ${encodeURIComponent(p.name)}"
          class="btn-add-to-cart"
        >
          Enquire Now
        </a>
      `;

      grid.appendChild(card);
    });
  });
