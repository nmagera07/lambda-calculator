import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div className="operators1">
      <button>{props.button.char}</button>
      </div>
    </>
  );
};

export default OperatorButton