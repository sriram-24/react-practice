import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes'
import DishDetailComponent from './DishDetailComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            dishSelected: null,
        }
    }
    onDishselect(dish) {
        this.setState({ dishSelected: dish });

    }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishselect(dishId)}/>
                <DishDetailComponent dish={this.state.dishes.filter((dish)=>dish.id===this.state.dishSelected)[0]}/>
            </div>
        );
    }
}
export default Main;
