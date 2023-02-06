-- Active: 1675694863923@@127.0.0.1@3306
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

CREATE TABLE equipament (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
    type TEXT NOT NULL, 
    person_id TEXT NOT NULL,
    FOREIGN KEY (person_id) REFERENCES persons (id));

INSERT INTO equipament (id, name, type, person_id)
VALUES ("e001", "Old Gun","Gun","p001"),
("e002", "Old Sword","Sword","p002"),
("e003", "Dagger","Dagger","p003"),
("e004", "Bronze Vest","Armor","p003");

SELECT * FROM equipament;