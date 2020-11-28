import React from "react";

export default function Towns({ inputState}) {
  return (
    <>
      {inputState.towns.map((town) => (
        <div>{town.name}</div>
      ))}
    </>
  );
}
