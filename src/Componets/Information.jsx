import React, { useContext } from "react";
import { InventaryContext } from "./InventaryConextProvider";

export const Information = ({ equipo }) => {
  const { state, number, setNumber } = useContext(InventaryContext);
  console.log(equipo);
  return (
    <div>
      {equipo ? (
        <div>
          <h2>Name: Link</h2>
          <h2>Attack={equipo.weapon.stats?.damage + 10}</h2>
          <h2>Defense={equipo.shield.stats?.defense + 10}</h2>
          <h2>
            Armor=
            {equipo.armor.stats?.armor +
              equipo.greave.stats?.armor +
              equipo.helm.stats?.armor +
              10}
          </h2>
        </div>
      ) : (
        <div>
          <h2>Name: Link</h2>
          <h2>Attack=10</h2>
          <h2>Defense=10</h2>
          <h2>Armor=10</h2>
        </div>
      )}
    </div>
  );
};
