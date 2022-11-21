import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
    const [notes, updateNotes] = useState([{}]);

    function addNote(note) {
        updateNotes((prevNote) => [
            ...prevNote,
            {
                title: note.title,
                content: note.content,
            },
        ]);
    }

    function removeNote(id) {
        updateNotes((prevNotes) =>
            prevNotes.filter((note, index) => index !== id)
        );
    }

    return (
        <div>
            <Header />
            <CreateArea buttonClick={addNote} />
            <div>
                {notes.map((note, index) => (
                    <Note
                        key={index}
                        id={index}
                        title={note.title}
                        content={note.content}
                        buttonClick={removeNote}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
