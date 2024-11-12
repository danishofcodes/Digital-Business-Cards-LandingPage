import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./steps-card.css";

export default function StepsCard({ stepNo, title, description, imgIcon }) {
    return (
        <>
            <div class="step-card bg-yellowpink">
                <h1 class="step-number poppins-bold">{stepNo}</h1>
                <div class="step-icon">
                    {/* <img src={imgIcon} alt={title} /> */}
                    <FontAwesomeIcon icon={imgIcon}/>
                </div>
                <h5 class="step-title text-dark poppins-semibold" >{title}</h5>
                <p class="step-description poppins-regular">{description}</p>
            </div>
        </>
    )
}
