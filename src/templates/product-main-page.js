import { Link } from 'gatsby'
import React from 'react'
import Layout from "./../components/layout"


const Product = ({ pageContext }) => {
    console.log("pageContext in Product's main page:", pageContext)

    const { products } = pageContext
    // console.log("products:", products)

    return (
        <Layout>
            <h1>Our Products!</h1>

            <ul>
                {products.map(prod => (
                    <li key={prod.slug}>
                        <h2>  <Link to={prod.slug} > {prod.productTitle} </Link> </h2>
                        <img src={prod.image.fluid.src} height="200px" width="200px" alt={prod.slug} /> <br />
                    </li>
                ))
                }
            </ul>





        </Layout>
    )
}

export default Product
