// Initialize cart and total
let cart = {};
let totalPrice = 0;

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    totalPrice = 0;

    Object.keys(cart).forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item} x${cart[item].quantity} - ${cart[item].price * cart[item].quantity} VND`;

        // Create remove button for each cart item
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-from-cart');
        removeBtn.setAttribute('data-item', item);

        removeBtn.addEventListener('click', function() {
            removeItemFromCart(item); // Remove the item
        });

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        totalPrice += cart[item].price * cart[item].quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toLocaleString() + " VND";
}

// Function to remove item from cart
function removeItemFromCart(item) {
    delete cart[item]; // Remove item from cart object
    updateCart(); // Update the cart display
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item');
        const itemPrice = parseInt(this.getAttribute('data-price'));

        if (cart[itemName]) {
            cart[itemName].quantity += 1;
        } else {
            cart[itemName] = { price: itemPrice, quantity: 1 };
        }

        updateCart();
    });
});

// Address form submission
document.getElementById('address-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    alert(`Order submitted!\nName: ${name}\nAddress: ${address}`);
});
