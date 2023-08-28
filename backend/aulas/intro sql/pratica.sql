-- Active: 1686694830085@@127.0.0.1@3306
CREATE TABLE books (
  id TEXT NOT NULL PRIMARY KEY, 
  name TEXT NOT NULL, 
  author TEXT NOT NULL,
  page_count INTEGER,
  price REAL NOT NULL
);

DROP TABLE books;

INSERT INTO books (id, name, author, page_count, price)
VALUES
("8503012928","O Quinze","Rachel de Queioz",208,24.95),
("8578887239","Dom Casmurro","Machado de Assis",null,46.77),
("8578887131","O Homem que Calculava","Malba Tahan",null,150);

SELECT * FROM books;

UPDATE books
SET page_count = 463
WHERE id = "8578887239";

DELETE FROM books
WHERE id = "8578887239";

DELETE FROM books;

CREATE TABLE tasks (
  id INTEGER PRIMARY KEY  AUTOINCREMENT,
  hour TEXT NOT NULL,
  description TEXT NOT NULL,
  finished INTEGER NOT NULL 
);

DROP TABLE tasks;

INSERT INTO tasks ( description, hour, finished)
VALUES 
("ESTUDAR","3:40AM",1),
("PEDALAR","5:00AM",1),
("CAFÉ","7:00AM",1),
("TRABALHAR","7:30AM AS 18:00PM",1),
("ESTUDAR","7:00AM AS 00:00PM",0),
("DORMIR","0:01 AS 03:00AM",0),
("ACORDAR","3:01AM",0);

SELECT * FROM tasks;
