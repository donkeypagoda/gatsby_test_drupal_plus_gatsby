import React from "react";
import { graphql } from "gatsby"


const TeaPage = ({data}) => (
  <div>
    <h1>Different types of tea</h1>
    {data.allNodeTea.edges.map(({node}) => (
      <div>
        <h3>{node.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: node.body.value}} />
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
        }
      }
    }
  }
`
