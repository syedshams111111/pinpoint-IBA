import './About.css';
import React from "react";
import vector from "../images/Vector.png";
import logo from "../images/image 2.png";
import NavBar from "../NavBar/NavBar";
import image4 from "../images/image 4.png"

function About () {
    return (
        <>
            <header className="App-header">
                <NavBar/>
                <button className="sign">Sign In</button>
                <img className="img" src={vector} alt=""/>
                <div className="btn5"></div>
                <img className="logo" src={logo} alt=""/>
                <p className="parag3">All copy rights are reserved by Sukkur IBA University</p>
                <div className='circle3 ' >
                    {/* <div className='get-started '> */}
                    <span className='get-started1 '> Get <br/> Started &rarr;</span>
                </div>
                <span className="about">About Pinpoint</span>
                <img className="img5" src={image4} alt=""/>
                <p className="parag5">Pinpoint is the fastest tracking and reservation software solution for personal and enterprise vehicles for institutes,<br/> offices and companies with live tracking, history recording,<br/> estimated arrival time and usage report generation and much<br/> more features.<br/><br/>

                   <br/> We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more<br/> secure with the live tracking system</p>

            </header>
        </>
    );
}

export default About;
