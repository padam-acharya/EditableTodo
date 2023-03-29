import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Input from "./components/Input";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
  const [listItems, setList] = React.useState(
    JSON.parse(localStorage.getItem("listItem")) || []
  );
  // const [isDone, setIsDone] = React.useState(false);
  const [editId, setEditId] = React.useState(null);
  const [editList, setEditList] = React.useState(null);
  function add(inputText) {
    if (inputText !== "") {
      setList((prevState) => {
        return [...prevState, inputText];
      });
    } else {
      alert("Text field cannot be empty");
    }
  }

  function updateList(updatedText) {
    const index = editId;
    const newArr = [...listItems];
    if (updatedText) {
      newArr.splice(index, 1, updatedText);
      setList(newArr);
    }
    setEditList(null);
  }
  function submit(event, inputText, setInputText) {
    if (event.key === "Enter") {
      add(inputText);
      setInputText("");
    }
  }

  // edit list
  function editItems(id) {
    console.log(id);
    setEditList(listItems[id]);
    setEditId(id);
  }

  function deleteList(id) {
    // done(id);
    setList((prevState) => {
      return prevState.filter((item, index) => {
        return id !== index;
      });
    });
  }

  React.useEffect(() => {
    localStorage.setItem("listItem", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <div className="App">
      <Header />
      <Input
        addItem={add}
        submit={submit}
        editList={editList}
        updateList={updateList}
      />
      <ul className="list">
        {listItems.map((item, index) => {
          return (
            <List
              key={index}
              id={index}
              listItem={item}
              // click={done}
              edit={editItems}
              onDelete={deleteList}
            />
          );
        })}
      </ul>
      <Footer />
    </div>
  );
}
