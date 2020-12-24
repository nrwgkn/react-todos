import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [inputText, setInputText] = useState("");
  const handleClickAdd = () => {
    addTodo(inputText);
    setInputText("");
  };

  return (
    <div className="task-form">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="btn" onClick={handleClickAdd}>
        submit
      </button>
    </div>
  );
};

export default Form;
