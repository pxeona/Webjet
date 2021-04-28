import React from "react";
import styles from "./HotelInfo.module.css";

const hotelinfo = (props) => {
  let diamonds = null;
  let halfDiamonds = null;
  const rating = Math.floor(props.rating);

  // Diamonds logos to represent rating
  diamonds = [...Array(rating)].map((_, i) => {
    return <div className={styles.Diamond} key={i}></div>;
  });

  //Half diamonds in case of decimal points in rating
  if (props.rating % 1 > 0) {
    halfDiamonds = <div className={styles.HalfDiamond}></div>;
  }
  return (
    <div className={styles.HotelInfo}>
      <h3 className={styles.Name}>{props.name}</h3>
      {diamonds}
      {halfDiamonds}
      <p className={styles.RoomType}>
        <strong>Room type:</strong> {props.roomType}
      </p>
    </div>
  );
};

export default hotelinfo;
