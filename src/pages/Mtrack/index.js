import React, { useState } from "react";
import cn from "classnames";

import styles from "./style.module.css";

const Mtrack = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const displayItems = [
    "3 mm",
    "Fine Dust",
    "6 mm",
    "10 mm",
    "14 mm",
    "20 mm",
    "28 mm",
    "",
    "Slurry Dust",
    "6 mm BEST",
    "10 mm BEST",
    "14 mm BEST",
    "20 mm BEST",
    "",
    "40 mm",
    "Rail + Ballas",
    "Formpave",
    "Type 3",
    "Blend 66",
    "75 / 40",
    "20 / 5",
    "",
    "WGS",
    "Oversized",
    "6F5",
    "10S/D",
    "6S/D",
    "",
  ];
  const toggle = (item) => {
    if (item === "") {
      return;
    }
    setSelectedItem(item === selectedItem ? null : item);
  };
  return (
    <div className={styles.container}>
      {displayItems.map((item, index) => (
        <div
          key={index}
          className={cn(styles.gridItem, {
            [styles.on]: item === selectedItem,
          })}
          onClick={() => toggle(item)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Mtrack;
