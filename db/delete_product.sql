DELETE FROM products
WHERE id = ${id} returning *;