import React, { Component } from "react";
import styles from "./SearchPane.module.css";
import HotelCard from "../../components/HotelCard/HotelCard";

import Filters from "../../components/Filters/Filters";

class Search extends Component {
  state = {
    hotels: [
      {
        hotelName: "Oaks on William",
        rating: 5,
        roomType: "Studio Apartment (No housekeeping)",
        price: 282,
        imgSrc:
          "https://hotelimages.webjet.com.au/hotels/7000000/6430000/6428700/6428660/215090a4_z.jpg",
      },
      {
        hotelName: "Crowne plaza Melbourne",
        rating: 3.5,
        roomType: "Standard room, Non smoking",
        price: 449,
        imgSrc:
          "https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg",
      },
      {
        hotelName: "Novotel Melbourne on Collins",
        rating: 2,
        roomType: "Deluxe King Room",
        price: 401,
        imgSrc:
          "https://hotelimages.webjet.com.au/hotels/1000000/430000/426600/426574/9c79094d_z.jpg",
      },
    ],
  };

  render() {
    const hotelCards = this.state.hotels.map((hotel, i) => (
      <HotelCard key={i} details={hotel} />
    ));
    return (
      <div className={styles.Search}>
        <h2 className={styles.Heading}>
          {this.state.hotels.length} Hotels Available in Melbourne
        </h2>
        <div className={styles.MainContent}>
          <Filters />
          <div class={styles.HotelCards}>{hotelCards}</div>
        </div>
      </div>
    );
  }
}

export default Search;
