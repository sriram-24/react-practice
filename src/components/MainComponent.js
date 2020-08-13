import React, { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Menu from './MenuComponent';
import { DISHES } from '../shared/Dishes';
import  { Header } from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route } from 'react-router-dom';

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
        const HomePage=()=>{
            return(<Home/>);
        }
        return (
            <div>
               <Header />
               <div>
                    <switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    </switch>
               </div>
               <Footer />
            </div>
        );
    }
}


export default Main;