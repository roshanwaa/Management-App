import React, { useRef } from 'react';
import { Input } from './Input';
import { Modal } from './Modal';

export const NewProject = ({ onAdd, onCancel }) => {
  const modalRef = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = (e) => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-2xl font-bold text-red-500 mb-2">Invalid Input</h2>
        <p className="text-stone-500 mb-2">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-500">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="px-5 py-2.5 font-medium bg-slate-100 hover:bg-slate-200 hover:text-slate-600 text-slate-500 rounded-lg text-sm"
              onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-5 py-2.5 font-medium bg-slate-700 hover:bg-slate-800 text-white rounded-lg text-sm"
              onClick={handleSave}>
              Save
            </button>
          </li>
        </menu>
        <div className="">
          <Input label={'Title'} ref={title} type="text" />
          <Input label={'Description'} textarea ref={description} />
          <Input label={'Due Date'} ref={dueDate} type="date" />
        </div>
      </div>
    </>
  );
};
