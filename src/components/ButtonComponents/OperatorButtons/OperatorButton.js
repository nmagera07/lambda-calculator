import React from "react";

const OperatorButton = (props) => {
  console.log("operator", props.item)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="operators1">
      {/* <button onClick={() => props.addInput(props.item.char)}>{props.item.char}</button> */}
      <button onClick={() => props.addOperator(props.item.value)}>{props.item.char}</button>
      </div>
    </>
  );
};

export default OperatorButton