import React, { Fragment, useState } from "react";
import "./App.css";
const Element = ({ item, onhandleActive }) => {
  const [active, setActive] = useState(false);
  return (
    <li
      key={item.name}
      className={`List__item List__item--${item.color} ${active && "active"}`}
      onClick={() => {
        onhandleActive(item.name);
        setActive(!active);
      }}
    >
      {item.name}
    </li>
  );
};
const List = ({ items }) => {
  const [activeItems, setActiveItems] = useState(new Array());
  const handleActive = (name) => {
    const itemIndex = activeItems.indexOf(name);
    if (itemIndex === -1) {
      const newActive = [...activeItems, name];
      setActiveItems(newActive);
    } else {
      const newActive = [...activeItems];
      newActive.splice(itemIndex, 1);
      setActiveItems(newActive);
    }
  };
  console.log("activeItems: ", activeItems);
  return (
    <Fragment>
      <div>{activeItems.join(", ")}</div>
      <ul className="List">
        {items.map((item, index) => (
          <Element item={item} onhandleActive={handleActive} />
        ))}
      </ul>
    </Fragment>
  );
};

export default List;
