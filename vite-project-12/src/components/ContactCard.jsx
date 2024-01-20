import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const ContactCard = ({ contact }) => {
  return (
    <div>
      <div
        key={contact.id}
        className=" flex items-center  justify-between rounded-lg bg-yellow p-2.5"
      >
        <div className=" flex gap-2">
          <div>
            <h1 className="flex gap-1 font-medium mb-1">
              <HiOutlineUserCircle className=" text-2xl text-orange" />
              {contact.name}
            </h1>
            <h3 className="flex gap-1 font-medium">
              <FaMobileAlt className=" text-2xl text-orange" />
              {contact.number}
            </h3>
            <p className="flex gap-1 font-medium mt-1">
              <MdOutlineMail className=" text-2xl text-orange" />
              {contact.email}
            </p>
          </div>
        </div>
        <div className=" flex text-4xl">
          <RiEditCircleLine />
          <IoMdTrash className=" text-orange" />
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
