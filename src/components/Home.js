import React from 'react'
import {Link} from 'react-router-dom'

//resources
import profilePhoto from '../resources/me.jpg'
import "../styles/home.css"
import "../styles/portafolio.css"

//images
import example1 from '../resources/1.png'
import example2 from '../resources/2.png'
import example3 from '../resources/3.png'


//Icons
import { BiLeftArrow,BiRightArrow  } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter, FaGithub, } from "react-icons/fa";

const Home = () => {

    //Scripts here!
      
    //Render
    return(
        <div>

            {/* Page Loader */}
            <div className="page-loader">
                <div className="page-loader-inner">
                    <div className="circle">
                    </div>
                        Loading
                </div>
            </div>

            {/* Header section */}
            <header className="header">
                <div className="container">
                    <div className="row flex-end">
                        <button type="button" className="nav-toggler">
                            <span></span>
                        </button>
                        <nav className="nav">
                            <div className="nav-inner">
                                <ul>
                                    <li><Link to="#about" className="nav-item link-item">About</Link></li>
                                    <li><Link to="#portfolio" className="nav-item link-item">Porfolio</Link></li>
                                    <li><Link to="#contact" className="nav-item link-item">Contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <div className="overlay-effect">
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
                <div className="overlay-effect-item"></div>
            </div>


            {/* Effect Background */}
            <div className="bg-animation-effect"></div>

            

            {/* about-Section */}
            <section className="aboutSection active" id="about">
                <div className="container">
                <div className="row min-vh-100">
                    <div className="aboutContent">
                        <div className="loader">
                            <span className="contentPhoto">
                            <img src={profilePhoto} alt="Me about me"/>

                            </span>
                        </div>

                        <h1>Hi!, Im Josue Alvarado.</h1>
                        <p>I´m a <span>Front-end Developer</span> i´ve been working in landing pages and web apps using  
                         <span> HTML5</span> , 
                         <span>CSS3</span> , 
                         <span>Javascript</span> , 
                         <span>ReactJS</span> , 
                         <span>VueJS</span> , 
                         <span>Bootstrap</span> ,  
                         <span>Materialize</span> ,  
                         <span>Material/ui</span>, 
                         <span>and more</span>. 
                          You can look my latest works on the  
                             <Link to="#portfolio" className="link-item"> portafolio page</Link>
                        </p>

                        <h2>Technologies</h2>
                        <div className="skills">
                            <div className="skill-item htmlSkill">HTML5</div>
                            <div className="skill-item cssSkill">CSS3</div>
                            <div className="skill-item jsSkill">Javascript</div>
                            <div className="skill-item reactSkill">ReactJs</div>
                            <div className="skill-item angularSkill">Angular</div>
                            <div className="skill-item vueSkill">VueJS</div>
                            <div className="skill-item bootstrapSkill">Boostrap</div>
                        </div>

                    </div>
                    </div>

                </div>
            </section>

            {/* Portafolio */}
            <section className="portafolioSection sec-padding" id="portfolio">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Recent Works</h2>
                        </div>    
                    </div>

                    <div className="row">
                        <div className="portfolio-filter">
                            <button type="button" title="Show All Works" className="portfolio-filter-btn active" data-filter="all">All</button>
                            <button type="button" title="Filter by Front-end" className="portfolio-filter-btn" data-filter="front-end">Front-end</button>
                            <button type="button" title="Filter by Back-end" className="portfolio-filter-btn" data-filter="back-end">Back-end</button>
                            <button type="button" title="Filter by UI/UX" className="portfolio-filter-btn" data-filter="ui-ux">UI/UX</button>
                            <button type="button" title="Filter by Landing" className="portfolio-filter-btn " data-filter="landing">Landing pages</button>
                            <button type="button" title="Filter by Boostrap" className="portfolio-filter-btn" data-filter="bootstrap">Bootstrap</button>
                        </div>
                        <div className="filter-status">
                            <p></p>
                        </div>
                    </div>

                    <div className="row porfolio-items">

                        <div className="porfolio-item" data-category="front-end,back-end">
                                <div className="portfolio-item-thumbnail">
                                    <img src={example1} alt="web page example 1"/>
                                    <button type="button" className="btn more-info-btn">Check it out!</button>
                                </div>
                                <h3 className="portfolio-item-title">Photography services website</h3>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ad minima aliquam vel distinctio saepe autem iure alias quisquam deserunt 
                                        repudiandae molestias dolor quos labore fuga, doloribus veniam itaque. Aliquam
                                         voluptates perferendis sed officia amet ipsa doloribus nostrum dolore eos neque.
                                        </p>
                                    </div>

                                    <div className="general-info">
                                        <p>Created - <span>October 2020</span></p>
                                        <p>Technologies Used - <span>HTML5, Css3, Javascript</span></p>
                                        <p>Role - <span>Front-end</span></p>
                                        <p>You can visit this site in - <span><a href="https://blackparadox.netlify.app/" rel="noopener noreferrer">Blackparadox</a></span></p>
                                    </div>

                                </div>
                        </div>

                        <div className="porfolio-item" data-category="landing">
                            <div className="portfolio-item-thumbnail">
                                    <img src={example2} alt="Landing page for school"/>
                                    <button type="button" className="btn more-info-btn">Check it out!</button>
                                </div>
                                <h3 className="portfolio-item-title">Landing page for faculty</h3>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ad minima aliquam vel distinctio saepe autem iure alias quisquam deserunt 
                                        repudiandae molestias dolor quos labore fuga, doloribus veniam itaque. Aliquam
                                         voluptates perferendis sed officia amet ipsa doloribus nostrum dolore eos neque.
                                        </p>
                                    </div>

                                    <div className="general-info">
                                        <p>Created - <span>June 2020</span></p>
                                        <p>Technologies Used - <span>HTML5, Css3, Javascript</span></p>
                                        <p>Role - <span>Front-end</span></p>
                                        <p>You can visit this site in - <span><a href="https://dapier.github.io/facpya-Landing/facpyaFeria" rel="noopener noreferrer">Landing</a></span></p>
                                    </div>

                                </div>
                        </div>

                        <div className="porfolio-item" data-category="back-end,frontend">
                                <div className="portfolio-item-thumbnail">
                                    <img src={example3} alt="Calculator js"/>
                                    <button type="button" className="btn more-info-btn">Check it out!</button>
                                </div>
                                <h3 className="portfolio-item-title">Calculator online</h3>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ad minima aliquam vel distinctio saepe autem iure alias quisquam deserunt 
                                        repudiandae molestias dolor quos labore fuga, doloribus veniam itaque. Aliquam
                                         voluptates perferendis sed officia amet ipsa doloribus nostrum dolore eos neque.
                                        </p>
                                    </div>

                                    <div className="general-info">
                                        <p>Created - <span>September 2021</span></p>
                                        <p>Technologies Used - <span>HTML5, Css3, Javascript</span></p>
                                        <p>Role - <span>Back-end</span></p>
                                        <p>You can visit this site in - <span><a href="https://dapier.github.io/calculatorEvDe/" rel="noopener noreferrer">Calculator Js</a></span></p>
                                    </div>

                                </div>
                        </div>

                        <div className="porfolio-item" data-category="front-end, landing">
                        <div className="portfolio-item-thumbnail">
                                    <img src={example3} alt="Calculator js"/>
                                    <button type="button" className="btn more-info-btn">Check it out!</button>
                                </div>
                                <h3 className="portfolio-item-title">Calculator online</h3>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ad minima aliquam vel distinctio saepe autem iure alias quisquam deserunt 
                                        repudiandae molestias dolor quos labore fuga, doloribus veniam itaque. Aliquam
                                         voluptates perferendis sed officia amet ipsa doloribus nostrum dolore eos neque.
                                        </p>
                                    </div>

                                    <div className="general-info">
                                        <p>Created - <span>September 2021</span></p>
                                        <p>Technologies Used - <span>HTML5, Css3, Javascript</span></p>
                                        <p>Role - <span>Back-end</span></p>
                                        <p>You can visit this site in - <span><a href="https://dapier.github.io/calculatorEvDe/" rel="noopener noreferrer">Calculator Js</a></span></p>
                                    </div>

                                </div>
                        </div>

                        <div className="porfolio-item" data-category="boostrap">
                        <div className="portfolio-item-thumbnail">
                                    <img src={example3} alt="Calculator js"/>
                                    <button type="button" className="btn more-info-btn">Check it out!</button>
                                </div>
                                <h3 className="portfolio-item-title">Calculator online</h3>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        Ad minima aliquam vel distinctio saepe autem iure alias quisquam deserunt 
                                        repudiandae molestias dolor quos labore fuga, doloribus veniam itaque. Aliquam
                                         voluptates perferendis sed officia amet ipsa doloribus nostrum dolore eos neque.
                                        </p>
                                    </div>

                                    <div className="general-info">
                                        <p>Created - <span>September 2021</span></p>
                                        <p>Technologies Used - <span>HTML5, Css3, Javascript</span></p>
                                        <p>Role - <span>Back-end</span></p>
                                        <p>You can visit this site in - <span><a href="https://dapier.github.io/calculatorEvDe/" rel="noopener noreferrer">Calculator Js</a></span></p>
                                    </div>

                                </div>
                        </div>

                    </div>


                </div>
            </section>

            {/*         Contact section          */}
            <section className="contact-section sec-padding min-vh-100" id="contact">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h2>Contact me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-content">
                            <div className="contact-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id arcu enim. Proin libero eros, gravida non dapibus varius, pulvinar non metus. Sed
                                     vel pharetra orci. Nullam leo massa, dapibus et mattis in, ultricies eget nulla. Suspendisse et odio est. Mauris
                                     sed fringilla dolor. Donec egestas leo sit amet leo ullamcorper tincidunt. Nullam purus sem, feugiat vel aliquet eu, gravida tristique metus.
                                      Aenean nec auctor libero, quis suscipit lectus.
                                </p>
                            </div>

                            <div className="contact-info-item">
                                <p>Email me on <span>josuealvacontacto@gmail.com</span></p>
                            </div>

                            <div className="contact-info-item">
                                <p className="social-link">
                                    <span>Find me on</span>
                                    <a href="https://github.com/Dapier"> <FaGithub/> </a>
                                    <a href="https://www.linkedin.com/in/josue-alvarado-11b799166/"> <FaLinkedinIn/> </a>
                                    <a href="https://twitter.com/drawdapier"> <FaTwitter/> </a>

                                </p>
                            </div>

                            <button type="button" className="btn toggle-contact-form-btn">Send message</button>
                        </div>
                        <div className="contact-form">
                            <div className="contact-form-inner">
                                <div className="contact-form-container">
                                    <button type="button" className="close-btn toggle-contact-form-btn"></button>
                                    <form action="">
                                        <div className="row">
                                            <div className="input-group">
                                                <input type="text" placeholder="Your Name" className="input-control"/>
                                            </div>
                                            <div className="input-group">
                                                <input type="text" placeholder="Your Email" className="input-control"/>
                                            </div>
                                            <div className="input-group">
                                                <input type="text" placeholder="Subject" className="input-control"/>
                                            </div>
                                            <div className="input-group">
                                                <textarea placeholder="Message" className="input-control"></textarea>
                                            </div>
                                            
                                            <div className="input-group">
                                                <button type="submit" className="btn btn-submit">Send</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/*         Popup section            */}

            <div className="portfolioPopup">
                <div className="pp-overlay"></div>
                <div className="pp-inner">
                    <div className="pp-content">
                        <div className="pp-header"> 
                            <h2 className="pp-counter">
                                
                            </h2>
                            <button type="button" title="close" className="close-btn pp-close-btn"></button>

                            <div className="pp-thumbnail">
                                <img src={example2} alt="Prev example"/>
                            </div>
                            <h3></h3>
                        </div>
                        <div className="pp-body">
                        

                        </div>
                        <div className="pp-footer">
                            <div className="pp-footer-left hidden">
                                <button type="button" title="Prev Work" className="btn pp-prev-btn">Prev <BiLeftArrow/> </button>
                                <h3></h3>
                                <img src={example1} alt="prev work thumbnail"/>
                            </div>
                            <div className="pp-footer-right hidden">
                            <button type="button" title="Next Work" className="btn pp-next-btn">Next <BiRightArrow/></button>
                                <h3></h3>
                                <img src={example3} alt="next work thumbnail"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;