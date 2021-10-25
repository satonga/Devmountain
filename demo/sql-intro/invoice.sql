-- invoice SQL

SELECT COUNT(1) FROM invoice
    WHERE billing_country = 'USA';

SELECT * FROM invoice
    ORDER BY total DESC
    LIMIT 1;

SELECT * FROM invoice
    ORDER BY total
    LIMIT 1;

SELECT * FROM invoice
    WHERE total > 5;

SELECT COUNT(1) FROM invoice
    WHERE total < 5;

SELECT * FROM invoice
    WHERE billing_state IN('CA', 'TX', 'AZ');

SELECT AVG(total) FROM invoice;

SELECT SUM(total) FROM invoice;

UPDATE invoice
    SET total = 26
    WHERE invoice_id = 5;

DELETE FROM invoice
    WHERE invoice_id = 1;

