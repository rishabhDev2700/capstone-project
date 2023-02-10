import { motion } from "framer-motion";
import { GrTrash } from "react-icons/gr";
export const Todo = (props) => {
  const date = new Date(props.date);
  const daysLeft = parseInt((date - Date.now()) / (1000 * 24 * 60 * 60));
  return (
    <motion.div
      initial={{ x: 1200 }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }}
      className="flex justify-between items-center w-2/3 border-2 border-blue-200 bg-white rounded-md m-2 p-4"
    >
      <input className="form-checkbox mx-8 p-4" type="checkbox" />
      <div className="flex flex-col">
        <div className="text-2xl w-full">
          <div className="font-semibold">{props.title}</div>
          <div>{date.toDateString()}</div>
        </div>
        <div className="text-xl">{props.note}</div>
      </div>
      <div className="text-red-600">Days left: {daysLeft}Approx</div>
      <div className="cursor-pointer" onClick={() => props.remove(props.uid)}>
        <GrTrash className="scale-150 mr-8" />
      </div>
    </motion.div>
  );
};
