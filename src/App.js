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

    function findCurrentNote() {
        return notes.find(note => {
            return note.id === currentNoteId
        }) || notes[0]
    }

    return (
        <main>
            <Editor />
            <Sidebar />
            <div className="no-notes">
                <h1>You currently have no notes</h1>
                <button>
                    Create Note
                </button>

            </div>
        </main>
    )
}