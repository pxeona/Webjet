import React from "react";
import styles from "./HotelInfo.module.css";

const hotelinfo = (props) => {
  let diamonds = null;
  let halfDiamonds = null;
  const rating = Math.floor(props.rating);

  diamonds = [...Array(rating)].map((_, i) => {
    return <div className={styles.Diamond} key={i}></div>;
  });

  if (props.rating % 1 > 0) {
    halfDiamonds = <div className={styles.HalfDiamond}></div>;
  }
  return (
    <div className={styles.HotelInfo}>
      <h3 className={styles.Name}>{props.name}</h3>
      {diamonds}
      {halfDiamonds}
      <h5 className={styles.RoomType}>Room type: {props.roomType}</h5>
    </div>
  );
};

export default hotelinfo;
