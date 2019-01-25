import React from 'react';
import FluidLayout from '../components/fluid-layout'
import SEO from '../components/seo'
import './resume.scss';

const ResumePage = () => (
  <FluidLayout>
    <SEO title="Resume Andrew Heinke" keywords={[`resume`, `andrew`, `heinke`]} />
      <div className="resume">
    <div className="container">
		<div className="hero">
			<p className="name"><strong>Andrew</strong> Heinke</p>
			<h1 className="job-title">Resume</h1>
			<span className="email">andrew.j.heinke@gmail.com</span>

			<h2 className="lead">Half designer, half developer. <span role="img" aria-label="Powered">🔋</span> by <span role="img" aria-label="Tacos">🌮</span> & Pop-Tarts.
A creative with coding skills, I create things that look good.</h2>
		</div>
	</div>
  <div className="bg-wrapper">
  <div className="container-0">
		<ol className="timeline">
		  <li>
		    <h3 className="line">Work Experience</h3>
		    <span className="point"></span>
		    <p className="description">
		      UI Developer <a href="https://www.usaa.com/careers/design" target="_blank" rel="noopener noreferrer">@USAA</a>
		    </p>
		    <span className="date">Today - Apr. 2017</span>
		  </li>

		  <li>
		    <span className="point"></span>
		    <p className="description">
		      Web Designer <a href="https://kasasa.com/" target="_blank" rel="noopener noreferrer">@Kasasa</a>
		    </p>
		    <span className="date">Apr. 2017 - Oct. 2015</span>
		  </li>

		  		  <li>
		    <h3 className="line">Education</h3>
		    <span className="point"></span>
		    <p className="description">
		      UT Austin Coding Bootcamp
		    </p>
		    <span className="date">2016</span>
		  </li>

		  		  <li>
		    <span className="point"></span>
		    <p className="description">
		      The University of Texas at Austin
		    </p>
		    <span className="date">2015 - 2011</span>
		  </li>
		</ol>
	</div>
  </div>
	<div className="container">

		<div className="sections">
			<h2 className="section-title">Skills</h2>

			<div className="list-card">
				<span className="exp">+ 8 years</span>
				<div>
					<h3>Design & Design Thinking</h3>
					<span>Using design to solve problems and deliver value</span>
				</div>
			</div>

			<div className="list-card">
				<span className="exp">+ 4 years</span>
				<div>
					<h3>Coding Languages</h3>
					<span>HTML, CSS, JavaScript, React.js, Node.js </span>
				</div>
			</div>

			<div className="list-card">
				<span className="exp">+ 1 years</span>
				<div>
					<h3>Karaoke Singer</h3>
					<span>Known to perform classic hits like Soulja Boy's "Kiss Me Thru the Phone"</span>
				</div>
			</div>


		</div>
		<div className="sections">
				<h2 className="section-title">Interests</h2>

				<div className="list-card">
					<div>
						<h3>Painting</h3>
						<span><a href="https://www.youtube.com/watch?v=U1-EdDAofqo" target="_blank" rel="noopener noreferrer">Watch me paint</a> in front of a camera (super cool)</span>
					</div>
				</div>

				<div className="list-card">
					<div>
						<h3>Hiking</h3>
						<span><a href="https://www.insidehimalayas.com/wp-content/uploads/2018/07/3local.jpg" target="_blank" rel="noopener noreferrer">Here</a>, <a href="https://cdn.fodors.com/wp-content/uploads/2018/09/HERo_MachuPicchu101_Hero_4_MachuPicchu101_WhereCanIGetBestPhoto_dreamstime_xxl_110067560_2_1.jpg" target="_blank" rel="noopener noreferrer">Here</a>, and <a href="https://www.nationalgeographic.com/content/dam/expeditions/destinations/north-america/private/Yosemite/Hero-Yosemite.jpg" target="_blank" rel="noopener noreferrer">Here</a></span>
					</div>
				</div>
		</div>
	</div>

	<div className="container cards">

		<div className="card">
			<div className="skill-level">
				<span>+</span>
				<h2>60</h2>
			</div>

			<div className="skill-meta">
				<h3>Projects</h3>
				<span>Adapting and creating solutions for customer's needs</span>
			</div>
		</div>


		<div className="card">
			<div className="skill-level">
				<h2>50</h2>
				<span>%</span>
			</div>

			<div className="skill-meta">
				<h3>Web</h3>
				<span>Applications development integrating third-party services and mobile client(s)</span>
			</div>
		</div>


		<div className="card">
			<div className="skill-level">
				<h2>30</h2>
				<span>%</span>
			</div>

			<div className="skill-meta">
				<h3>Technical solutions</h3>
				<span>Such as web services, scripts, configurations</span>
			</div>
		</div>


		<div className="card">
			<div className="skill-level">
				<h2>20</h2>
				<span>%</span>
			</div>

			<div className="skill-meta">
				<h3>Leading</h3>
				<span>Web projects and ensure the quality of delivery</span>
			</div>
		</div>

	</div>


  </div>
  </FluidLayout>
);

export default ResumePage;
