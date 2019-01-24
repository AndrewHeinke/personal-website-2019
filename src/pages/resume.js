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
	<div className="container">

		<div className="sections">
			<h2 className="section-title">Skills</h2>

			<div className="list-card">
				<span className="exp">+ 5 years</span>
				<div>
					<h3>Object programming & frameworks</h3>
					<span>PHP, Symfony, Laravel, Silex, …</span>
				</div>
			</div>

			<div className="list-card">
				<span className="exp">+ 3 years</span>
				<div>
					<h3>Design integration</h3>
					<span>Style and tools, JS Frameworks</span>
				</div>
			</div>

			<div className="list-card">
				<span className="exp">+ 6 years</span>
				<div>
					<h3>Linux</h3>
					<span>Scripting, Servers management and protocols, Automation</span>
				</div>
			</div>


		</div>
		<div className="sections">
				<h2 className="section-title">Interests</h2>

				<div className="list-card">
					<div>
						<h3>Scripting languages</h3>
						<span>PHP, JS, Bash, Python</span>
					</div>
				</div>

				<div className="list-card">
					<div>
						<h3>Hacking</h3>
						<span>Linux, Crawlers, Bots, Network</span>
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

	<div className="container">
		<ol className="timeline">
		  <li>
		    <p className="line">Experiences</p>
		    <span className="point"></span>
		    <p className="description">
		      Lead Developer @Geronimo
		    </p>
		    <span className="date">Today - Apr. 2016</span>
		  </li>

		  <li>
		    <span className="point"></span>
		    <p className="description">
		      Freelance
		    </p>
		    <span className="date">Apr. 2016 - Sep. 2015</span>
		  </li>

		  		  <li>
		    <p className="line">Education</p>
		    <span className="point"></span>
		    <p className="description">
		      DUT "Métiers du multimédia et de l'internet"
		    </p>
		    <span className="date">2015 - 2013</span>
		  </li>

		  		  <li>
		    <span className="point"></span>
		    <p className="description">
		      Art & Design studies
		    </p>
		    <span className="date">2013 - 2008</span>
		  </li>
		</ol>

	</div>
  </div>
  </FluidLayout>
);

export default ResumePage;
