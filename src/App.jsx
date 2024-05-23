import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
const App = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, 'contacts');
        const contactSnapShot = await getDocs(contactRef);
        console.log(contactSnapShot);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  },[]);
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
    </div>
  )
}

export default App