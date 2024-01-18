import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import Navbar from "./components/Navbar";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
const App = () => {
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
        <FaPlusCircle className=" cursor-pointer text-5xl text-white" />
      </div>
    </div>
  );
};

export default App;
