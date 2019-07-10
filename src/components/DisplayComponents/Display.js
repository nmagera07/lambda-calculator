import React, {useState} from "react";

const Display = (props) => {
  
  console.log(props)
  return <div className="calcDisplay">{/* Display any props data here */}
    <p>{props.firstNumber} {props.mathOperator} {props.secondNumber} {props.calculation} </p>
  </div>;
};

export default Display