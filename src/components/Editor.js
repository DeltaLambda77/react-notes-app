import ReactMarkdown from "react-markdown"
import React from "react"

export default function Main({ activeNote, onUpdateNote, }) {
    const editField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now()
        });
    };

    function textSelection(event) {
        const selection = window.getSelection()
        const selectedText = selection.toString()
        console.log(`You selected: ${selectedText}`)
    }

    return (
        <main className="app-main">
        {
            activeNote ? 
                <div>
                    <div className="app-main-note-edit">
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
                            onMouseUp={textSelection}
                        />
                    </div>
                    <div className="button-container">
                        <button
                            className="header-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="italics-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="bold-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="code-span-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="url-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="img-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="indent-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="bullet-button"
                            
                        >
                            <img> </img>
                        </button>
                        <button
                            className="numbered-bullet-button"
                            
                        >
                            <img> </img>
                        </button>
                    </div>
                    <div className="app-main-note-preview">
                        <h1 className="preview-title">{activeNote.title}</h1>
                        <ReactMarkdown className="markdown-preview">
                            {activeNote.body}
                        </ReactMarkdown>
                    </div>
                </div>
            :
                <div className="no-active-note">
                    No Active Note
                </div>

        }
        </main>
    )
}