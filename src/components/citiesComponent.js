import React from "react";
import Towns from "./townsComponent";

export default function Cities({ inputState, setInputState }) {
  const handelCityClick = (index) => {
    let inputStateCopy = { ...inputState };
    inputStateCopy.towns = inputStateCopy.cities[index].towns;
    inputStateCopy.isCityClicked = true;

    setInputState(inputStateCopy);
  };

  return (
    <>
      {inputState.cities.map((city, index) => (
        <div onClick={() => handelCityClick(index)}>{city.name}</div>
      ))}

      {inputState.isCityClicked && <Towns inputState={inputState} />}
    </>
  );
}
