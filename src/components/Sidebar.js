import React from "react"

/*export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <div
                className={`title ${
                    note.id === props.currentNote.id ? "selected-note" : ""
                }`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <h4 className="text-snippet">Note {index + 1}</h4>
            </div>
        </div>
    ))
    return (
        <section className="pane-sidebar">
            <div className="sidebar-header">
                <h3>Notes</h3>
                <button className="new-note-button" onClick={props.newNote}>+</button>   
            </div>
            {noteElements}
        </section>
    )
}*/

export default function Sidebar({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote}) {
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <div className="sidebar-container">
            <div className="sidebar-header-container">
                <h1>Notes</h1>
                <button onClick={onAddNote}>Add Note</button>
            </div>
            <div className="sidebar-notes-container">
                {sortedNotes.map(({ id, title, body, lastModified}, i) => (
                    <div
                        className={`sidebar-note ${id === activeNote && `active`}`}
                        onClick={() => setActiveNote(id)}
                    >
                        <div className="sidebar-note-title">
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>

                        <p>{body && body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>   
                ))}
            </div>
        </div>
    )
}