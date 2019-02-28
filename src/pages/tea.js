import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';

const TeaPage = ({data}) => (
  <div>
    <h1>Different types of tea</h1>
    {data.allNodeTea.edges.map(({node}) => (
      <div>
        <h3>{node.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value}} />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Img alt="tea" fluid={node.relationships.field_tea_image.localFile.childImageSharp.fluid} />
        </div>
      </div>
    ))}
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
