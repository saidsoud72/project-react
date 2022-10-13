import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

function Notes({ isLoggedIn, handleNewData }) {
  const history = useHistory();
  const [newNote, setNewNote] = useState({
    title: "",
    author: "",
    url: "",
    message: "",
  });

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setNewNote({
      ...newNote,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    handleNewData();
    history.push("/");
  }
  if (!isLoggedIn) return <Redirect to="/login" />;
  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="notes">
          <label>
            Title :{" "}
            <input
              onChange={handleChange}
              className="formInput"
              type="text"
              placeholder="Note Title"
              name="title"
            />
          </label>

          <label>
            Author :{" "}
            <input
              onChange={handleChange}
              className="formInput"
              type="text"
              placeholder="Author's Name"
              name="author"
            />
          </label>

          <label>
            Image url :{" "}
            <input
              onChange={handleChange}
              className="formInput"
              type="url"
              placeholder="enter image url"
              name="url"
            />
          </label>

          <label className="text">Note</label>
          <textarea
            onChange={handleChange}
            id="note"
            name="message"
            placeholder="write your note here"
            maxLength="200"
            required
          ></textarea>
          <input
            style={{ width: "100px", marginTop: "30px", marginLeft: "280px" }}
            type="submit"
            value="Add to Notes"
          />
        </form>
      </div>
    </>
  );
}

export default Notes;
