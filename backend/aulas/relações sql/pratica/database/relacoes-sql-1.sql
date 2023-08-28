-- Active: 1687392158933@@127.0.0.1@3306

-- Práticas

-- Prática 1 ========================

-- ====== Criação das tabelas ======

CREATE TABLE IF NOT EXISTS
    licences (
        id TEXT PRIMARY KEY NOT NULL,
        register_number TEXT NOT NULL UNIQUE,
        category NOT NULL
    );

CREATE TABLE IF NOT EXISTS
    drivers (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password NOT NULL,
        licence_id TEXT NOT NULL UNIQUE,
        FOREIGN KEY (licence_id) REFERENCES licences(id)
    );

-- ===== Populando as tabelas =====

INSERT INTO
    licences (id, register_number, category)
VALUES  ("l001", "102023001", "A"),
        ("l002", "102023002", "D"),
        ("l003", "102023003", "E"),
        ("l004", "102023004", "AB");

INSERT INTO
    drivers (id, name, email, password, licence_id )
VALUES (
        "d00001",
        "Bill",
        "bart@gmail.com",
        "123456",
        "l001"
    ), (
        "d00002",
        "Steves",
        "steves@gmail.com",
        "623456",
        "l004"
    ), (
        "d00003",
        "Ana Nery",
        "ananery@gmail.com",
        "6231456",
        "l002"
    );

-- ====== Executando a consulta =====

-- inverti os lados e o resultado é o mesmo.

SELECT
    drivers.id,
    drivers.name,
    licences.register_number AS registerNumber,
    licences.category
FROM licences
    INNER JOIN drivers ON drivers.licence_id = licences.id;

SELECT
    drivers.id,
    drivers.name,
    licences.register_number AS registerNumber,
    licences.category
FROM drivers
    INNER JOIN licences ON drivers.licence_id = licences.id;

-- Prática 2 / 3

-- ===== Criando as tabelas ====

CREATE TABLE IF NOT EXISTS
    phones (
        id TEXT PRIMARY KEY NOT NULL,
        phone_number TEXT NOT NULL UNIQUE,
        user_id TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id)
    );

CREATE TABLE IF NOT EXISTS
    users (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );

-- Prática 3

INSERT INTO
    users (id, name, email, password)
VALUES (
        "u00001",
        "Amelia",
        "amelia@gmail.com",
        "123456"
    ), (
        "u00002",
        "Bertoldo",
        "bertoldo@gmail.com",
        "623456"
    );

INSERT INTO
    phones (id, phone_number, user_id)
VALUES (
        "ph10001",
        "98888-6666",
        "u00001"
    ), (
        "ph20001",
        "97777-5555",
        "u00001"
    ), (
        "ph30001",
        "97666-4444",
        "u00001"
    );

SELECT
    users.name,
    phones.phone_number AS phoneNumber
FROM users
    INNER JOIN phones ON phones.user_id = users.id;

UPDATE phones SET user_id = "u00002" WHERE id="ph30001";

UPDATE phones SET user_id = "u00001" WHERE id="ph30001";

--Fixaxão

-- Relação 1:1  presidents  x countries

-- Relação 1:m - countries x states

-- construção das tabelas

-- presidents

CREATE TABLE IF NOT EXISTS
    presidents (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL UNIQUE
    );

CREATE TABLE IF NOT EXISTS
    countries (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL UNIQUE,
        id_president TEXT NOT NULl UNIQUE,
        FOREIGN KEY (id_president) REFERENCES presidents(id)
    );

CREATE TABLE IF NOT EXISTS
    states (
        id TEXT PRIMARY KEY NOT NULL,
        name TEXT NOT NULL UNIQUE,
        id_country TEXT NOT NULL
    );

-- Populando a tabela

INSERT INTO
    presidents (id, name)
VALUES ("001", "Luiz Inácio"), ("002", "Joe Biden"), (
        "003",
        "Andrés Manuel L.Obrador"
    );

INSERT INTO
    countries (id, name, id_president)
VALUES ("ct001", "Brasil", "001"), (
        "ct002",
        "Estados Unidos",
        "002"
    ), ("ct003", "México", "003");

INSERT INTO
    states (id, name, id_country)
VALUES ("st001", "Pernambuco", "ct001"), ("st002", "São Paulo", "ct001"), ("st003", "Arizona", "ct002"), (
        "st004",
        "Mississippi",
        "ct002"
    ), ("st005", "Hidalgo", "ct003"), ("st006", "Durango", "ct003");

SELECT
    presidents.name,
    countries.name,
    states.name
FROM presidents
    INNER JOIN countries ON countries.id_president = presidents.id
    INNER JOIN states ON states.id_country = countries.id;
