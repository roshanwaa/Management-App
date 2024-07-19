import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

export const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(
    ref,
    () => {
      return {
        open() {
          dialogRef.current.showModal();
        },
      };
    },
    []
  );
  return createPortal(
    <dialog
      ref={dialogRef}
      className="p-4 backdrop:bg-stone-900/90 rounded-xl shadow-md">
      {children}
      <form action="" method="dialog" className="text-right">
        <button className="py-2.5 px-5 mt-4 text-sm font-medium text-gray-900   rounded-lg border border-gray-900 hover:text-white hover:bg-gray-700 duration-300">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
});
