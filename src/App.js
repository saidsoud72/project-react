import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Notes from "./components/Notes.js";
import Home from "./components/Home";

function App() {
  const [notes, setNotes] = useState([]);
  const [newData, setNewData] = useState(false);
  const [search, setSearch] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data);
      });
  }, [newData]);

  function handleNewData() {
    setNewData((newData) => !newData);
  }
  function handleDelete(id) {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const updatedNotes = notes.filter(
          (remainingNotes) => remainingNotes.id !== id
        );
        setNotes(updatedNotes);
      });
  }
  return (
    <div className="App">
      <NavBar setIsLoggedIn={setIsLoggedIn} setSearch={setSearch} />
      <hr />
      <Switch>
        <Route exact path="/notes">
          <Notes isLoggedIn={isLoggedIn} handleNewData={handleNewData} />
        </Route>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <Route exact path="/">
          <Home
            isLoggedIn={isLoggedIn}
            notes={notes}
            search={search}
            handleDelete={handleDelete}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
