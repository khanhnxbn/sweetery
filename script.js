// Initialize cart and total
let cart = [];
let totalPrice = 0;

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = parseFloat(this.getAttribute('data-price'));
        
        // Add item to cart and update total price
        cart.push({ name: itemName, price: itemPrice });
        totalPrice += itemPrice;
        updateCart();
    });
});

// Checkout button functionality
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Proceeding to checkout...');
});

// Address form submission
document.getElementById('address-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zipcode = document.getElementById('zipcode').value;

    alert(`Order submitted!\nName: ${name}\nAddress: ${address}\nCity: ${city}\nZipcode: ${zipcode}`);
});
