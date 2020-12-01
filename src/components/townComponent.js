import React from "react";

export default function Towns({ cities, updateTownIndex }) {
  const [indexOfTown, setIndexOfTown] = React.useState(0);

  updateTownIndex(setIndexOfTown);

  return (
    <>
      <label for="towns">
        <b>Towns</b>
      </label>
      <div>
        {cities[indexOfTown].towns.map((town, index) => (
          <div id={`town${index + 1}`} key={town.name}>
            {town.name}
          </div>
        ))}
      </div>
    </>
  );
}
