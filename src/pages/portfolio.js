import React from 'react';

import FluidLayout from '../components/fluid-layout'
import SEO from '../components/seo'
import './portfolio.scss'
import blockImg from '../images/block-shapes.png'
import pondImg from '../images/pond.svg'
import cloud1 from '../images/cloud-1.png'
import cloud5 from '../images/cloud-5.png'
import Anime from 'react-anime'

const Portfolio = ({}) => (
  <FluidLayout>
    <SEO title="Portfolio Andrew Heinke" keywords={[`andrew`, `heinke`, `portfolio`, `work`, `projects`]} />
      <div className="portfolio-wrapper">
        <div className="column primary-black column-padding column-flex-center">
          <h1 className="projects-title">Projects</h1>
          <div className="projects-paragraph-wrapper">
            <p className="projects-paragraph">Take a gander at some of my projects. Want to see my latest? Feel free to reach out to me to chat about my current work.</p>
          </div>
          <div className="project-image-wrapper">

            <img className="project-image" src={blockImg} alt="Project image" />
            <Anime easing="easeInOutSine"
               loop={true}
               duration={4000}
               direction="alternate"
               delay={(el, index) => index * 500}
               translateY='-2rem'
               scale={[.85, .9]}>
              <img id="cloud-6" src={cloud5} alt="Floating Cloud" />

                </Anime>
                <Anime easing="easeInOutSine"
                   loop={true}
                   duration={5000}
                   direction="alternate"
                   delay={(el, index) => index * 500}
                   translateY='1rem'
                   scale={[.85, .9]}>
                  <img id="cloud-7" src={cloud5} alt="Floating Cloud" />

                    </Anime>
                    <Anime easing="easeInOutSine"
                       loop={true}
                       duration={3000}
                       direction="alternate"
                       delay={(el, index) => index * 500}
                       translateY='-.75rem'
                       scale={[.85, 1]}>
                      <img id="cloud-8" src={cloud5} alt="Floating Cloud" />

                        </Anime>
            <img className="pond-image" src={pondImg} alt="Pond" />
          </div>
        </div>
        <div className="column">
        <div className="project-card">
          hello world
        </div>
        </div>
    </div>
  </FluidLayout>
);

export default Portfolio;
