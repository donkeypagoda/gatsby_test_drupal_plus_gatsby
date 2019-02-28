import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Waassup!</h1>
    <p>Welcome to my test of Gatsby with de-coupled Drupal.</p>
    <div>
      <Link to="/tea/">Go to Tea page</Link>
    </div>
  </Layout>
)

export default IndexPage
