import {useContext} from 'react';
import { GlobalContext } from './../contexts/GlobalContext';

export default function TextBlock({ heading, content }) {


    console.log(heading);
    const ctx = useContext(GlobalContext); 
    const toggled = ctx[0].state.toggledText; 


    const logCurrent = (e) => {
      console.log('clicked'); 
      ctx[0].handlers.setIsModalOpen(!ctx[0].state.isModalOpen);
      ctx[0].handlers.setShowModalContent(ctx[0].state.showModalContent);
      ctx[0].handlers.setToggledText('toggled, now go away');
  } 

    return (
      <>
        <div className={'textBlock'}>
        <h2>{heading ? heading : 'Placeholder TextBlock Heading'}</h2>
          <small>{toggled ? toggled : '#'}</small>
          <p onClick={(e) => logCurrent(`${heading}`)}>{content}</p>
        </div>
      </>
    )
  }