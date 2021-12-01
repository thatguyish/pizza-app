import { useLocation } from 'react-router-dom';
import { updateOrder } from '../services/orderService';

const EditOrder = () => {
    const order = useLocation().state.order;

    const handleSubmit = (e) => {
        e.preventDefault();
        order.toppings.map((topping, index) => {
            console.log(e.target[index + 1])
            if (e.target[index + 1].value !== "") {
                order.toppings[index].name = e.target[index + 1].value;
            }
            return updateOrder(order);
        })
    }
    return (
        <div>
            <h1>Edit Order</h1>
            <form onSubmit={(e) => { handleSubmit(e) }}>
                <label>
                    <input type="text" name="crust" placeholder={order.crust} />
                </label>
                {
                    order.toppings.map((topping, index) => {
                        return (
                            <label>
                                <input type="text" name={"topping_" + index} placeholder={topping.name} />
                            </label>

                        )
                    })
                }
                <input type="submit" value="Edit Order" />
            </form>
        </div>
    )
}


export default EditOrder;
