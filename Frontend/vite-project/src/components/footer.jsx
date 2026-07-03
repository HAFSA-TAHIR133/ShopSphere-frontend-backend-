import React from "react";
import { MdCopyright } from 'react-icons/md';
import { Link } from "react-router-dom";
import '../css/footer.css';
import { 
  FaXTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaGoogle, 
  FaLinkedinIn 
} from 'react-icons/fa6';

function Footer(){
    return(
        <>
            <div className="footer">
                <h3>ShopSphere</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, odit blanditiis. Neque illo, autem rerum commodi possimus earum soluta tenetur temporibus laudantium cumque numquam fugit quasi, consequuntur cum odio aliquid!</p>
                <div className="footer-icons">

                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <FaXTwitter color="#000000" />
                    </a>

                
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FaInstagram color="#E1306C" />
                    </a>

                
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <FaFacebookF color="#1877F2" />
                    </a>

                
                    <a href="https://google.com" target="_blank" rel="noreferrer" aria-label="Google">
                        <FaGoogle color="#DB4437" />
                    </a>


                    <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FaLinkedinIn color="#0077B5" />
                    </a>
        </div>
        <div className="home-about-copyright-options">
            <span>Copyright <MdCopyright /><span> All rights reserved.</span>
            </span>
            <div className="home-about-options">
                <Link to='/home'>Home</Link>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
            </div>
        </div>
    </div>
        </>
    );
}
export default Footer;