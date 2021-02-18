import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

function RenderMenuItem({onClick, dish}){
    return (
        <Card onClick={()=> onClick(dish.id)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle tag="h5">{dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    );
}

function Menu(props) {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem onClick={props.onClick} dish={dish}/>
            </div>
        );
    });

    return (
        <div className="container">
        <div className="row">
            {menu}
        </div>
        </div>
    );
}

export default Menu;