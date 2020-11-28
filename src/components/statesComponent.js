import React from "react";
import Cities from "./citiesComponent";

export default function States({ inputState, setInputState }) {
  const handelStateClick = (index) => {
    let inputStateCopy = { ...inputState };
    inputStateCopy.cities = inputStateCopy.states[index].cities;
    inputStateCopy.isStateClicked = true;

    setInputState(inputStateCopy);
  };

  return (
    <>
      {inputState.states.map((state, index) => (
        <div onClick={() => handelStateClick(index)}>{state.name}</div>
      ))}

      {inputState.isStateClicked && (
        <Cities inputState={inputState} setInputState={setInputState} />
      )}
    </>
  );
}
