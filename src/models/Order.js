class Order {
    constructor(crust, toppings) {
        
        this.crust = crust;
        this.toppings = this.createToppingsArray(toppings);
    }
    
    createToppingsArray(toppings) {
        let toppingsArray = [];
        for (let topping of toppings) {
            toppingsArray.push({"name":topping});
        }
        
        return toppingsArray;
    }

}

export default Order;