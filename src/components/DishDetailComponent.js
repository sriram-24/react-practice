import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';


export class DishDetailComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    };
    renderDish(dish) {
     
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (<div></div>);
        }
    }
    rendercomments(dish){
        if(dish!=null){
            return (
                <div>
                    <h4>Comments</h4>
                    {
                        dish.comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
        else{
            return(<div></div>)
        }       
    }
    render() {
        var dish=this.props.dish
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dish)}
                    
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.rendercomments(dish)}
                </div>
            </div>
        )
    }
}

export default DishDetailComponent;

