import React, {useState} from "react";

const Display = (props) => {
  const [number, setNumber] = useState(0)
  console.log(props)
  return <div className="calcDisplay">{/* Display any props data here */}
    <p>{props.firstNumber}</p>
  </div>;
};

export default Display