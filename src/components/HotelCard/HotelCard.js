import React from "react";
import styles from "./HotelCard.module.css";
import HotelInfo from "./HotelInfo/HotelInfo";

const hotelcard = (props) => {
  return (
    <div className={styles.HotelCard}>
      <img src={props.details.imgSrc} alt="Webjet"></img>
      <HotelInfo
        name={props.details.hotelName}
        rating={props.details.rating}
        roomType={props.details.roomType}
      />
    </div>
  );
};

export default hotelcard;
