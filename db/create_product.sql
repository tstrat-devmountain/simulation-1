INSERT INTO products (name, price, img) 
VALUES ( ${name}, ${price}, ${img}) returning *;