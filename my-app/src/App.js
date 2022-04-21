import React, {useState} from "react";

import Hero from "./Hero/Hero.js";
import About from "./About/About.js";
import Projects from "./Projects/Projects.js"

import GH from "./Hero/assets/GH.png";
import LI from "./Hero/assets/LI.png";
import HN from "./Hero/assets/HN.png";

import YellowStoneDave from "./Hero/assets/dave_in_yellowstone.jpeg";
import CDT from "./About/assets/CDT.jpeg";
import Jackfruit from "./About/assets/Jackfruit.jpeg";
import Sarracenia from "./About/assets/Sarracenia.jpeg";

import Filter from "./Projects/assets/filter.png";
import AddToCart from "./Projects/assets/addToCart.png";
import ReadMore from "./Projects/assets/ReadMore.png"

import "./App.css";
import "./Slider/Slider.css";

function App() {

  const [aboutOpen, setAboutOpen] = useState(true)

  let toggle = () => {

    if(aboutOpen === true) {
      setAboutOpen(false);
    } else if (aboutOpen === false) {
      setAboutOpen(true)
    }

  }

  return (
    <>
      <div className="App">
        <Hero>
          <div className="heroContainer">
            <div className="heroHeader">Hi, I'm Dave.</div>

            <div className="ImgSubSocialContainer">
              <div className="subHeadContainer">
                <div className="heroSubHead">
                  I might be the only software developer, gardener, thru-hiker
                  on the planet.
                </div>
              </div>

              <div className="heroImgContainer">
                <img
                  className="heroImg"
                  src={YellowStoneDave}
                  alt="Dave in Yellowstone National Park"
                />
              </div>
            </div>
          </div>


        <div className="toggleContainer">
          <div className="toggleAbout">About Me</div>
          <label class="switch">
            <input type="checkbox" onChange={toggle} />
            <span class="slider round"></span>
          </label>
          <div className="toggleProjects">My Projects</div>
        </div>
        </Hero>


      { aboutOpen ? (<About>

        <div className="pageLoad">
          <div className="skillsContainer">
            <div className="skillsHead">I'd love to connect!</div>
            <div className="listContainer">
            <div className="emailSocialContainer">  
            <h1 className="emailHeader">dave.andrew.bailey@gmail.com</h1>
            <div className="socialContainer">
                    <a href="https://trail2dev.hashnode.dev/">
                      <img className="socialLogo" src={HN} alt="Hashnode logo" />
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
                      <img className="socialLogo" src={LI} alt="LinkedIn logo" />
                    </a>
                  </div>
                  </div>
            </div>
          </div>

          <div className="background">
              
              <section className="aboutContainer">
                <div className="aboutHeader">A bit about me.</div>
                <div className="aboutParagraph">
                  I’ve always been a mash-up of unique passions. I started my
                  “professional-life” working in international agricultural
                  development and horticulture. I’ve raised veggies. I’ve taught
                  kids, college students and farmers to care for themselves and
                  their communities through sustainable and regenerative
                  agricultural practice. I’ve even managed a historical garden or
                  two.
                </div>
                <img
                  className="heroImg"
                  src={Jackfruit}
                  alt="Dave holding a giant jackfruit"
                />
                <div className="aboutParagraph">
                  But things shifted when I first dipped my toe into web
                  development. I made a SquareSpace site for my brother-in-law’s
                  dental practice. Not an earth-shattering experience or
                  end-product for that matter, but that project sparked a desire
                  in me to someday learn more about design and development.
                </div>
                <div className="aboutSubHead">But someday had to wait.</div>
                <div className="aboutParagraph">
                  {" "}
                  For the last five years my wife and I have had one priority…the
                  Triple Crown of Thru-Hiking!
                </div>
                <img
                  className="heroImg"
                  src={CDT}
                  alt="Dave and Leisel at the southern terminus of the CDT."
                />
                <div className="aboutParagraph">
                  The Triple Crown refers to the Appalachian Trail, the
                  Continental Divide Trail, and the Pacific Crest Trail. A
                  thru-hike is when you walk the entirety of a long-distance
                  hiking trail within a calendar year. There are a little over 500
                  people who have completed the Thru-Hiking Triple Crown, and, as
                  of September 2021, I’m proud to say my wife and I are a part of
                  that weird, elite group.
                </div>
                <div className="aboutParagraph">
                  Now that the Triple Crown dream has been realized (yeah, I’ve
                  really walked across America 3x…it’s still crazy to me too),
                </div>
                <div className="aboutSubHead">
                  My someday of becoming a developer has arrived!
                </div>
                <div className="aboutParagraph">
                  I jumped at the chance to enroll in a software development
                  bootcamp and have been coding non-stop ever since.
                </div>
                <div className="aboutParagraph">
                  Solving problems and reaching big goals is addictive to me, and
                  coding has given me a new direction and place to focus my
                  enthusiasm and energy.
                </div>
                <img
                  className="heroImg"
                  src={Sarracenia}
                  alt="Dave looking at a sarracenia leucophylla"
                />
                <div className="aboutParagraph">
                  I’m not into everything, but the things I am into…I’m really
                  into!
                </div>
                <div className="aboutSubHead">
                  And programming has made the list.
                </div>
              </section>
          </div>
        </div>
        </About>) : (<Projects>

          <div className="pageLoad">
          <div className="skillsContainer">
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


          <div className="background">
            <section className="aboutContainer">
              <div className="aboutHeader">My favorite projects.</div>
              <div className="aboutParagraph">
                I’ve always been a mash-up of unique passions. I started my
                “professional-life” working in international agricultural
                development and horticulture. I’ve raised veggies. I’ve taught
                kids, college students and farmers to care for themselves and
                their communities through sustainable and regenerative
                agricultural practice. I’ve even managed a historical garden or
                two.
              </div>
              <img
                className="heroImg"
                src={ReadMore}
                alt="Dave holding a giant jackfruit"
              />
              <div className="aboutParagraph">
                But things shifted when I first dipped my toe into web
                development. I made a SquareSpace site for my brother-in-law’s
                dental practice. Not an earth-shattering experience or
                end-product for that matter, but that project sparked a desire
                in me to someday learn more about design and development.
              </div>
              <div className="aboutSubHead">But someday had to wait.</div>
              <div className="aboutParagraph">
                {" "}
                For the last five years my wife and I have had one priority…the
                Triple Crown of Thru-Hiking!
              </div>
              <img
                className="heroImg"
                src={AddToCart}
                alt="Dave and Leisel at the southern terminus of the CDT."
              />
              <div className="aboutParagraph">
                The Triple Crown refers to the Appalachian Trail, the
                Continental Divide Trail, and the Pacific Crest Trail. A
                thru-hike is when you walk the entirety of a long-distance
                hiking trail within a calendar year. There are a little over 500
                people who have completed the Thru-Hiking Triple Crown, and, as
                of September 2021, I’m proud to say my wife and I are a part of
                that weird, elite group.
              </div>
              <div className="aboutParagraph">
                Now that the Triple Crown dream has been realized (yeah, I’ve
                really walked across America 3x…it’s still crazy to me too),
              </div>
              <div className="aboutSubHead">
                My someday of becoming a developer has arrived!
              </div>
              <div className="aboutParagraph">
                I jumped at the chance to enroll in a software development
                bootcamp and have been coding non-stop ever since.
              </div>
              <div className="aboutParagraph">
                Solving problems and reaching big goals is addictive to me, and
                coding has given me a new direction and place to focus my
                enthusiasm and energy.
              </div>
              <img
                className="heroImg"
                src={Filter}
                alt="Dave looking at a sarracenia leucophylla"
              />
              <div className="aboutParagraph">
                I’m not into everything, but the things I am into…I’m really
                into!
              </div>
              <div className="aboutSubHead">
                And programming has made the list.
              </div>
            </section>
          </div>
          </div>
          </Projects>)}               

      </div>
    </>
  );
}

export default App;
