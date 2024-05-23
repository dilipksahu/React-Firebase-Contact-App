import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({isOpen, onClose, children}) => {
  return  createPortal(
    <>
        {isOpen && (
            <>
                <div className="relative z-50 min-h-[200px] max-w-[80%] bg-white p-4 m-auto">
                    <div className="flex justify-end">
                        <AiOutlineClose onClick={onClose} className="text-2xl"/>
                    </div>
                    {children}
                </div>
                <div onClose={onClose} className="absolute top-0 z-40 backdrop-blur h-screen w-screen"/>
            </>
        )}
    </>, document.getElementById('modal-root')
  )
}

export default Modal