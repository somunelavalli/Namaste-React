import React from 'react';
import ReactDOM from 'react-dom/client';
import HeaderComponent from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

// const heading = React.createElement("h1",{},"Namaste Everyone!")
// const heading1 = React.createElement("h2", {}, "Hello World 🙏")
// const container = React.createElement("div", {id: "container"}, [heading,heading1])

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(container);
root.render(<AppLayout />);
