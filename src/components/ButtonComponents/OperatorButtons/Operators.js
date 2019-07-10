import React, { useState } from "react";
import OperatorButton from './OperatorButton'
//import any components needed
import {operators} from '../../../data'
//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [calcOperators, setOperators] = useState(operators)
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {calcOperators.map(item => <OperatorButton item={item} addInput={props.addInput} />)}
    </div>
  );
};

export default Operators