import React, { Component } from 'react';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import { DISHES } from '../shared/Dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import  { Header } from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        };
    }

    render() {
        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };
        const AboutLeaders=()=>{
            return(
                <About leaders={this.state.leaders} />
            );
        }

        const HomePage=()=>{
            return(
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }
        return (
            <div>
               <Header />
               <div>
                    <switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        <Route exact path="/Contactus" component={Contact} />
                        <Route exact path="/Aboutus" component={AboutLeaders}/>
                    </switch>
               </div>
               <Footer />
            </div>
        );
    }
}


export default Main;