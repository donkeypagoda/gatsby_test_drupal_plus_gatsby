import React from "react";
import { graphql } from "gatsby"


const TeaPage = ({data}) => (
  <div>
    <h1>Different types of tea</h1>
    {data}
  </div>
)
export default TeaPage;

export const query  = graphql`
{
  nodeTea {
    id
    title
    body {
      value
      format
      processed
      summary
    }
    relationships{
      field_tea_image {
        id
      }
    }

  }
}
`
