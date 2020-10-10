import React from "react"
import Layout from "./../components/layout"

export default ({pageContext}) => {
    return(
        <Layout>
            <h2>This is a dynamic page developed by {pageContext.name} </h2>
        </Layout>
    )
}