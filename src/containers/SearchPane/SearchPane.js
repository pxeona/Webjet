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
      //Array of objects to set or unset rating filters
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
    //Sorts the hotel list when component is mounted
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
        const ratingKey = Object.keys(updatedRatingFilters[inputIdentifier])[0]; //Key of the rating to be set or unset
        //Toggle the rating corresponding to the checkbox clicked
        updatedRatingFilters[inputIdentifier][
          ratingKey
        ] = !updatedRatingFilters[inputIdentifier][ratingKey];

        //If 'All' is selected, reset all the other rating checkboxes'
        if (
          updatedRatingFilters[0][Object.keys(updatedRatingFilters[0])[0]] &&
          inputIdentifier === 0
        ) {
          for (let i = 1; i < updatedRatingFilters.length; i++) {
            updatedRatingFilters[i][
              Object.keys(updatedRatingFilters[i])[0]
            ] = false;
          }
          //If 'All' is not selected, set it to false
        } else {
          updatedRatingFilters[0][
            Object.keys(updatedRatingFilters[0])[0]
          ] = false;
        }

        let filteredByRating = false;

        //Check whether all the rating checkboxes are unchecked or not
        this.state.ratingFilters.forEach((ratingFilter) => {
          if (ratingFilter[Object.keys(ratingFilter)[0]]) {
            filteredByRating = true;
          }
        });

        //If all the rating boxes unchecked, set isFilteredByRating to false, else set it to true
        //And update the rating filter array of objects
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
    //Filter hotels by hotel name
    if (this.state.isFilteredByName) {
      if (this.state.nameFilter !== "") {
        filteredHotelsByName = this.state.hotels.filter(
          (hotel) => hotel.hotelName === this.state.nameFilter
        );
      }
      //If not filtered by name, simply assign all the hotels to filteredHotelsByName
    } else {
      filteredHotelsByName = [...this.state.hotels];
    }

    //Filter hotels by rating
    if (this.state.isFilteredByRating) {
      this.state.ratingFilters.forEach((ratingFilter) => {
        const ratingKey = Object.keys(ratingFilter)[0];
        switch (ratingKey) {
          case "All":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotelsByName;
            }
            break;
          case "1":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotels.concat(
                filteredHotelsByName.filter(
                  (hotel) => hotel.rating < 2 && hotel.rating >= 1
                )
              );
            }
            break;
          case "2":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotels.concat(
                filteredHotelsByName.filter(
                  (hotel) => hotel.rating < 3 && hotel.rating >= 2
                )
              );
            }
            break;
          case "3":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotels.concat(
                filteredHotelsByName.filter(
                  (hotel) => hotel.rating < 4 && hotel.rating >= 3
                )
              );
            }
            break;
          case "4":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotels.concat(
                filteredHotelsByName.filter(
                  (hotel) => hotel.rating < 5 && hotel.rating >= 4
                )
              );
            }
            break;
          case "5":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotels.concat(
                filteredHotelsByName.filter((hotel) => hotel.rating >= 5)
              );
            }
            break;
          case "Unrated":
            if (ratingFilter[ratingKey]) {
              filteredHotels = filteredHotels.concat(
                filteredHotelsByName.filter(
                  (hotel) => hotel.rating < 1 && hotel.rating >= 0
                )
              );
            }
            break;
          default:
            return;
        }
      });

      //Create the Hotel card element from the filtered hotel list
      hotelCards = filteredHotels?.map((hotel, i) => {
        return <HotelCard key={i} details={hotel} />;
      });
    } else {
      //If not filtered by rating, use filteredHotelsByName to create the JSX elements
      hotelCards = filteredHotelsByName.map((hotel, i) => {
        return <HotelCard key={i} details={hotel} />;
      });
    }

    if (hotelCards.length === 0) {
      hotelCards = (
        <div className={styles.Error}>
          There are no hotels available for your filtering criteria.
        </div>
      );
    }

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
