import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './pointer-list.css'
export default function PointerList({ title, description, imgIcon }) {
    return (
        <div className='list-container'>

            {imgIcon && <div className='list-icon-container'> <FontAwesomeIcon icon={imgIcon} /></div>}
            
            <div className='list-content'>
                <div className='list-title'>
                    <h4>{title}</h4>
                </div>

                <h5 className='poppins-light list-description'>
                    {description}
                </h5>
            </div>

        </div>
    )
}
