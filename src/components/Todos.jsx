import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <h2 className="my-5 text-xl font-semibold underline">All Todos</h2>
      {todos.map((todo) => (
        <div
          className="list-none w-[80%] flex justify-between m-auto items-center align-middle rounded-md bg-zinc-800 my-3"
          key={todo.id}
        >
          <li className="text-white p-3">{todo.text}</li>
          <button
            className="text-white px-2 bg-red-600 mx-3 font-bold"
            onClick={() => dispatch(removeTodo(todo.id))}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default Todos;
