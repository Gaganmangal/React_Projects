import React from "react";
import { AiOutlineClose } from "react-icons/ai";
export const Modal = ({ isOpen, onClose, Childern }) => {
  return (
    <>
      {isOpen && (
        <>
          <div className=" min-h-[200px] max-w-[80%] m-auto relative z-50 bg-white p-4">
            <div className=" flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className=" text-3xl cursor-pointer"
              />
            </div>
          </div>
          <div
            onclick={onClose}
            className=" absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>
  );
};
