import React, { useState } from "react";
import { Router, Routes, Route } from "react-router-dom";

import Home from "./Home/Home.js";
import Hero from "./Hero/Hero.js";
import About from "./About/About.js";
import Projects from "./Projects/Projects.js";
import Footer from "./Footer/Footer.js";
// import ScrollToTop from "./ScrollToTop"

import GH from "./Hero/assets/GH.png";
import LI from "./Hero/assets/LI.png";
import HN from "./Hero/assets/HN.png";

import YellowStoneDave from "./Hero/assets/dave_in_yellowstone.jpeg";
import CDT from "./About/assets/CDT.jpeg";
import Jackfruit from "./About/assets/Jackfruit.jpeg";
import Sarracenia from "./About/assets/Sarracenia.jpeg";

import Filter from "./Projects/assets/filter.png";
import AddToCart from "./Projects/assets/addToCart.png";
import ReadMore from "./Projects/assets/ReadMore.png";

import Desktop from "./Projects/assets/pingala_cafe.png";
import Mobile from "./Projects/assets/mobile.png";
import Tablet from "././Projects/assets/tablet.png";

import Resume from "./About/assets/Dave_Bailey_Resume.pdf";

import "./App.css";
import "./Slider/Slider.css";

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [hyhReadMoreOpen, setHYHReadMoreOpen] = useState(false);
  const [hyhLearnMoreNotClicked, setHYHLearnMoreNotClicked] = useState(true);
  const [burReadMoreOpen, setBurReadMore] = useState(false);
  const [burLearnMoreNotClicked, setBurLearnMoreNotClicked] = useState(true);

  let toggle = () => {
    if (aboutOpen === true) {
      setAboutOpen(false);
    } else if (aboutOpen === false) {
      setAboutOpen(true);
    }
  };

  let learnMoreHYH = () => {
    if (hyhReadMoreOpen === true) {
      setHYHReadMoreOpen(false);
      setHYHLearnMoreNotClicked(true);
    } else if (hyhReadMoreOpen === false) {
      setHYHReadMoreOpen(true);
      setHYHLearnMoreNotClicked(false);
    }
  };

  let learnMoreBur = () => {
    if (burReadMoreOpen === true) {
      setBurReadMore(false);
      setBurLearnMoreNotClicked(true);
    } else if (burReadMoreOpen === false) {
      setBurReadMore(true);
      setBurLearnMoreNotClicked(false);
    }
  };

  return (
    <>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Hero>
                  <div className="heroContainer">
                    <div className="subHeadContainer">
                      <div className="heroHeader">Hi, I'm Dave.</div>
                      <div className="heroSubHead">
                        I might be the only software developer, gardener,
                        thru-hiker on the planet.
                      </div>
                    </div>

                    <img
                      className="heroImg"
                      src={YellowStoneDave}
                      alt="Dave in Yellowstone National Park"
                    />
                  </div>

                  <div className="toggleContainer">
                    <div className="toggleAbout">My Projects</div>
                    <label className="switch">
                      <input type="checkbox" onChange={toggle} />
                      <span className="slider round"></span>
                    </label>
                    <div className="toggleProjects">About Me</div>
                  </div>
                </Hero>

                {aboutOpen ? (
                  <About>
                    <div className="pageLoad">
                      <div className="skillContactContainer">
                        <div className="skillsContainer">
                          <div className="skillsHead">I'd love to connect!</div>
                          <div className="listContainer">
                            <div className="emailSocialContainer">
                              <a
                                className="resumeButton emailHeader"
                                href={Resume}
                              >
                                Resume
                              </a>

                              <div className="socialContainer">
                                <a href="https://trail2dev.hashnode.dev/">
                                  <img
                                    className="socialLogo"
                                    src={HN}
                                    alt="Hashnode logo"
                                  />
                                </a>
                                <a href="https://github.com/dave-bailey">
                                  <img
                                    className="socialLogo"
                                    src={GH}
                                    alt="GitHub logo"
                                    href="https://github.com/dave-bailey"
                                  />
                                </a>
                                <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
                                  <img
                                    className="socialLogo"
                                    src={LI}
                                    alt="LinkedIn logo"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skillsContainer marginLeft">
                          <div className="skillsHead">
                            This guy's got skills!
                          </div>
                          <div className="listContainer">
                            <ul className="skillsListRight">
                              <li>JavaScript</li>
                              <li>React</li>
                              <li>HTML5</li>
                            </ul>
                            <ul className="skillsList">
                              <li>CSS3</li>
                              <li>Git</li>
                              <li>MongoDB</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="background">
                        <section className="aboutContainer">
                          <div className="aboutHeader">A bit about me.</div>
                          <div className="aboutParagraph">
                            I’ve always been a mash-up of unique passions. I
                            started my “professional-life” working in
                            international agricultural development and
                            horticulture. I’ve raised veggies. I’ve taught kids,
                            college students and farmers to care for themselves
                            and their communities through sustainable and
                            regenerative agricultural practice. I’ve even
                            managed a historical garden or two.
                          </div>

                          <img
                            className="heroImg"
                            src={Jackfruit}
                            alt="Dave holding a giant jackfruit"
                          />

                          <div className="aboutParagraph">
                            But things shifted when I first dipped my toe into
                            web development. I made a SquareSpace site for my
                            brother-in-law’s dental practice. Not an
                            earth-shattering experience or end-product for that
                            matter, but that project sparked a desire in me to
                            someday learn more about design and development.
                          </div>
                          <div className="aboutSubHead">
                            But someday had to wait.
                          </div>
                          <div className="aboutParagraph">
                            For the last five years my wife and I have had one
                            priority: the Triple Crown of Thru-Hiking!
                          </div>
                          <img
                            className="heroImg"
                            src={CDT}
                            alt="Dave and Leisel at the southern terminus of the CDT."
                          />
                          <div className="aboutParagraph">
                            The Triple Crown refers to the Appalachian Trail,
                            the Continental Divide Trail, and the Pacific Crest
                            Trail. A thru-hike is when you walk the entirety of
                            a long-distance hiking trail within a calendar year.
                            There are a little over 500 people who have
                            completed the Thru-Hiking Triple Crown, and, as of
                            September 2021, I’m proud to say my wife and I are a
                            part of that weird, elite group.
                          </div>
                          <div className="aboutParagraph">
                            Now that the Triple Crown dream has been realized
                            (yeah, I’ve really walked across America 3x…it’s
                            still crazy to me too),
                          </div>
                          <div className="aboutSubHead">
                            My someday of becoming a developer has arrived!
                          </div>
                          <div className="aboutParagraph">
                            I jumped at the chance to enroll in a software
                            development bootcamp and have been coding non-stop
                            ever since.
                          </div>
                          <div className="aboutParagraph">
                            Solving problems and reaching big goals is addictive
                            to me, and coding has given me a new direction and
                            place to focus my enthusiasm and energy.
                          </div>
                          <img
                            className="heroImg"
                            src={Sarracenia}
                            alt="Dave looking at a sarracenia leucophylla"
                          />
                          <div className="aboutParagraph">
                            I’m not into everything, but the things I am
                            into…I’m really into!
                          </div>
                          <div className="aboutSubHead">
                            And programming has made the list.
                          </div>
                        </section>
                      </div>
                    </div>
                  </About>
                ) : (
                  <Projects>
                    <div className="pageLoad">
                      <div className="skillContactContainer">
                        <div className="skillsContainer">
                          <div className="skillsHead">I'd love to connect!</div>
                          <div className="listContainer">
                            <div className="emailSocialContainer">
                              <a
                                className="resumeButton emailHeader"
                                href={Resume}
                              >
                                Resume
                              </a>

                              <div className="socialContainer">
                                <a href="https://trail2dev.hashnode.dev/">
                                  <img
                                    className="socialLogo"
                                    src={HN}
                                    alt="Hashnode logo"
                                  />
                                </a>
                                <a href="https://github.com/dave-bailey">
                                  <img
                                    className="socialLogo"
                                    src={GH}
                                    alt="GitHub logo"
                                    href="https://github.com/dave-bailey"
                                  />
                                </a>
                                <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
                                  <img
                                    className="socialLogo"
                                    src={LI}
                                    alt="LinkedIn logo"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="skillsContainer marginLeft">
                          <div className="skillsHead">
                            This guy's got skills!
                          </div>
                          <div className="listContainer">
                            <ul className="skillsListRight">
                              <li>JavaScript</li>
                              <li>React</li>
                              <li>HTML5</li>
                            </ul>
                            <ul className="skillsList">
                              <li>CSS3</li>
                              <li>Git</li>
                              <li>MongoDB</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="background">
                        <section className="aboutContainer">
                          <div className="aboutHeader">
                            My favorite projects.
                          </div>

                          <div className="aboutSubHead underline">
                            Hearts You Hold: Donation Flow
                          </div>
                          <div className="aboutParagraph">
                            A full-stack React web application that connects
                            donors with HYH recipient requests and facilitates
                            the fulfillment process via a custom donation
                            checkout. This was five-week project, executed by of
                            a team of three developers.
                          </div>

                          {hyhLearnMoreNotClicked && (
                            <button
                              className="learnMore"
                              onClick={learnMoreHYH}
                            >
                              Learn More
                            </button>
                          )}

                          {hyhReadMoreOpen && (
                            <>
                              <div className="projectDescription">
                                <div className="aboutSubHead underline">
                                  The Problem
                                </div>
                                <div className="aboutParagraph">
                                  Hearts You Hold had an online donation option,
                                  but it was cumbersome. Only one item could be
                                  donated at a time. This meant to donate two or
                                  more items a user had to go through the
                                  payment process multiple times.
                                </div>

                                <div className="aboutSubHead underline">
                                  The Solution
                                </div>
                                <div className="aboutParagraph">
                                  In order streamline the donation flow, we
                                  built a clone of the current request’s page,
                                  added the shopping cart feature, and created
                                  an admin portal to add new and update existing
                                  items in the database.
                                </div>

                                <div className="aboutSubHead underline">
                                  Technologies
                                </div>
                                <div className="aboutParagraph">
                                  React, React-Paginate, HTML5, CSS3, MongoDB,
                                  Nodejs, Paypal, Mailchimp, NodeMailer, and
                                  Userfront.
                                </div>

                                {/* <img
                                  className="heroImg projectMargin"
                                  src={ReadMore}
                                  alt="HYH request page"
                                /> */}

                                <div className="aboutSubHead underline">
                                  My Role
                                </div>
                                <div className="aboutParagraph">
                                  My role focused on project management,
                                  cleaning and manipulating the data on the
                                  back-end, and state management on the
                                  front-end. I wrote logic for filtering and
                                  rendering the donation cards with pagination,
                                  created the shopping cart and its donation
                                  percentage adjustment feature, and styled the
                                  user side of the site.
                                </div>

                                <div className="aboutSubHead underline">
                                  Biggest Challenge
                                </div>
                                <div className="aboutParagraph">
                                  Connecting the dynamic category and state
                                  filters with the pagination and donation card
                                  rendering was probably my biggest hurdle for
                                  this project. It combined four state
                                  dependancies and multiple data mapping and
                                  filtering methods. I felt like a hometown-hero
                                  when my page rendered with the corresponding
                                  data and the correct number of pages!
                                </div>
                                {/* 
                                <img
                                  className="heroImg projectMargin"
                                  src={Filter}
                                  alt="HYH request page"
                                /> */}

                                <div className="aboutSubHead underline">
                                  Lessons Learned
                                </div>
                                <div className="aboutParagraph">
                                  This project pushed me. It allowed me to see
                                  the big picture of our data flow and UX, but
                                  it also gave me a chance to get my hands dirty
                                  with some challenging logic and state
                                  management issues. I ran into road blocks,
                                  searched documentation, connected with other
                                  developers for advice, and a ultimately, our
                                  team delivered a solution to HYH's problem I'm
                                  very proud of!
                                </div>

                                <button
                                  className="learnMore"
                                  onClick={learnMoreHYH}
                                >
                                  Close
                                </button>
                              </div>
                            </>
                          )}

                          <img
                            className="heroImg projectMargin"
                            src={AddToCart}
                            alt="HYH request page"
                          />

                          <div className="aboutSubHead underline">
                            New to Burlington: Restaurant Catalog
                          </div>
                          <div className="aboutParagraph">
                            A full stack web application that catalogs the local
                            restaurants I have visited since moving to
                            Burlington, VT. I built this project independently
                            in a week.
                          </div>

                          {burLearnMoreNotClicked && (
                            <button
                              className="learnMore"
                              onClick={learnMoreBur}
                            >
                              Learn More
                            </button>
                          )}

                          {burReadMoreOpen && (
                            <>
                              <div className="aboutSubHead underline">
                                Purpose
                              </div>
                              <div className="aboutParagraph">
                                I built this project to gain experience with
                                fetching data, responsive design and conditional
                                rendering in React. Plus, being new to
                                Burlington, building a project with
                                React-Leaflet helped me learn my way around
                                town!
                              </div>

                              <div className="aboutSubHead underline">
                                Technologies
                              </div>
                              <div className="aboutParagraph">
                                React, HTML5, CSS3, Nodejs, and React-Leaflet.
                              </div>

                              {/* <img
                                className="heroImg projectMargin"
                                src={Tablet}
                                alt="Tablet design of restaurant page"
                              /> */}

                              <div className="aboutSubHead underline">
                                Biggest Challenge
                              </div>
                              <div className="aboutParagraph">
                                This project exposed me to the power of using
                                mapping to render multiple data instances.
                                Refactoring this project to allow the navigation
                                and restaurant pages to be dynamically rendered
                                based upon my data was difficult to implement,
                                but exciting to execute.
                              </div>
                              {/* 
                              <img
                                className="heroImg projectMargin"
                                src={Mobile}
                                alt="Mobile design of navigation and restaurant page"
                              /> */}

                              <div className="aboutSubHead underline">
                                Lessons Learned
                              </div>
                              <div className="aboutParagraph">
                                The combination of integrating media queries and
                                using state and data for conditional rendering
                                has opened my eyes to a new world of
                                possibilties for future projects!
                              </div>

                              <button
                                className="learnMore"
                                onClick={learnMoreBur}
                              >
                                Close
                              </button>
                            </>
                          )}

                          <img
                            className="heroImg projectMargin"
                            src={Desktop}
                            alt="Desktop design of restaurant page"
                          />
                        </section>
                      </div>
                    </div>
                  </Projects>
                )}

                <Footer>
                  <div className="footerContainer">
                    <div className="emailSocialContainer">
                      <div className="socialContainer">
                        <a href="https://trail2dev.hashnode.dev/">
                          <img
                            className="socialLogo"
                            src={HN}
                            alt="Hashnode logo"
                          />
                        </a>
                        <a href="https://github.com/dave-bailey">
                          <img
                            className="socialLogo"
                            src={GH}
                            alt="GitHub logo"
                            href="https://github.com/dave-bailey"
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
                          <img
                            className="socialLogo"
                            src={LI}
                            alt="LinkedIn logo"
                          />
                        </a>
                      </div>
                      <div id="copyright">
                        Copyright © 2022: Dave Bailey - All Rights Reserved
                      </div>
                    </div>
                  </div>
                </Footer>
              </Home>
            }
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
