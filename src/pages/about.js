import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = () => (
  <Layout>
    <SEO title="About Andrew Heinke" keywords={[`andrew`, `heinke`, `about`]} />
    <h1> About </h1>{' '}
    <p>
      Lorem Khaled Ipsum is a major key to success.To be successful you’ ve got
      to work hard, to make history, simple, you’ ve got to make it.The weather
      is amazing, walk with me through the pathway of more success.Take this
      journey with me, Lion!I’ m giving you cloth talk, cloth.Special cloth
      alert, cut from a special cloth.Don’ t ever play yourself.Give thanks to
      the most high.The first of the month is coming, we have to get money, we
      have no choice.It cost money to eat and they don’ t want you to
      eat.Special cloth alert.The other day the grass was brown, now it’ s green
      because I ain’ t give up.Never surrender.{' '}
    </p>{' '}
    <div className="testimonial-wrapper">
     <p>"Though I have tried and tried, I have never ever met Andrew before."</p>
     <div className="testimonial-author-wrapper">
        <h4>😡 Bad Design Work</h4>
     </div>
     <div className="testimonial-blue-line"></div>
     <img src="https://global-uploads.webflow.com/58065afcec27c89278ba59f7/589de6173091d49f015793a7_quote-icon.svg" alt="" className="quote-icon bottom-quote"/>
     <img src="https://global-uploads.webflow.com/58065afcec27c89278ba59f7/589de6173091d49f015793a7_quote-icon.svg" alt="" className="quote-icon"/>
   </div>
  </Layout>
)

export default AboutPage
