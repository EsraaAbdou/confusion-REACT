import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardBody, CardImg, CardImgOverlay } from 'reactstrap';

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
    renderDish(){
        if(this.state.selectedDish) { 
            return(
                <Card>
                    <CardImg top width="100%" src={this.state.selectedDish.image} alt={this.state.selectedDish.name} />
                    <CardBody>
                        <CardTitle tag="h5">{this.state.selectedDish.name}</CardTitle>
                        <CardText>{this.state.selectedDish.description}</CardText>
                    </CardBody>
                </Card> 
            );
        }
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
            <div className="row">
                {this.renderDish()}
            </div>
          </div>
        );
    }
}

export default Menu;