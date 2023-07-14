const { query } = require('express')
const products = require('../models/product')

// "/"
const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query

    const qureryObject = {}

    if (company) {
        qureryObject.company = company
    }
    if (name) {
        qureryObject.featured = featured
    }

    if (name) {
        qureryObject.name = { $regex: name, $options: 'i' }
    }

    let apiData = products.find(qureryObject)

    if (sort) {
        const sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix)
    }

    if (select) {
        //const selectFix = select.replace(",", " ")
        const selectFix = select.split(',').join(" ");
        apiData = await apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 3

    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)

    console.log(qureryObject)

    const allData = await apiData
    res.status(200).json(allData)
}


//'/testing'
const getAllProductsTesting = async (req, res) => {

    const allData = await products.find(req.query)
    console.log(req.query)
    res.status(200).json(allData)

}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}