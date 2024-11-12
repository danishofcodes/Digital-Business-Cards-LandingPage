import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./go-to-top.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function GoToTop() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1800) {
      setShowGoToTop(true);
    } else {
      setShowGoToTop(false);
    }
  };



function handleScrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
}


useEffect(()=>{

  window.addEventListener('scroll', handleScroll)

},[])
  
  
return (
  showGoToTop && ( <button className="go-to-top active" onClick={handleScrollToTop}>
         <FontAwesomeIcon icon={faArrowUp}/>
    </button>)
  )
}
