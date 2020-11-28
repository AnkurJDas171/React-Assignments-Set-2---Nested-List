import React from "react";

export default function Towns({ inputState}) {
  return (
    <>
      {inputState.towns.map((town) => (
        <div key={town.name}>{town.name}</div>
      ))}
    </>
  );
}
