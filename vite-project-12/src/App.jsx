import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import { Modal } from "./components/Modal";
const App = () => {
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contact");
        const contactSnapshort = await getDocs(contactRef);
        console.log(contactRef);
        const contactlist = contactSnapshort.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactlist);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  return (
    <>
      <div className="mx-auto max-w-[370px]">
        <Navbar />
        <div className=" flex gap-2">
          <div className=" relative flex flex-grow items-center ml-5">
            <FiSearch className=" absolute ml-1 text-3xl text-white " />
            <input
              type="text"
              className=" h-10 flex-grow rounded-md border bg-transparent border-white pl-9 text-white"
            />
          </div>
          <FaPlusCircle
            onClick={onOpen}
            className=" cursor-pointer text-5xl text-white"
          />
        </div>
        <div className=" mt-4 ml-4 flex flex-col gap-3">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
