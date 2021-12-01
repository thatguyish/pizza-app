
let baseUrl = 'http://localhost:8080/orders';

export function getAllOrders(){
    return fetch(baseUrl,{method: 'GET'}).then(response => response.json())
}

export function addToOrders(order){
    return fetch(baseUrl,{method: 'POST',headers:{'Content-Type':'application/json'},body: JSON.stringify(order)}).then(response => response.json())
}

export function deletePizzaOrder(id){
    return fetch(baseUrl+`/${id}`,{method:'DELETE',headers:{'Content-Type':'application/json'}}).then(response => response.json())
}

export function updateOrder(id,order){
    return fetch(baseUrl+`/${id}`,{method: 'PUT',headers:{'Content-Type':'application/json'},body: JSON.stringify(order)}).then(response => response.json())
}

