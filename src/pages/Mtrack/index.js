import React, { useState, useEffect } from "react";
import cn from "classnames";

import styles from "./style.module.css";

const Mtrack = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [counter, setCounter] = useState(null);
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
    setCounter(item === selectedItem ? null : 0);
    setSelectedItem(item === selectedItem ? null : item);
  };

  useEffect(() => {
    let timer1;
    if (counter !== null) {
      timer1 = setTimeout(() => {
        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer1);
    };
  }, [counter]);
  return (
    <div>
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
      {counter !== null && (
        <div className={styles.counter}>
          <span>
            {Math.floor((counter % (60 * 60 * 24)) / (60 * 60))
              .toString()
              .padStart(2, "0")}
          </span>
          <span className={styles.blinker}>:</span>
          <span>
            {Math.floor((counter % (60 * 60)) / 60)
              .toString()
              .padStart(2, "0")}
          </span>
          <span className={styles.blinker}>:</span>
          <span>
            {Math.floor(counter % 60)
              .toString()
              .padStart(2, "0")}
          </span>
        </div>
      )}
    </div>
  );
};

export default Mtrack;
