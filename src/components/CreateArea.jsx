import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const initialNote = {
    title: "",
    content: "",
  };
  const [inputnote, setInputnote] = useState(initialNote);
  const [isExpanded, setExpand] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputnote((prevInput) => {
      return { ...prevInput, [name]: value };
    });
  };

  const submitNote = (e) => {
    props.onAdd(inputnote);
    setInputnote(initialNote);
    e.preventDefault();
  };

  const handleExpand = () => {
    setExpand(true);
  };

  return (
    <div>
      <form onSubmit={submitNote}>
      <Zoom in={isExpanded}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputnote.title}
          style={{ display: isExpanded ? "" : "none" }}
        />
        </Zoom>
        <textarea
          onClick={handleExpand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
          value={inputnote.content}
          required
        />
        <Zoom in={isExpanded}>
          <button style={{ display: isExpanded ? "" : "none" }}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
