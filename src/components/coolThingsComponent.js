import React, {Component} from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

const Coolness = props => {
  console.log(props)
  return (
    <div>
      {props.data.allNodeCoolThings.edges.map(({node}) => (
        <div>
          <h3>{node.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.body.value}} />
        </div>
      ))}
    </div>
  )
}


export default Coolness
