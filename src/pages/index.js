import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from '../tea.module.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Base" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hayo</h1>
    <p>Welcome to my test of Gatsby with de-coupled Drupal.</p>
    <div className={styles.teaPics} style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <div>
      <Link to="/tea/">Go to Tea page</Link>
    </div>
    <div>
      <Link to="/coolThings/">Go to the page of cool things</Link>
    </div>
    <div>
      <Link to="/users/">Go to Users page</Link>
    </div>
  </Layout>
)

export default IndexPage
