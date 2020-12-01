import React, { Component, useState } from "react";
import Cities from "./cityComponent";
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
  let setCity = null;
  const updateIndexOfCity = (setIndexOfCity) => {
    setCity = setIndexOfCity;
  };

  const handelClick = (index) => {
    setCity(index);
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
            onClick={() => handelClick(index)}
          >
            {state.name}
          </div>
        ))}
      </div>
      <Cities states={states} updateIndexOfCity={updateIndexOfCity} />
    </div>
  );
}

export default App;
