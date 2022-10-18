import { useState, useEffect, useReducer } from "react";
import { useResource } from "react-request-hook";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./todo/todoList";
import CreateTodo from "./todo/CreateTodo";
import UserBar from "./user/userBar";
import appReducer from "./reducers";
function App() {
  const initialPosts = [
    {
      title: "My first post",
      content: "Some content",
      author: "Paul",
      id: uuidv4(),
    },
    {
      title: "My second post",
      content: "Some content",
      author: "Paul",
      id: uuidv4(),
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });


  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch} />
      <Header title="Blog" />

          <UserBar />
          <TodoList />
          {state.user && <CreateTodo />}
    </div>
  );
}

export default App;