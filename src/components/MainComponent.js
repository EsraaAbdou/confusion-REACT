import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import Dish from './DishDetailsComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDishID: null
    }
  }
  onDishSelect(dishID) {
    this.setState({
        selectedDishID: dishID
    });
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.onDishSelect(dishID)}}/>
        <Dish dish={DISHES.find((dish)=> (dish.id === this.state.selectedDishID))}></Dish>
    </div>
    );
  }
}

export default Main;
