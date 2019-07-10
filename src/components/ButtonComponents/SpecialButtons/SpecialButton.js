import React from "react";

const SpecialButton = (props) => {
  console.log("special", props.item)
  return (
    <div className="specials1">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     <button onClick={() => props.clearScreen(props.item)}>{props.item}</button>
    </div>
  );
};

export default SpecialButton