import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}


export default Main;