import React, { useState } from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    const [input, updateInput] = useState({
        title: "",
        content: "",
    });

    const [isExpanded, updateExpand] = useState(false);

    function handleInput(e) {
        const { name, value } = e.target;

        updateInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    }

    function submitNote(e) {
        props.buttonClick(input);
        updateInput({
            title: "",
            content: "",
        });
        e.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && (
                    <input
                        onChange={handleInput}
                        value={input.title}
                        name="title"
                        placeholder="Title"
                    />
                )}
                <textarea
                    onClick={ () => updateExpand(true) }
                    onChange={handleInput}
                    value={input.content}
                    name="content"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddCircleOutlinedIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
