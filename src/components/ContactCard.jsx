import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';

const ContactCard = ({contact}) => {
  return (
    <div key={contact.id} className='flex items-center justify-between bg-yellow rounded-lg p-2'>
              <div className='flex gap-1'>
                <HiOutlineUserCircle className='text-4xl text-orange'/>
                <div className=''>
                  <h2 className='font-medium'>{contact.name}</h2>
                  <p className='text-sm'>{contact.email}</p>
                </div>
              </div>
              <div className='flex text-3xl'>
                <RiEditCircleLine/>
                <IoMdTrash className='text-orange'/>
              </div>
            </div>
  )
}

export default ContactCard;