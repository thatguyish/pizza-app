import {Component} from 'react';
import Order from '../models/Order';
import { addToOrders } from '../services/orderService';

class AddOrder extends Component {


    handleSubmit(event) {
        event.preventDefault();
        let crust = event.target.crust.value;
        let toppings = event.target.toppings.value;
        let toppingsArray = toppings.split(',');

        let order = new Order(crust, toppingsArray);

        addToOrders(order);
        window.location.replace("http://localhost:3000/orders")
    }




    render() {
        return (
            <div>
                <h1>Add Order</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="crust" placeholder="Thin crust" />
                    </label>
                    <label>
                        <input type="text" name="toppings" placeholder="Peporoni, Extra Cheese" />
                    </label>
                    <input type="submit" value="Add Order" />
                </form>
            </div>
        );
    }
}

export default AddOrder;