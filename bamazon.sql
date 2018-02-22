DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(100),
  price INT (10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jordan", "shoes", 100.20, 2);
VALUES ("hammer", "tools", 5.10, 3);
VALUES ("towel", "homegoods", 3.25, 4);
VALUES ("audi", "car", 10,000, 5);
VALUES ("mousepad", "electronics", 25, 6);
VALUES ("tv", "electronics", 500, 7);
VALUES ("refrigerator", "homegoods", 750, 8);
VALUES ("saw", "tools", 7, 1);
VALUES ("rims", "autobody", 350, 8);
VALUES ("grill", "homegoods", 75, 4);
VALUES ("jordan", "shoes", 100.20, 6);
VALUES ("hammer", "tools", 5.10, 7);
VALUES ("towel", "homegoods", 3.25, 4);
VALUES ("audi", "car", 10,000, 3);
VALUES ("mousepad", "electronics", 25, 5);
VALUES ("tv", "electronics", 500, 3);
VALUES ("refrigerator", "homegoods", 750, 4);
VALUES ("saw", "tools", 7, 6);
VALUES ("rims", "autobody", 350, 6);
VALUES ("grill", "homegoods", 75, 7);

SELECT * FROM products;
