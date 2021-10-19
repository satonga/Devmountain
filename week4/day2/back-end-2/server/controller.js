const houses = require('./db.json')
let globalId = 4

module.exports = {

    getHouses: (req, res) => {
        res.status(200).send(houses)
    },

    deleteHouse: (req, res) => {
        const { id } = req.params
        let index = houses.findIndex(houses => houses.id === +id)
        houses.splice(index, 1)
        res.status(200).send(houses)
    },

    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body
        let newHouse = {
            id: globalId,
            address: address,
            price: price,
            imageURL: imageURL
        }
        houses.push(newHouse)
        res.status(200).send(houses)
        globalId++
    },

    updateHouse: (req, res) => {
        let { type } = req.body
        let { id } = req.params
        let index = houses.findIndex(houses => +houses.id === +id)
        if(houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if(type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    }

}