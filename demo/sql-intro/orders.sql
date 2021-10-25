--Orders SQL

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(60),
    product_price FLOAT,
    quantity INTEGER
);

INSERT INTO orders(person_id, product_name, product_price, quantity)
    VALUES(1, 'Coke', 5.50, 1),
            (2, 'Bread', 2.20, 2),
            (1, 'Toilet Paper', 11.50, 1),
            (1, 'Candy Bar', .99, 6),
            (2, 'Cheese', 6.30, 1);


SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(quantity * product_price) FROM orders
    WHERE person_id = 1;


