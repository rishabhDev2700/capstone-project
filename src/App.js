import { TodoList } from "./components/TodoList";
import { Topbar } from "./components/Topbar";
import { motion } from "framer-motion";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Completed } from "./components/Completed";
import { Incomplete } from "./components/Incomplete";
function App() {
  return (
    <motion.div
      className="bg-red-200"
      initial={{ opacity: 0, x: -700 }}
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
  );
}

export default App;
