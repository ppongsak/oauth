var express = require('express')

const index = (req, res) => {
    return res.json({
        status: true,
        data: {
            message: 'index'
        }
    })
}

const store = (req, res) => {
    return res.json({
        status: true,
        data: {
            message: 'stored'
        }
    })
}

module.exports = {
    index,
    store
}
