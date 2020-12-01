import React from "react";
import Towns from "./townComponent";

export default function Cities({ states, updateIndexOfCity }) {
  const [cityStste, setCityStste] = React.useState({
    indexOfCity: 0,
    isClicked: false
  });

  updateIndexOfCity(setCityStste, cityStste);
  let setTown = null;

  const updateTownIndex = (setTownState,townState) => {
    setTown = [setTownState,townState];
  };

  const handelClick = (index) => {
    let townStsteCopy = {...setTown[1]};
    if(index !== townStsteCopy.indexOfTown){

      townStsteCopy.isClicked = true;
      townStsteCopy.indexOfTown = index;

    }else if(index === townStsteCopy.indexOfTown){
      townStsteCopy.isClicked = !townStsteCopy.isClicked;
    }

    setTown[0](townStsteCopy);
  };

  return (
    <>
      {cityStste.isClicked && (
        <>
          <label for="city">
            <b>City</b>
          </label>
          <div>
            {states[cityStste.indexOfCity].cities.map((city, index) => (
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
            cities={states[cityStste.indexOfCity].cities}
            updateTownIndex={updateTownIndex}
          />
        </>
      )}
    </>
  );
}
