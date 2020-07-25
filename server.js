
const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

//INDEX
server.get("/", function(req, res) {
    return res.render("index")
})

//ABOUT
server.get("/about", function(req, res) {
    return res.render("about")
})

//RECIPES
server.get("/recipes", function(req, res) {
    return res.render("recipes")
})

//SEND-RECIPE
server.get("/send-recipe", function(req, res) {
    return res.render("send-recipe")
})

//MATZO-RECIPE
server.get("/recipe-matzo", function(req, res) {
    return res.render("recipe-matzo")
})

server.listen(5000, function() {
    console.log("server is running")
})
