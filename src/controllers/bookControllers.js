const BookModel = require("../models/bookModel")

const createBook= async function(req, res){
    let data= req.body
    let savedData = await BookModel.create(data)
    res.send({data: savedData})
}

const getBookData = async function(req, res){
    let allBooks = await BookModel.find()
    res.send({data: allBooks})
}
module.exports.createBook = createBook
module.exports.getBookData= getBookData