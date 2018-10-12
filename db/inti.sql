DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products
(   
    id SERIAL PRIMARY KEY,
    name TEXT, 
    price DECIMAL, 
    img TEXT
);

/*
    SAMPLE INPUT:

INSERT INTO products (name, price, img)
VALUES ( 'Golf Club', 150.99, 'img_urls here');
*/