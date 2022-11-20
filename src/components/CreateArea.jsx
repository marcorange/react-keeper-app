import React, { useState } from "react";

function CreateArea(props) {
    const [input, updateInput] = useState({
        title: "",
        content: "",
    });

    function handleInput(e) {
        const { name, value } = e.target;

        updateInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }

    return (
        <div>
            <form>
                <input
                    onChange={handleInput}
                    value={input.title}
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    onChange={handleInput}
                    value={input.content}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                />
                <button
                    onClick={(e) => {
                        props.buttonClick(input);
                        updateInput({
                            title: "",
                            content: "",
                        });
                        e.preventDefault();
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default CreateArea;
