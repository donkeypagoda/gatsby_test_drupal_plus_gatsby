import React from "react";
import { graphql, Link } from "gatsby";
import Img from 'gatsby-image';

const UserPage = ({data}) => (
  <div>
    <h1>Here's all the users on our awesome site!</h1>
    {data.allUserUser.edges.map(({node}) => (
          <div>
            <h3>{node.name}</h3>
          </div>
      ))}
    <div>
      <Link to="/">Back to home page</Link>
    </div>
  </div>
)

export default UserPage;

export const query  = graphql`
  query allUserUser{
    allUserUser {
          edges {
            node {
              name
    					id
    					relationships{
                file__file{
                  localFile{
                    id
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
