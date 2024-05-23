import { useState } from "react";

const useDisclouse = () => {
    const [isOpen, setOpen] = useState(false);

    const onOpen = () => {
        console.log('onOpen');
      setOpen(true);
    }
  
    const onClose = () => {
      setOpen(false);
    }
  return { onOpen, onClose, isOpen};
}

export default useDisclouse;