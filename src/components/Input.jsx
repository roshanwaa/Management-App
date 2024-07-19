import React, { forwardRef } from 'react';

export const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const className =
    'peer h-full w-full rounded-[7px]  !border  !border-gray-300 border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700  shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2  focus:!border-gray-300 focus:border-t-transparent focus:!border-t-gray-300 focus:outline-0 focus:ring-gray-900/10';

  return (
    <>
      <p className="flex flex-col gap-2 my-4">
        <label
          htmlFor={label}
          className="text-base font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea ref={ref} name="" id="" className={className} />
        ) : (
          <input ref={ref} {...props} className={className} />
        )}
      </p>
    </>
  );
});
