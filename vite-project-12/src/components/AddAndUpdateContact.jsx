import { Modal } from "./Modal";
import { Field, Form, Formik } from "formik";
export const AddAndUpdateContact = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik>
          <Form>
            <div className=" flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <Field name="name" className="h-10 border" />
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
