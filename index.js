import React from "react"
import ReactDOM from "react-dom"
import Avatar from "./Avatar.js"
import About from "./About.js"
import Interests from "./Interests"
import Footer from "./Footer"


ReactDOM.render(
    <div className="cont">
    <Avatar />
    <About />
    <Interests />
    <Footer />
    </div>, document.getElementById("root")
)