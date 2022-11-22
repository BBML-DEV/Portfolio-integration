import InformationContainer from "./InformationContainer";
import SocialNetworks from "./SocialNetworks";
import React from "react";
import Banner from "/public/img/imagem-teste.jpg";


const Sidebar = () =>{

    return <aside id="sidebar">
        <img src={Banner} alt="Banner developer"/>
        <p className="title">Desenvolver Junior</p>
        <SocialNetworks/>
        <InformationContainer/>
        <div class="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           <a href="/public/curriculo/Curriculo.pdf" download="Curriculo.pdf">download currículo</a>
        </div>
    </aside>

}

export default Sidebar;