const express = require('express');
const router = express.Router();
const welcome = require("../logger/logger.js")
const {printDate, printMonth, getBatchInfo} = require("../util/helper")
const {trim, changetoLowerCase, changeToUpperCase} = require("../validator/formatter")
const _ = require("lodash")


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const oddArr = [1,3,5,7,9,11,13,15,17,19]
let a1 = [1,1,2,2]
let a2= [3,4,4]
let a3 = [4,5,5]
let a4= [6,6,7,7,8]
let a5=[9,10,10]

router.get('/test-me', function (req, res) {
     console.log(welcome())
     console.log(printDate())
     console.log(printMonth())
     console.log(getBatchInfo())
     console.log(trim())
     console.log(changetoLowerCase())
     console.log(changeToUpperCase())
     console.log((_.chunk(months, 3)))
     console.log(_.tail(oddArr))
     console.log(_.union(a1,a2,a3,a4,a5))
     console.log(_.fromPairs([["horror", "The Shining"], ["drama", "Titanic"], ["thriller","Shutter Island"], ["fantasy", "Pans Labyrinth"]]))
    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;