import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {

  console.log('props.ingredients', props.ingredients);

  console.log('keys', Object.keys(props.ingredients));

  let transformendIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      })
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if(transformendIngredients.length == 0) {
      transformendIngredients = 'Please add your ingredients !';
    }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformendIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}


export default burger;
