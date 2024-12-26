import { createPortal } from "react-dom";
import { ModalProps } from "../libs/types";
import { useImperativeHandle, useRef } from "react";
import Button from "./Button";

export default function Modal({ children, ref, buttonCaption }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef?.current?.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")!
  );
}
