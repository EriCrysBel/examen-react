import * as React from "react"

import Layout from "../components/layout"
import Card from "../components/cards"
import logo from "../images/logoPN.png"

const IndexPage = () => (
  <Layout>
    <Card
      titulo='Logotipo de Patrimonio Nacional'
      imagen={logo}
      piefoto='logo patrimonio' 
      descripcion='este es el logotipo de la institución'
      enlace="https://www.patrimonionacional.es/"
    />
  </Layout>
)



export default IndexPage
