// exports.createPages = async function ({actions}){
//     actions.createPage({
//         path: "dynamic-page",        //slug
//         component: require.resolve("./src/templates/dynamic-page.js"),
//         context: {
//             name: "Fahad"
//         }

//     })
// }

var path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
    {
        allContentfulProduct {
            nodes {
              slug
              productTitle
              price
              description {
                json
              }
              image {
                fluid {
                  src
                }
              }
            }
          }        
        }`
    )
    // console.log("result from graphql: ", JSON.stringify(result))

    ////////////////// for creating dynamic pages///////////////////////
    result.data.allContentfulProduct.nodes.forEach(obj => {
        createPage({
            path: `/product/${obj.slug}`,
            component: path.resolve("./src/templates/dynamic-page.js"),
            context: {
                itemDetails: obj
            }
        })
    })

   ////////////// for creating Product Main page///////////////////////

    const allProducts = await graphql(`
    {
        allContentfulProduct {
            nodes {
              slug
              productTitle
              image {
                fluid {
                  src
                }
              }
            }
          }        
        }`
    )

    const products = allProducts.data.allContentfulProduct.nodes
    allProducts.data.allContentfulProduct.nodes.map(obj => {
        createPage({
            path: `/product`,
            component: path.resolve("./src/templates/product-main-page.js"),
            context: {
              products
            }
        })
    })
console.log("allProducts:", JSON.stringify(allProducts))
}