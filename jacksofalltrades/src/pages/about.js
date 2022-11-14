import React, { Component } from "react";
import '../ui-components/studioTheme.js'
import '@aws-amplify/ui-react/styles.css'
import '../ui-components/darkMode.css'
import '../ui-components/About-Us.css'
import { Image, ToggleButton } from "@aws-amplify/ui-react";
import { useDarkMode } from "./darkMode.js";


function AboutUs() {
    const mode = useDarkMode();
    return(
    <html>
        <body  className={`App ${mode}`} style={{maxWidth: "100%", overflowX: "hidden", height: "auto"}}>
        <div style={{textAlign: "center"}}>
            <h1> A little about us! </h1>
            <p style={{fontSize: "20px"}}>This is a little introduction to what our project is about and who we are!</p>
        </div>
            <div style={{textAlign: "left", paddingLeft: "22px", paddingRight: "22px", fontSize: "20px", wordWrap: "normal"}}> 
                <h2> What is Jack Of All Trades? </h2>
                <p> Learning new skills can be a difficult task without the proper resources. Many services out there are overly complicated, time consuming, and may charge hidden fees. 
                    Our website, Jack of all Trades, allows users to effectively learn new simple skills with provided instructions and an engaging interface. The site includes 30 possible 
                    skills to learn and incorporates a user sign-in that stores various accounts. As new skills are learned, the user can check off completed skills to show which ones they have 
                    learned, and which ones have not been learned. Your goal is to try to learn a new skill everyday and find a new passion alongside that. Skills may include learning how to do 
                    pen tricks, tie a tie, juggle, ASL alphabet, morse code, chess, and many more. We used Figma to design a website and AWS Amplify to host a React application. By using  
                    Databases stored on the cloud, we can easily store and read needed information and take measures to secure it as well. Lastly, we will use YouTube to embed instructional videos as part of the website with proper credit.
                </p>
    
            </div>
        <h2 style={{textAlign: "center"}}> Resources </h2>
        <div style={{
            alignContent:'center'
        }}>
            <a href="https://github.com/lmoreau21/JacksOfAllTrades">
                <button className="button" style={{borderRadius:"5px",width:"30vw", marginInline:"35vw", textAlign:"center"}}>Github</button>             
            </a>
        </div>

        <h1 style={{textAlign: "center"}}> Our Team</h1>
        <div className="row">
            <div className="column" style={{float: "left", width: "33%", marginBottom: "16px", padding: "0 8px"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
                    <div className="container">
                    <Image src="assets\images\01.png" alt="Lilly" style={{ borderRadius: "50%", display: "block", marginTop: "auto", marginLeft: "auto", marginRight: "auto", width: "100%"}}></Image>
                        <h2> Lilly Moreau </h2>
                        <p className="title"> Fullstack Engineer </p>
                        <p> AWS and Architecture </p>
                        <p> lmore13@lsu.edu </p>
                        <a href="mailto:lmore13@lsu.edu">
                            <button className="button" style={{borderRadius:"5px",width:"88%", marginBottom:"14px"}}>Contact</button>             
                        </a>
                    </div>
                </div>
            </div>

            <div className="column" style={{float: "left", width: "33%", marginBottom: "16px", padding: "0 8px"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
                    <div className="container">
                        <Image src="assets\images\02.jpg" alt="Alec" style={{ borderRadius: "50%", display: "block", marginTop: "auto", marginLeft: "auto", marginRight: "auto", width: "100%"}}></Image>
                        <h2> Alec Hodges </h2>
                        <p className="title"> Fullstack Engineer </p>
                        <p> Database and Integrations </p>
                        <p> ahodg31@lsu.edu </p>
                        <a href="mailto:ahodg31@lsu.edu">
                            <button className="button" style={{borderRadius:"5px",width:"88%", marginBottom:"14px"}}>Contact</button>             
                        </a>
                    </div>
                </div>
            </div>

            <div className="column" style={{float: "left", width: "33%", marginBottom: "16px", padding: "0 8px"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
                    <div className="container">
                        <Image src="assets\images\03.jpg" alt="Brennan" style={{ borderRadius: "50%", display: "block", marginTop: "auto", marginLeft: "auto", marginRight: "auto", width: "100%"}}></Image>
                        <h2> Brennan Butler </h2>
                        <p className="title"> UI Design </p>
                        <p> List of Activities in DB </p>
                        <p> bbutl38@lsu.edu </p>
                        <a href="mailto:bbutl38@lsu.edu">
                            <button className="button" style={{borderRadius:"5px",width:"88%", marginBottom:"14px"}}>Contact</button>             
                        </a>
                    </div>
                </div>
            </div>

            <div className="column" style={{float: "left", width: "33%", marginBottom: "16px", padding: "0 8px"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
                    <div className="container">
                        <Image src="assets\images\04.jpg" alt="Ian" style={{ borderRadius: "50%", display: "block", marginTop: "auto", marginLeft: "auto", marginRight: "auto", width: "100%"}}></Image>
                        <h2> Ian Gourgues </h2>
                        <p className="title"> FrontEnd Engineer </p>
                        <p> Login & HomePage </p>
                        <p> igourg1@lsu.edu </p>
                        <a href="mailto:igourg1@lsu.edu">
                            <button className="button" style={{borderRadius:"5px",width:"88%", marginBottom:"14px"}}>Contact</button>             
                        </a>
                    </div>
                </div>
            </div>

            <div className="column" style={{float: "left", width: "33%", marginBottom: "16px", padding: "0 8px"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
                    <div className="container">
                        <Image src="assets\images\05.jpg" alt="Michael" style={{ borderRadius: "50%", display: "block", marginTop: "auto", marginLeft: "auto", marginRight: "auto", width: "100%"}}></Image>
                        <h2> Michael Carroll </h2>
                        <p className="title"> UI Design </p>
                        <p> List of Activities in DB </p>
                        <p> mcarr52@lsu.edu </p>
                        <a href="mailto:mcarr52@lsu.edu">
                            <button className="button" style={{borderRadius:"5px",width:"88%", marginBottom:"14px"}}>Contact</button>             
                        </a>
                    </div>
                </div>
            </div>
            
            <div className="column" style={{float: "left", width: "33%", marginBottom: "16px", padding: "0 8px"}}>
                <div className="card" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"}}>
                    <div className="container">
                        <Image src="assets\images\06.png" alt="Zach" style={{borderRadius: "50%", display: "block", marginTop: "auto", marginLeft: "auto", marginRight: "auto", width: "100%"}}></Image>
                        <h2> Zack Kramer </h2>
                        <p className="title"> UI Design </p>
                        <p> Activities Display Listings </p>
                        <p> zkrame1@lsu.edu </p>
                        <a href="mailto:zkrame1@lsu.edu">
                            <button className="button" style={{borderRadius:"5px",width:"88%", marginBottom:"14px"}}>Contact</button>             
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </body>
    </html>
    
);

}

export default AboutUs;