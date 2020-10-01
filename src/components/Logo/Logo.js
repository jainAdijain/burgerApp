import React from "react";
import classes from './Logo.module.css';
import burgerImage from '../../assests/images/burger-logo.png';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={burgerImage} alt="burger image"/>
  </div>
);

export default logo;
