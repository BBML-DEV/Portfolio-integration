import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";
import React from "react";

const socialNetworks = [
    {name: "linkedin", social:"https://www.linkedin.com/in/paulo-vitor-12ba241b2/", icon: <FaLinkedinIn />},
    {name: "github",social:"https://github.com/BBML-DEV", icon: <FaGithub />},
    {name: "instagram",social:"https://www.instagram.com/?hl=pt-br", icon: <FaInstagram />},
];

const SocialNetworks = () =>{
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.social} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
            
        ))}
    </section>
}

export default SocialNetworks;