import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg } from 'reactstrap';

function RenderDish({dish}) {
    if(dish) { 
        console.log(dish)
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg top width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle tag="h5">{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card> 
            </div>
        );
    }else{
        return <div></div>;
    }
}

function RenderComments({dish}) {
    if(dish && dish.comments) { 
        const comments = dish.comments.map((comment) => {
            const dateStr=new Date(comment.date).toDateString().split(' ').slice(1);
            const commentDate = dateStr[0] + " " + dateStr[1]+", " + dateStr[2];
            // const commentDate =  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)));
            return (
              <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author}, {commentDate}</p>
              </li>
            );
        });
        return (
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments}
                </ul>
            </div>
        );
    }else{
        return <div></div>;
    }
}

function DishDetails(props) {
    return (
        <div className="container">
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments dish={props.dish}/>
            </div>
        </div>
    );   
}

export default DishDetails;