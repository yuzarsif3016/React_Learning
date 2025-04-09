import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // css file imported

//jsx -- html like syntax not html

//const jsxheading = <h1 id="heading">namaste react 🎉</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<h1 id="heading">namaste react 🎉</h1>);   // react element

// const Title = () => (
//     <h1 className="head" tabIndex="5">
//         Namaste React Functional Component 🎉
//     </h1>
// );

// // react component
// const HeadingComp = ()=>(
//     <div id="container">
//         <Title />
//         <h1 id="heading">namaste react 🎉</h1>
//         <h2>Namaste React</h2>
//         <h3>Namaste React</h3>

//     </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComp />);

const Logo = () => {
  return (
    <div className="logo">
      <img
        src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
        alt="Logo"
      />
    </div>
  );
};

const Search = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
    </div>
  );
};

const UserIcon = () => {
  return (
    <div className="user-icon">
      <img
        src="https://tse3.mm.bing.net/th?id=OIP.Dn6vNPtOjVneeJ_8Rf6IFgHaHa&pid=Api&P=0&h=180"
        alt="User Icon"
      />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      {/* Logo on the left */}

      <Logo />

      {/* Search bar in the middle */}

      <Search />

      {/* User icon on the right */}

      <UserIcon />
    </header>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);
