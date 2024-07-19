import React from 'react';

export const TaskList = ({ task, deleteTask }) => {
  return (
    <div key={task.id}>
      <li className="flex justify-between items-center my-4 h-10 px-4 rounded-xl hover:bg-gray-200">
        <span>{task.text}</span>
        <button
          className=" text-red-500 hover:text-red-800 duration-300"
          onClick={() => {
            deleteTask(task.id);
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"></path>
          </svg>
        </button>
      </li>
    </div>
  );
};
