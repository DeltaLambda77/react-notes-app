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

    function wrapHeader() {
        const textArea = document.getElementById("body");
        textArea.value += "### "
    }

    function wrapItalics() {
        const textarea = document.getElementById("body")
        textarea.value += "**"
    }

    function wrapBold() {
        const textarea = document.getElementById("body")
        textarea.value += "****"
    }

    function wrapSpan() {
        const textarea = document.getElementById("body")
        textarea.value += "``"
    }

    function wrapURL() {
        const textarea = document.getElementById("body")
        textarea.value += "[](https://example.com)"
    }

    function wrapIMG() {
        const textarea = document.getElementById("body")
        textarea.value += "![](https://example.com/example-image.png)"
    }

    function wrapIndent() {
        const textarea = document.getElementById("body")
        textarea.value += ">" 
    }

    function wrapBullets() {
        const textarea = document.getElementById("body")
        textarea.value += "\n- "
    }

    function wrapNumBullets() {
        const textarea = document.getElementById("body")
        textarea.value += "\n1. " 
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
                        />
                        
                        <div className="button-container">
                            <button
                                className="header-button"
                                onClick={wrapHeader}
                            >
                                <img src={require("../components/images/heading.png")} alt="header icon"/>
                            </button>
                            <button
                                className="italics-button"
                                onClick={wrapItalics}
                            >
                                <img src={require("../components/images/italic-font.png")} alt="italics icon"/>
                            </button>
                            <button
                                className="bold-button"
                                onClick={wrapBold}
                            >
                                <img src={require("../components/images/bold.png")} alt="bold icon"/>
                            </button>
                            <button
                                className="code-span-button"
                                onClick={wrapSpan}
                            >
                                <img src={require("../components/images/programming-code-signs.png")} alt="code span icon"/>
                            </button>
                            <button
                                className="url-button"
                                onClick={wrapURL}
                            >
                                <img src={require("../components/images/url.png")} alt="url icon"/>
                            </button>
                            <button
                                className="img-button"
                                onClick={wrapIMG}
                            >
                                <img src={require("../components/images/photo.png")} alt="img icon"/>
                            </button>
                            <button
                                className="indent-button"
                                onClick={wrapIndent}
                            >
                                <img src={require("../components/images/indent.png")} alt="indent icon"/>
                            </button>
                            <button
                                className="bullet-button"
                                onClick={wrapBullets}
                            >
                                <img src={require("../components/images/menu.png")} alt="bullet icon"/>
                            </button>
                            <button
                                className="numbered-bullet-button"
                                onClick={wrapNumBullets}
                            >
                                <img src={require("../components/images/list.png")} alt="numbered bullet icon"/>
                            </button>
                        </div> 
                        
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