import React from "react";
import { graphql, Link } from "gatsby";
import Coolness from '../components/coolThingsComponent.js'

const CoolThings = ({data}) => (

    <div>
      <h1>Look at all these cool things!</h1>
    <div>
      <Coolness data={data} />
    </div>
      <div>
      <Link to="/">Back to home page</Link>
      </div>
    </div>

)


export default CoolThings;

export const query = graphql`
query allNodeCoolThings{
        allNodeCoolThings{
          edges{
            node{
              title
              body{
                value
                format
                processed
                summary
              }
              relationships{
                field_cool_things_image {
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
