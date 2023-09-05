import React from "react";
import picture1 from "../Images/Passport2.jpg"

const AboutMe = () => {

    return(
      <div className="about-me">
        <h2>About Me</h2>
        <img src={picture1} alt="Image"></img>
        {/* other way to add image in this do not need to add import
        <img src={require("../Images/Passport2.jpg")} alt="Me"></img> */}
        <p>Hello, My name is Nikita Jagdale. Enthusiastic computer post graduate with basic
           knowledge in coding and design. Ability to learn new softwares and technologies quickly. Capability to work in teams by providing valuable support.
           Looking to utilize my technology and leadership skills in an esteemed organization. I'm passionate about software development and I'm looking forward
           to getting to work on new projects in the near future. Currently studying a web development, I manage projects to develop. I am a Front End developer
           with academic experience building websites and web applications. I specialize in JavaScript and have professional intermediate knowledge of HTML, CSS, JavaScript.
           Take a look at my work or get in touch! https://github.com/NikitaJagdale88
        </p>
      </div>
    )

}
export default AboutMe;