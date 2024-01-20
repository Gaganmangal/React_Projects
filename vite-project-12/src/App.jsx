import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import { AddAndUpdateContact } from "./components/AddAndUpdateContact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        onSnapshot(contactRef, (sanpshot) => {
          const contactlist = sanpshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactlist);
          return contactlist;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  const filterContacts = (e) => {
    const value = e.target.value;

    const contactRef = collection(db, "contact");
    onSnapshot(contactRef, (sanpshot) => {
      const contactlist = sanpshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);

      return filteredContacts;
    });
  };

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
      <ToastContainer position=" bottom-end" />
    </>
  );
};

export default App;
