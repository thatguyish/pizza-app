import { useEffect,useState } from "react";
import { getAllOrders } from "../services/orderService";
import { deletePizzaOrder } from "../services/orderService";
import { Link, useNavigate } from "react-router-dom";


const Orders = () => {

    let navigate = useNavigate();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getAllOrders().then(res => {
            setOrders(res);
        });

    },[]);

    const deleteOrder = (id) =>  {
        deletePizzaOrder(id);
        window.location.reload();
    }
    const updateOrder = (order) => {
        navigate(`/orders/${order.id}`, { state: { order:order } });
    }

    return (
        <div>
            <h1>Orders</h1>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Crust</th>
                            <th>Toppings</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders.map(order => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.crust}</td>
                                    <td>
                                        {
                                            order.toppings.map(
                                                (topping, index) => {
                                                    let toppingList = "";
                                                    toppingList += topping.name;
                                                    if (index < order.toppings.length - 1) {
                                                        toppingList += ", ";
                                                    }
                                                    return toppingList;
                                                }
                                            )
                                        }
                                    </td>
                                    <td>
                                        <button class="btn btn-warning" onClick={() => updateOrder(order)}>Update</button>

                                        {console.log(order)}
                                        <button class="btn btn-danger" onClick={() => deleteOrder(order.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            <Link class="btn btn-primary" to="add">Add Order</Link>
        </div>
    )
}

export default Orders;