import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { IMG_CDN_LINK } from '../constants';
import Shimmer from './ShimmerEffect';

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const res = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=17.4492973&lng=78.3650231&menuId=${restId}`
    );
    const data = await res.json();
    setRestaurant(data.data);
    console.log(data.data);
  }
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      {/* <div className="banner">
        <img src={IMG_CDN_LINK + restaurant?.cloudinaryImageId} alt="image" />
        <h1>{restaurant?.name}</h1>
      </div> */}
      <div className="color">
        <div className="element">
          <img
            src={IMG_CDN_LINK + restaurant?.cloudinaryImageId}
            alt="no-image"
          />
        </div>
        <div className="element">
          <h1>{restaurant?.name}</h1>
          <p>Bittersweet: A less harsh taste than bitterness. </p>
        </div>
        <div className="element">
          <b>
            <h1>Conclusion</h1>
          </b>
        </div>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant.menu.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
