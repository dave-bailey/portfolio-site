import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

//components
import Home from "./Home/Home.js";
import Hero from "./Hero/Hero.js";
import SkillsContact from "./SkillsContact/SkillsContact.js";
import Toggle from "./Toggle/Toggle.js";
import About from "./AboutAndProjects/About.js";
import Projects from "./AboutAndProjects/Projects.js";
import Footer from "./Footer/Footer.js";

//social imgs
import gH from "./Hero/assets/GH.png";
import lI from "./Hero/assets/LI.png";
import hN from "./Hero/assets/HN.png";

//imgs
import yellowStoneDave from "./Hero/assets/dave_in_yellowstone.jpeg";
import cDT from "./AboutAndProjects/assets/CDT.jpeg";
import jackfruit from "./AboutAndProjects/assets/Jackfruit.jpeg";
import sarracenia from "./AboutAndProjects/assets/Sarracenia.jpeg";
import hyh_mobile from "./AboutAndProjects/assets/hyh_mobile.gif";
import hyh from "./AboutAndProjects/assets/hyh.gif";
import desktop_burl from "./AboutAndProjects/assets/desktop_burl.gif";
import mobile_burl from "./AboutAndProjects/assets/mobile_burl.gif";

//resume
import resume from "./AboutAndProjects/assets/Dave_Bailey_Resume.pdf";

import "./App.css";

function App() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [hyhReadMoreOpen, setHYHReadMoreOpen] = useState(false);
  const [hyhLearnMoreNotClicked, setHYHLearnMoreNotClicked] = useState(true);
  const [burReadMoreOpen, setBurReadMore] = useState(false);
  const [burLearnMoreNotClicked, setBurLearnMoreNotClicked] = useState(true);

  //toggles between about and projects
  let toggle = () => {
    if (aboutOpen === true) {
      setAboutOpen(false);
    } else if (aboutOpen === false) {
      setAboutOpen(true);
    }
  };

  //these two functions open and close project details
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
                      className="img"
                      src={yellowStoneDave}
                      alt="Dave in Yellowstone National Park"
                    />
                  </div>
                </Hero>

                <SkillsContact>
                  {/* resume, links section */}
                  <div className="skillContactContainer">
                    <div className="skillsContainer">
                      <div className="skillsHead">I'd love to connect!</div>
                      <div className="listContainer">
                        <div className="emailSocialContainer">
                          <a className="resumeButton emailHeader" href={resume}>
                            Resume
                          </a>

                          <div className="socialContainer">
                            <a href="https://trail2dev.hashnode.dev/">
                              <img
                                className="socialLogo"
                                src={hN}
                                alt="Hashnode logo"
                              />
                            </a>
                            <a href="https://github.com/dave-bailey">
                              <img
                                className="socialLogo"
                                src={gH}
                                alt="GitHub logo"
                                href="https://github.com/dave-bailey"
                              />
                            </a>
                            <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
                              <img
                                className="socialLogo"
                                src={lI}
                                alt="LinkedIn logo"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* skills section */}
                    <div className="skillsContainer marginLeft">
                      <div className="skillsHead">This guy's got skills!</div>
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
                </SkillsContact>

                <Toggle>
                  <div className="toggleContainer">
                    <div className="toggleAbout">My Projects</div>
                    <label className="switch">
                      <input type="checkbox" onChange={toggle} />
                      <span className="slider round"></span>
                    </label>
                    <div className="toggleProjects">About Me</div>
                  </div>
                </Toggle>

                {aboutOpen ? (
                  <About>
                    <div className="pageLoadContainer">
                      <div className="background">
                        <section className="sectionContainer">
                          <div className="header">A bit about me.</div>
                          <div className="paragraphSection">
                            I’ve always been a mash-up of unique passions. I
                            started my “professional-life” working in
                            international agricultural development and
                            horticulture. I’ve raised veggies. I’ve taught kids,
                            college students and farmers to care for themselves
                            and their communities through sustainable and
                            regenerative agricultural practice. I’ve even
                            managed a historical garden or two.
                          </div>

                          <div className="imageFlexContainer">
                            <img
                              className="img"
                              src={jackfruit}
                              alt="Dave holding a giant jackfruit"
                            />
                          </div>

                          <div className="paragraphSection">
                            But things shifted when I first dipped my toe into
                            web development. I made a SquareSpace site for my
                            brother-in-law’s dental practice. Not an
                            earth-shattering experience or end-product for that
                            matter, but that project sparked a desire in me to
                            someday learn more about design and development.
                          </div>
                          <div className="subHeadSection">
                            But someday had to wait.
                          </div>
                          <div className="paragraphSection">
                            For the last five years my wife and I have had one
                            priority: the Triple Crown of Thru-Hiking!
                          </div>

                          <div className="imageFlexContainer">
                            <img
                              className="img"
                              src={cDT}
                              alt="Dave and Leisel at the southern terminus of the CDT."
                            />
                          </div>

                          <div className="paragraphSection">
                            The Triple Crown refers to the Appalachian Trail,
                            the Continental Divide Trail, and the Pacific Crest
                            Trail. A thru-hike is when you walk the entirety of
                            a long-distance hiking trail within a calendar year.
                            There are a little over 500 people who have
                            completed the Thru-Hiking Triple Crown, and, as of
                            September 2021, I’m proud to say my wife and I are a
                            part of that weird, elite group.
                          </div>
                          <div className="paragraphSection">
                            Now that the Triple Crown dream has been realized
                            (yeah, I’ve really walked across America 3x. It’s
                            still crazy to me too),
                          </div>
                          <div className="subHeadSection">
                            My someday of becoming a developer has arrived!
                          </div>
                          <div className="paragraphSection">
                            I jumped at the chance to enroll in a software
                            development bootcamp and have been coding non-stop
                            ever since.
                          </div>
                          <div className="paragraphSection">
                            Solving problems and reaching big goals is addictive
                            to me, and coding has given me a new direction and
                            place to focus my enthusiasm and energy.
                          </div>

                          <div className="imageFlexContainer">
                            <img
                              className="img"
                              src={sarracenia}
                              alt="Dave looking at a sarracenia leucophylla"
                            />
                          </div>

                          <div className="paragraphSection">
                            I’m not into everything, but the things I am into,
                            I’m really into!
                          </div>
                          <div className="subHeadSection">
                            And programming has made the list.
                          </div>
                        </section>
                      </div>
                    </div>
                  </About>
                ) : (
                  <Projects>
                    <div className="pageLoadContainer">
                      <div className="background">
                        <section className="sectionContainer">
                          <div className="header">My favorite projects.</div>

                          <div className="subHeadSection underline">
                            Hearts You Hold: Donation Flow
                          </div>
                          <div className="paragraphSection">
                            A full-stack React web application that connects
                            donors with HYH requests and facilitates fulfillment
                            via a custom checkout. This was five-week project,
                            executed by a team of three developers.
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
                              <div className="subHeadSection underline">
                                About Hearts You Hold
                              </div>
                              <div className="paragraphSection">
                                Hearts You Hold is a non-profit organization
                                whose mission is to support migrants,
                                immigrants, and refugees. Donors visit the
                                website to view specific requests and choose
                                where they would like their donation to go.
                              </div>
                              <div className="paragraphSection">
                                I was incredibly excited to be a part of this
                                project. A large number of the people served by
                                this organization work in the agriculture,
                                horticulture industry. Being able to combine my
                                two passions of programming and agriculture was
                                a dream come true!
                              </div>

                              <div className="subHeadSection underline">
                                The Problem
                              </div>
                              <div className="paragraphSection">
                                Hearts You Hold had an online donation option,
                                but it was cumbersome. Only one item could be
                                donated at a time. This meant to donate two or
                                more items a user had to go through the payment
                                process multiple times.
                              </div>

                              <div className="subHeadSection underline">
                                The Solution
                              </div>
                              <div className="paragraphSection">
                                In order streamline the donation flow, we built
                                a clone of the current request page, added a
                                shopping cart feature, and created an admin
                                portal to add new and update existing items in
                                the database.
                              </div>

                              <div className="subHeadSection underline">
                                Technologies
                              </div>
                              <div className="paragraphSection">
                                React, React-Paginate, HTML5, CSS3, MongoDB,
                                Nodejs, Paypal, Mailchimp, NodeMailer, and
                                Userfront.
                              </div>

                              <div className="subHeadSection underline">
                                My Role
                              </div>
                              <div className="paragraphSection">
                                My role focused on project management, cleaning
                                and manipulating the data on the back-end, and
                                state management on the front-end. I wrote logic
                                for filtering and rendering the donation cards
                                with pagination, created the shopping cart and
                                its donation percentage adjustment feature, and
                                styled the user side of the site.
                              </div>

                              <div className="subHeadSection underline">
                                Biggest Challenges
                              </div>
                              <div className="paragraphSection">
                                Starting off, I found my click events were
                                targeting all my cards at once. I used each
                                object's id as an argument for my handler
                                function to isolate individual cards.
                                <div className="paragraphSection"></div>
                                Connecting the dynamic category and state
                                filters with the pagination and donation card
                                rendering was probably my biggest hurdle for
                                this project. It combined four state
                                dependancies and multiple data mapping and
                                filtering methods.
                              </div>
                              <div className="paragraphSection">
                                I created a category flag that was triggered
                                when a filter was selected and then pass the
                                length of the filtered list to my pagination to
                                create the correct number of pages. I execute
                                this function each time a page or filter
                                selection changes.
                              </div>

                              <div className="subHeadSection underline">
                                Lessons Learned
                              </div>
                              <div className="paragraphSection">
                                This project pushed me. It allowed me to see the
                                big picture of our data flow and UX, but it also
                                gave me a chance to get my hands dirty with some
                                challenging logic and state management issues. I
                                ran into road blocks, searched documentation,
                                connected with other developers for advice, and
                                a ultimately, our team delivered a solution to
                                HYH's problem I'm very proud of!
                              </div>

                              <div className="imageFlexContainer">
                                <img
                                  className="img projectMargin"
                                  src={hyh_mobile}
                                  alt="HYH request page mobile gif"
                                />
                              </div>

                              <button
                                className="learnMore"
                                onClick={learnMoreHYH}
                              >
                                Close
                              </button>
                            </>
                          )}

                          <div className="imageFlexContainer">
                            <img
                              className="img projectMargin"
                              src={hyh}
                              alt="HYH request page desktop gif"
                            />
                          </div>

                          <div className="subHeadSection underline">
                            New to Burlington: Restaurant Catalog
                          </div>
                          <div className="paragraphSection">
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
                              <div className="subHeadSection underline">
                                Purpose
                              </div>
                              <div className="paragraphSection">
                                I built this project to gain experience with
                                fetching data, responsive design and conditional
                                rendering in React. Plus, being new to
                                Burlington, building a project with
                                React-Leaflet helped me learn my way around
                                town!
                              </div>

                              <div className="subHeadSection underline">
                                Technologies
                              </div>
                              <div className="paragraphSection">
                                React, HTML5, CSS3, Nodejs, and React-Leaflet.
                              </div>

                              <div className="subHeadSection underline">
                                Biggest Challenge
                              </div>
                              <div className="paragraphSection">
                                This project exposed me to the power of mapping
                                to render multiple components. Refactoring this
                                project to allow the navigation and restaurant
                                pages to be dynamically rendered based upon my
                                data was difficult to implement, but exciting to
                                execute. This experience has given me a better
                                understanding of data-first development.
                              </div>

                              <div className="subHeadSection underline">
                                Lessons Learned
                              </div>
                              <div className="paragraphSection">
                                The combination of integrating media queries and
                                using state and data for conditional rendering
                                has opened my eyes to a new world of
                                possibilties for future projects!
                              </div>

                              <div className="imageFlexContainer">
                                <img
                                  className="img projectMargin"
                                  src={mobile_burl}
                                  alt="Mobile design of navigation and restaurant page"
                                />
                              </div>

                              <button
                                className="learnMore"
                                onClick={learnMoreBur}
                              >
                                Close
                              </button>
                            </>
                          )}

                          <div className="imageFlexContainer">
                            <img
                              className="img projectMargin"
                              src={desktop_burl}
                              alt="gif of hearts you hold project"
                            />
                          </div>
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
                            src={hN}
                            alt="Hashnode logo"
                          />
                        </a>
                        <a href="https://github.com/dave-bailey">
                          <img
                            className="socialLogo"
                            src={gH}
                            alt="GitHub logo"
                            href="https://github.com/dave-bailey"
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/dave-andrew-bailey/">
                          <img
                            className="socialLogo"
                            src={lI}
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
