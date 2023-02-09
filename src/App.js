import { TodoList } from "./components/TodoList";
import { Topbar } from "./components/Topbar";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Completed } from "./components/Completed";
import { Incomplete } from "./components/Incomplete";
import { createContext, useState, useMemo} from "react";

export const TodoContext = createContext({todo:[], setTodo:()=>{}});

function App() {
  const [todoList,setTodoList] = useState([]);
  const value = useMemo(
    () => ({ todoList, setTodoList }), 
    [todoList]
  );
  
  return (
    <TodoContext.Provider value={value}>
      <motion.div
        className="bg-violet-100"
        initial={{ opacity: 0, x: -600 }}
        whileInView={{ opacity: 100, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <BrowserRouter>
          <Topbar />
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/completed" element={<Completed />} />
            <Route path="/incomplete" element={<Incomplete />} />
          </Routes>
        </BrowserRouter>
      </motion.div>
    </TodoContext.Provider>
  );
}

export default App;
