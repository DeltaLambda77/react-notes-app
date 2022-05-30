import React from "react"
import Editor from "./components/Editor.js"
import Sidebar from "./components/Sidebar.js"
import {nanoid} from "nanoid"

export default function App() {
    const [notes, setNotes] = React.useState(
        localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = React.useState(false);

    React.useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes])

    const onAddNote = () => {
        const newNote = {
            id: nanoid(),
            title: "Untitled Note",
            body: "",
            lastModified: Date.now()
        };
        setNotes([newNote, ...notes]);
        setActiveNote([newNote.id]);
    }

    const onDeleteNote = (noteId) => {
        setNotes(notes.filter(({id}) => id !== noteId));
    }

    const onUpdateNote = (updatedNote) => {
        const updatedNotesArray = notes.map((note) => {
            return note.id === updatedNote.id ? 
                updatedNote : note
            });
            setNotes(updatedNotesArray);
    }

    const getActiveNote = () => {
        return notes.find(({id}) => id === activeNote);
    }
    return (
        <div className="App-container">
            <Sidebar
                notes={notes}
                onAddNote={onAddNote}
                onDeleteNote={onDeleteNote}
                activeNote={activeNote}
                setActiveNote={setActiveNote}
            />
            <Editor
                activeNote={getActiveNote()}
                onUpdateNote={onUpdateNote}
            />
        </div>
    );
}