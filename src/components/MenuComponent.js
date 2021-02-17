import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
import Dish from './DishDetailsComponent';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }
    onDishSelect(dish) {
        this.setState({
            selectedDish: dish
        });
    }
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={()=> this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle tag="h5">{dish.name}</CardTitle>
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
            <Dish dish={this.state.selectedDish}></Dish>
          </div>
        );
    }
}

export default Menu;