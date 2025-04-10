import { Link } from "react-router-dom"
import { RxDotFilled } from "react-icons/rx";
import port1 from "../assets/portrait1.jpg"
import port2 from "../assets/portrait2.jpg"
import port3 from "../assets/portrait3.jpg"
import port4 from "../assets/portrait4.jpg"
import { TiStar } from "react-icons/ti";
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { TbMenu4 } from "react-icons/tb";
import { useState } from "react";
import Copyright from "../components/common/Copyright";

const Home = () => {
    const [ active, setActive ] = useState(false);
  return (
    <div className="home-wrapper">
             <div className="inner-row">
                       <div className="home-wrapper-content">
                                   <header>
                                              <Link to={"/"} className="logo">
                                                        <h2>Agulu</h2>
                                                        <span><RxDotFilled /></span>
                                              </Link>

                                              <div className="header-actions">
                                                         <div className="lrg-actions">
                                                                   <Link to={"/auth/login"}>Login</Link>
                                                                   <Link to={"/auth/signup"}>Signup</Link>
                                                         </div>

                                                     <div className="mobile-menu">
                                                                  <span onClick={()=>setActive(!active)} className="menu-btn"><TbMenu4 /></span>

                                                                   <div className={ active ? "mobile-content active" : "mobile-content"}>
                                                                              <div className="mobile-inner">
                                                                                         <Link to={"/auth/login"}>Login</Link>
                                                                                         <Link to={"/auth/signup"}>Signup</Link>
                                                                              </div>
                                                                   </div>
                                                          </div>
                                              </div>
                                   </header>
                                    
                                    <div className="hero-section">
                                                 <div className="hero-texts">
                                                            <h1>Smarter Financial Management, All in One Place.</h1>
                                                            <p>Unlock the full potential of your finances with Agulu — seamlessly manage transactions, generate insightful reports, access tailored credit facilities, and explore a suite of tools designed to help you grow, plan, and thrive.</p>

                                                            <div className="hero-action">
                                                                        <Link to={"/"}>Start Today</Link>
                                                                        <div className="hero-review">
                                                                                     <div className="portraits">
                                                                                                <img src={port1} alt="" />
                                                                                                <img src={port2} alt="" />
                                                                                                <img src={port3} alt="" />
                                                                                                <img src={port4} alt="" />
                                                                                     </div>
                                                                                     <div className="review-texts">
                                                                                               <div className="stars">
                                                                                                           <span><TiStar /></span>
                                                                                                           <span><TiStar /></span>
                                                                                                           <span><TiStar /></span>
                                                                                                           <span><TiStar /></span>
                                                                                                           <span><TiStar /></span>
                                                                                                           <h3>4.8</h3>
                                                                                               </div>
                                                                                               <p>from 50+ <span>reviews</span></p>
                                                                                     </div>
                                                                        </div>
                                                            </div>
                                                 </div>
                                                 <div className="hero-images">
                                                             <div className="hero-row">
                                                                        <img src={hero1} alt="" />
                                                                        <div className="hero-block">
                                                                                    <span className="icon"><TbSquareRoundedCheckFilled /></span>

                                                                                    <h4>Successful Transaction</h4>
                                                                                    <p>Date: Mar 20, 2024</p>
                                                                        </div>
                                                                        <div className="hero-block green">
                                                                                    <span className="icon"><GiMoneyStack /></span>

                                                                                    <h3><span>Ksh.</span> 6,000</h3>
                                                                                    <h5>Received from Musa</h5>

                                                                                    <div className="profile">
                                                                                               <img src={port3} alt="" />
                                                                                    </div>
                                                                        </div>
                                                                         <img src={hero2} alt="" />
                                                             </div>
                                                 </div>
                                    </div>
                                     
                                     <Copyright />
                       </div>
             </div>
    </div>
  )
}

export default Home