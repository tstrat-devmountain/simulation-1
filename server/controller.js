module.exports = {
    getProducts : (req, res) => {
        const db = req.app.get('db');  // get database
        db.get_products()
        .then( products => {
            res.status(200).json(products);
        })
        .catch( error => {
            console.error("Error in getProducts querry: ", error);
        })
    },
    createProduct : (req, res) => {
        const db = req.app.get('db'); // get database
        const {name, price, img} = req.body;  // if we need it just in case (remove if not)

        db.create_product(req.body)
        .then( () => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.error("Error in createProduct querry: ", error);
        })
    }
}