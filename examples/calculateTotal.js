let productCount = 10;
let quantity = 15;
let totalPrice = 0;
let firstName = "Alex";
let lastName = "Egidio";
let age = 31;

function calculateTotalCost(firstName, lastName) {
  totalPrice = productCount * quantity * 5;
  console.log("Total Price:", totalPrice);

  if (age === 31) {
    console.log("First Name:", firstName);
  }

  age = 33;

  if (age === 33) {
    lastName = "Egidio";
    console.log("Last Name:", lastName);
  }
}

calculateTotalCost(firstName, lastName);
