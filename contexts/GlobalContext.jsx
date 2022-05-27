import React, { createContext, useState } from 'react'; 
export const GlobalContext = createContext({}); 

export const GlobalContextProvider = (props) => {
    const [ isModalOpen, setIsModalOpen ] = useState(false);
    const [ showModalContent, setShowModalContent ] = useState({});
    const [ toggledText, setToggledText] = useState(''); 
   
    let state = {
        isModalOpen,
        showModalContent,
        toggledText
    };

    let handlers = {
        setIsModalOpen,
        setShowModalContent,
        setToggledText
    }; 

    const provider = [{state, handlers}]

    return(
        <GlobalContext.Provider value={provider}>
            {props.children}
        </GlobalContext.Provider>
    )
}