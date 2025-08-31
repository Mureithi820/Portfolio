import React from "react";
import "./about.css";
import profile_picture from "../../assets/AVTR about.png";
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
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Year of Development Experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>B.Sc. Information Technology</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed & Counting</small>
            </article>
          </div>

          <p>
            I'm a passionate Software Developer and Founder of{" "}
            <strong>SMEFinTech</strong>, a startup dedicated to empowering small
            and medium businesses through innovative financial solutions. With
            over a year of hands-on experience building web applications and
            solving real-world problems, I specialize in creating scalable,
            user-focused solutions that drive impact.
          </p>
          <p>
            My journey began with a strong academic foundation in Information
            Technology, and since then, I've worked on diverse projects ranging
            from web platforms to fintech integrations. I thrive on challenges
            and continuously push myself to learn, innovate, and deliver.
          </p>
          <p>
            Beyond coding, I'm deeply committed to leveraging technology to
            create opportunities for businesses and communities. My vision with
            SMEFinTech is to make financial management seamless for SMEs in
            Kenya and beyond.
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
