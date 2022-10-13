import React from 'react'

function NotesList({note, id, handleDelete}) {

    function onDelete(){
      
        handleDelete(id)
      }
  return (
    <div >
        <>
        <div className="imgContainer" >
          <img src={note.url} alt="Oops" />
          <h3>{note.title}</h3>
          <p>{note.message}</p>
          <h5>@{note.author}</h5>
          <div
            style={{
              alignItems:"center",
              alignContent: "center",
              margin: "auto",
            }}
          >
            <button onClick={onDelete}>DELETE</button>
          </div>
        </div>
      </>
    </div>
  )
}

export default NotesList