import React from "react";

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiGithubBadge,
    DiSass,
    DiReact
} from "react-icons/di"

const technologies = [
    {id:"html" , name:"HTML5", icon:<DiHtml5/>, text: "Conhecimentos avançados de HTML5 semântico, criação de um HTML bem construido para facilitar a estilização."},
    {id: "css" , name:"CSS3", icon:<DiCss3/>, text: "Conhecimentos avançados de CSS3, como por exemplo criação de layout responsivo, design patters e animações."},
    {id:"js" , name:"JavaScript", icon:<DiJsBadge/>, text: "Conhecimentos intermediários de JavaScript, seleção e controle de elementos do DOM, conhecimento em Objetos e Funções."},
    {id:"git" , name:"GitHub", icon:<DiGithubBadge/>, text: "Conhecimento em versionamento de código utilizando git e github, além de conhecimentos na utilização do GitHub Desktop."},
    {id:"sass", name:"Sass", icon:<DiSass/>, text: "Conhecimentos avançados em Sass, criação de mixins, variáveis, módulos isolados utilizando arquitetura profissional de arquivos."}, 
    {id:"react", name:"React", icon:<DiReact/>, text: "Conhecimentos básicos em React, criação de componentes e reutilização de código, atualmente aprendendo a tecnologia mais a fundo."},
]

const TechnologiesContainer = () => {
    return <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>{tech.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
}

export default TechnologiesContainer;