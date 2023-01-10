//React Element
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
    </div>
  );
};

export default HeaderComponent;
