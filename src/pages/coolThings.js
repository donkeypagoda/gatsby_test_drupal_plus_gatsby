import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Coolness from '../components/coolThingsComponent.js'


class CoolThings extends Component{
  constructor(props){
  super(props)
  this.state = {
    data: {}
  }
}

async getGraph(){
  const query = await graphql`
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

}

async componentDidMount(){
  const graphRes = await this.getGraph()
  this.setState({
    data: this.getGraph()
  })
}


  render(){
    console.log(this.state)
    return(
        <div>
          <h1>Look at all these cool things!</h1>
          <Coolness data={this.state.data} />
          <div>
            <Link to="/">Back to home page</Link>
          </div>
        </div>
    )
  }


}

export default CoolThings;
