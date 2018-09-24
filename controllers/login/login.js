const store = (req, res) => {
    console.log(req.body)

    return res.json({
        status: true,
        data: {
            message: 'login:stored'
        }
    })
}

module.exports = {
    store
}
