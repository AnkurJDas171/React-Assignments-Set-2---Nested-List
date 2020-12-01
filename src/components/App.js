import React, { Component, useState } from "react";
import States from "./statesComponent";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  // const [inputState, setInputState] = React.useState({
  //   states: [...states],
  //   cities: [],
  //   towns: [],
  //   isStateClicked: false,
  //   isCityClicked: false
  // });

  // const handelClick = (index, key, parent, clicked) => {
  //   let inputStateCopy = { ...inputState };
  //   inputStateCopy[key] = inputStateCopy[parent][index][key];
  //   inputStateCopy[clicked] = true;

  //   setInputState(inputStateCopy);
  // };

  const [index, setIndex] = React.useState({
    indexForCity: 0,
    indexForTown: 0
  });

  const handelClick = (elementIndex, value) => {
    let indexCopy = { ...index };
    if (value === "cities") {
      indexCopy.indexForCity = elementIndex;
      //indexCopy.indexForTown = 0;
    } else if(value === "towns"){
      indexCopy.indexForTown = elementIndex;
    }

    setIndex(indexCopy);
  };


  return (
    <div id="main">
      <label for="states">
        <b>States</b>
      </label>
      <div>
        {states.map((state, index) => (
          <div
            id={`state${index + 1}`}
            key={state.name}
            onClick={() => handelClick(index, "cities")}
          >
            {state.name}
          </div>
        ))}
      </div>

      <label for="cities">
        <b>Cities</b>
      </label>
      <div>
        {states[index.indexForCity].cities.map((city, index) => (
          <div
            id={`city${index + 1}`}
            key={city.name}
            onClick={() => handelClick(index, "towns")}
            // onClick={()=>handelTown(index)}
          >
            {city.name}
          </div>
        ))}
      </div>

      <label for="towns">
        <b>Towns</b>
      </label>
      <div>
        {states[index.indexForCity].cities[index.indexForTown].towns.map(
          (town, index) => (
            <div id={`town${index + 1}`} key={town.name}>
              {town.name}
            </div>
          )
        )}
      </div>
      {/* <States inputState={inputState} setInputState={setInputState}/> */}
      {/* <div>
        {inputState.states.map((state, index) => (
          <div
            id={`state${index + 1}`}
            key={state.name}
            onClick={() =>
              handelClick(index, "cities", "states", "isStateClicked")
            }
          >
            {state.name}
          </div>
        ))}
      </div>

      {inputState.isStateClicked && (
        <>
          <label for="cities">
            <b>Cities</b>
          </label>
          <div>
            {inputState.cities.map((city, index) => (
              <div
                id={`city${index + 1}`}
                key={city.name}
                onClick={() =>
                  handelClick(index, "towns", "cities", "isCityClicked")
                }
              >
                {city.name}
              </div>
            ))}
          </div>
        </>
      )}

      {inputState.isCityClicked && (
        <>
          <label for="towns">
            <b>Towns</b>
          </label>
          <div>
            {inputState.towns.map((town, index) => (
              <div id={`town${index + 1}`} key={town.name}>
                {town.name}
              </div>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
}

export default App;
