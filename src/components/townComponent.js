import React from "react";

export default function Towns({ cities, updateTownIndex }) {
  const [townState, setTownState] = React.useState({
    indexOfTown: 0,
    isClicked: false
  });

  updateTownIndex(setTownState, townState);

  return (
    <>
      {townState.isClicked && (
        <>
          <label for="towns">
            <b>Towns</b>
          </label>
          <div>
            {cities[townState.indexOfTown].towns.map((town, index) => (
              <div id={`town${index + 1}`} key={town.name}>
                {town.name}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}
