import React from "react";
import styles from "./HotelInfo.module.css";

const hotelinfo = (props) => {
  return (
    <div className={styles.HotelInfo}>
      <h3 className={styles.Name}>{props.name}</h3>
      <h5 className={styles.RoomType}>Room type: {props.roomType}</h5>
    </div>
  );
};

export default hotelinfo;
