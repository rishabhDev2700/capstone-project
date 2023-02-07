import React from 'react'

export const Todo = (props) => {
  return (
    <div className="flex items-center w-2/3 border-2 border-blue-200 bg-white rounded-md m-2">
        <input className="form-checkbox mx-8 p-4" type="checkbox" {...`${props.done?"?":"d"}`}/>
        <div>
          <div className="text-2xl flex justify-evenly">
            <div className="font-semibold">{props.title}</div>
            <div>{props.date.toString()}</div>
          </div>
          <div className="text-xl">{props.note}</div>
        </div>
      </div>
  )
}
