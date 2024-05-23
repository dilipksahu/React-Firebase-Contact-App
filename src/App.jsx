import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const {onOpen, onClose, isOpen} = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, 'contacts');
        // const contactSnapShot = await getDocs(contactRef);
        onSnapshot(contactRef, (snapShot) => {
          const contactList = snapShot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });
          setContacts(contactList);
          return contactList;
        })
       
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  },[]);

  const filterContact = async (e) => { 
    const value = e.target.value;
    const contactRef = collection(db, 'contacts');
        onSnapshot(contactRef, (snapShot) => {
          const contactList = snapShot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          });
          const filteredContacts = contactList.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));
          setContacts(filteredContacts);
          return filteredContacts;
        })
  }
  return (
    
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <Navbar/>
        <div className='flex gap-2'>
          <div className='flex relative items-center flex-grow '>
            <FiSearch className='text-white text-3xl absolute ml-1'/>
            <input onChange={filterContact} type="text" className='flex-grow border border-white bg-transparent h-10 rounded-md text-white pl-9'/>
          </div>
          <div className='text-white text-4xl'>
            <AiFillPlusCircle onClick={onOpen}/>
          </div>
        </div>
        <div className='flex flex-col gap-3 mt-4'>{
          contacts.length === 0 ? <NotFoundContact/> : contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact}/> 
          ))    
            
        }</div>
       <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>
       <ToastContainer position='bottom-center'/>
      </div>
    </>
  )
}

export default App