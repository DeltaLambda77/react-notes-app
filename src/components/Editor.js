import ReactMarkdown from "react-markdown"
import React from "react"

export default function Main({ activeNote, onUpdateNote }) {
    const editField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now()
        });
    };

    return (
        <main>
        {
            activeNote ? 
                <div className="editor-container">
                    <div className="note-editor-container">
                        <input
                            type="text"
                            id="title"
                            placeholder="Note Title"
                            value={activeNote.title}
                            onChange={(e) => editField("title", e.target.value)}
                            autoFocus
                        />
                        <textarea
                            id="body"
                            placeholder="Write your note here..."
                            value={activeNote.body}
                            onChange={(e) => editField("body", e.target.value)}
                        />
                    </div>
                    <div className="editor-note-preview-container">
                        <h1 className="preview-title">{activeNote.title}</h1>
                        <ReactMarkdown className="markdown-preview-container">
                            {activeNote.body}
                        </ReactMarkdown>
                    </div>
                </div>
            :
                <div className="no-active-note">
                    No active Note
                </div>

        }
        </main>
    )
}