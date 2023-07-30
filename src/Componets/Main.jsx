import React, { useContext, useEffect, useState } from "react";
import { ButtonsInventary } from "./ButtonsInventary";
import { InventaryContext } from "./InventaryConextProvider";
import { Inventary } from "./Inventary";
import { Character } from "./Character";
import { Nav } from "./Nav";
import { Stats } from "./Stats";

export const Main = () => {
  const {
    setInventary,
    invenraty,
    items,
    setItems,
    state,
    setState,
    number,
    setNumber,
  } = useContext(InventaryContext);
  const [categories, setCategories] = useState("weapons");

  const getData = async () => {
    const response = await fetch(
      "https://practise-game-inventory.vercel.app/api/items"
    );
    const data = await response.json();
    setInventary({ ...data.results });
    // console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log(invenraty.weapons);
  return (
    <>
      <section className="flex gap-24 p-8 m-5">
        <div className="w-3/6">
          <ButtonsInventary setCategories={setCategories} />
          <Inventary
            Objs={
              categories == "weapons"
                ? invenraty.weapons
                : categories === "shields"
                ? invenraty.shields
                : invenraty.armors
            }
            setItems={setItems}
            items={items}
            state={state}
            setState={setState}
          />
        </div>
        <div className=" flex  flex-col w-3/6 gap-2">
          <Character />
          <Stats />
        </div>
      </section>
    </>
  );
};
