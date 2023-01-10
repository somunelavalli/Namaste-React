import { restaurantList } from '../constants';
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
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
  );
};

export default Body;
