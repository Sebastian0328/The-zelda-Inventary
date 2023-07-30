import React, { useContext } from "react";
import { Nav } from "./Nav";
import { InventaryContext } from "./InventaryConextProvider";
import { InformationC } from "./InformationC";
import { Information } from "./Information";

export const Character = () => {
  const { items, setItems } = useContext(InventaryContext);

  const equipo = {
    weapon: {},
    helm: {},
    shield: {},
    greave: {},
    armor: {},
  };
  // console.log(equipo);

  items.forEach((items) => {
    const category = items.category;
    switch (category) {
      case "weapon":
        equipo.weapon = items;
        break;
      case "shield":
        equipo.shield = items;

        break;
      case "helm":
        equipo.helm = items;
        break;
      case "greave":
        equipo.greave = items;

        break;
      case "armor":
        equipo.armor = items;

        break;

      default:
        break;
    }
  });

  return (
    <>
      <InformationC equipo={equipo} />
      <Information equipo={equipo} />
    </>
  );
};
