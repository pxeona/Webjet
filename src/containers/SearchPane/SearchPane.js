import React, { Component } from "react";
import styles from "./SearchPane.module.css";
import HotelCard from "../../components/HotelCard/HotelCard";

import Filters from "../../components/Filters/Filters";
import Ad from "../../components/Ad/Ad";

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
      {
        hotelName: "Novotel Melbourne on Collins",
        rating: 2,
        roomType: "Deluxe King Room",
        price: 401,
        imgSrc:
          "https://hotelimages.webjet.com.au/hotels/1000000/430000/426600/426574/9c79094d_z.jpg",
      },
    ],
    nameFilter: "",
    ratingFilters: [
      {
        All: false,
      },
      {
        5: false,
      },
      {
        4: false,
      },
      {
        3: false,
      },
      {
        2: false,
      },
      {
        1: false,
      },
      {
        Unrated: false,
      },
    ],
    isFilteredByRating: false,
    isFilteredByName: false,
  };

  componentDidMount() {
    const sortedHotels = []
      .concat(this.state.hotels)
      .sort((hotelA, hotelB) => (hotelA.price > hotelB.price ? 1 : -1));

    this.setState({ hotels: sortedHotels });
  }

  filterHandler = (event, type, value, inputIdentifier) => {
    switch (type) {
      case "Hotel Name":
        if (value !== "")
          this.setState({
            nameFilter: value,
            isFilteredByName: true,
          });
        else {
          this.setState({
            nameFilter: value,
            isFilteredByName: false,
          });
        }
        break;
      case "Quality Rating":
        const updatedRatingFilters = [...this.state.ratingFilters];
        updatedRatingFilters[inputIdentifier][
          Object.keys(updatedRatingFilters[inputIdentifier])[0]
        ] = !updatedRatingFilters[inputIdentifier][
          Object.keys(updatedRatingFilters[inputIdentifier])[0]
        ];

        if (
          updatedRatingFilters[0][Object.keys(updatedRatingFilters[0])[0]] &&
          inputIdentifier === 0
        ) {
          for (let i = 1; i < updatedRatingFilters.length; i++) {
            updatedRatingFilters[i][
              Object.keys(updatedRatingFilters[i])[0]
            ] = false;
          }
        } else {
          updatedRatingFilters[0][
            Object.keys(updatedRatingFilters[0])[0]
          ] = false;
        }

        let filteredByRating = false;

        this.state.ratingFilters.forEach((ratingFilter) => {
          if (ratingFilter[Object.keys(ratingFilter)[0]]) {
            filteredByRating = true;
          }
        });

        if (filteredByRating === false) {
          this.setState({
            isFilteredByRating: false,
            ratingFilters: updatedRatingFilters,
          });
        } else {
          this.setState({
            isFilteredByRating: true,
            ratingFilters: updatedRatingFilters,
          });
        }
        break;
      default:
        return;
    }
  };

  render() {
    let filteredHotels = [];
    let filteredHotelsByName = [];

    let hotelCards = null;
    if (this.state.isFilteredByName) {
      if (this.state.nameFilter !== "") {
        filteredHotelsByName = this.state.hotels.filter(
          (hotel) => hotel.hotelName === this.state.nameFilter
        );
      }
    } else {
      filteredHotelsByName = [...this.state.hotels];
    }

    hotelCards = filteredHotelsByName.map((hotel, i) => {
      return <HotelCard key={i} details={hotel} />;
    });
    return (
      <div className={styles.Search}>
        <h2 className={styles.Heading}>
          {this.state.hotels.length} Hotels Available in Melbourne
        </h2>
        <div className={styles.MainContent}>
          <Filters
            ratingFilters={this.state.ratingFilters}
            filterChanged={this.filterHandler}
          />
          <div class={styles.HotelCards}>{hotelCards}</div>
          <Ad />
        </div>
      </div>
    );
  }
}

export default Search;
