-- relações entre tabelas

-- on-to-many (1:m)

-- tabela que será referenciada (apaga-se primeiro)

CREATE TABLE
    classroms (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT UNIQUE NOT NULL
    );

-- tabela que referencia

CREATE TABLE
    students (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        classrom_id TEXT NOT NULL,
        -- criando a relação
        FOREIGN KEY (classrom_id) REFERENCES classrooms(id)
    );

INSERT INTO
    classroms (id, name)
VALUES 
('c001', 'Turma A'),
('c002', 'Turma B'),
('c003', 'Turma C'),
('c004', 'Turma D');

SELECT * FROM classroms;

INSERT INTO students ( id, name, email, classrom_id)
VALUES 
('S001','Bart S', "bart@gmail.com", 'c001'),
('S002','Fulano', "fulano@gmail.com", 'c002'),
('S003','Beltrano', "beltrano@gmail.com", 'c003'),
('S004','Cicrano', "cicrano@gmail.com", 'c004');

iNSERT INTO students ( id, name, email, classrom_id)
VALUES 
('S005','Ornitorinto', "ornito@gmail.com", 'c001'),
('S006','Falacinildo', "falacinildo@gmail.com", 'c002'),
('S007','Brabilianp', "brabiliano@gmail.com", 'c003'),
('S008','Peiticelino', "peiticelino@gmail.com", 'c004');

SELECT * FROM students;

-- selecionando dados de duas tabelas distintas
SELECT * FROM classroms
INNER JOIN students
ON classroms.id = students.classrom_id
ORDER BY classroms.id;
