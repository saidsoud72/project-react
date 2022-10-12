import React from "react";
import { NavLink, useHistory } from "react-router-dom";

function NavBar({ setIsLoggedIn,setSearch }) {
  const history = useHistory();
  function handleLogout() {
    setIsLoggedIn(false);
    history.push("/login");
  }
  function handleSearch(e){
    setSearch(e.target.value)
    
  }

  const linkStyles = {
    width: "150px",
    height: "40px",
    paddingTop: "14px",
    borderRadius: "8px",
    padding: "2px",
    alignItems: "center",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
    fontSize: "22px",
  };

  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/notes"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Notes
      </NavLink>
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Login
      </NavLink>
      <input onChange={handleSearch} type="text" placeholder="search notes"/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default NavBar;
