import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import DishDetails from './DishDetailsComponent';
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
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.onDishSelect(dishID)}} />
        <DishDetails dish={DISHES.find((dish)=> (dish.id === this.state.selectedDishID))} />
        <Footer />
    </div>
    );
  }
}

export default Main;
