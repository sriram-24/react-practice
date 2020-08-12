import React, { Component } from 'react'


export class DishDetailComponent extends Component {
    constructor(props){
        super(props)
        this.state={
           
        }
    };
    rendercomments(dish){
        if(dish.comments!=null){
            return (
                <div>
                    <h4>Comments</h4>
                    {
                        dish.comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <p>{comment.comment}</p>
                                    <p>--{comment.author},{comment.date}</p>
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
        var dish=this.props.dishdetails
        return (
            <div>
                {this.rendercomments(dish)}
            </div>
        )
    }
}

export default DishDetailComponent;

