import { IMG_CDN_LINK } from '../constants';

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_LINK + cloudinaryImageId} alt="image" />
      <h2>{name}</h2>
      <h6>{cuisines.join(',')}</h6>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

export default RestaurantCard;
