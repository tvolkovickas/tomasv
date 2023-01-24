import React, { useState } from "react";
import cn from "classnames";

import styles from "./style.module.css";

const Mtrack = () => {
  const [items, setItems] = useState({
    one: { name: "3 mm", on: false },
    two: { name: "Fine Dust", on: false },
    three: { name: "6 mm", on: false },
    four: { name: "10 mm", on: false },
    five: { name: "14 mm", on: false },
    six: { name: "20 mm", on: false },
    seven: { name: "28 mm", on: false },
    eight: { name: "", on: false },
    nine: { name: "Slurry Dust", on: false },
    ten: { name: "6 mm BEST", on: false },
    eleven: { name: "10 mm BEST", on: false },
    twelve: { name: "14 mm BEST", on: false },
    thirteen: { name: "20 mm BEST", on: false },
    fifteen: { name: "", on: false },
    sixteen: { name: "40 mm", on: false },
    seventeen: { name: "Rail + Ballas", on: false },
    eightteen: { name: "Formpave", on: false },
    nineteen: { name: "Type 3", on: false },
    twenty: { name: "Blend 66", on: false },
    twentyone: { name: "75 / 40", on: false },
    twentythree: { name: "20 / 5", on: false },
    twentyfour: { name: "", on: false },
    twentyfive: { name: "WGS", on: false },
    twentysix: { name: "Oversized", on: false },
    twentyseven: { name: "6F5", on: false },
    twentyeight: { name: "105/0", on: false },
    twentynine: { name: "65/0", on: false },
    thirty: { name: "", on: false },
  });
  const toggle = (item) => {
    const newItems = { ...items };
    newItems[item[0]].on =
      !newItems[item[0]].on && newItems[item[0]].name !== "";
    setItems(newItems);
  };
  return (
    <div className={styles.container}>
      {Object.entries(items).map((item) => (
        <div
          key={item[0]}
          className={cn(styles.gridItem, { [styles.on]: item[1].on })}
          onClick={() => toggle(item)}
        >
          {item[1].name}
        </div>
      ))}
    </div>
  );
};

export default Mtrack;
