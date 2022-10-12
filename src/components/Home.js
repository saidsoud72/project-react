import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import NotesList from "./NotesList";

function Home({ isLoggedIn, notes, search, handleDelete }) {
  const history = useHistory();
  function handleClick() {
    history.push("/notes");
  }

  if (!isLoggedIn) return <Redirect to="/login" />;

  return (
    <>
      <div className="imageCard">
        {notes
          .filter((eachNote) =>
            eachNote.message.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => (
            <NotesList key={note.id} id={note.id} note={note} handleDelete={handleDelete} />
          ))}
      </div>
      <button onClick={handleClick} style={{ marginTop: "100px",height:"30px" }}>
        Add New Note
      </button>
    </>
  );
}

export default Home;
