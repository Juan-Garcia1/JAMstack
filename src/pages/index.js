import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello fellow coders</h1>
    <p>My name is Juan and I'm a Front end developer.</p>
    <p>I like to stay active on <a href="https://codepen.io/-J0hn-/">Codepen</a> by building pens with what I learned</p>
    <p>This is my first hackathon and very excited to participate!</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
