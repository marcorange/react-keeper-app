import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note(props) {
    if (props.title && props.content) {
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={ () => props.buttonClick(props.id) }>
            <DeleteForeverIcon />
            </button>
        </div>
    );
    }
}

export default Note;
