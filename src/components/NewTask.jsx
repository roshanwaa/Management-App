import React, { useRef, useState } from 'react';

export const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');

  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleClick = () => {
    if (enteredTask.trim() === '') {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex gap-4 justify-between mb-4">
      <input
        type="text"
        className="flex-grow px-3 focus:outline-none rounded-md !border  !border-gray-300 border-t-transparent bg-transparent bg-white py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all  placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-300 focus:border-t-transparent focus:!border-t-gray-300 focus:outline-0 focus:ring-gray-900/10"
        placeholder="Add a new task!"
        onChange={handleChange}
        value={enteredTask}
      />
      <div className="flex justify-end">
        <button
          className="px-3 gap-2 py-2 text-blue-800 font-semibold border-2 border-blue-800 rounded-md hover:bg-blue-600 hover:text-white text-sm hover:border-blue-600 duration-300 flex justify-center items-center"
          onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Task
        </button>
      </div>
    </div>
  );
};
