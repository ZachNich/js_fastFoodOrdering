const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    orders: [],
    getAllOrders: function () {
        return this.orders;
    },
}

// defining order objects
const chickenComboMeal = {
    sandwichType: 'chicken',
    fries: true,
    drinkSize: 'medium',
}

                    
const burgerComboMeal = {
    sandwichType: 'burger',
    fries: true,
    drinkSize: 'medium',
}

const grilledCheese = {
    sandwichType: 'grilled cheese',
    fries: false,
    drinkSize: '',
}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(burgerComboMeal);
restaurant.placeOrder(grilledCheese);

// Invoke the function to return the list of all orders
restaurant.getAllOrders();

// Output all orders to the console using console.table()
for (i = 0; i < restaurant.orders.length; i++) {
    console.table(restaurant.orders[i]);
};