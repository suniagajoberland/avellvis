// Datos de Productos (Se aplica +30% a los precios base y nombres transformados a MAYÚSCULAS)
const PRODUCTS = [
  {
    id: 1,
    title: "ANDREA",
    category: "body",
    price: 38.99,
    image: "img/andrea.png",
    description: "Body premium con entalle perfecto y acabados de lujo, ideal para looks casuales y formales.",
    specs: { "Material": "Algodón Suede Premium", "Tallas": "S, M, L", "Cuidado": "Lavar a mano" }
  },
  {
    id: 2,
    title: "BICOLOR",
    category: "body",
    price: 64.99,
    image: "img/bicolor.png",
    description: "Diseño asimétrico bitono de alta costura que estiliza la silueta con elegancia contemporánea.",
    specs: { "Material": "Lycra Coreana Confort", "Tallas": "S, M", "Cuidado": "No usar secadora" }
  },
  {
    id: 3,
    title: "BODY BICOLOR",
    category: "BODY",
    price: 45.49,
    image: "img/body bicolor.png",
    description: "Variante exclusiva de nuestra línea bicolor con cuello estilizado y soporte interno mejorado.",
    specs: { "Material": "Microfibra Premium", "Tallas": "M, L", "Cuidado": "Lavar al revés" }
  },
  {
    id: 4,
    title: "CLASICO",
    category: "BODY",
    price: 45.49,
    image: "img/body clasico.png",
    description: "El básico indispensable de fondo de armario. Confección ultrasuave transpirable de larga durabilidad.",
    specs: { "Material": "Algodón Orgánico 100%", "Tallas": "S, M, L, XL", "Cuidado": "Lavar con agua fría" }
  },
  {
    id: 5,
    title: "OLIMPICO",
    category: "BODY",
    price: 45.49,
    image: "img/body olimpico.png",
    description: "Espalda atlética recortada con precisión milimétrica para un balance óptimo entre sensualidad y confort.",
    specs: { "Material": "Spandex de Alta Densidad", "Tallas": "S, M", "Cuidado": "Secado a la sombra" }
  },
  {
    id: 6,
    title: "REDONDO",
    category: "BODY",
    price: 45.49,
    image: "img/body redondo.png",
    description: "Escote redondo profundo acentuado con costuras invisibles que brindan soporte y minimalismo puro.",
    specs: { "Material": "Nylon Soft Touch", "Tallas": "S, M, L", "Cuidado": "Usar jabón neutro" }
  },
  {
    id: 7,
    title: "ELISA",
    category: "BODY",
    price: 45.49,
    image: "img/elisa.png",
    description: "Detalles texturizados únicos en mangas con un corpiño estructurado de ajuste escultural.",
    specs: { "Material": "Rib Elástico Importado", "Tallas": "M, L", "Cuidado": "Planchar a baja temperatura" }
  },
  {
    id: 8,
    title: "FALDA",
    category: "BODY",
    price: 45.49,
    image: "img/falda.png",
    description: "Complemento perfecto de nuestra colección. Caída fluida impecable que define movimiento lineal.",
    specs: { "Material": "Chifón Texturizado", "Tallas": "Única Ajustable", "Cuidado": "Lavar en seco" }
  },
  {
    id: 9,
    title: "FER",
    category: "BODY",
    price: 45.49,
    image: "img/fer.png",
    description: "Diseño vanguardista con sutiles aberturas laterales recortadas con tecnología láser.",
    specs: { "Material": "Poliamida Confort", "Tallas": "S, M", "Cuidado": "No retorcer" }
  },
  {
    id: 10,
    title: "FRESA",
    category: "SUETER",
    price: 45.49,
    image: "img/fresa sueter.png",
    description: "Suéter tejido de punto suave en tonalidad vibrante de temporada. Máximo confort térmico.",
    specs: { "Material": "Lana de Hilo Acrílico Premium", "Tallas": "S, M, L", "Cuidado": "Lavar a mano en agua fría" }
  },
  {
    id: 11,
    title: "IBONNI",
    category: "SUETER",
    price: 45.49,
    image: "img/ibonni.png",
    description: "Estructura oversize con cuello alto elegante y mangas abullonadas de estilo editorial sofisticado.",
    specs: { "Material": "Algodón e Hilo Entrelazado", "Tallas": "M, L", "Cuidado": "Guardar doblado, no colgar" }
  },
  {
    id: 12,
    title: "OLIVIA",
    category: "BODY",
    price: 45.49,
    image: "img/olivia.png",
    description: "Líneas de encaje geométrico premium aplicadas sobre fondo sólido transpirable de alta compresión.",
    specs: { "Material": "Encaje Francés y Lycra", "Tallas": "S, M, L", "Cuidado": "Usar bolsa de lavado" }
  },
  {
    id: 13,
    title: "RAYAS",
    category: "FIT",
    price: 45.49,
    image: "img/rayas.png",
    description: "Estampado lineal clásico de alta definición que estiliza ópticamente la postura de forma limpia.",
    specs: { "Material": "Algodón Interlock", "Tallas": "S, M", "Cuidado": "No usar blanqueadores" }
  },
  {
    id: 14,
    title: "VICTORIA",
    category: "BODY",
    price: 45.49,
    image: "img/victoria.png",
    description: "Hombros descubiertos dramáticos sustentados con bandas de silicona internas antideslizantes.",
    specs: { "Material": "Satén Elástico de Lujo", "Tallas": "S, M, L", "Cuidado": "Planchar al vapor" }
  },
];

// Configuración Operativa Global
const BCV_RATE = 40.5;
const WHATSAPP_NUMBER = "584226382165"; 

// Estado Reactivo de la Aplicación
let cart = [];

// Elementos del DOM
const productsGrid = document.getElementById("products-grid");
const cartToggle = document.getElementById("cart-toggle");
const cartCount = document.getElementById("cart-count");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-drawer-overlay");
const cartClose = document.getElementById("cart-drawer-close");
const cartItemsContainer = document.getElementById("cart-items-container");
const cartTotalVal = document.getElementById("cart-total-val");
const cartTotalBs = document.getElementById("cart-total-bs");
const btnCheckout = document.getElementById("btn-checkout");
const menuToggle = document.getElementById("menu-mobile-toggle");
const navLinks = document.getElementById("nav-links");
const navbar = document.querySelector(".navbar");

// Lightbox Modal Elementos
const lightboxModal = document.getElementById("lightbox-modal");
const modalClose = document.getElementById("modal-close");
const modalFallbackImg = document.getElementById("modal-fallback-img");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const modalPriceBs = document.getElementById("modal-price-bs");
const modalDescription = document.getElementById("modal-description");
const modalSpecsContainer = document.getElementById("modal-specs-container");
const modalBtnAddCart = document.getElementById("modal-btn-add-cart");
const modalBtnInquire = document.getElementById("modal-btn-inquire");

// Inicialización Segura de la Aplicación
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  loadCartFromStorage();
  updateCartUI();
});

// Manejo Centralizado de Eventos de la Interfaz
function setupEventListeners() {
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  if (cartToggle) cartToggle.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const spans = menuToggle.querySelectorAll("span");
      if (spans.length >= 3) {
        spans[0].style.transform = navLinks.classList.contains("active") ? "rotate(45deg) translate(5px, 6px)" : "none";
        spans[1].style.opacity = navLinks.classList.contains("active") ? "0" : "1";
        spans[2].style.transform = navLinks.classList.contains("active") ? "rotate(-45deg) translate(5px, -6px)" : "none";
      }
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        const spans = menuToggle.querySelectorAll("span");
        if (spans.length >= 3) {
          spans[0].style.transform = "none";
          spans[1].style.opacity = "1";
          spans[2].style.transform = "none";
        }
      });
    });
  }

  if (modalClose) modalClose.addEventListener("click", close3DModal);
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) close3DModal();
    });
  }

  if (btnCheckout) btnCheckout.addEventListener("click", checkoutCart);

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("¡Gracias por escribirnos! Tu mensaje ha sido procesado exitosamente.");
      contactForm.reset();
    });
  }

  // DELEGACIÓN DE EVENTOS OPTIMIZADA: Corrige de raíz los problemas con clics en los botones dinámicos
  if (productsGrid) {
    productsGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      if (!card) return;
      
      const productId = parseInt(card.getAttribute("data-id"), 10);
      if (!productId) return;

      // Evento para Agregar al carrito
      if (e.target.closest(".btn-action-add")) {
        addToCart(productId);
      }
      
      // Evento para Consultar directamente por WhatsApp
      else if (e.target.closest(".btn-action-inquire")) {
        inquireProduct(productId);
      }
      
      // Evento para Abrir el Lightbox modal de detalles
      else if (e.target.closest(".btn-action-view-details")) {
        open3DModal(productId);
      }
    });
  }
}

// Renderizado Dinámico del Catálogo Corporativo sin inline click handler
function renderProducts() {
  if (!productsGrid) return;
  productsGrid.innerHTML = "";

  PRODUCTS.forEach((product) => {
    const priceBs = (product.price * BCV_RATE).toFixed(2);

    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);

    card.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.title}" class="product-image" loading="lazy">
        <button class="btn-view-3d-overlay btn-action-view-details">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          Ver Detalles Premium
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price-row">
          <span class="product-price">$${product.price.toFixed(2)}</span>
          <span class="product-rate-bcv">Ref: ${priceBs} BS<br><small>Tasa BCV: ${BCV_RATE.toFixed(2)}</small></span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart btn-action-add">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Agregar
          </button>
          <button class="btn-inquire btn-action-inquire">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Consultar
          </button>
        </div>
      </div>
    `;
    productsGrid.appendChild(card);
  });
}

// Apertura de Vista de Detalles / Lightbox Modal
function open3DModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const priceBs = (product.price * BCV_RATE).toFixed(2);

  if (modalTitle) modalTitle.textContent = product.title;
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalPrice) modalPrice.textContent = `$${product.price.toFixed(2)}`;
  if (modalPriceBs) modalPriceBs.textContent = `Equivalente a ${priceBs} BS (Tasa BCV del día)`;
  if (modalDescription) modalDescription.textContent = product.description;
  if (modalFallbackImg) modalFallbackImg.src = product.image;

  if (modalSpecsContainer) {
    modalSpecsContainer.innerHTML = "";
    Object.entries(product.specs).forEach(([key, val]) => {
      const row = document.createElement("div");
      row.className = "modal-specs-row";
      row.innerHTML = `<strong>${key}:</strong> <span>${val}</span>`;
      modalSpecsContainer.appendChild(row);
    });
  }

  if (modalBtnAddCart) {
    modalBtnAddCart.onclick = () => {
      addToCart(product.id);
      close3DModal();
    };
  }

  if (modalBtnInquire) {
    modalBtnInquire.onclick = () => {
      inquireProduct(product.id);
    };
  }

  const updateBar = document.getElementById("update-bar");
  if (updateBar) updateBar.style.width = "100%";

  if (lightboxModal) lightboxModal.classList.add("active");
}

function close3DModal() {
  if (lightboxModal) lightboxModal.classList.remove("active");
}

// Lógica Funcional del Carrito
function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  // Corregido: Se añade encadenación opcional (?.) para evitar leer 'id' si 'product' viene indefinido
  const existingItem = cart.find((item) => item?.product?.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  saveCartToStorage();
  updateCartUI();
  openCart();
}

function removeFromCart(productId) {
  // Corregido: Filtrado seguro usando encadenación opcional
  cart = cart.filter((item) => item?.product?.id !== productId);
  saveCartToStorage();
  updateCartUI();
}

function openCart() {
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.add("active");
    cartOverlay.classList.add("active");
  }
}

function closeCart() {
  if (cartDrawer && cartOverlay) {
    cartDrawer.classList.remove("active");
    cartOverlay.classList.remove("active");
  }
}

function updateCartUI() {
  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = "";

  let totalItems = 0;
  let subtotal = 0;

  cart.forEach((item) => {
    // Validación de seguridad por si algún item corrupto se coló en el arreglo
    if (!item || !item.product) return;

    totalItems += item.quantity;
    subtotal += item.product.price * item.quantity;

    const itemEl = document.createElement("div");
    itemEl.className = "cart-item";
    itemEl.innerHTML = `
      <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-img">
      <div class="cart-item-details">
        <h4>${item.product.title}</h4>
        <span class="cart-item-price">$${item.product.price.toFixed(2)}</span>
        <div class="cart-item-qty">Cantidad: ${item.quantity}</div>
      </div>
      <button class="btn-remove-item" aria-label="Eliminar artículo">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          <line x1="10" y1="11" x2="10" y2="17"></line>
          <line x1="14" y1="11" x2="14" y2="17"></line>
        </svg>
      </button>
    `;

    // Vincular botón de remover directamente
    itemEl.querySelector(".btn-remove-item").addEventListener("click", () => {
      removeFromCart(item.product.id);
    });

    cartItemsContainer.appendChild(itemEl);
  });

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="text-align: center; color: var(--color-text-secondary); margin-top: 2rem;">Tu carrito está vacío.</p>`;
  }

  if (cartCount) cartCount.textContent = totalItems;
  if (cartTotalVal) cartTotalVal.textContent = `$${subtotal.toFixed(2)}`;

  const totalBs = subtotal * BCV_RATE;
  if (cartTotalBs) cartTotalBs.textContent = `${totalBs.toFixed(2)} BS`;
}

window.limpiarCarritoGlobal = function () {
  cart = [];
  saveCartToStorage();
  updateCartUI();
};

function inquireProduct(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const text = `Hola Avellvis! Me interesa recibir asesoría personalizada sobre la prenda: *${product.title}* (%23${product.id}) en categoría ${product.category}. ¿Tienen disponibilidad de tallas actualmente?`;
  window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${text}`, "_blank");
}

function checkoutCart() {
  if (cart.length === 0) {
    alert("Tu carrito está vacío. Agrega prendas antes de realizar el pedido.");
    return;
  }

  let message = `🛍️ *NUEVO PEDIDO - AVELLVIS*\n`;
  message += `==============================\n\n`;

  cart.forEach((item, index) => {
    if (!item || !item.product) return;
    message += `${index + 1}. *${item.product.title}*\n`;
    message += `   Cantidad: ${item.quantity} un.\n`;
    message += `   Precio unitario: $${item.product.price.toFixed(2)}\n\n`;
  });

  const subtotal = cart.reduce((acc, item) => acc + (item?.product?.price || 0) * item.quantity, 0);
  const totalBs = subtotal * BCV_RATE;

  message += `==============================\n`;
  message += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
  message += `*Total estimado en BS:* ${totalBs.toFixed(2)} BS (Tasa BCV: ${BCV_RATE.toFixed(2)})\n\n`;
  message += `_Por favor, confírmenme disponibilidad para acordar la entrega y el pago._`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");

  setTimeout(() => {
    cart = [];
    saveCartToStorage();
    const contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.reset();
    updateCartUI();
    closeCart();
  }, 400);
}

function saveCartToStorage() {
  localStorage.setItem("avellvis_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem("avellvis_cart");
  if (storedCart) {
    try {
      const parsed = JSON.parse(storedCart);
      if (Array.isArray(parsed)) {
        // Filtramos para mantener únicamente items válidos que contengan la propiedad product
        cart = parsed.filter(item => item && item.product);
      } else {
        cart = [];
      }
    } catch (e) {
      cart = [];
    }
  }
}