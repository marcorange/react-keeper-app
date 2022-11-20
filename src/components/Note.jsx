import React from "react";

function Note(props) {
    if (props.title && props.content) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={ () => props.buttonClick(props.id) }>DELETE</button>
        </div>
    );
    }
}

export default Note;
