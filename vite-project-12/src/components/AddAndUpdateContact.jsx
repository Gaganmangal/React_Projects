import { Modal } from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { db } from "../config/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object().shape({
  name: Yup.string().required("Name is Required"),
  number: Yup.number().required("Number is Required"),
  email: Yup.string().email("Invalid Email").required("Email is Required"),
});
export const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addcontact = async (contact) => {
    try {
      const contactRef = collection(db, "contact");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Add Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  const updatecontact = async (contact, id) => {
    try {
      const contactRef = doc(db, "contact", id);
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Update Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact.name,
                  email: contact.email,
                  number: contact.number,
                }
              : { name: "", email: "", number: "" }
          }
          onSubmit={(value) => {
            console.log(value);
            isUpdate ? updatecontact(value, contact.id) : addcontact(value);
          }}
        >
          <Form className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border pl-2" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="name" />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="number">Number</label>
              <Field name="number" className="h-10 border pl-2" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="number" />
              </div>
            </div>
            <div className=" flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <Field name="email" className="h-10 border pl-2" />
              <div className=" text-xs text-red-500">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button className=" bg-orange px-3 py-1.5 border self-end font-bold">
              {isUpdate ? "Update" : "Add"} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
