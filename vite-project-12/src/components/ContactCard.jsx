import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { FaMobileAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { db } from "../config/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import useDisclouse from "../hooks/useDisclouse";
import { AddAndUpdateContact } from "./AddAndUpdateContact";
const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclouse();
  const deleteContact = async (id) => {
    try {
      console.log(id);
      await deleteDoc(doc(db, "contact", id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
            <RiEditCircleLine onClick={onOpen} className=" cursor-pointer" />
            <IoMdTrash
              onClick={() => deleteContact(contact.id)}
              className=" text-orange cursor-pointer"
            />
          </div>
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
