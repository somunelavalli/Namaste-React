import { useState } from 'react';
import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.data.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
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
            const data = filterData(searchText, restaurants);
            console.log(data);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            setSearchText('');
            setRestaurants(restaurantList);
          }}
        >
          Clear
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.data.data}
              key={restaurant.data.data.id}
            />
          );
        })}
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
