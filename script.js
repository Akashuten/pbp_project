// Fungsi Navigasi Hash-based
function showPage(pageName) {
    const pages = document.querySelectorAll('.page-content');
    const targetPage = document.getElementById(pageName);
    
    if (!targetPage) return;
    
    // Menyembunyikan semua halaman
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // menampilkan halaman sesuai target page
    targetPage.classList.add('active');
    
    // Memperbarui navigasi
    updateActiveNavigation(pageName);
    
    // Memuat konten sesuai halaman
    loadPageContent(pageName);
    
    // Kembali ke atas halaman
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Menangani perubahan hash
function handleHashChange() {
    const hash = window.location.hash.substring(1); // Menghapus #
    const validPages = ['home', 'product', 'contact'];
    
    if (validPages.includes(hash)) {
        showPage(hash);
    } else {
        // Kembali ke home jika hash invalid
        showPage('home');
        window.location.hash = '#home';
    }
}

// Inisialisasi navigasi hash
function initHashNavigation() {
    // Menangani hash awal
    handleHashChange();
    
    // Selalu mengecek perubahan hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Selalu mengecek perubahan tombol
    window.addEventListener('popstate', handleHashChange);
    
    // Mencegah perilaku default anchor and menangani klik
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const hash = link.getAttribute('href').substring(1);
            if (hash) {
                // Use history API for better UX
                history.pushState(null, null, '#' + hash);
                handleHashChange();
            }
        }
    });
    
    // Menangani akses URL langsung di address bar
    if (!window.location.hash) {
        window.location.hash = '#home';
    }
}

function loadPageContent(pageName) {
    switch(pageName) {
        case 'product':
            renderProducts();
            break;
        case 'home':
            renderProducts(); // For featured products
            break;
        case 'contact':
            // Contact page doesn't need special loading
            break;
    }
}

// Update navigasi aktif tergantung hash saat ini
function updateActiveNavigation(activePage) {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + activePage) {
            link.classList.add('active');
        }
    });
}

// Data produk dengan berbagai opsi
const products = [
    {
        id: 1,
        name: "Kaos Premium Cotton",
        category: "fashion",
        price: 99000,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        description: "Kaos premium dengan bahan cotton 100% yang nyaman dipakai sehari-hari.",
        options: {
            size: ["S", "M", "L", "XL", "XXL"],
            color: ["Putih", "Hitam", "Navy", "Merah", "Biru"]
        }
    },
    {
        id: 2,
        name: "Sepatu Warrior Sparta HC Ukuran 42 Belum Pernah Dipakai",
        category: "fashion",
        price: 109000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvSidY80kte-9u34jc2cfKPAhqunJy1UlOA&s",
        description: "Sepatu warrior sparta merek Kodachi ukuran 42, warna hitam putih, kondisi baru belum pernah dipakai karena salah ukuran.",
        options: {
        }
    },
    {
        id: 3,
        name: "Smartphone Android Terbaru",
        category: "electronics",
        price: 2500000,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
        description: "Smartphone Android dengan kamera 64MP, RAM 8GB, dan storage 128GB.",
        options: {
            storage: ["64GB", "128GB", "256GB"],
            color: ["Hitam", "Putih", "Gold", "Silver"]
        }
    },
    {
        id: 4,
        name: "Laptop Gaming High-End",
        category: "electronics",
        price: 15000000,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
        description: "Laptop gaming dengan processor Intel i7, GPU RTX 3070, dan RAM 16GB.",
        options: {
            ram: ["8GB", "16GB", "32GB"],
            storage: ["512GB SSD", "1TB SSD", "2TB SSD"],
            color: ["Hitam", "Silver"]
        }
    },
    {
        id: 5,
        name: "Ayam Geprek Chicken Smackdown",
        category: "foods",
        price: 15000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvWqFcPPBVazkEAeyFeayaCchttgOyPGRmkg&s",
        description: "Ayam geprek pedas buatan bu lik dengan sambal spesial.",
        options: {
            beverage: ["Tanpa minum", "Air", "Teh Manis", "Jus Jeruk"],
            spiciness: ["Level 1", "Level 2", "Level 3"]
        }
    },
    {
        id: 6,
        name: "Raket Badminton Profesional",
        category: "sports",
        price: 750000,
        image: "https://badmintonclick.com.au/cdn/shop/files/ax77-pl_1024x.png?v=1683876640",
        description: "Raket badminton profesional Yonex Astrox 77 PLAY.",
        options: {
            weight: ["3U (85-89g)", "4U (80-84g)", "5U (75-79g)"],
            tension: ["22-24 lbs", "24-26 lbs", "26-28 lbs"],
            grip: ["G4", "G5", "G6"]
        }
    },
    {
        id: 7,
        name: "Jual Temen Gagu",
        category: "others",
        price: 999999999,
        image: "https://pbs.twimg.com/media/G3QxsfQbUAACMCf?format=jpg&name=small",
        description: "Jual temen yang makan, tidur, dan mandi numpang sama orang lain.",
        options: {
            packaging: ["Tidak ada", "Kardus", "Bubble wrap"]
        }
    },
    {
        id: 8,
        name: "Sony WH-CH5200 Headphones Bekas",
        category: "electronics",
        price: 457000,
        image: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch520_Primary_image?$categorypdpnav$&fmt=png-alpha",
        description: "Headphone wireless dengan noise cancellation dan baterai tahan 30 jam. Bekas pakai 3 bulan, kondisi 95%.",
        options: {
        }
    }
];

// Inisialisasi variable untuk web
let cart = [];
let currentProduct = null;
let selectedOptions = {};

// Memuat keranjang dari localStorage
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('tokonesaCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Menyimpan keranjang ke localStorage
function saveCartToStorage() {
    localStorage.setItem('tokonesaCart', JSON.stringify(cart));
    showCartSavedNotification();
}

// Notifikisai keranjang berhasil disimpan
function showCartSavedNotification() {
    // Menghapus notifikasi jika ada
    const existingNotification = document.querySelector('.cart-saved-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Membuat notifikasi baru
    const notification = document.createElement('div');
    notification.className = 'cart-saved-notification';
    notification.innerHTML = '<i class="fas fa-check-circle"></i> Keranjang tersimpan!';
    
    document.body.appendChild(notification);
    
    // Menampilkan notifikasi
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Menyembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Membersihkan keranjang
function clearCart() {
    cart = [];
    localStorage.removeItem('tokonesaCart');
    updateCartCount();
    if (document.getElementById('cart-items')) {
        renderCartItems();
    }
}

// Menambah tombol clear untuk modal keranjang
function addClearCartButton() {
    const cartModal = document.getElementById('cartModal');
    if (cartModal && !cartModal.querySelector('#clear-cart-btn')) {
        const modalFooter = cartModal.querySelector('.modal-footer');
        if (modalFooter) {
            const clearBtn = document.createElement('button');
            clearBtn.type = 'button';
            clearBtn.className = 'btn btn-outline-danger me-auto';
            clearBtn.id = 'clear-cart-btn';
            clearBtn.innerHTML = '<i class="fas fa-trash"></i> Kosongkan Keranjang';
            clearBtn.onclick = function() {
                if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
                    clearCart();
                }
            };
            modalFooter.insertBefore(clearBtn, modalFooter.firstChild);
        }
    }
}

// Format harga ke Rupiah
function formatPrice(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
}

// Render produk ke halaman
function renderProducts(productsToRender = products) {
    const container = document.getElementById('products-container');
    const featuredContainer = document.getElementById('featured-products');
    
    if (container) {
        container.innerHTML = '';
    }
    
    if (featuredContainer) {
        featuredContainer.innerHTML = '';
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-3 col-sm-6 mb-4';
        productCard.innerHTML = `
            <div class="card product-card h-100">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body d-flex flex-column">
                    <div class="category-badge mb-2">${product.category}</div>
                    <h6 class="card-title product-title">${product.name}</h6>
                    <p class="card-text product-price">${formatPrice(product.price)}</p>
                    <button class="btn btn-primary mt-auto" onclick="openProductModal(${product.id})">
                        <i class="fas fa-eye"></i> Lihat Detail
                    </button>
                </div>
            </div>
        `;
        
        if (container) {
            container.appendChild(productCard);
        }
        
        // Untuk halaman home, hanya menampilkan 4 produk unggulan (saat ini hanya untuk 4 produk dengan id terkecil)
        if (featuredContainer && productsToRender.indexOf(product) < 4) {
            const featuredCard = productCard.cloneNode(true);
            featuredContainer.appendChild(featuredCard);
        }
    });
}

// Membuka modal produk
function openProductModal(productId) {
    currentProduct = products.find(p => p.id === productId);
    if (!currentProduct) return;

    // Reset selected options
    selectedOptions = {};
    
    // Menampilkan data produk di modal
    document.getElementById('productModalImage').src = currentProduct.image;
    document.getElementById('productModalName').textContent = currentProduct.name;
    document.getElementById('productModalCategory').textContent = currentProduct.category;
    document.getElementById('productModalPrice').textContent = formatPrice(currentProduct.price);
    document.getElementById('productModalDescription').textContent = currentProduct.description;
    document.getElementById('quantity').value = 1;

    // Merender opsi produk
    renderProductOptions();

    // Menampilkan modal
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

// Merender opsi produk
function renderProductOptions() {
    const optionsContainer = document.getElementById('productOptions');
    optionsContainer.innerHTML = '';

    Object.keys(currentProduct.options).forEach(optionKey => {
        const optionGroup = document.createElement('div');
        optionGroup.className = 'option-group';
        
        const label = document.createElement('label');
        label.className = 'option-label';
        label.textContent = `${optionKey.charAt(0).toUpperCase() + optionKey.slice(1)}:`;
        
        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'option-buttons';
        
        currentProduct.options[optionKey].forEach(optionValue => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'option-btn';
            button.textContent = optionValue;
            button.onclick = () => selectOption(optionKey, optionValue, button);
            buttonsContainer.appendChild(button);
        });
        
        optionGroup.appendChild(label);
        optionGroup.appendChild(buttonsContainer);
        optionsContainer.appendChild(optionGroup);
    });
}

// Memilih opsi produk
function selectOption(optionKey, optionValue, buttonElement) {
    // Hapus selected dari semua button dalam grup yang sama
    const buttonsContainer = buttonElement.parentElement;
    buttonsContainer.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Tambahkan selected ke button yang diklik
    buttonElement.classList.add('selected');
    
    // Simpan opsi yang dipilih
    selectedOptions[optionKey] = optionValue;
}

// Kontrol kuantitas
function setupQuantityControls() {
    const qtyInput = document.getElementById('quantity');
    const qtyMinus = document.getElementById('qty-minus');
    const qtyPlus = document.getElementById('qty-plus');

    qtyMinus.onclick = () => {
        const currentValue = parseInt(qtyInput.value);
        if (currentValue > 1) {
            qtyInput.value = currentValue - 1;
        }
    };

    qtyPlus.onclick = () => {
        const currentValue = parseInt(qtyInput.value);
        qtyInput.value = currentValue + 1;
    };
}

// Menambah ke keranjang
function addToCart() {
    if (!currentProduct) return;

    // Melakukan validasi opsi yang dipilih
    const requiredOptions = Object.keys(currentProduct.options);
    const selectedKeys = Object.keys(selectedOptions);
    
    if (requiredOptions.length !== selectedKeys.length) {
        alert('Silakan pilih semua opsi yang tersedia!');
        return;
    }

    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Mengecek apakah produk dengan opsi yang sama sudah ada di keranjang
    const existingItemIndex = cart.findIndex(item => 
        item.productId === currentProduct.id && 
        JSON.stringify(item.options) === JSON.stringify(selectedOptions)
    );

    if (existingItemIndex !== -1) {
        // Update kuantitas jika sudah ada
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Tambah item baru ke keranjang
        cart.push({
            productId: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: currentProduct.image,
            options: { ...selectedOptions },
            quantity: quantity
        });
    }

    // Update cart count
    updateCartCount();
    
    // Menyimpan keranjang ke localStorage
    saveCartToStorage();
    
    // Menampilkan animasi jika berhasil ditambahkan
    const addBtn = document.getElementById('addToCartBtn');
    addBtn.innerHTML = '<i class="fas fa-check"></i> Berhasil Ditambahkan!';
    addBtn.classList.add('success-animation');
    
    setTimeout(() => {
        addBtn.innerHTML = '<i class="fas fa-cart-plus"></i> Tambah ke Keranjang';
        addBtn.classList.remove('success-animation');
    }, 2000);

    // Menutup modal jika sudah ditambahkan
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Buka modal keranjang
function openCartModal() {
    renderCartItems();
    addClearCartButton();
    const modal = new bootstrap.Modal(document.getElementById('cartModal'));
    modal.show();
}

// Render item keranjang
function renderCartItems() {
    const container = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h5>Keranjang Kosong</h5>
                <p>Belum ada produk di keranjang Anda</p>
            </div>
        `;
        document.getElementById('cart-total').textContent = 'Rp 0';
        return;
    }

    container.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item d-flex align-items-center';
        
        const optionsText = Object.entries(item.options)
            .map(([key, value]) => `${key}: ${value}`)
            .join(', ');

        cartItem.innerHTML = `
            <img src="${item.image}" class="cart-item-image me-3" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-options">${optionsText}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="quantity-controls me-3">
                <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
                <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateCartQuantity(${index}, 0, this.value)">
                <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
            </div>
            <div class="text-end">
                <div class="fw-bold text-primary">${formatPrice(item.price * item.quantity)}</div>
                <button class="remove-btn" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        container.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = formatPrice(total);
}

// Update kuantitas di keranjang
function updateCartQuantity(index, change, newValue = null) {
    if (newValue !== null) {
        cart[index].quantity = parseInt(newValue);
    } else {
        cart[index].quantity += change;
    }
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartCount();
    saveCartToStorage();
    renderCartItems();
}

// Hapus dari keranjang
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    saveCartToStorage();
    renderCartItems();
}

// Pencarian produk
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const categoryFilter = document.getElementById('category-filter').value;
    
    let filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                           product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        
        return matchesSearch && matchesCategory;
    });
    
    renderProducts(filteredProducts);
}

// Filter berdasarkan kategori
function filterByCategory() {
    searchProducts();
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Keranjang kosong!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Checkout berhasil!\nTotal: ${formatPrice(total)}\n\nTerima kasih telah berbelanja!`);
    
    // Mengosongkan keranjang
    cart = [];
    updateCartCount();
    saveCartToStorage();
    
    // Menutup modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    modal.hide();
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Memuat keranjang dari localStorage dulu
    loadCartFromStorage();
    
    // Inisialisasi navigasi hash
    initHashNavigation();
    
    // Setup kontrol kuantitas
    setupQuantityControls();
    
    // Event listeners untuk elemen yang ada
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const addToCartBtn = document.getElementById('addToCartBtn');
    const cartLink = document.getElementById('cart-link');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', searchProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterByCategory);
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }
    
    if (cartLink) {
        cartLink.addEventListener('click', openCartModal);
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }
});
