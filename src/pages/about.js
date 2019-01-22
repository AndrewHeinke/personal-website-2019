import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About Andrew Heinke" keywords={[`andrew`, `heinke`, `about`]} />
    <h1> About </h1>
    <p>
      Lorem Khaled Ipsum is a major key to success.To be successful you’ ve got
      to work hard, to make history, simple, you’ ve got to make it.The weather
      is amazing, walk with me through the pathway of more success.Take this
      journey with me, Lion!I’ m giving you cloth talk, cloth.Special cloth
      alert, cut from a special cloth.Don’ t ever play yourself.Give thanks to
      the most high.The first of the month is coming, we have to get money, we
      have no choice.It cost money to eat and they don’ t want you to
      eat.Special cloth alert.The other day the grass was brown, now it’ s green
      because I ain’ t give up.Never surrender.
    </p>
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
