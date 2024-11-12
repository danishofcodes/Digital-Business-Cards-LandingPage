import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '../button/Button'
import blogdot from '../../assets/blogdot.png'
export default function BusinessCardSlider() {
   function handleClick(){
        console.log("works")
    }
    return (
        <div class="slider">
            <div class="slider-cards">
                <button className='slider-navigate'><FontAwesomeIcon icon={faArrowLeft}/></button>
                    <div class="businesscard">
                        <img src={blogdot} alt="blogdot"/>
                    </div>
                <button className='slider-navigate'><FontAwesomeIcon icon={faArrowRight}/></button>
            </div>
            <div class="options">
                <Button title={"Front/Back"} handleClick={handleClick} btnColor={"btn btn-dark"} arrowright={false} />
                <Button title={"Design My Own"} handleClick={handleClick} btnColor={"btn btn-light-outline"} arrowright={false} />
            </div>
        </div>
    );
}
