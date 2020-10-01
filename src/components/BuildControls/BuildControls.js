import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Salad', type: 'salad' }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>Total Price : <strong>{props.price}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        deleted={() => props.ingredientDeleted(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}

    <button
    onClick={props.ordered}
    className={classes.OrderButton}
    disabled={!props.purchasable}>
      ORDER NOW</button>

  </div>
);

export default buildControls;
