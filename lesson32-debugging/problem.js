class ShoppingCart {
  constructor() {
    this.items = []; // Initialize an empty cart
  }

  addItem(item) {
    if (item && item.name && item.price >= 0 && item.quantity > 0) {
      this.items.push(item); // Add valid items to the cart
    } else {
      console.error("Invalid item details provided.");
    }
  }

  removeItem(itemName) {
    const index = this.items.findIndex((i) => i.name === itemName);
    if (index !== -1) {
      this.items.splice(index, 1); // Remove item if found
    } else {
      console.log(`Attempted to remove ${itemName}: Item not found.`);
    }
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    // Calculate the total price of the items in the cart
  }

  checkout(paymentAmount) {
    const total = this.calculateTotal();
    if (paymentAmount < total) {
      console.log("Insufficient amount provided.");
      return false; // Checkout fails if the payment is insufficient
    }

    this.items = []; // Clear cart after successful checkout
    console.log("Checkout successful!");
    return true; // Checkout succeeds
  }

  printReceipt() {
    if (this.items.length === 0) {
      console.log("No items to show. Cart is empty."); // Handle empty cart
    } else {
      this.items.forEach((item) => {
        console.log(
          `${item.quantity}x ${item.name} - $${item.price.toFixed(2)}`
        );
      });
    }
    console.log(`Total: $${this.calculateTotal().toFixed(2)}`);
    // Print each item's details and the total cost
  }
}

// Usage example
const cart = new ShoppingCart();

module.exports = ShoppingCart;
