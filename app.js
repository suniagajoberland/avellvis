// Datos de Productos (con modelos 3D y especificaciones)
const PRODUCTS = [
  {
    id: 1,
    title: "ANDREA",
    category: "body",
    price: 29.99,
    image: "img/andrea.png",
  },
  {
    id: 2,
    title: "BICOLOR",
    category: "body",
    price: 49.99,
    image: "img/bicolor.jpg",
  },
  {
    id: 3,
    title: "BODY BICOLOR",
    category: "BODY",
    price: 34.99,
    image: "img/body bicolor.jpg",
  },
  {
    id: 4,
    title: "CLASICO",
    category: "BODY",
    price: 34.99,
    image:
      "img/body clasico.jpg",
  },
  {
    id: 5,
    title: "OLIMPICO",
    category: "BODY",
    price: 34.99,
    image:
      "img/body olimpico.jpg",
  },
  {
    id: 6,
    title: "REDONDO",
    category: "BODY",
    price: 34.99,
    image:
      "img/body redondo.jpg",
  },
  {
    id: 7,
    title: "ELISA",
    category: "BODY",
    price: 34.99,
    image:
      "img/elisa.jpg",
  },
  {
    id: 8,
    title: "FALDA",
    category: "BODY",
    price: 34.99,
    image:
      "img/falda.jpg",
  },
  {
    id: 9,
    title: "FER",
    category: "BODY",
    price: 34.99,
    image:
      "img/fer.jpg",
  },
  {
    id: 10,
    title: "FRESA",
    category: "SUETER",
    price: 34.99,
    image:
      "img/fresa sueter.jpg",
  },
  {
    id: 11,
    title: "IBONNI",
    category: "SUETER",
    price: 34.99,
    image:
      "img/ibonni.jpg",
  },
  {
    id: 12,
    title: "OLIVIA",
    category: "BODY",
    price: 34.99,
    image:
      "img/olivia.jpg",
  },
  {
    id: 13,
    title: "RAYAS",
    category: "FIT",
    price: 34.99,
    image:
      "img/rayas.jpg",
  },
  {
    id: 14,
    title: "VICTORIA",
    category: "BODY",
    price: 34.99,
    image:
      "img/victoria.jpg",
  },
];

// Tasa BCV Simulada del día
const BCV_RATE = 40.5;
const WHATSAPP_NUMBER = "584241234567"; // Número de contacto de Avellvis ficticio

// Estado de la Aplicación
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
const modalViewer = document.getElementById("modal-viewer");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const modalPriceBs = document.getElementById("modal-price-bs");
const modalDescription = document.getElementById("modal-description");
const modalSpecsContainer = document.getElementById("modal-specs-container");
const modalBtnAddCart = document.getElementById("modal-btn-add-cart");
const modalBtnInquire = document.getElementById("modal-btn-inquire");

// Inicialización de la Landing Page
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupEventListeners();
  loadCartFromStorage();
  updateCartUI();
});

// Registrar eventos globales
function setupEventListeners() {
  // Manejo del scroll para navbar
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Drawer del Carrito
  if (cartToggle) cartToggle.addEventListener("click", openCart);
  if (cartClose) cartClose.addEventListener("click", closeCart);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCart);

  // Menú Móvil
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const spans = menuToggle.querySelectorAll("span");
      if (spans.length >= 3) {
        spans[0].style.transform = navLinks.classList.contains("active")
          ? "rotate(45deg) translate(5px, 6px)"
          : "none";
        spans[1].style.opacity = navLinks.classList.contains("active")
          ? "0"
          : "1";
        spans[2].style.transform = navLinks.classList.contains("active")
          ? "rotate(-45deg) translate(5px, -6px)"
          : "none";
      }
    });

    // Cerrar menú móvil al hacer clic en un enlace
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

  // Cerrar Modal 3D
  if (modalClose) modalClose.addEventListener("click", close3DModal);
  if (lightboxModal) {
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal) close3DModal();
    });
  }

  // Finalizar Compra por WhatsApp
  if (btnCheckout) btnCheckout.addEventListener("click", checkoutCart);

  // Formulario de Contacto
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert(
        "¡Gracias por escribirnos! Tu mensaje ha sido enviado exitosamente. Nos comunicaremos contigo a la brevedad.",
      );
      contactForm.reset();
    });
  }

  // Control de progreso de carga seguro (Evaluación limpia sin lanzar errores por elementos null)
  if (modalViewer) {
    modalViewer.addEventListener("progress", (e) => {
      const updateBar = document.getElementById("update-bar");
      if (updateBar) {
        const percent = Math.round(e.detail.totalProgress * 100);
        updateBar.style.width = `${percent}%`;

        if (percent >= 100) {
          setTimeout(() => {
            modalViewer.classList.add("ready");
          }, 300);
        }
      }
    });
  }
}

// Renderizar catálogo de productos
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
        <button class="btn-view-3d-overlay" onclick="open3DModal(${product.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          Girar en 3D
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${product.category}</span>
        <h3 class="product-title">${product.title}</h3>
        <div class="product-price-row">
          <span class="product-price">$${product.price}</span>
          <span class="product-rate-bcv">Ref: ${priceBs} BS<br><small>Tasa BCV: ${BCV_RATE.toFixed(2)}</small></span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Agregar
          </button>
          <button class="btn-inquire" onclick="inquireProduct(${product.id})">
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

// Abrir Modal 3D e inicializar <model-viewer>
window.open3DModal = function (productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const priceBs = (product.price * BCV_RATE).toFixed(2);

  if (modalTitle) modalTitle.textContent = product.title;
  if (modalCategory) modalCategory.textContent = product.category;
  if (modalPrice) modalPrice.textContent = `$${product.price}`;
  if (modalPriceBs)
    modalPriceBs.textContent = `Equivalente a ${priceBs} BS (Tasa BCV del día)`;
  if (modalDescription) modalDescription.textContent = product.description;

  // Renderizar especificaciones
  if (modalSpecsContainer) {
    modalSpecsContainer.innerHTML = "";
    Object.entries(product.specs).forEach(([key, val]) => {
      const row = document.createElement("div");
      row.className = "modal-specs-row";
      row.innerHTML = `<strong>${key}:</strong> <span>${val}</span>`;
      modalSpecsContainer.appendChild(row);
    });
  }

  // Configurar botones de acción del modal
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

  // Cargar dinámicamente el modelo 3D en <model-viewer>
  if (modalViewer) {
    const updateBar = document.getElementById("update-bar");
    if (updateBar) updateBar.style.width = "0%";
    modalViewer.classList.remove("ready");

    modalViewer.setAttribute("src", product.modelUrl);
    modalViewer.setAttribute("poster", product.image);
    modalViewer.setAttribute("alt", `Modelo 3D de ${product.title}`);
  }

  // Mostrar modal
  if (lightboxModal) lightboxModal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Cerrar Modal 3D
function close3DModal() {
  if (lightboxModal) lightboxModal.classList.remove("active");
  document.body.style.overflow = "";

  if (modalViewer) {
    modalViewer.removeAttribute("src");
    modalViewer.removeAttribute("poster");
  }
}

// Acción del Botón Consultar
window.inquireProduct = function (productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const message = `Hola Avellvis Collection, me gustaría consultar la disponibilidad del producto: *${product.title}* ($${product.price}) de la categoría ${product.category}. ¿Tienen stock disponible actualmente? ¡Gracias!`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
};

// --- Gestión de Carrito de Compras ---

window.addToCart = function (productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.product.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  saveCartToStorage();
  updateCartUI();

  if (cartToggle) {
    cartToggle.style.transform = "scale(1.2)";
    setTimeout(() => {
      cartToggle.style.transform = "none";
    }, 200);
  }

  openCart();
};

function openCart() {
  if (cartDrawer) cartDrawer.classList.add("active");
  if (cartOverlay) cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  if (cartDrawer) cartDrawer.classList.remove("active");
  if (cartOverlay) cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

window.changeQty = function (productId, delta) {
  const item = cart.find((item) => item.product.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((item) => item.product.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
};

window.removeFromCart = function (productId) {
  cart = cart.filter((item) => item.product.id !== productId);
  saveCartToStorage();
  updateCartUI();
};

function updateCartUI() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.transform = totalItems > 0 ? "scale(1)" : "scale(0)";
  }

  if (!cartItemsContainer) return;
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <p>Tu carrito está vacío</p>
        <small>Agrega prendas exclusivas de nuestro catálogo</small>
      </div>
    `;
    if (cartTotalVal) cartTotalVal.textContent = "$0.00";
    if (cartTotalBs) cartTotalBs.textContent = "0.00 BS";
    if (btnCheckout) {
      btnCheckout.disabled = true;
      btnCheckout.style.opacity = "0.5";
    }
    return;
  }

  if (btnCheckout) {
    btnCheckout.disabled = false;
    btnCheckout.style.opacity = "1";
  }

  let subtotal = 0;

  cart.forEach((item) => {
    const itemTotal = item.product.price * item.quantity;
    subtotal += itemTotal;

    const cartItemDiv = document.createElement("div");
    cartItemDiv.className = "cart-item";
    cartItemDiv.innerHTML = `
      <img src="${item.product.image}" alt="${item.product.title}" class="cart-item-image">
      <div class="cart-item-details">
        <h4 class="cart-item-title">${item.product.title}</h4>
        <span class="cart-item-price">$${item.product.price}</span>
        <div class="cart-item-controls">
          <button class="cart-qty-btn" onclick="changeQty(${item.product.id}, -1)">-</button>
          <span class="cart-qty-val">${item.quantity}</span>
          <button class="cart-qty-btn" onclick="changeQty(${item.product.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.product.id})">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"></polyline>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
        </svg>
      </button>
    `;
    cartItemsContainer.appendChild(cartItemDiv);
  });

  const totalBs = subtotal * BCV_RATE;
  if (cartTotalVal) cartTotalVal.textContent = "$${subtotal.toFixed(2)}";
  if (cartTotalBs) cartTotalBs.textContent = `${totalBs.toFixed(2)} BS`;
}

// Compilar mensaje, enviar pedido a WhatsApp y vaciar los datos de la web de manera limpia
function checkoutCart() {
  if (cart.length === 0) return;

  let message = `*PEDIDO NUEVO - AVELLVIS COLLECTION*\n`;
  message += `==============================\n\n`;

  cart.forEach((item) => {
    const itemTotal = item.product.price * item.quantity;
    message += `• *${item.product.title}* (x${item.quantity}) - $${itemTotal.toFixed(2)}\n`;
  });

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0,
  );
  const totalBs = subtotal * BCV_RATE;

  message += `\n==============================\n`;
  message += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
  message += `*Total estimado en BS:* ${totalBs.toFixed(2)} BS (Tasa BCV: ${BCV_RATE.toFixed(2)})\n\n`;
  message += `_Por favor, confírmenme disponibilidad para acordar la entrega y el pago._`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;

  // 1. Abrir la pestaña externa con la API de WhatsApp sin demoras asíncronas
  window.open(whatsappUrl, "_blank");

  // 2. Limpieza de datos integrada sin romper el hilo de procesamiento de la ventana
  setTimeout(() => {
    // Vaciar variables internas y limpiar LocalStorage
    cart = [];
    saveCartToStorage();

    // Limpiar el Formulario de contacto si existe en la página actual
    const contactForm = document.getElementById("contact-form");
    if (contactForm) contactForm.reset();

    // Forzar actualización visual completa y cerrar el cajón del carrito de forma fluida
    updateCartUI();
    closeCart();
  }, 400);
}

// Local Storage helpers
function saveCartToStorage() {
  localStorage.setItem("avellvis_cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem("avellvis_cart");
  if (storedCart) {
    try {
      cart = JSON.parse(storedCart);
    } catch (e) {
      cart = [];
    }
  }
}
