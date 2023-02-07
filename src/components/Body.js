import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';
import Shimmer from './ShimmerEffect';

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const res = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4492973&lng=78.3650231&page_type=DESKTOP_WEB_LISTING'
    );
    const data = await res.json();
    setAllRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(data?.data?.cards[2]?.data?.data?.cards);
    console.log(data?.data?.cards[2]?.data?.data?.cards);
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            console.log(data);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setSearchText('');
            setFilteredRestaurants(allRestaurants);
          }}
        >
          Clear
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length === 0 ? (
          <h1>No Restaurants FOund with your search</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={'/restaurant/' + restaurant.data.id}>
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              </Link>
            );
          })
        )}
        {/* <RestaurantCard restaurant={restaurantList[0]} />
        <RestaurantCard restaurant={restaurantList[1]} />
        <RestaurantCard restaurant={restaurantList[2]} />
        <RestaurantCard restaurant={restaurantList[3]} />
        <RestaurantCard restaurant={restaurantList[4]} />
        <RestaurantCard restaurant={restaurantList[5]} />
        <RestaurantCard restaurant={restaurantList[6]} />
        <RestaurantCard restaurant={restaurantList[7]} />
        <RestaurantCard restaurant={restaurantList[8]} />
        <RestaurantCard restaurant={restaurantList[9]} />
        <RestaurantCard restaurant={restaurantList[10]} />
        <RestaurantCard restaurant={restaurantList[11]} />
        <RestaurantCard restaurant={restaurantList[12]} />
        <RestaurantCard restaurant={restaurantList[13]} />
        <RestaurantCard restaurant={restaurantList[14]} /> */}
      </div>
    </>
  );
};

export default Body;
