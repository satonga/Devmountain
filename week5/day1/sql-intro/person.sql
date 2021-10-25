--Persons SQL
CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    names VARCHAR(30),
    age INTEGER,
    height FLOAT,
    city VARCHAR(30),
    favorite_color VARCHAR(30)
);

INSERT INTO persons(names, age, height, city, favorite_color)
    VALUES('Mark', 20, 190.0, 'New York', 'Red');
INSERT INTO persons(names, age, height, city, favorite_color)
    VALUES('Debby', 64, 164.8, 'Sacremento', 'Blue');
INSERT INTO persons(names, age, height, city, favorite_color)
    VALUES('Shanae', 18, 182.5, 'Portland', 'Green');
INSERT INTO persons(names, age, height, city, favorite_color)
    VALUES('Jerry', 22, 133.5, 'Houston', 'Purple');
INSERT INTO persons(names, age, height, city, favorite_color)
    VALUES('Shawn', 37, 160.2, 'Maimi', 'Red');

SELECT * FROM persons
    ORDER BY height DESC;

SELECT * FROM persons
    ORDER BY height;

SELECT * FROM persons
    ORDER BY age DESC;

SELECT * FROM persons
    WHERE age > 20;

Select * From persons
    WHERE age = 18;

Select * From persons
    WHERE age < 20 AND age >30;

Select * From persons
    WHERE age <> 27;

Select * From persons
    WHERE favorite_color <> 'Red';

Select * From persons
    WHERE favorite_color <> 'Red' AND favorite_color <> 'Blue';

Select * From persons
    WHERE favorite_color = 'Orange' OR favorite_color = 'Green';

Select * From persons
    WHERE favorite_color IN ('Blue', 'Orange', 'Green');

Select * From persons
    WHERE favorite_color IN ('Yellow', 'Purple');



