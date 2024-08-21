import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddNewTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== "") {
      dispatch(addTodo(input));
      setInput("");
    } else {
      alert("Please enter a todo");
    }
  };
  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={input}
        placeholder="Enter a Todo.."
        className="rounded px-3 py-2 m-4 w-1/2 outline-none text-white font-semibold bg-slate-600"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-green-600 px-4 py-2 rounded-md font-bold text-white bg hover:bg-green-800 border-none"
        type="submit"
      >
        ADD
      </button>
    </form>
  );
};

export default AddNewTodo;
