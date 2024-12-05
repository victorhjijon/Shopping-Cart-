/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */

/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/

/* Images provided in /images folder. */

// Product data
const products = [
  {
    name: 'Carton of Cherries',
    price: 4,
    quantity: 0,
    productId: 1,
    image: './images/Cherries.jpg'
  },
  {
    name: 'Carton of Strawberries',
    price: 5,
    quantity: 0,
    productId: 2,
    image: './images/strawberryCarton.jpg'
  },
  {
    name: 'Bag of Oranges',
    price: 6,
    quantity: 0,
    productId: 3,
    image: './images/OrangeBag.jpg'
  }
];

// Cart and payment variables
/* Declare an empty array named cart to hold the items in the cart */
let cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/



// Helper function to get product by productId
function getProductById(productId, list) {
  return list.find(item => item.productId === productId);
}

// Add product to cart function
function addProductToCart(productId) {
  let product = getProductById(productId, products);
 
  product.quantity += 1;

  if(!cart.includes(product)){
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

 
// Increases quantity of item in cart
function increaseQuantity(productId) {
  let product = getProductById(productId, cart); 
  
  product.quantity++;
  }

  /* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

// Decreases quantity of item in cart
function decreaseQuantity(productId) {
  const product = getProductById(productId, cart);

  product.quantity--;

  if (product.quantity ===0) {
      removeProductFromCart(productId);
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/


// Removes product from cart
function removeProductFromCart(productId) {
  const index = cart.findIndex((product) => product.productId === productId);
  if (index !== -1) {
    cart[index].quantity = 0;
    cart.splice(index, 1);
  }
}


/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/


// Calculates total cost of items in the cart
function cartTotal() {

  let total = 0;

  for (let i = 0; i < cart.length; i++){
    total += cart [i].quantity * cart[i].price
  };
  
  return total;
}


/* Create a function called emptyCart that empties the products from the cart */

// Empties the cart
function emptyCart() {

  cart.splice(0, cart.length);
}

/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/


// Handles payment - global variable
let totalPaid = 0;

function pay(amount){

  //the total updates as items are added to the cart
  totalPaid += amount;
  const remaining = totalPaid - cartTotal();

  //asses if there is an excessive balance 
  if (remaining >= 0){
    totalPaid = 0;
    emptyCart();
  }
  return remaining;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

// script.js

