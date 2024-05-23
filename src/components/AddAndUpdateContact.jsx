import { Field,Form, Formik } from "formik"
import Modal from "./Modal"
import { collection, addDoc } from "firebase/firestore";
import {db} from '../config/firebase';

const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {
    const addContact = async (contact) => {
        try {
            const contactRef = collection(db, 'contacts');
            await addDoc(contactRef, contact);
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <Modal isOpen={isOpen} onClose={onClose} >
        <Formik
            initialValues={isUpdate ? {
                name: contact.name,
                email: contact.email,
            } : {
                name: "",
                email: "",
            }}
            onSubmit={(values) => {
                console.log(values);
                addContact(values);
            }}
        >
            <Form className="flex flex-col gap-4 " >
                <div className="flex flex-col gap-1">
                    <label htmlFor="name">Name</label> 
                    <Field name="name" className="h-10 border px-2"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email</label>
                    <Field  name="email" className="h-10 border px-2"/>
                </div>
                <button  className="bg-orange py-1.5 px-3 border self-end">{isUpdate ? "Update" : "Add"} Contact</button>
            </Form>
        </Formik>
    </Modal>
  )
}

export default AddAndUpdateContact