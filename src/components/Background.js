import React from "react";
import styles from "./Background.module.css";

function makeBoxes(boxArray = []) {
  if (boxArray.length >= 50) return boxArray;

  const newBox = (
    <div className={styles.Boxes}>

    </div>
  );

  return makeBoxes([...boxArray, newBox]);
}

export const Background = () => {
  return <div className={styles.BoxWrapper}>{makeBoxes()}</div>;
};
