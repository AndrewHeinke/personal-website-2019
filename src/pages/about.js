import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ProfileImg from '../images/profile.jpg'
import './about.scss'

const AboutPage = () => (
  <Layout>
    <SEO title="About Andrew Heinke" keywords={[`andrew`, `heinke`, `about`]} />
    <h1> About </h1>
    <div className="profile-wrapper">
      <div className="profile-picture">
        <img src={ProfileImg} alt="Andrew Heinke" />
        <svg
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(300,300)">
            <path d="M94.8,-140.4C126.4,-127.1,158.3,-107,181.8,-76.8C205.3,-46.6,220.4,-6.4,213.6,29.6C206.7,65.6,177.8,97.3,150.6,132.9C123.5,168.5,98.1,208,62.8,222.4C27.4,236.7,-17.8,225.8,-66.9,216.5C-115.9,207.2,-168.7,199.6,-196.9,169.3C-225.2,139.1,-228.9,86.3,-225.6,38.9C-222.4,-8.4,-212.2,-50.3,-200.1,-97.4C-188,-144.5,-174,-196.7,-140.3,-209.2C-106.7,-221.7,-53.3,-194.3,-10.9,-177.4C31.5,-160.4,63.1,-153.8,94.8,-140.4Z" fill="#0DAB76" />
          </g>
        </svg>
      </div>
      <p>
        Andrew Heinke is a web developer currently living in Austin Texas. JavaScript is his language of choice writing React applications and developing components at USAA as part of the Design Language Systems team.
      </p>
    </div>

    <div className="testimonial-wrapper">
     <p>"Though I have tried and tried, I have never met Andrew before."</p>
     <div className="testimonial-author-wrapper">
        <h4><span role="img" aria-label="Angry Face Emoji">😡</span> Bad Design Work</h4>
     </div>
     <div className="testimonial-blue-line"></div>
     <div className="quote-icon bottom-quote"><svg xmlns="http://www.w3.org/2000/svg"><path d="M0 18.28C0 25.096 4.593 29 9.687 29c4.677 0 8.686-3.905 8.686-8.725 0-4.653-3.257-7.728-7.266-7.728-.919 0-1.754.166-2.171.333 1.085-3.158 4.927-6.814 7.6-7.977L10.438 0C3.925 4.57 0 10.968 0 18.28zm20.627 0c0 6.815 4.594 10.72 9.688 10.72C34.99 29 39 25.095 39 20.275c0-4.653-3.257-7.728-7.266-7.728-.918 0-1.753.166-2.17.333 1.085-3.158 4.926-6.814 7.599-7.977L31.066 0c-6.514 4.57-10.439 10.968-10.439 18.28z" fill="#0DAB76" fillRule="evenodd"/></svg></div>
      <div className="quote-icon"><svg className="quote-icon" xmlns="http://www.w3.org/2000/svg"><path d="M0 18.28C0 25.096 4.593 29 9.687 29c4.677 0 8.686-3.905 8.686-8.725 0-4.653-3.257-7.728-7.266-7.728-.919 0-1.754.166-2.171.333 1.085-3.158 4.927-6.814 7.6-7.977L10.438 0C3.925 4.57 0 10.968 0 18.28zm20.627 0c0 6.815 4.594 10.72 9.688 10.72C34.99 29 39 25.095 39 20.275c0-4.653-3.257-7.728-7.266-7.728-.918 0-1.753.166-2.17.333 1.085-3.158 4.926-6.814 7.599-7.977L31.066 0c-6.514 4.57-10.439 10.968-10.439 18.28z" fill="#0DAB76" fillRule="evenodd"/></svg></div>

   </div>
  </Layout>
)

export default AboutPage
