import React from "react";

export const ButtonsInventary = ({ setCategories }) => {
  const HandleClickw = () => {
    setCategories("weapons");
  };
  const HandleClickS = () => {
    setCategories("shields");
  };
  const HandleClickA = () => {
    setCategories("armors");
  };

  return (
    <div className="flex justify-center gap-x-2.5">
      <div onClick={HandleClickw} className="">
        <img src="/src/assets/weapons.png" alt="" />
      </div>
      <div onClick={HandleClickA}>
        <img src="/src/assets/armor.png" alt="" />
      </div>
      <div onClick={HandleClickS}>
        <img src="/src/assets/escudo.png" alt="" />
      </div>
    </div>
  );
};
