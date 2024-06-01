document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Linen shirt', brand: 'Mango', price: 400, rating: 5, category: 'Shirts', image: 'womenshirts/womenshirt1.jpg', },
        { id: 2, name: 'Muslin shirt', brand: 'H&M', price: 1000, rating: 4, category: 'Shirts', image: 'womenshirts/womenshirt2.jpg' },
        { id: 3, name: 'Resort shirt', brand: 'Mango', price: 1200, rating: 3, category: 'Shirts', image: 'womenshirts/womenshirt3.jpg' },
        { id: 4, name: 'Black shirt', brand: 'H&M', price: 2200, rating: 5, category: 'Shirts', image: 'womenshirts/womenshirt4.jpg' },

        { id: 5, name: 'Skinny  Jeans', brand: 'Mango', price: 500, rating: 5, category: 'Jeans', image: 'womenjeans/womenjean1.jpg' },
        { id: 6, name: 'Flared  Jeans', brand: 'H&M', price: 1200, rating: 5, category: 'Jeans', image: 'womenjeans/womenjean2.jpg' },
        { id: 7, name: 'Bootcut Jeans', brand: 'H&M', price: 2300, rating: 3, category: 'Jeans', image: 'womenjeans/womenjean3.jpg'},
        { id: 8, name: 'Ankle Jeans', brand: 'Mango', price: 1999, rating: 4, category: 'Jeans', image: 'womenjeans/womenjean4.jpg' },


        { id: 9, name: 'One shoulder', brand: 'Mango', price: 500, rating: 5, category: 'Jeans', image: 'dresses/dress1.jpg' },
        { id: 10, name: 'Tiered skirt', brand: 'Mango', price: 500, rating: 5, category: 'Jeans', image: 'dresses/dress2.jpg' },
        { id: 11, name: 'Tie belt', brand: 'H&M', price: 500, rating: 5, category: 'Jeans', image: 'dresses/dress3.jpg' },
        { id: 12, name: 'Crepe Dress', brand: 'H&M', price: 500, rating: 5, category: 'Jeans', image: 'dresses/dress4.jpg' },




    ];

    const productContainer = document.getElementById('product-list');

    function displayProducts(products) {
        productContainer.innerHTML = '';
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';
            // productDiv.innerHTML = `<h2>${product.name}</h2><p>Brand: ${product.brand}</p><p>Price: $${product.price}</p><p>Rating: ${product.rating} Stars</p>`;
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h2>${product.name}</h2>
                <p>Brand: ${product.brand}</p>
                <p>Price: $${product.price}</p>
                <p>Rating: ${product.rating} Stars</p>`;
                
                
            productContainer.appendChild(productDiv);
        });
    }

    displayProducts(products);

    window.filterProducts = function() {
        const selectedBrand = document.getElementById('brand').value;
        const selectedPriceRange = document.getElementById('price-range').value;
        const selectedRatings = document.getElementById('ratings').value;
        const searchQuery = document.getElementById('search-input').value.toLowerCase();


        let filteredProducts = products;

        if (selectedBrand !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.brand === selectedBrand);
        }

        if (selectedPriceRange !== 'all') {
            const [minPrice, maxPrice] = selectedPriceRange.split('-').map(Number);
            filteredProducts = filteredProducts.filter(product => product.price >= minPrice && product.price <= maxPrice);
        }

        if (selectedRatings !== 'all') {
            const minRating = parseInt(selectedRatings.split('-')[0]);
            filteredProducts = filteredProducts.filter(product => product.rating >= minRating);
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchQuery));
        }
        

        

        displayProducts(filteredProducts);
    }
});
