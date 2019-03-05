import React from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';
import '../tea.css'

const TeaPage = ({data}) => (
  <div>
    <h1>Different types of tea</h1>
    <div className="teaStuff">
      {data.allNodeTea.edges.map(({node}) => (
        <div className="singleTea">
          <div className="teaTitle">
            <h3>{node.title}</h3>
          </div>
          <div className="teaPics" style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Img alt="tea" fluid={node.relationships.field_tea_image.localFile.childImageSharp.fluid} />
          </div>
            <div className="teaBody" dangerouslySetInnerHTML={{ __html: node.body.value}} />
        </div>
      ))}
    </div>
    <div>
    <Link to="/">Back to home page</Link>
    </div>
  </div>
)

export default TeaPage;

export const query  = graphql`
  query allNodeTea {
    allNodeTea {
      edges {
        node {
          title
          body {
            value
            format
            processed
            summary
          }
          relationships{
            field_tea_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
