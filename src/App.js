import React from "react"
import Editor from "./components/Editor.js"
import Sidebar from "./components/Sidebar.js"
import Data from "./data.js"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
    const [notes, setNotes] = React.useState([])
    const [currentNoteId, setCurrentNoteId] = React.useState(
        (notes[0] && notes[0].id) || ""
    )

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Insert note text here"
        }
        setNotes(prevNotes => [newNote, ...prevNotes])
        setCurrentNoteId(newNote.id)
    }

    function updateNote(text) {
        setNotes(oldNotes => oldNotes.map(oldNote => {
            return oldNote.id === currentNoteId
                ? {...oldNote, body: text}
                : oldNote
        }))
    }

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <main>
        {
            notes.length > 0
            ?
            <Split
                sizes={[30, 70]}
                direction="horizontal"
                className="split"
            >
                <Sidebar 
                    notes={notes}
                    currentNote={findCurrentNote()}
                    setCurrentNoteId={setCurrentNoteId}
                    newNote={createNewNote}
                />
                {
                    currentNoteId && notes.length > 0 &&
                    <Editor 
                        currentNote={findCurrentNote()}
                        updateNote={updateNote}
                    />
                }
            </Split>
            :   
            <div className="no-notes">
                <h1>You currently have no notes</h1>
                <button className="first-note-button" onClick={createNewNote}>
                    Create Note
                </button>

            </div>
        }
        </main>
    )
}