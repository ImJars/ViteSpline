import React from "react";
import Bar_component from "./bar_component";

function Menu_component({
    animationHome,
    animationAbout,
    animationSkills,
    animationProjects,
    animationContact,
}) {
    return (
        <>
            <nav
                className="fixed transform -translate-y-1/2 right-5 
                                sm:top-1/2 w-24 top-1/2 hidden sm:block z-50"
            >
                <Bar_component
                    animateBar={ animationHome }
                    link="#Home"
                    nameLink="HOME"
                />
                <Bar_component
                    animateBar={ animationAbout }
                    link="#About"
                    nameLink="ABOUT"
                />
                <Bar_component
                    animateBar={ animationSkills }
                    link="#skills"
                    nameLink="SKILLS"
                />
                <Bar_component
                    animateBar={ animationProjects }
                    link="#projects"
                    nameLink="PROJECTS"
                />
                <Bar_component
                    animateBar={ animationContact }
                    link="#contact"
                    nameLink="CONTACT"
                />
            </nav>
        </>
    );
}

export default Menu_component;
