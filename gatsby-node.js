exports.createPages = async function ({actions}){
    actions.createPage({
        path: "dynamic-page",
        component: require.resolve("./src/templates/dynamic-page.js"),
        context: {
            name: "Fahad"
        }
        
    })
}