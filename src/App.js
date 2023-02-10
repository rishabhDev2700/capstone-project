import { TodoList } from "./components/TodoList";
import { Topbar } from "./components/Topbar";
import { motion } from "framer-motion";
import { createContext, useState } from "react";

export const TodoContext = createContext({ todo: [], setTodo: () => {} });

function App() {
  const [todoList, setTodoList] = useState([]);
  const value = { todoList, setTodoList };

  return (
    <TodoContext.Provider value={value}>
      <motion.div
        className="bg-violet-100"
        initial={{ opacity: 0, x: -600 }}
        whileInView={{ opacity: 100, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <Topbar />
        <TodoList />
      </motion.div>
    </TodoContext.Provider>
  );
}

export default App;
