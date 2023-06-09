import React, { useEffect } from "react";

export default function Input(props) {
  const [text, setText] = React.useState("");

  function handleChange(event) {
    const { value } = event.target;

    setText(value);
  }

  useEffect(() => {
    if (props.editList) {
      setText(props.editList);
    }
  }, [props.editList]);
  return (
    <div className="container">
      <input
        onChange={handleChange}
        type="text"
        placeholder="Your task for today"
        value={text}
        onKeyUp={(event) => {
          props.submit(event, text, setText);
        }}
      />
      <button
        onClick={() => {
          if (props.editList) {
            props.updateList(text);
          } else {
            props.addItem(text);
          }
          setText("");
        }}
        className="btn"
      >
        {props.editList ? "Edit" : "Add"}
      </button>
    </div>
  );
}
