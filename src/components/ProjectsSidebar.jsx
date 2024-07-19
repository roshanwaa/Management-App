import React from 'react';

export const ProjectsSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectID,
}) => {
  return (
    <aside className=" px-8 py-16 bg-gray-900 text-stone-50 w-3/12">
      <h2 className="mb-8 font-bold uppercase md:text-3xl text-stone-50">
        Your Project
      </h2>
      <div className="flex justify-end">
        <button
          className="px-3 gap-2 py-2 text-green-500 font-semibold border-2 border-green-500 rounded-md hover:bg-green-700 hover:text-white hover:border-green-700 duration-300 flex justify-center items-center text-sm"
          onClick={onStartAddProject}>
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
          Add Project
        </button>
      </div>

      <ul className="mt-8">
        {projects.map((prj) => {
          let cssClasses =
            'w-full text-left px-3 py-2 rounded-lg my-2 bg-slate-700 hover:text-stone-100 hover:bg-slate-800 duration-300';

          if (prj.id === selectedProjectID) {
            cssClasses += 'bg-stone-800 text-stone-200';
          } else {
            cssClasses += 'text-stone-200 ';
          }
          return (
            <li key={prj.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(prj.id)}>
                {prj.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
