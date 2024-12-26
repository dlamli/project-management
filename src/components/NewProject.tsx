import { useRef } from "react";

import { NewProjectProps } from "../libs/types";
import Input from "./Input";
import Modal from "./Modal";
import Heading from "./Heading";

export default function NewProject({ onAdd, onCancel }: NewProjectProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<Date>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleSave = () => {
    const enteredTitle = titleRef.current?.value;
    const enteredDescription = descriptionRef.current?.value;
    const enteredDueDate = dueDateRef.current?.value;

    const missingFields =
      enteredTitle?.trim() === "" ||
      enteredDescription?.trim() === "" ||
      enteredDueDate?.trim() === "";

    if (missingFields) {
      modalRef.current?.open();
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
        <Heading>Invalid Input</Heading>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <Input label="Title" ref={titleRef} />
        <Input label="Description" isTextArea ref={descriptionRef} />
        <Input label="Due Date" type="date" ref={dueDateRef} />
      </div>
    </>
  );
}
