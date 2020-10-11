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
                        <Link to={prod.slug} > {prod.productTitle} </Link>

                    </li>     
            ))
        }
            </ul>





        </Layout>
    )
}

export default Product
