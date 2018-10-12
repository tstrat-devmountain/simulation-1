module.exports = {
    getProduct : (req, res) => {
        const db = req.app.get('db');  // get database
        const { id } = req.params;
        db.get_product({id})
        .then( products => {
            res.status(200).json(products[0]);
        })
        .catch( error => {
            console.error("Error in getProduct (single) query: ", error);
        })
    },
    getProducts : (req, res) => {
        const db = req.app.get('db');  // get database
        db.get_products()
        .then( products => {
            res.status(200).json(products);
        })
        .catch( error => {
            console.error("Error in getProducts query: ", error);
        })
    },
    createProduct : (req, res) => {
        const db = req.app.get('db'); // get database

        db.create_product(req.body)
        .then( () => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.error("Error in createProduct query: ", error);
        })
    },
    updateProduct : (req, res) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        const { id } = req.params;
        db.update_product({ id, name, price, img })
        .then( () => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.error("Error in updateProduct query: ", error);
        })
    },
    deleteProduct : (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.delete_product({id})
        .then( () => {
            res.sendStatus(200);
        })
        .catch( error => {
            console.error("Error in deleteProduct query: ", error);
        })
    }
}