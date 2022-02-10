import "./intro.scss"
import {init} from "ityped"
import { useEffect ,useRef} from "react"

export default function Intro() {
  const testRef = useRef 

  useEffect(()=>{},[])
  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imgCotainer">
          <img src="pics/profile_pic.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Kirankumar J Meshram</h1>
          <h3> Full Stact Web Developer</h3>
        </div>
        <a href="#portfolio">
          <img src="pics/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
