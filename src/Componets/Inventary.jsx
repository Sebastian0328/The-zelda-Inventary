import React from "react";
import { Item } from "./Item";

export const Inventary = ({ Objs, setItems, items, state, setState }) => {
  //   console.log(Weapons);
  //   console.log(shields);
  //   console.log(armors);
  //   console.log(Objs);
  const completeObj = [];
  for (let i = 0; i < 16; i++) {
    if (Objs) {
      completeObj.push(Objs[i]);
    }
  }

  return (
    <div className="flex flex-wrap gap-4 ">
      {completeObj?.map((item) => {
        return (
          <Item
            key={item?.name}
            item={item}
            setItems={setItems}
            items={items}
            state={state}
            setState={setState}
          />
        );
      })}
    </div>
  );
};
