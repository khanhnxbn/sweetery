// Initialize cart and total
let cart = {};
let totalPrice = 0;

// Function to update the cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Clear previous items
    totalPrice = 0;

    Object.keys(cart).forEach(itemName => {  // itemName is more descriptive
        const itemDetails = cart[itemName]; // store item properties in itemDetails
        const li = document.createElement('li');
        li.textContent = `${itemName} x${itemDetails.quantity} - ${itemDetails.price * itemDetails.quantity} VND`;

        // Create remove button for each cart item
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-from-cart');
        removeBtn.setAttribute('data-item', itemName);

        removeBtn.addEventListener('click', function() {
            removeItemFromCart(itemName); // Remove the item
        });

        li.appendChild(removeBtn);
        cartItems.appendChild(li);
        totalPrice += itemDetails.price * itemDetails.quantity;
    });

    document.getElementById('total-price').textContent = totalPrice.toLocaleString() + " VND";
}

// Function to remove item from cart
function removeItemFromCart(itemName) {
    delete cart[itemName]; // Remove item from cart object
    updateCart(); // Update the cart display
}

// Event listeners for Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-item'); // Use itemName to store the item's name
        const itemPrice = parseInt(this.getAttribute('data-price')); // Price for the item

        if (cart[itemName]) {
            cart[itemName].quantity += 1;  // Increase quantity of the existing item
        } else {
            cart[itemName] = { price: itemPrice, quantity: 1 }; // Add new item with quantity 1
        }

        updateCart(); // Update cart display
    });
});

// Address form submission
document.getElementById('address-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;

    alert(`Order submitted!\nName: ${name}\nAddress: ${address}`);
});
