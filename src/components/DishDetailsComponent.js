import React from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
    if(dish) { 
        console.log(dish)
        return(
            <div>
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

function RenderComments({comments}) {
    if(comments) { 
        const commentslayout = comments.map((comment) => {
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
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentslayout}
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
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );   
}

export default DishDetails;