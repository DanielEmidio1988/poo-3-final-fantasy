-- Active: 1675264084865@@127.0.0.1@3306
CREATE TABLE persons (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL, 
    classperson TEXT NOT NULL, 
    level INTEGER DEFAULT(1) NOT NULL,
    create_at TEXT DEFAULT(DATETIME()) NOT NULL);

SELECT * FROM persons;

DROP TABLE persons;

INSERT INTO persons (id, name, classperson)
VALUES ("p001", "Noctis Lucis Caelum", "Warrior"),
("p002", "Cloud Strife", "Warrior"),
("p003", "Zidane", "Thief");