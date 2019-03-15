import React from "react";
import Img from 'gatsby-image';
import styles from '../tea.module.css'


function Coolness(props){
    return (
      <div>
        {props.data.allNodeCoolThings.edges.map(({node}) => (
          <div>
            <h3>{node.title}</h3>
            <div className={styles.teaPics} style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Img alt="cool" fluid={node.relationships.field_cool_things_image.localFile.childImageSharp.fluid} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: node.body.value}} />
          </div>
        ))}
      </div>
    )
}

export default Coolness;
