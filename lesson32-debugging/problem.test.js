const ShoppingCart = require("./problem");

describe("ShoppingCart", () => {
  let cart;

  beforeEach(() => {
    cart = new ShoppingCart();
  });

  it("should start with an empty cart", () => {
    expect(cart.getItems()).toEqual([]);
  });

  it("should add items to the cart", () => {
    cart.addItem("Apple", 2);
    cart.addItem("Banana", 3);
    expect(cart.getItems()).toEqual([
      { name: "Apple", quantity: 2 },
      { name: "Banana", quantity: 3 },
    ]);
  });

  it("should remove items from the cart", () => {
    cart.addItem("Apple", 2);
    cart.addItem("Banana", 3);
    cart.removeItem("Apple");
    expect(cart.getItems()).toEqual([{ name: "Banana", quantity: 3 }]);
  });

  it("should update the quantity of an item in the cart", () => {
    cart.addItem("Apple", 2);
    cart.updateQuantity("Apple", 5);
    expect(cart.getItems()).toEqual([{ name: "Apple", quantity: 5 }]);
  });

  it("should calculate the total price of the items in the cart", () => {
    cart.addItem("Apple", 2);
    cart.addItem("Banana", 3);
    expect(cart.getTotalPrice()).toBe(5);
  });
});
