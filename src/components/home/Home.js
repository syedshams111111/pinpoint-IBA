import './home.css';
import React from "react";
import vector from "../images/Vector.png";
import bus from "../images/image 3.png";
import logo from "../images/image 2.png";
import NavBar from "../NavBar/NavBar";

function Home () {
    return (
        <>
            <header className="App-header">
                <NavBar/>
                <button className="sign">Sign In</button>
                <img className="img" src={vector} alt=""/>
                <p className="text">The Fast Pinpoint
                    <p className="start">Get Started &rarr;</p>
                    Tracking & Reservation.</p>
                <img className="bus" src={bus} alt=""/>
                <p className="parag">Pinpoint is the fastest tracking and reservation software <br/>solution for personal and enterprise vehicles for institutes,<br/> offices and companies with live tracking, history recording, estimated arrival time and usage report generation and much <br/> more features</p>
                <button className="btn1">5000 Users</button>
                <button className="btn2">10 Trusted Clients</button>
                <button className="btn3">10k+ Downloads</button>
                <p className="parag1">Pinpoint Security,<br/>
                    ensure the best<br/>
                    usage for the institutes</p>
                <p className="parag2">We ensure the best usage for vehicles tracking and reservation system security with advance encryption standards and capability of keeping your assets like car, points much more secure with the live tracking system</p>
                <button className="btn4">Get Started</button>
                <div className="btn5"></div>
                <img className="logo" src={logo} alt=""/>
                <p className="parag3">All copy rights are reserved by Sukkur IBA University</p>
                <div className='circle2 ' >
                    {/* <div className='get-started '> */}
                    <span className='get-started '> Get <br/> Started &rarr;</span>
                </div>
            </header>
        </>
    );
}

export default Home;
