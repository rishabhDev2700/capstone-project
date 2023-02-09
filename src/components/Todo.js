import {motion} from 'framer-motion';
import { GrTrash } from 'react-icons/gr';
export const Todo = (props) => {
  const date = new Date(props.date);
  return (
    <motion.div initial={{x:1200}} whileInView={{x:0}} transition={{duration:2.5}}
    className="flex justify-between items-center w-2/3 border-2 border-blue-200 bg-white rounded-md m-2 p-4">
        <input className="form-checkbox mx-8 p-4" type="checkbox" />
        <div className='flex flex-col'>
          <div className="text-2xl w-full">
            <div className="font-semibold">{props.title}</div>
            <div>{date.toDateString()}</div>
          </div>
          <div className="text-xl">{props.note}</div>
        </div>
        <GrTrash className='scale-150 mr-8'/>
      </motion.div>
  )
}
