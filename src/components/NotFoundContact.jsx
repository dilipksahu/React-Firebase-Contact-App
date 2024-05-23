import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex items-center justify-center gap-4 h-[80vh]'>
        <img src="/images/contact.png" alt="contact" />
        <h3 className='text-white text-2xl font-semibold'>No Contact Found</h3>
    </div>
  )
}

export default NotFoundContact