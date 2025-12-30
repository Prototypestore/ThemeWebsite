fetch('product.json')
      .then(res => res.json())
      .then(items => {
        const grid = document.getElementById('menu-grid');
        items.forEach(item => {
          const card = document.createElement('div');
          card.className = 'menu-card';
          card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-info">
              <h3>${item.name}</h3>
              <p class="menu-price">$${item.price.toFixed(2)}</p>
              <p class="menu-desc">${item.description}</p>
            </div>
          `;
          grid.appendChild(card);
        });
      });
