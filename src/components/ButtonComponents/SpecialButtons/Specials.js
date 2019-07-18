import React, {useState} from "react";
import SpecialButton from './SpecialButton'
//import any components needed
import { specials } from '../../../data'
//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  console.log(specials)
  const [specialButton, setSpecialButton ] = useState(specials)
  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specials.map(item => 
         <SpecialButton item={item} clearScreen={props.clearScreen}/>
       )}
    </div>
  );
};

export default Specials