import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todolist() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAdd = () => {
    if (inputValue !== "") {
      const obj = { id: Date.now(), title: inputValue, done: false };
      setList([...list, obj]);
      setInputValue("");
    }
  };

  const handleDone = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setList(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {list.map((item) => (
          <TodoItem
            item={item}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        ))}
      </ul>
    </div>
  );
}
