import { Form } from "formik";
import { Modal } from "./Modal";
import { Formik } from
export const AddAndUpdateContact = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik>
            <Form>

            </Form>
        </Formik>
      </Modal>
    </div>
  );
};
