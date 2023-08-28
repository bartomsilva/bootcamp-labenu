-- Active: 1687392158933@@127.0.0.1@3306

-- exemplo turmas e estudantes

-- primeiro cria tabela que será referenciada

CREATE TABLE
    classrooms (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL
    );

DROP TABLE classrooms;

-- depois cria tabela que sera referencia

CREATE TABLE
    students(
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        classroom_id TEXT NOT NULL,
        FOREIGN KEY (classroom_id) REFERENCES classrooms(id)
    );

DROP TABLE students;
-- primeiro inserimos uma turma (senão é impossível inserir estudante)

INSERT INTO
    classrooms (id, name)
VALUES ("c001", "HTML"), ("c002", "CSS"), ("c003", "REACT");

-- depois inserimos um estudante (referenciando a tabela de turmas)

INSERT INTO
    students (id, name, email, classroom_id)
VALUES (
        "s001",
        "Alguémzinho",
        "alguemzino@email.com",
        "c001"
    ), (
        "s002",
        "Martutiud",
        "martudtiud@email.com",
        "c002"
    ), (
        "s003",
        "Mozopoto",
        "mozopoto@email.com",
        "c003"
    );

SELECT
    students.id,
    students.name,
    classrooms.name AS Turma
FROM students 
INNER JOIN classrooms ON classroom_id = classrooms.id;
