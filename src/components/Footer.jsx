import React from 'react'
import logoImg from "../assets/image.png" 
import Button from './button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    function handleClick(){
        console.log("works")
    }
  return (
    <div className='poppins-regular '>

    <div className='reach mb2'>
       <div class="reach-content text-left">
        <h1 className='title-2'>Reach Out And Connect</h1>
        <p className='poppins-light'>Have somethinhg on your mind? Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fuga odio tenetur voluptas optio rem labore ratione, quidem officia repellat reiciendis beatae dignissimos. Vero eum facere natus, magni ipsum aliquam.</p>
        </div>
    
        <Button title={"Get In Touch"} handleClick={handleClick} btnColor={"btn btn-dark"} arrowright={false}/>
    </div>

    <div class="footerlinks">
    <div className='socials'>
        <div>
            <div>
                 <img src={logoImg}  style={{ height: "100px" }}  alt=""/>
            </div>

        <p >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam minus, ducimus illum soluta sequi harum. Repudiandae sint fugiat hic quisquam exercitationem, aperiam vitae nulla eaque rerum! Repellendus nostrum illo ut.</p>

         <div className='social-icons'>
          <FontAwesomeIcon icon={faFacebook}/>
          <FontAwesomeIcon icon={faInstagram}/>
          <FontAwesomeIcon icon={faTelegram}/>
         </div>
        </div>
    </div>


    <div className='quicknav'>
        <h1>Quick Nav</h1>
         <ul>
            <li>About Us</li>
            <li>features</li>
            <li>Why Us</li>
            <li>Testimonials</li>
         </ul>
        </div>
   

    <div className='solution'> 
        <h1>Solution</h1>
        <ul>
            <li>6532 fewiufiefufuhu anrizons</li>
            <li>Email@mail.com</li>
            <li>+95-678798657</li>
            <li>07:00am - 23:00pm</li>
         </ul> 
        </div>

    </div>

    <div className='rightsreserved'>
        <p className='poppins-light'> All Rights Reserved. Copyright Onetaag 2023-2024</p>
    </div>
</div>


  )
}
