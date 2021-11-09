import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//resources
import profilePhoto from "../resources/me.jpg";
import "../styles/portafolio.css";

//images
import example1 from "../resources/1.png";
import example2 from "../resources/2.png";
import calculator from "../resources/calculator.png";
import ecommerce from "../resources/ecomerce.png";
import api from "../resources/API.png";

//Icons
import { BiLeftArrow, BiRightArrow, BiWindows } from "react-icons/bi";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    function bgAnimationItems() {
      //bg animation effect
      const canvas = document.getElementById("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let particlesArray;

      //Get mouse position
      let mouse = {
        x: null,
        y: null,
        radius: (canvas.heigth / 10) * (canvas.width / 10),
      };
      window.addEventListener("mousemove", function (e) {
        mouse.x = e.x;
        mouse.y = e.y;
      });

      class Particle {
        constructor(x, y, dirX, dirY, size, color) {
          this.x = x;
          this.y = y;
          this.dirX = dirX;
          this.dirY = dirY;
          this.size = size;
          this.color = color;
        }
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = "#FFFAFB";
          ctx.fill();
        }

        update() {
          if (this.x > canvas.width || this.x < 0) {
            this.dirX = -this.dirX;
          }
          if (this.y > canvas.heigth || this.y < 0) {
            this.dirY = -this.dirY;
          }

          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 1) {
              this.x += 1;
            }
            if (mouse.x > this.x && this.x > this.size * 1) {
              this.x -= 1;
            }
            if (mouse.y < this.y && this.y < canvas.heigth - this.size * 1) {
              this.y += 1;
            }

            if (mouse.y > this.y && this.y > this.size * 1) {
              this.y -= 1;
            }
          }
          this.x += this.dirX;
          this.y += this.dirY;
          this.draw();
        }
      }

      function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 10000;
        for (let i = 0; i < numberOfParticles * 2; i++) {
          let size = Math.random() * 1 + 1;
          let x =
            Math.random() * (window.innerWidth - size * 2 - size * 2) +
            size * 2;
          let y =
            Math.random() * (window.innerHeight - size * 2 - size * 2) +
            size * 2;
          let dirX = Math.random() * 5 - 2.5;
          let dirY = Math.random() * 5 - 2.5;
          let color = "#FFFAFB";

          particlesArray.push(new Particle(x, y, dirX, dirY, size, color));
        }
      }

      function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
          for (let b = a; b < particlesArray.length; b++) {
            let distance =
              (particlesArray[a].x - particlesArray[b].x) *
                (particlesArray[a].x - particlesArray[b].x) +
              (particlesArray[a].y - particlesArray[b].y) *
                (particlesArray[a].y - particlesArray[b].y);
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
              opacityValue = 1 - distance / 2000;
              ctx.strokeStyle = "rgba(235, 232, 232," + opacityValue + ")";
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }

      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
        }
        connect();
      }

      window.addEventListener("resize", function () {
        canvas.width = window.outerWidth;
        canvas.height = window.outerHeight;
        mouse.radius = (canvas.height / 80) * (canvas.height / 80);
        init();
      });

      window.addEventListener("mouseenter", function () {
        mouse.x = undefined;
        mouse.y = undefined;
      });

      init();
      animate();

      //   const rows = 9,
      //     cols = 10;
      //   for (let i = 0; i < rows; i++) {
      //     for (let j = 0; j < cols; j++) {
      //       const div = document.createElement("div");
      //       div.className = `col-${j + 1}`;
      //       document.querySelector(".bg-animation-effect").appendChild(div);
      //     }
      //   }
    }
    return bgAnimationItems();
  }, []);

  //Render
  return (
    <div>
      {/* Page Loader */}
      <div className="page-loader">
        <div className="page-loader-inner">
          <div className="circle"></div>
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
                  <li>
                    <Link to="#about" className="nav-item link-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="#portfolio" className="nav-item link-item">
                      Porfolio
                    </Link>
                  </li>
                  <li>
                    <Link to="#contact" className="nav-item link-item">
                      Contact
                    </Link>
                  </li>
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
      <canvas className="" id="canvas"></canvas>

      {/* about-Section */}
      <section className="aboutSection active reveal" id="about">
        <div className="container">
          <div className="row min-vh-100">
            <div className="aboutContent">
              {/* <div className="loader">
                <span className="contentPhoto">
                  <img src={profilePhoto} alt="Me about me" />
                </span>
              </div> */}

              <h1>
                Hi!, Im Josue Alvarado.{" "}
                <span>
                  {" "}
                  <div class="text"></div>
                </span>
              </h1>
              <p>
                I´m a <span>Front-end Developer</span> i´ve been working in
                landing pages and web apps using
                <span> HTML5</span> ,<span>CSS3</span> ,<span>Javascript</span>{" "}
                ,<span>ReactJS</span> ,<span>VueJS</span> ,
                <span>Bootstrap</span> ,<span>Materialize</span> ,
                <span>Material/ui</span>,<span>and more</span>. You can look my
                latest works on the
                <Link to="#portfolio" className="link-item">
                  {" "}
                  portafolio page
                </Link>
              </p>
              <br/>
              <br/>
              {/* <h2>Technologies</h2>
                        <div className="skills">
                            <div className="skill-item htmlSkill">HTML5</div>
                            <div className="skill-item cssSkill">CSS3</div>
                            <div className="skill-item jsSkill">Javascript</div>
                            <div className="skill-item reactSkill">ReactJs</div>
                            <div className="skill-item angularSkill">Angular</div>
                            <div className="skill-item vueSkill">VueJS</div>
                            <div className="skill-item bootstrapSkill">Boostrap</div>
                        </div> */}
              <button type="button" className="btn more-info-btn">
                <Link to="#portfolio" className="link-item">
                  {" "}
                  Portafolio page
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section className="portafolioSection sec-padding" id="portfolio">
        <div className="container">
          <div className="row reveal">
            <div className="section-title">
              <h2>Recent Works</h2>
            </div>
          </div>

          <div className="row ">
            <div className="portfolio-filter">
              <button
                type="button"
                title="Show All Works"
                className="portfolio-filter-btn active"
                data-filter="all"
              >
                All
              </button>
              <button
                type="button"
                title="Filter by Front-end"
                className="portfolio-filter-btn"
                data-filter="front-end"
              >
                Front-end
              </button>
              <button
                type="button"
                title="Filter by Back-end"
                className="portfolio-filter-btn"
                data-filter="back-end"
              >
                Back-end
              </button>
              <button
                type="button"
                title="Filter by Fullstack"
                className="portfolio-filter-btn"
                data-filter="fullstack"
              >
                Full-stack
              </button>
              <button
                type="button"
                title="Filter by UI/UX"
                className="portfolio-filter-btn"
                data-filter="ui-ux"
              >
                UI/UX
              </button>
              <button
                type="button"
                title="Filter by Landing"
                className="portfolio-filter-btn "
                data-filter="landing"
              >
                Landing pages
              </button>
            </div>
            <div className="filter-status">
              <p></p>
            </div>
          </div>

          <div className="row porfolio-items">
            <div className="porfolio-item" data-category="fullstack">
              <div className="portfolio-item-thumbnail">
                <img src={ecommerce} alt="Ecommerce site" />
                <button type="button" className="btn more-info-btn">
                  Check it out!
                </button>
              </div>
              <h3 className="portfolio-item-title">Pharmacy ecommerce</h3>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                    E-commerce for pharmacy with authentication, paid system and
                    delivery service, using firebase for database, stripe to
                    receive payments. This is a final school project, but it
                    works like a shopping site using the admin panel for adding
                    products to the database, it works as a real e-commerce for
                    any company or business
                  </p>
                </div>

                <div className="general-info">
                  <p>
                    Created - <span>November 2021</span>
                  </p>
                  <p>
                    Technologies Used -{" "}
                    <span>
                      ReactJS, Stripe, Firebase, Express , Materialize, nodeJS
                    </span>
                  </p>
                  <p>
                    Role - <span>Full-stack</span>
                  </p>
                  <p>
                    You can visit this site in -{" "}
                    <span>
                      <a
                        href="https://berny-pharmacy.herokuapp.com/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Berny Pharmacy
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="porfolio-item" data-category="front-end">
              <div className="portfolio-item-thumbnail">
                <img src={example1} alt="web page example 1" />
                <button type="button" className="btn more-info-btn">
                  Check it out!
                </button>
              </div>
              <h3 className="portfolio-item-title">
                Photography services website
              </h3>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>Project from  HTML, CSS and JS udemy course</p>
                </div>

                <div className="general-info">
                  <p>
                    Created - <span>October 2020</span>
                  </p>
                  <p>
                    Technologies Used - <span>HTML5, Css3, Javascript</span>
                  </p>
                  <p>
                    Role - <span>Front-end</span>
                  </p>
                  <p>
                    You can visit this site in -{" "}
                    <span>
                      <a
                        href="https://blackparadox.netlify.app/"
                        rel="noopener noreferrer"
                      >
                        Blackparadox
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="porfolio-item" data-category="landing">
              <div className="portfolio-item-thumbnail">
                <img src={example2} alt="Landing page for school" />
                <button type="button" className="btn more-info-btn">
                  Check it out!
                </button>
              </div>
              <h3 className="portfolio-item-title">Landing page for faculty</h3>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                  Landing page for an event from UANL faculty.
                  </p>
                </div>

                <div className="general-info">
                  <p>
                    Created - <span>June 2020</span>
                  </p>
                  <p>
                    Technologies Used - <span>HTML5, Css3, Javascript</span>
                  </p>
                  <p>
                    Role - <span>Front-end</span>
                  </p>
                  <p>
                    You can visit this site in -{" "}
                    <span>
                      <a
                        href="https://dapier.github.io/facpya-Landing/facpyaFeria"
                        rel="noopener noreferrer"
                      >
                        Landing
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="porfolio-item" data-category="back-end,frontend">
              <div className="portfolio-item-thumbnail">
                <img src={api} alt="Calculator js" />
                <button type="button" className="btn more-info-btn">
                  Check it out!
                </button>
              </div>
              <h3 className="portfolio-item-title">Simple API</h3>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                    Basic random complements and motivations quotes API, 
                  </p>
                </div>

                <div className="general-info">
                  <p>
                    Created - <span>October 2020</span>
                  </p>
                  <p>
                    Technologies Used -{" "}
                    <span>
                      HTML5, Css3, Javascript, Express, Serverless-HTTP
                    </span>
                  </p>
                  <p>
                    Repo -{" "}
                    <span>
                      <a
                        href="https://github.com/Dapier/API-Express"
                        rel="noopener noreferrer"
                      >
                        See repository
                      </a>
                    </span>
                  </p>
                  <p>
                    Role - <span>Back-end</span>
                  </p>
                  <p>
                    You can visit this site in -{" "}
                    <span>
                      <a
                        href="https://api-express.netlify.app/.netlify/functions/api"
                        rel="noopener noreferrer"
                      >
                        Simple API
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="porfolio-item" data-category="back-end,frontend">
              <div className="portfolio-item-thumbnail">
                <img src={calculator} alt="Calculator js" />
                <button type="button" className="btn more-info-btn">
                  Check it out!
                </button>
              </div>
              <h3 className="portfolio-item-title">Calculator online</h3>
              <div className="portfolio-item-details">
                <div className="description">
                  <p>
                  The calculator using Event Delegation and react hooks
                  </p>
                </div>

                <div className="general-info">
                  <p>
                    Created - <span>November 2021</span>
                  </p>
                  <p>
                    Technologies Used - <span>React hooks</span>
                  </p>
                  <p>
                    Role - <span>Back-end</span>
                  </p>
                  <p>
                    Repo -{" "}
                    <span>
                      <a
                        href="https://github.com/Dapier/Calculator-EvDe"
                        rel="noopener noreferrer"
                      >
                        See repository
                      </a>
                    </span>
                  </p>
                  <p>
                    You can visit this site in -{" "}
                    <span>
                      <a
                        href="https://calculator-evde.netlify.app/"
                        rel="noopener noreferrer"
                      >
                        Calculator EvDe
                      </a>
                    </span>
                  </p>
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus id arcu enim. Proin libero eros, gravida non dapibus
                  varius, pulvinar non metus. Sed vel pharetra orci. Nullam leo
                  massa, dapibus et mattis in, ultricies eget nulla. Suspendisse
                  et odio est. Mauris sed fringilla dolor. Donec egestas leo sit
                  amet leo ullamcorper tincidunt. Nullam purus sem, feugiat vel
                  aliquet eu, gravida tristique metus. Aenean nec auctor libero,
                  quis suscipit lectus.
                </p>
              </div>

              <div className="contact-info-item">
                <p>
                  Email me on <span>josuealvacontacto@gmail.com</span>
                </p>
              </div>

              <div className="contact-info-item">
                <p className="social-link">
                  <span>Find me on</span>
                  <a href="https://github.com/Dapier">
                    {" "}
                    <FaGithub />{" "}
                  </a>
                  <a href="https://www.linkedin.com/in/josue-alvarado-11b799166/">
                    {" "}
                    <FaLinkedinIn />{" "}
                  </a>
                  <a href="https://twitter.com/drawdapier">
                    {" "}
                    <FaTwitter />{" "}
                  </a>
                </p>
              </div>

              <button type="button" className="btn toggle-contact-form-btn">
                Send message
              </button>
            </div>
            <div className="contact-form">
              <div className="contact-form-inner">
                <div className="contact-form-container">
                  <button
                    type="button"
                    className="close-btn toggle-contact-form-btn"
                  ></button>
                  <form action="">
                    <div className="row">
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="input-control"
                        />
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="input-control"
                        />
                      </div>
                      <div className="input-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="input-control"
                        />
                      </div>
                      <div className="input-group">
                        <textarea
                          placeholder="Message"
                          className="input-control"
                        ></textarea>
                      </div>

                      <div className="input-group">
                        <button type="submit" className="btn btn-submit">
                          Send
                        </button>
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
              <h2 className="pp-counter"></h2>
              <button
                type="button"
                title="close"
                className="close-btn pp-close-btn"
              ></button>

              <div className="pp-thumbnail">
                <img src={example2} alt="Prev example" />
              </div>
              <h3></h3>
            </div>
            <div className="pp-body"></div>
            <div className="pp-footer">
              <div className="pp-footer-left hidden">
                <button
                  type="button"
                  title="Prev Work"
                  className="btn pp-prev-btn"
                >
                  Prev <BiLeftArrow />{" "}
                </button>
                <h3></h3>
                <img src={example1} alt="prev work thumbnail" />
              </div>
              <div className="pp-footer-right hidden">
                <button
                  type="button"
                  title="Next Work"
                  className="btn pp-next-btn"
                >
                  Next <BiRightArrow />
                </button>
                <h3></h3>
                <img src={calculator} alt="next work thumbnail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
