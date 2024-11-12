import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
export default function Button({title, handleClick, btnColor, arrowright}) {
  return (
    <button className={btnColor} onClick={handleClick}>{title}{arrowright?<span className='iconinbutton'><FontAwesomeIcon icon={faArrowRight}/> </span> : ''}</button>
  )
}
