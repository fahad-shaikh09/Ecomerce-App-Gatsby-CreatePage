import React from "react"
import Layout from "./../components/layout"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// export default ({pageContext}) => {
//     return(
//         <Layout>
//             <h2>This is a dynamic page developed by {pageContext.name} </h2>
//         </Layout>
//     )
// }



export default ({ pageContext }) => {
    const { itemDetails } = pageContext
    // console.log("itemDetails:", itemDetails)
    return (
        <Layout>
            <h1> Title: {itemDetails.productTitle}</h1>
            <h2>Price: {itemDetails.price} </h2>

            <p>Description: {documentToReactComponents(itemDetails.description.json)}</p>
            <img src={itemDetails.image.fluid.src} alt={itemDetails.slug}/> 

        </Layout>
    )
}