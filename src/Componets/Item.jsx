import React from "react";
export const Item = ({ items, setItems, item, state, setState }) => {
  const HandleClick = () => {
    const isDuplicate = items.some(
      (existingItem) => existingItem.category === item.category
    );

    if (!isDuplicate) {
      setItems((prev) => {
        return [...prev, item];
      });
    }
    setState(item);
  };
  const HandleClickDelete = () => {
    const isDelete = items.filter((items) => {
      return items.category !== item.category;
    });

    setItems(isDelete);
  };
  let statsValue = null;

  if (item?.stats) {
    if ("damage" in item?.stats) {
      statsValue = item.stats.damage;
      //   setNumber((prev) => {
      //     return prev + state.stats.damage;
      //   });
    } else if ("armor" in item?.stats) {
      statsValue = item.stats.armor;
      //   setNumber((prev) => {
      //     return prev + state.stats.armor;
      //   });
    } else if ("defense" in item?.stats) {
      statsValue = item.stats.defense;
      //   setNumber((prev) => {
      //     return prev + state.stats.defense;
      //   });
    }
  }
  // console.log(item);
  return (
    <div>
      {item ? (
        <div
          className="bg-teal-950 flex flex-col w-28 h-28 hover:bg-teal-900 focus:border-green-50"
          onDoubleClick={HandleClickDelete}
          onClick={HandleClick}
        >
          <div className="text-white flex">{statsValue}</div>

          {
            <img
              className="absolute"
              src={item.icon}
              alt=""
              width="112px"
              height="112px"
            />
          }
        </div>
      ) : (
        <div className="bg-teal-950 opacity-30 w-28 h-28"></div>
      )}
    </div>
  );
};
