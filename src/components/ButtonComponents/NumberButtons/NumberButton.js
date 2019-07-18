import React from "react";

const NumberButton = (props) => {
  console.log("numbers", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="numbers1">
      <button onClick={() => props.addInput(props.number)}>{props.number}</button>
      
      </div>
    </>
  );
};

export default NumberButton
