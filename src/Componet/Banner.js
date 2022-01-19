import React from 'react';

import { FaFacebook, FaLinkedin, FaGithub, FaTwitter} from "react-icons/fa";
import { SiLeetcode, SiGmail } from "react-icons/si";



const Banner = () => {
    return (
        <div className='banner'>
            <div className='col-6 banner_left '>
                <div className='banner_logo'>
                    <ul className='banner_first'>
                       

                        <li>
                        <a href='https://www.google.com'>
                            <FaLinkedin></FaLinkedin>
                            </a>
                        </li>
                        <li>
                        <a href='https://www.google.com'>
                            <FaGithub></FaGithub>
                            </a>
                        </li>
                        <li>
                        <a href='https://www.google.com'>
                            <SiLeetcode></SiLeetcode>
                            </a>
                        </li>
                        <li>
                            
                        <a href='https://www.google.com'>
                            <SiGmail></SiGmail>
                            </a>
                        </li>

                    </ul>


                </div>
                 <h1>HELLO THIS IS SURAJ KANNUJIYA</h1>
                 <h2>
                      NOW,I am purshing my grutution form NIT SRINAGAR
                 </h2>
                 <p>
                      YOU AN
                 </p>

            </div>
            <div className='col-7 banner_rigth'>
                {/* <img  className='logo' src={require("../image/logo_my.jpg")} alt='photo'/> */}

            </div>



        </div>
    )
}



export default Banner
