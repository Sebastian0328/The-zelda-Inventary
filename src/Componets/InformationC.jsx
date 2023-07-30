import React from "react";

export const InformationC = ({ equipo }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <div className="flex gap-2">
        <div className="w-28 h-28"></div>
        <div className="bg-teal-900 w-28 h-28 ">
          <img src={equipo.helm.icon ? equipo.helm.icon : ""} alt="" />
        </div>
        <div className="w-28 h-28"></div>
      </div>

      <div className="flex gap-2">
        <div className="bg-teal-900 w-28 h-28 ">
          <img src={equipo.weapon.icon ? equipo.weapon.icon : ""} alt="" />
        </div>
        <div className="bg-teal-900 w-28 h-28 ">
          <img src={equipo.armor.icon ? equipo.armor.icon : ""} alt="" />
        </div>
        <div className="bg-teal-900 w-28 h-28 ">
          <img src={equipo.shield.icon ? equipo.shield.icon : ""} alt="" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="w-28 h-28"></div>

        <div className="bg-teal-900 w-28 h-28 ">
          <img src={equipo.greave.icon ? equipo.greave.icon : ""} alt="" />
        </div>
        <div className="w-28 h-28"></div>
      </div>
    </div>
  );
};
