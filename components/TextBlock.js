import {useContext} from 'react';
import { GlobalContext } from './../contexts/GlobalContext';

export default function TextBlock({ heading, content }) {

    const ctx = useContext(GlobalContext); 

    const logCurrent = (e) => {
      console.log('clicked'); 
      ctx[0].handlers.setIsModalOpen(!ctx[0].state.isModalOpen);
      ctx[0].handlers.setShowModalContent(ctx[0].state.showModalContent);
  } 

    return (
      <>
        <div className={'textBlock'}>
        <h2>{heading}</h2>
          <p onClick={(e) => logCurrent(`${heading}`)}>{content}</p>
        </div>
      </>
    )
  }