import React from "react"
import Editor from "./components/Editor.js"
import Sidebar from "./components/Sidebar.js"
import Data from "./data.js"
import Split from "react-split"
import {nanoid} from "nanoid"

export default function App() {
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