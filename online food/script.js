// Get elements
const foodSelect = document.getElementById("foodSelect");
const totalPrice = document.getElementById("totalPrice");
const form = document.getElementById("orderForm");

// Your WhatsApp number (no + sign)
const whatsappNumber = "254708458665";

// Function when clicking "Order Now"
function selectFood(foodName, price) {
    foodSelect.value = foodName;
    totalPrice.innerText = "Total: Ksh " + price;
}

// Update price when dropdown changes
foodSelect.addEventListener("change", function() {
    const selectedOption = foodSelect.options[foodSelect.selectedIndex];
    const price = selectedOption.getAttribute("data-price");
    totalPrice.innerText = "Total: Ksh " + price;
});

// Handle form submission
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const food = foodSelect.value;
    const location = document.getElementById("location").value;
    const price = foodSelect.options[foodSelect.selectedIndex].getAttribute("data-price");

    // Create WhatsApp message
    const message =
        "Hello, I would like to order:%0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Food: " + food + "%0A" +
        "Price: Ksh " + price + "%0A" +
        "Delivery Location: " + location;

    // Create WhatsApp URL
    const whatsappURL = "https://wa.me/" + whatsappNumber + "?text=" + message;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
});
// Dropdown click functionality
const dropdownBtn = document.getElementById("dropdownBtn");
const dropdownContent = document.getElementById("dropdownContent");
const navLinks = document.querySelector(".nav-links");

dropdownBtn.addEventListener("click", function(event) {
    event.stopPropagation(); // Prevent closing immediately
    navLinks.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", function() {
    navLinks.classList.remove("show");
});