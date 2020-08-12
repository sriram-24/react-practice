import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';
import  { Header } from './HeaderComponent';
import Footer from './FooterComponent';

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
                <Header />
                <Menu dishes={this.state.dishes}
                    onClick={(dishID) => this.onDishSelect(dishID)} />
                <DishDetail
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                <Footer />
            </div>
        );
    }
}


export default Main;