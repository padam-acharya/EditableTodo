import React from "react";

export default function List(props) {
  return (
    <div>
      <li>{props.listItem}</li>
      {/* <i
        className="fa-solid fa-check done"
        onClick={() => {
          props.click(props.id);
        }}
      ></i> */}
      <i
        className="fa-solid fa-pen-to-square done"
        onClick={() => {
          props.edit(props.id);
        }}
      ></i>
      <i
        className="fa-solid fa-trash trash"
        onClick={() => {
          props.onDelete(props.id);
        }}
      ></i>
    </div>
  );
}
