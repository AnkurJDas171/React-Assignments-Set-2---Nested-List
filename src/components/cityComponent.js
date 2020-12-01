import React from "react";
import Towns from "./townComponent";

export default function Cities({ states, updateIndexOfCity }) {
  const [indexOfCity, setIndexOfCity] = React.useState(0);

  updateIndexOfCity(setIndexOfCity);
  let setTown = null;

  const updateTownIndex=(setIndexOfTown) => {
    setTown = setIndexOfTown;
  };
   

  const handelClick = (index) => {
    setTown(index);
  };

  

  return (
    <>
      <label for="city">
        <b>City</b>
      </label>
      <div>
        {states[indexOfCity].cities.map((city, index) => (
          <div
            id={`city${index + 1}`}
            key={city.name}
            onClick={() => handelClick(index)}
          >
            {city.name}
          </div>
        ))}
      </div>
      <Towns
        cities={states[indexOfCity].cities}
        updateTownIndex={updateTownIndex}
      />
    </>
  );
}
