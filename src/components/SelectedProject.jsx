import React from 'react';
import moment from 'moment';
import { Task } from './Task';

export const SelectedProject = ({
  projects,
  onDelete,
  tasks,
  onAddTask,
  onDeleteTask,
}) => {
  return (
    <>
      <div className="px-8 py-4 rounded-lg border border-slate-200 shadow-2xl h-fit w-6/12 mr-9 mt-20">
        <div className="flex items-center justify-between">
          <span className="text-sm font-normal text-stone-500">
            {moment(projects.dueDate).format('LL')}
          </span>
          <button
            className=" text-red-500 hover:text-red-800 duration-300"
            onClick={onDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          </button>
        </div>
        <div className="mt-2">
          <h2 className="text-3xl font-bold dark:text-black">
            {projects.title}
          </h2>
          <p className="mt-2 font-medium text-gray-900 whitespace-pre-wrap">
            {projects.description}
          </p>
        </div>
        <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
      </div>
    </>
  );
};
