import React from "react";
import Navbar from "./Components/Navbar";
import "./style.css";
import AboutMe from "./Components/AboutMe";
import Section from "./Components/Section";
import Block from "./Components/Block";


const App = () =>{

    return(
        <div>
            <Navbar />
            <AboutMe />
            <Section title="Skills"
             des="As a fresher in web development, I am in the early stages of building my web development skills, and I'm eager to learn and grow in this field. I have a solid foundation in HTML and CSS, which are the essential languages for creating the structure and styling of web pages. Additionally, I am familiar with JavaScript, a dynamic scripting language that allows me to add interactivity and functionality to websites. I have a keen interest in responsive web design, which involves creating websites that adapt seamlessly to various screen sizes and devices. I understand the importance of making web content accessible to all users, and I aim to learn more about web accessibility standards and practices." />
            
            <Section title="Education"
            des="My educational background includes a Bachelor's degree in BCA  from North Maharashtra University(NMU). During this undergraduate program, I gained a solid foundation in computer programming, algorithms, data structures, software development, and computer hardware, which laid the groundwork for my career in computer programming. Building on that, I pursued a Master's degree in MCA at Yashwantrao Chavan Maharashtra Open University (YCMOU), where I delved deeper into in software development, computer systems, and IT management. MCA programs often cover advanced topics in programming languages. My education has equipped me with both theoretical knowledge and practical skills, allowing me to approach complex challenges in programming with a well-rounded perspective. I continue to stay updated with the latest developments in my field through continuous learning and professional development." />
            
            <Section title="Experience"
            des="I have 1.3 years of experience in Tech mahindra pvt. ltd. Where i was work in UPS. we Determine method of shipment and prepare bills of
                 lading, invoices, and other shipping documents. Work on Ups with tools like IDC. Verifying, Keying orentering shipments Data in IDC tool.
                 Estimate freight or postal rates and record shipment costs and weights. Analyze IDC and invoice data.
                 Keep records of all goods shipped, received, and stored." />

           <Block />
        </div>
    )
}

export default App;
