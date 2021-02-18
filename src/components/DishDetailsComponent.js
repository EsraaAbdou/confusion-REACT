import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

class Dish extends Component {
    formatDate(date){
        const dateStr=new Date(date).toDateString().split(' ').slice(1);
        return(dateStr[0] + " " + dateStr[1]+", " + dateStr[2]); 
        // return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)));
    }
    renderComments(commentsArr){
        if(commentsArr) { 
            const comments = commentsArr.map((comment) => {
                return (
                  <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author}, {this.formatDate(comment.date)}</p>
                  </li>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ul class="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );


        }else{
            return <div></div>;
        }
    }
    renderDish(){
        if(this.props.dish) { 
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle tag="h5">{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card> 
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }else{
            return <div></div>;
        }
    }
    render() {
        return (
            <div className="container">
                {this.renderDish()}
            </div>
        );
    }
}

export default Dish;