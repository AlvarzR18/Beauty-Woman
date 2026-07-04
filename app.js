// ===== CONFIGURACIÓN DE LA TIENDA =====
const STORE_CONFIG = {
    name: 'BeautyWoman',
    address: 'Entrada De 5 De Julio, ',
    phone: '+584127655700',
    pickupMessage: '📦 Los pedidos se retiran en nuestro punto de referencia',
    schedule: 'Lunes a Viernes de 10:00 a 20:00'
};

// ===== CONFIGURACIÓN DE PRODUCTOS =====
const products = [
    { 
        id: 'anillo4', 
        name: 'Anillo En Forma De Corazon', 
        image: 'imagenes/image (3).png',
        price: 3, 
        description: 'Anillo en Forma De Corazon en Oro Chino'
    },
    { 
        id: 'anillo1', 
        name: 'Anillo', 
        image: 'imagenes/image.png',
        price: 3, 
        description: 'Anillo de Oro Chino'
    },
    { 
        id: 'anillo2', 
        name: 'Anillo', 
        image: 'imagenes/image (1).png',
        price: 3, 
        description: 'Anillo en Oro Chino'
    },
    { 
        id: 'anillo3', 
        name: 'Anillo En Forma de Mariposa', 
        image: 'imagenes/image (2).png',
        price: 3, 
        description: 'Anillo en forma de mariposa en Oro Chino'
    },
    { 
        id: 'anillo5', 
        name: 'Anillo En Forma De Ala', 
        image: 'imagenes/image (4).png',
        price: 3, 
        description: 'Anillo En Forma De Ala De Mariposa en Oro Chino'
    },
    { 
        id: 'anillo6', 
        name: 'Anillo', 
        image: 'imagenes/image (5).png',
        price: 3, 
        description: 'Anillo en Oro Chino'
    },
    { 
        id: 'anillo7', 
        name: 'Anillo En Forma De Flor', 
        image: 'imagenes/image (6).png',
        price: 3, 
        description: 'Anillo En Forma De Flores en Oro Chino'
    },
    { 
        id: 'anillo8', 
        name: 'Anillo ', 
        image: 'imagenes/image (7).png',
        price: 3, 
        description: 'Anillo en Oro Chino'
    },
    { 
        id: 'anillo9', 
        name: 'Anillo', 
        image: 'imagenes/image (8).png',
        price: 3, 
        description: 'Anillo en Oro Chino'
    },
    { 
        id: 'anillo10', 
        name: 'Anillo', 
        image: 'imagenes/image (9).png',
        price: 3, 
        description: 'Anillo en Oro Chino'
    },
    { 
        id: 'anillo11', 
        name: 'Anillo', 
        image: 'imagenes/image (10).png',
        price: 3, 
        description: 'Anillo en Oro Chino'
    },
    { 
        id: 'set de plata 925 para bebe', 
        name: 'Pulsera y Zarcillos', 
        image: 'imagenes/image (11).png',
        price: 28, 
        description: 'Pulsera y Zarcillos de Plata 925'
    },
    { 
        id: 'Collar', 
        name: 'Collar Te Amo En 100 Idiomas', 
        image: 'imagenes/image (17).png',
        price: 8, 
        description: 'Collar Romantico de Te Amo en 100 Idiomas Distintos'
    },
    { 
        id: 'Collar Girasol1', 
        name: 'Collar De Girasol', 
        image: 'imagenes/image (18).png',
        price: 8, 
        description: 'Collar Romantico de Te Amo en 100 Idiomas Distintos'
    },
    { 
        id: 'collar de flor/estrella', 
        name: 'Collar de Te Amo en 100 Idiomas', 
        image: 'imagenes/image (19).png',
        price: 8, 
        description: 'Collar Romantico de Te Amo en 100 Idiomas Distintos'
    },
    { 
        id: 'collar Girasol2 ', 
        name: 'Collar de Girasol', 
        image: 'imagenes/image (20).png',
        price: 8, 
        description: 'Collar Romantico de Te Amo en 100 Idiomas Distintos'
    },

     { 
        id: 'collar de balin plateado', 
        name: 'Collar de Balin Plateado', 
        image: 'imagenes/image (21).png',
        price: 5, 
        description: 'Cadena De Balin'
    },
    { 
        id: 'collar de balin dorado', 
        name: 'Collar de Balin Dorado', 
        image: 'imagenes/image (22).png',
        price: 5, 
        description: 'Cadena De Balin'
    },
    { 
        id: 'Cadena de planeta azul1 con luna', 
        name: 'Cadena De Planeta Con Luna', 
        image: 'imagenes/image (23).png',
        price: 10, 
        description: 'Cadena de Planeta Con Luna'
    },
    { 
        id: 'Cadena de saturno', 
        name: 'Cadena De Saturno Rosado', 
        image: 'imagenes/image (24).png',
        price: 10, 
        description: 'Cadena De Saturno Rosado Con Estrella Y Luna '
    },
    { 
        id: 'collar de planeta azul2', 
        name: 'Collar De Planeta', 
        image: 'imagenes/image (25).png',
        price: 10, 
        description: 'Collar De Planeta'
    },
    { 
        id: 'collar de corazon', 
        name: 'Collar De Corazon', 
        image: 'imagenes/image (26).png',
        price: 6, 
        description: 'Collar de Corazon, Cadena De Acero y Dije de Oro Chino'
    },
    { 
        id: 'Collar de Tortuga', 
        name: 'Collar de Tortuga', 
        image: 'imagenes/image (27).png',
        price: 6, 
        description: 'Collar De Tortuga, Cadena De Acero y Dije De Oro Chino'
    },
    { 
        id: 'collar de Fe', 
        name: 'Collar', 
        image: 'imagenes/image (28).png',
        price: 6, 
        description: 'Collar, Cadena de Acero y Dije De Oro Chino'
    },
    { 
        id: 'collar de concha', 
        name: 'Collar De Concha', 
        image: 'imagenes/image (29).png',
        price: 6, 
        description: 'Collar De Concha, Cadena De Acero y Dije De Oro Chino'
    },
    { 
        id: 'Anillos De PArejas', 
        name: 'Anillos De Parejas', 
        image: 'imagenes/image (33).png',
        price: 10, 
        description: 'Anillos para Parejas De Aceso Inoxidable'
    },


];

// ===== ESTADO DE LA APLICACIÓN =====
let state = {
    cart: [],
    currentStyle: 'gold',
    currentProducts: [...products],
    selectedProduct: null
};

// ===== RENDERIZADO DE PRODUCTOS =====
function renderProducts(productList) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    if (productList.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:#999;">No hay productos que coincidan con los filtros</div>`;
        return;
    }
    
    productList.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        
        div.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Crect width=%22200%22 height=%22200%22 fill=%22%23f0ede8%22/%3E%3Ctext x=%22100%22 y=%22100%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22Arial%22 font-size=%2214%22 fill=%22%23999%22%3E${product.name}%3C/text%3E%3C/svg%3E'">
            </div>
            <div class="name">${product.name}</div>
            <div class="price">$${product.price.toFixed(2)}</div>
        `;
        
        div.addEventListener('click', () => {
            openProductModal(product);
        });
        
        grid.appendChild(div);
    });
}

// ===== FILTROS =====
function applyFilters() {
    const min = parseFloat(document.getElementById('price-min').value) || 0;
    const max = parseFloat(document.getElementById('price-max').value) || Infinity;
    
    const filtered = products.filter(p => p.price >= min && p.price <= max);
    state.currentProducts = filtered;
    renderProducts(filtered);
}

function clearFilters() {
    document.getElementById('price-min').value = 0;
    document.getElementById('price-max').value = 50;
    state.currentProducts = [...products];
    renderProducts(products);
}

// ===== MODAL DE PRODUCTO =====
function openProductModal(product) {
    state.selectedProduct = product;
    const modal = document.getElementById('product-modal');
    
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-image').alt = product.name;
    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('modal-product-description').textContent = product.description;
    
    modal.classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal').classList.remove('active');
    state.selectedProduct = null;
}

// ===== CARRITO =====
function toggleCart() {
    document.getElementById('cart-dropdown').classList.toggle('open');
}

function closeCart() {
    document.getElementById('cart-dropdown').classList.remove('open');
}

function addToCart(product) {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    closeProductModal();
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    const countEl = document.getElementById('cart-count');
    
    if (state.cart.length === 0) {
        container.innerHTML = '<p style="color: #999; font-size: 0.85rem; text-align:center; padding:20px 0;">No hay productos en el carrito</p>';
        totalEl.textContent = '$0.00';
        countEl.textContent = '0';
        return;
    }
    
    let html = '';
    let total = 0;
    let count = 0;
    state.cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        count += item.quantity;
        html += `
            <div class="cart-item">
                <div style="display:flex;align-items:center;gap:8px;">
                    <img src="${item.image}" alt="${item.name}" class="product-icon" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2230%22 height=%2230%22%3E%3Crect width=%2230%22 height=%2230%22 fill=%22%23f0ede8%22/%3E%3Ctext x=%2215%22 y=%2215%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22Arial%22 font-size=%2210%22 fill=%22%23999%22%3E📿%3C/text%3E%3C/svg%3E'">
                    <span style="font-size:0.8rem;">${item.name} x${item.quantity}</span>
                </div>
                <div>
                    <span style="font-size:0.8rem;font-weight:600;">$${subtotal.toFixed(2)}</span>
                    <button class="remove-item" data-id="${item.id}">×</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    totalEl.textContent = `$${total.toFixed(2)}`;
    countEl.textContent = count;
    
    container.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.dataset.id));
    });
}

// ===== COMPRAR AHORA (sin carrito) =====
function buyNow(product) {
    state.cart = [{ ...product, quantity: 1 }];
    updateCartUI();
    closeProductModal();
    showConfirmation();
}

// ===== ESTILOS =====
function applyStyle(style) {
    state.currentStyle = style;
    
    document.body.classList.remove('style-gold', 'style-silver', 'style-neutral');
    document.body.classList.add(`style-${style}`);
    
    const styleMap = {
        'gold': {
            primary: '#d4af37',
            primaryDark: '#b8962e',
            primaryLight: '#f0d060',
            bg: '#fdf8f0',
            cardBg: '#ffffff',
            text: '#2d2d2d',
            border: '#e8d5b0'
        },
        'silver': {
            primary: '#a8a8a8',
            primaryDark: '#888888',
            primaryLight: '#d0d0d0',
            bg: '#f0f0f0',
            cardBg: '#fafafa',
            text: '#333333',
            border: '#d0d0d0'
        },
        'neutral': {
            primary: '#b8a88a',
            primaryDark: '#9a8a70',
            primaryLight: '#d4c4a8',
            bg: '#f5f2ed',
            cardBg: '#ffffff',
            text: '#2d2d2d',
            border: '#ddd0c0'
        }
    };
    
    const config = styleMap[style];
    
    document.documentElement.style.setProperty('--primary', config.primary);
    document.documentElement.style.setProperty('--primary-dark', config.primaryDark);
    document.documentElement.style.setProperty('--primary-light', config.primaryLight);
    document.documentElement.style.setProperty('--bg-color', config.bg);
    document.documentElement.style.setProperty('--card-bg', config.cardBg);
    document.documentElement.style.setProperty('--text-color', config.text);
    document.documentElement.style.setProperty('--border-color', config.border);
    
    document.body.style.backgroundColor = config.bg;
    
    document.querySelectorAll('.style-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.style === style);
    });
    
    document.querySelectorAll('.cart-toggle, .filter-btn:not(.clear), .checkout-btn, .submit-order, #confirm-yes').forEach(el => {
        el.style.background = config.primary;
        el.style.setProperty('--primary', config.primary);
    });
    
    document.querySelectorAll('.price, .modal-product-price, .confirm-total span').forEach(el => {
        el.style.color = config.primary;
    });
}

// ===== GENERACIÓN DE PDF CON DIRECCIÓN FIJA =====
function generatePDF(orderData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    
    const styleMap = {
        'gold': [212, 175, 55],
        'silver': [168, 168, 168],
        'neutral': [184, 168, 138]
    };
    const goldColor = styleMap[state.currentStyle] || [212, 175, 55];
    const darkColor = [45, 45, 45];
    
    doc.setFontSize(24);
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.text('BeautyWoman', 105, 25, { align: 'center' });
    
    doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setLineWidth(0.5);
    doc.line(30, 30, 180, 30);
    
    doc.setFontSize(16);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text('FACTURA', 105, 40, { align: 'center' });
    
    const orderNumber = 'ORD-' + Date.now().toString().slice(-8);
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Pedido #: ${orderNumber}`, 150, 48);
    doc.text(`Fecha: ${new Date().toLocaleDateString()}`, 150, 53);
    
    doc.setFontSize(11);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('DATOS DEL CLIENTE', 20, 65);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    
    const lineHeight = 7;
    let yPos = 73;
    doc.text(`Cliente: ${orderData.name}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Teléfono: ${orderData.phone}`, 25, yPos);
    yPos += lineHeight;
    doc.text(`Fecha de entrega: ${orderData.deliveryDate}`, 25, yPos);
    yPos += lineHeight + 5;
    
    // ===== DIRECCIÓN DE RETIRO (FIJA) =====
    doc.setFontSize(10);
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setFont('helvetica', 'bold');
    doc.text('📍 PUNTO DE RETIRO', 20, yPos);
    yPos += lineHeight;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(80, 80, 80);
    doc.text(STORE_CONFIG.address, 25, yPos);
    yPos += lineHeight;
    doc.text(`Horario: ${STORE_CONFIG.schedule}`, 25, yPos);
    yPos += lineHeight + 5;
    
    // ===== TABLA DE PRODUCTOS =====
    const col1 = 25;
    const col3 = 125;
    const col4 = 155;
    const col5 = 180;
    
    doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.rect(col1, yPos - 5, col5 - col1, 10, 'F');
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Producto', col1 + 2, yPos + 1);
    doc.text('Cant.', col3, yPos + 1);
    doc.text('Precio', col4, yPos + 1);
    doc.text('Subtotal', col5 - 5, yPos + 1, { align: 'right' });
    
    yPos += 10;
    doc.setDrawColor(200, 200, 200);
    doc.line(col1, yPos, col5, yPos);
    yPos += 3;
    
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    
    let total = 0;
    let rowCount = 0;
    const maxRowsPerPage = 15;
    
    orderData.products.forEach((item) => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        
        if (rowCount >= maxRowsPerPage) {
            doc.addPage();
            rowCount = 0;
            yPos = 25;
            
            doc.setFillColor(goldColor[0], goldColor[1], goldColor[2]);
            doc.rect(col1, yPos - 5, col5 - col1, 10, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.text('Producto', col1 + 2, yPos + 1);
            doc.text('Cant.', col3, yPos + 1);
            doc.text('Precio', col4, yPos + 1);
            doc.text('Subtotal', col5 - 5, yPos + 1, { align: 'right' });
            yPos += 10;
            doc.setDrawColor(200, 200, 200);
            doc.line(col1, yPos, col5, yPos);
            yPos += 3;
        }
        
        doc.text(`${item.name}`, col1 + 2, yPos + 3);
        doc.text(`${item.quantity}`, col3, yPos + 3);
        doc.text(`$${item.price.toFixed(2)}`, col4, yPos + 3);
        doc.text(`$${subtotal.toFixed(2)}`, col5 - 5, yPos + 3, { align: 'right' });
        
        yPos += 8;
        rowCount++;
    });
    
    yPos += 2;
    doc.setDrawColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.setLineWidth(0.5);
    doc.line(col1, yPos, col5, yPos);
    yPos += 8;
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(goldColor[0], goldColor[1], goldColor[2]);
    doc.text(`TOTAL: $${total.toFixed(2)}`, col5 - 5, yPos + 3, { align: 'right' });
    
    doc.setFontSize(9);
    doc.setTextColor(150, 150, 150);
    doc.setFont('helvetica', 'normal');
    doc.text('Gracias por su compra', 105, 285, { align: 'center' });
    doc.text('BeautyWoman - Todos los derechos reservados', 105, 290, { align: 'center' });
    
    return doc;
}

// ===== CONFIRMACIÓN DE COMPRA =====
function showConfirmation() {
    const modal = document.getElementById('confirm-modal');
    const details = document.getElementById('confirm-details');
    
    let html = '';
    let total = 0;
    
    state.cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
            <div class="confirm-product">
                <img src="${item.image}" alt="${item.name}" class="product-icon" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2250%22 height=%2250%22%3E%3Crect width=%2250%22 height=%2250%22 fill=%22%23f0ede8%22/%3E%3Ctext x=%2225%22 y=%2225%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22Arial%22 font-size=%2212%22 fill=%22%23999%22%3E📿%3C/text%3E%3C/svg%3E'">
                <div class="info">
                    <div class="name">${item.name}</div>
                    <div class="details">${item.quantity} unidad(es) x $${item.price.toFixed(2)}</div>
                </div>
                <div class="price">$${subtotal.toFixed(2)}</div>
            </div>
        `;
    });
    
    html += `
        <div class="confirm-total">
            TOTAL: <span>$${total.toFixed(2)}</span>
        </div>
        <div style="margin-top:15px; padding:12px; background:#f8f6f3; border-radius:8px; font-size:0.85rem; color:#555;">
            <strong>📍 Retiro en Punto de Referencia:</strong><br>
            ${STORE_CONFIG.address}<br>
            <span style="font-size:0.75rem; color:#888;">Horario: ${STORE_CONFIG.schedule}</span>
        </div>
    `;
    
    details.innerHTML = html;
    modal.classList.add('active');
}

// ===== MODAL DE FORMULARIO =====
function openOrderModal() {
    const modal = document.getElementById('order-modal');
    const productsContainer = document.getElementById('order-products');
    const totalContainer = document.getElementById('order-total');
    
    // Mostrar dirección en el formulario
    document.getElementById('store-address-display').textContent = STORE_CONFIG.address;
    
    let html = '';
    let total = 0;
    state.cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
            <div style="display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f0ede8;align-items:center;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <img src="${item.image}" alt="${item.name}" style="width:40px;height:40px;object-fit:contain;border-radius:4px;" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Crect width=%2240%22 height=%2240%22 fill=%22%23f0ede8%22/%3E%3Ctext x=%2220%22 y=%2220%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22Arial%22 font-size=%2210%22 fill=%22%23999%22%3E📿%3C/text%3E%3C/svg%3E'">
                    <span>${item.name} x${item.quantity}</span>
                </div>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
        `;
    });
    
    productsContainer.innerHTML = html;
    totalContainer.innerHTML = `<strong>$${total.toFixed(2)}</strong>`;
    
    const dateInput = document.getElementById('delivery-date');
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    dateInput.min = minDate.toISOString().split('T')[0];
    
    modal.classList.add('active');
}

function submitOrder() {
    const name = document.getElementById('customer-name').value;
    const phone = document.getElementById('customer-phone').value;
    const deliveryDate = document.getElementById('delivery-date').value;
    
    if (!name || !phone || !deliveryDate) {
        alert('Por favor, complete todos los campos.');
        return;
    }
    
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const orderData = {
        name,
        phone,
        deliveryDate,
        products: state.cart,
        total,
        address: STORE_CONFIG.address // Dirección fija de la tienda
    };
    
    const doc = generatePDF(orderData);
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    
    let message = `*PEDIDO - BeautyWoman*\n\n`;
    message += `Cliente: ${name}\n`;
    message += `Teléfono: ${phone}\n`;
    message += `Fecha de entrega: ${deliveryDate}\n\n`;
    message += `*Productos:*\n`;
    state.cart.forEach(item => {
        message += `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\n*Total: $${total.toFixed(2)}*\n\n`;
    message += `📍 *RETIRO EN PUNTO DE ENTREGA:*\n`;
    message += `${STORE_CONFIG.address}\n`;
    message += `Horario: ${STORE_CONFIG.schedule}\n\n`;
    message += `Adjunto encontrarás el PDF con el detalle del pedido.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${STORE_CONFIG.phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `pedido_${name.replace(/\s/g, '_')}.pdf`;
    link.click();
    
    state.cart = [];
    updateCartUI();
    
    document.getElementById('order-modal').classList.remove('active');
    document.getElementById('order-form').reset();
    
    alert('Pedido enviado. Se abrirá WhatsApp y se descargará el PDF.');
}

// ===== EVENTOS =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando BeautyWoman...');
    console.log(`📍 Dirección de retiro: ${STORE_CONFIG.address}`);
    
    // Renderizar productos
    renderProducts(products);
    
    // Filtros
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('clear-filters').addEventListener('click', clearFilters);
    
    document.querySelectorAll('.filter-group input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') applyFilters();
        });
    });
    
    document.querySelectorAll('.style-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            applyStyle(btn.dataset.style);
        });
    });
    
    document.getElementById('cart-toggle').addEventListener('click', toggleCart);
    document.getElementById('cart-close').addEventListener('click', closeCart);
    
    document.addEventListener('click', (e) => {
        const wrapper = document.querySelector('.cart-wrapper');
        if (!wrapper.contains(e.target) && !e.target.closest('.cart-dropdown')) {
            closeCart();
        }
    });
    
    document.getElementById('product-modal-close').addEventListener('click', closeProductModal);
    document.getElementById('product-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeProductModal();
    });
    
    document.getElementById('modal-add-cart').addEventListener('click', () => {
        if (state.selectedProduct) {
            addToCart(state.selectedProduct);
        }
    });
    
    document.getElementById('modal-buy-now').addEventListener('click', () => {
        if (state.selectedProduct) {
            buyNow(state.selectedProduct);
        }
    });
    
    document.getElementById('modal-cancel').addEventListener('click', closeProductModal);
    
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (state.cart.length === 0) {
            alert('Por favor, agregue productos al carrito primero.');
            return;
        }
        closeCart();
        showConfirmation();
    });
    
    document.getElementById('confirm-yes').addEventListener('click', () => {
        document.getElementById('confirm-modal').classList.remove('active');
        openOrderModal();
    });
    
    document.getElementById('confirm-no').addEventListener('click', () => {
        document.getElementById('confirm-modal').classList.remove('active');
    });
    
    document.querySelector('#confirm-modal .close-modal').addEventListener('click', () => {
        document.getElementById('confirm-modal').classList.remove('active');
    });
    
    document.getElementById('confirm-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) {
            document.getElementById('confirm-modal').classList.remove('active');
        }
    });
    
    const orderModal = document.getElementById('order-modal');
    document.querySelector('#order-modal .close-modal').addEventListener('click', () => {
        orderModal.classList.remove('active');
    });
    
    orderModal.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.classList.remove('active');
        }
    });
    
    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();
        submitOrder();
    });
    
    applyStyle('gold');
});