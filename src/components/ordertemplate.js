import {Component} from 'react';
import {Outlet} from 'react-router-dom';

class OrderTemplate extends Component {

    render(){
        return(
            <Outlet />
        )
    }
}

export default OrderTemplate;