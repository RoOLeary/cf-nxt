import React, { createContext, useState } from 'react'; 
export const GlobalContext = createContext({}); 

export const GlobalContextProvider = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ showModalContent, setShowModalContent ] = useState({});
   
    let state = {
        isModalOpen,
        showModalContent
    };

    let handlers = {
        setIsModalOpen,
        setShowModalContent
    }; 

    const provider = [{state, handlers}]

    return(
        <GlobalContext.Provider value={provider}>
            {props.children}
        </GlobalContext.Provider>
    )
}