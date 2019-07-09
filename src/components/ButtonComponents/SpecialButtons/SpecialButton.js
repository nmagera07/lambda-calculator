import React from "react";

const SpecialButton = (props) => {
  return (
    <div className="specials1">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
     <button>{props.button}</button>
    </div>
  );
};

export default SpecialButton