// Enable or disable quantity input based on checkbox selection
document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const quantityInput = this.nextElementSibling.nextElementSibling;
        quantityInput.disabled = !this.checked;
        calculateTotalPrice();
    });
});

// Enable or disable quantity input based on checkbox selection
document.querySelectorAll('input[type="number"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        calculateTotalPrice();
    });
});

// Function to calculate total price
function calculateTotalPrice() {
    let totalPrice = 0;
    const products = document.querySelectorAll('input[type="checkbox"]:checked');
    products.forEach(product => {
        const quantityId = 'quantity' + product.id.charAt(0).toUpperCase() + product.id.slice(1);
        const quantity = document.getElementById(quantityId).value;
        totalPrice += parseInt(product.getAttribute('data-price')) * quantity;
    });
    document.getElementById('totalPrice').innerText = totalPrice;
}

// Function to handle form submission and save data
function submitForm() {
    const selectedProducts = [];
    const products = document.querySelectorAll('input[type="checkbox"]:checked');
    products.forEach(product => {
        const quantityId = 'quantity' + product.id.charAt(0).toUpperCase() + product.id.slice(1);
        const quantity = document.getElementById(quantityId).value;
        selectedProducts.push({
            product: product.value,
            quantity: quantity,
            price: product.getAttribute('data-price')
        });
    });

    const paymentType = document.getElementById('paymentType').value;
    const totalPrice = document.getElementById('totalPrice').innerText;
    const PaymentTypeInfo = document.getElementById('PaymentTypeInfo').innerText;

    const orderData = {
        products: selectedProducts,
        paymentType: paymentType,
        totalPrice: totalPrice,
        PaymentTypeInfo: PaymentTypeInfo
    };

    calculateTotalPrice();

    saveToGoogleDrive(orderData);
}

// Function to save data to Google Drive (Requires Google API integration)
function saveToGoogleDrive(data) {

    // Here you would use Google Drive API to authenticate and upload the data.
    // This is a placeholder function, as API integration requires OAuth authentication.
    console.log('Data to be saved:', data);

    // alert('Order has been saved and uploaded to Google Drive.');
}
