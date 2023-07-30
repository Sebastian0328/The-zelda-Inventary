import React, { useContext } from "react";
import { InventaryContext } from "./InventaryConextProvider";

export const Stats = () => {
  const { state, number, setNumber } = useContext(InventaryContext);

  // Verificar si state.stats existe antes de acceder a sus propiedades
  let statsValue = null;

  if (state.stats) {
    if ("damage" in state.stats) {
      statsValue = state.stats.damage;
      //   setNumber((prev) => {
      //     return prev + state.stats.damage;
      //   });
    } else if ("armor" in state.stats) {
      statsValue = state.stats.armor;
      //   setNumber((prev) => {
      //     return prev + state.stats.armor;
      //   });
    } else if ("defense" in state.stats) {
      statsValue = state.stats.defense;
      //   setNumber((prev) => {
      //     return prev + state.stats.defense;
      //   });
    }
  }

  return (
    <div>
      {state ? (
        <div>
          <div className="bg-gray-950 text-slate-100">
            <h1>{state.name}</h1>
          </div>
          <div className="bg-gray-700 text-slate-100">
            <div className="flex justify-center gap-10">
              {state && (
                <div>
                  <h2>{number}</h2>
                </div>
              )}
              <div>
                <h2>{"=>"} </h2>
              </div>
              <div>{statsValue && <h2>{statsValue}</h2>}</div>
            </div>
            <h2>{state.description}</h2>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
