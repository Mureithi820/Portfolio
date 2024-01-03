import React from "react";
import "./about.css";
import profile_picture from "../../assets/AVTR m.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Victor" />
          </div>
          {/* <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={profile_picture} alt="About Victor" />
          </div> */}
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6 Months + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>B.Sc. Information Technology</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>
                3+ Completed
                <br />
                and Counting
              </small>
            </article>
          </div>
          <p>
            I'm a recent graduate with a freshly acquired degree in Engineering.
            Throughout my academic journey, I've delved into various facets of
            problem-solving and honed my analytical skills.
          </p>
          <p>
            While navigating the academic landscape, I've explored diverse
            subjects and cultivated a strong foundation. Now, I'm eager to apply
            my theoretical knowledge to real-world scenarios and embark on a
            journey of practical learning.
          </p>
          <p>
            With a keen interest in technology and a hunger for continuous
            improvement, I'm excited to embrace new challenges and carve out a
            path in the dynamic field of IT. As I step into the professional
            world, I'm ready to leverage my education and embark on a rewarding
            career journey.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
