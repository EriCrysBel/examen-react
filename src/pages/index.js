import * as React from "react"
import { Link } from "gatsby"
import Card from "../components/cards";
import { getImage } from 'gatsby-plugin-image';

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"



const IndexPage = ({data}) => (
  <Layout>
  <h1>Página de inicio</h1>   
  <div className="contenedorcardexamen">
          {data.allDataJson.edges.map(({ node }) => {
        const image = getImage(node.image);
        return (
          
            <Card 
            descripcion={node.description} 
            imagen={image} 
            piefoto={node.title} 
            titulo={node.title}
            ></Card>
          
        );
      })}
  </div>

  </Layout>
)


export const Head = () => <Seo title="Inicio" />

export const query = graphql`
  query  {
    allDataJson {
    edges {
      node {
        id
        link
        title
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: WEBP
              width: 300
              aspectRatio: 1.77
            )
          }
        }
        description
      }
    }
  }
}
`;
export default IndexPage