import "./accordion.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from "react";


export default function Accordion({question, info, isOpen, id, onToggle}) {
  const contentRef = useRef(null); 

  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight); 
    } else {
      setHeight(0); 
    }
  }, [isOpen]); 

let arrowIcon = faArrowUp;
  if(!isOpen){
      arrowIcon = faArrowDown;
  } 
    
  
  return (
  
    <div className={`accordion ${isOpen ? 'bg-yellowpink' : ''}`}>
        <div className='accordion-title'>
         <h4 className='poppins-semibold text-left'>{question}</h4> 
        <button className='accordion-toggler' onClick={()=> onToggle(id)}>
          <FontAwesomeIcon icon={arrowIcon}/>
        </button>
        </div>
        <div className="accordion-content"
        style={{
          maxHeight: isOpen ? `${height + 100}px` : '0px', 
          overflow: 'hidden', 
          transition: 'max-height 0.3s ease-out', 
        }}
      >
     <p ref={contentRef} className='poppins-regular accordion-info'>
        {info}</p>
        </div>
    </div>
  )
}

