import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import ContactCard from './components/ContactCard';

const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, 'contacts');
        const contactSnapShot = await getDocs(contactRef);
        const contactList = contactSnapShot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
        setContacts(contactList);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  },[]);
  console.log(contacts);
  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <Navbar/>
      <div className='flex gap-2'>
        <div className='flex relative items-center flex-grow '>
          <FiSearch className='text-white text-3xl absolute ml-1'/>
          <input type="text" className='flex-grow border border-white bg-transparent h-10 rounded-md text-white pl-9'/>
        </div>
        <div className='text-white text-4xl'>
          <AiFillPlusCircle/>
        </div>
      </div>
      <div className='flex flex-col gap-3 mt-4'>{
        contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact}/> 
        ))    
          
      }</div>
    </div>
  )
}

export default App