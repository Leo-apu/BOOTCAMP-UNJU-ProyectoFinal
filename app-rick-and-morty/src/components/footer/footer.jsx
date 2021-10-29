
import { Container,Row } from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./footer.css";

export default function Footer(){
        return(
            <footer>
                <div className="footer-developers">
                    <h2>Cristian Michel</h2>
                    <h2>Leandro Cruz</h2>
                </div>

                <div className="footerContainer">
                <ul>
                    <li><a className="twitter link" href="https://twitter.com/mike47k1" target="_blank"></a></li>
                    <li><a className="linkedin link" href="https://www.linkedin.com/in/cristian-michel-a3b986200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlbtJjWNmT7aXEs8%2B0mEKyw%3D%3D" target="_blank"></a></li>
                </ul>

                <ul>
                    <li><a className="twitter link" href="" target="_blank"></a></li>
                    <li><a className="linkedin link" href="https://www.linkedin.com/in/leandro-victorino-cruz-281889224" target="_blank"></a></li>
                </ul>
                
                </div>
                <h3><Link to="/contact">Contact Us</Link></h3>
            </footer>
        );
    }
