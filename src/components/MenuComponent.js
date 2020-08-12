import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DishDetailComponent from './DishDetailComponent';
export class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            dishSelected:null,
        };
    };
    onDishselect(dish){
        this.setState({dishSelected:dish});
       
    }
    renderDish(dish){
        if(dish!=null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">

                        <Card>
                            <CardImg top src={dish.image} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>

                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <DishDetailComponent dishdetails={this.state.dishSelected} />
                    </div>
                </div>
            );
        }
        else{
            return(<div></div>);
        }
    }
    render() {
        const menu=this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card key={dish.id} onClick={()=>{this.onDishselect(dish)}} tag="li">
                        <CardImg  src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                            
                    </Card>
                    
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish(this.state.dishSelected)}
            </div>
           
        );
    }
}

export default Menu;
