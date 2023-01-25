import { useState } from 'react';

const loggedInUser = () => {
  return false;
};

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://dcassetcdn.com/design_img/247012/118129/118129_2454063_247012_image.jpg"
    />
  </a>
);
// Components
// 1.Functional component

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {loggedIn ? (
        <button onClick={() => setLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default HeaderComponent;
