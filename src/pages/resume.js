import React from 'react';
import FluidLayout from '../components/fluid-layout'
import SEO from '../components/seo'
import { setConfiguration, Row, Col } from 'react-grid-system'
import './resume.scss';

setConfiguration({ gutterWidth: 60 });
const ResumePage = () => (
  <FluidLayout>
    <SEO title="Resume Andrew Heinke" keywords={[`resume`, `andrew`, `heinke`]} />
      <div className="resume">
    <div className="container">
		<div className="hero">
			<p className="name"><strong>Andrew</strong> Heinke</p>
			<h1 className="job-title">Resume</h1>
			<span className="email">andrew.j.heinke@gmail.com</span>

			<h2 className="lead">Half designer, half developer. <span className="nowrap"><span role="img" aria-label="Powered">🔋</span> by <span role="img" aria-label="Tacos">🌮</span> & Pop-Tarts. </span> 
A creative with coding skills, I create things that look good.</h2>
		</div>
	</div>
  <div className="bg-wrapper">
  <div className="container-0">
  <Row>
    <Col md={6}>
    <div className="job-wrapper">
		  <h3 className="line">Work Experience</h3>
      <h4 className="job">UI Developer at <a className="company" href="https://www.usaa.com/careers/design" target="_blank" rel="noopener noreferrer">USAA</a></h4>
      <p className="time">Apr 2017 - Present</p>
      <p>Building accessible, reusable ReactJS components as part of design language team to create a unified brand standard across digital spaces. Updating internal and consumer facing web applications with NodeJS, ReactJS, Redux. Integrating third party APIs with web applications to simplify workflows and automate tasks.</p>
      </div>
      <div className="job-wrapper">
        <h4 className="job">Web Designer at <a className="company" href="https://kasasa.com/" target="_blank" rel="noopener noreferrer">Kasasa</a></h4>
        <p className="time">Oct 2015 - Apr 2017</p>
        <p>Support for over 400 live websites for Community Financial Institutions. I design homepages, landing pages, banners & UI elements. I specialize in user experience and interaction. Through development of my coding knowledge I am able to design better for the web.</p>
        </div>
        <div className="job-wrapper">
          <h4 className="job">Junior Developer at <a className="company" href="http://mosak.com/" target="_blank" rel="noopener noreferrer">MOSAK</a></h4>
          <p className="time">Jan 2015 - Oct 2015</p>
          <p>Email Marketing Manager - Building email campaigns, database selection, HTML development and quality assurance. Campaign set-up, testing, tagging, deployment of interactive content-driven campaigns, and compiling monthly email campaign analytics reports.</p>
          <p>Web - Website updates/maintenance, development, and design. Optimize sites using SEO best practices. Compile monthly Google Analytics reports.</p>
        <p>Skills Utilized: Blue Hornet (Email Marketing Software), HTML, CSS, Adobe Creative Suite, Wordpress, Sublime Text, Transmit FTP, Google Analytics & Web Master Tools</p>
          </div>
    </Col>
    <Col md={6}>
		<h3 className="line">Education</h3>
    <div className="job-wrapper">
      <h4 className="job">UT Coding Bootcamp</h4>
      <p className="time">2016 - University of Texas at Austin</p>
      <p>Browser Based Technologies: HTML, CSS, Git, JavaScript, React, jQuery, Responsive Design</p>
      <p>Server Side Development: Node.js/Express, PHP (Wordpress, Codelgniter, Laravel), The LAMP Stack</p>
      <p>Database: MySQL, MongoDB, Servers, Heroku, Security and Session Storage, User Authentication</p>
      <p>Other Skills: Git/GitHub, HTML5, Bootstrap, PHP, Sessions, State Management, Sequelize, AJAX, Lodash, Backbone, RESTful API, JSON, Firebase</p>
      </div>
      <div className="job-wrapper">
        <h4 className="job">B.S. Advertising</h4>
        <p className="time">2011 - 2015 at The University of Texas at Austin</p>
        <p>Browser Based Technologies: HTML, CSS, Git, JavaScript, React, jQuery, Responsive Design</p>
        <p>Server Side Development: Node.js/Express, PHP (Wordpress, Codelgniter, Laravel), The LAMP Stack</p>
        <p>Database: MySQL, MongoDB, Servers, Heroku, Security and Session Storage, User Authentication</p>
        <p>Other Skills: Git/GitHub, HTML5, Bootstrap, PHP, Sessions, State Management, Sequelize, AJAX, Lodash, Backbone, RESTful API, JSON, Firebase</p>
        </div>
    </Col>
    </Row>
	</div>
  </div>
	<div className="container">
  <h3 className="line">Interests</h3>
  <Row>

    <Col md={6}>


      <div className="list-card">
        <div>
          <h3>Painting</h3>
          <span><a href="https://www.youtube.com/watch?v=U1-EdDAofqo" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Watch me paint</a> in front of a camera (super cool)</span>
        </div>
      </div>
      </Col>
        <Col md={6}>
      <div className="list-card">
        <div>
          <h3>Hiking</h3>
          <span><a href="https://www.insidehimalayas.com/wp-content/uploads/2018/07/3local.jpg" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Here</a>, <a href="https://cdn.fodors.com/wp-content/uploads/2018/09/HERo_MachuPicchu101_Hero_4_MachuPicchu101_WhereCanIGetBestPhoto_dreamstime_xxl_110067560_2_1.jpg" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Here</a>, and <a href="https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">Here</a></span>
        </div>
      </div>
    </Col>
  </Row>
	</div>

	<div className="skills-container">
  <div className="container">
  <h2 className="skills-title">Skills</h2>
  <Row>
    <Col md={12}>
    <div className="skill-bar-container">
      <span className="skill-name">HTML5 & CSS</span>
      <span className="skill-percent">100%</span>
      <span className="skill-bar level5"></span>
    </div>

    <div className="skill-bar-container">
      <span className="skill-name">JavaScript</span>
      <span className="skill-percent">90%</span>
      <span className="skill-bar level4"></span>
    </div>

    <div className="skill-bar-container">
      <span className="skill-name">React</span>
      <span className="skill-percent">90%</span>
      <span className="skill-bar level4"></span>
    </div>

    <div className="skill-bar-container">
      <span className="skill-name">Node.js</span>
      <span className="skill-percent">80%</span>
      <span className="skill-bar level2"></span>
    </div>

    <div className="skill-bar-container">
      <span className="skill-name">Design</span>
      <span className="skill-percent">100%</span>
      <span className="skill-bar level5"></span>
    </div>

    <div className="skill-bar-container">
      <span className="skill-name">Singing</span>
      <span className="skill-percent">20%</span>
      <span className="skill-bar level1"></span>
    </div>

    <div className="skill-bar-container">
      <span className="skill-name">Adobe Creative Suite</span>
      <span className="skill-percent">85%</span>
      <span className="skill-bar level3"></span>
    </div>

    </Col>
    </Row>
    </div>
    </div>

  </div>
  </FluidLayout>
);

export default ResumePage;
