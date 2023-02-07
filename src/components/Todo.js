import {motion} from 'framer-motion';
export const Todo = (props) => {
  return (
    <motion.div initial={{x:1200}} whileInView={{x:0}} transition={{duration:2.5}}
    className="flex items-center w-2/3 border-2 border-blue-200 bg-white rounded-md m-2 p-4">
        <input className="form-checkbox mx-8 p-4" type="checkbox" />
        <div>
          <div className="text-2xl flex justify-evenly">
            <div className="font-semibold">{props.title}</div>
            <div>{props.date.toDateString()}</div>
          </div>
          <div className="text-xl">{props.note}</div>
        </div>
      </motion.div>
  )
}
