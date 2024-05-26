import { createContext, useState } from "react";



export const ModalContext = createContext<any>(null);



export const ModalProvider: React.FC<any> = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);


    const onOpenModal = () => {
        setIsOpen(true)
    }

    const onCloseModal = () => {
        setIsOpen(false)
    }

    const onToggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
         <ModalContext.Provider value={{isOpen, onOpenModal, onCloseModal, onToggleModal}}>
            {children}
         </ModalContext.Provider>
    )
}