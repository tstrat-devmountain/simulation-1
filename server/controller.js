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

        db.create_product(req.body)
        .then( () => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.error("Error in createProduct querry: ", error);
        })
    },
    updateProduct : (req, res) => {
        const db = req.app.get('db');
        db.updateProduct(req.body)
        .then( () => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.error("Error in updateProduct querry: ", error);
        })
    }
}