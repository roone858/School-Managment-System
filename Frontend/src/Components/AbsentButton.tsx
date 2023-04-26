import React, { useState } from "react";

const AbsentButton = ( props:any) => {
     const [buttonText, setButtonText] = useState('Absent');
  return (
    <button
    onClick={() => {
          setButtonText("Selected")
   
          }}
      type="button"
      className={buttonText=="Absent"?"btn  btn-danger":"btn btn-secondary  disabled"}
      aria-label="Close"
    >
     {buttonText}
    </button>
  );
};

export default AbsentButton;
