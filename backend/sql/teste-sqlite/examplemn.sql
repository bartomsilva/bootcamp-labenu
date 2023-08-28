-- exemplo de estudantes e cursos

-- CRIANDO AS TABELAS

-- primeiro criamos as duas tabelas que serão referenciadas (não possuem FK)
CREATE TABLE studentsmn (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	email TEXT NOT NULL
);

CREATE TABLE coursesmn (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	classes INTEGER NOT NULL
);

-- depois criamos a tabela de relação (possui 2 FK)
CREATE TABLE students_courses (
	student_id TEXT NOT NULL, -- não pode ser UNIQUE
	course_id TEXT NOT NULL, -- não pode ser UNIQUE
	FOREIGN KEY (student_id) REFERENCES studentsmn (id),
	FOREIGN KEY (course_id) REFERENCES coursesmn (id)
);


-- INSERINDO ITENS NAS TABELAS

-- primeiro populamos as tabelas principais (students e courses)
INSERT INTO studentsmn (id, name, email)
VALUES
	("s001", "Fulano", "fulano@email.com"),
	("s002", "Ciclana", "ciclana@email.com"),
	("s003", "Astrodev", "astrodev@email.com");
SELECT * FROM studentsmn;

INSERT INTO coursesmn (id, name, classes)
VALUES
	("c001", "Javascript", 5),
	("c002", "React", 12),
	("c003", "Node", 8);

SELECT * FROM coursesmn;

-- depois populamos a tabela de relação (students_courses)

INSERT INTO students_courses (student_id, course_id)
VALUES
	("s001", "c001"), -- Fulano se inscreveu em Javascript
	("s001", "c002"), -- Fulano se inscreveu em React
	("s001", "c003"), -- Fulano se inscreveu em Node
	("s002", "c002"), -- Ciclana se inscreveu em React
	("s002", "c003"), -- Ciclana se inscreveu em Node
	("s003", "c001"); -- Astrodev se inscreveu em Javascript

SELECT * FROM students_courses;


-- agora podemos visualizar os resultados juntando as três tabelas:
-- SELECT + INNER JOIN + INNER JOIN

SELECT
		-- removendo ambiguidade e aplicando camelCase com ALIAS
    studentsmn.id AS studentId,
    studentsmn.name AS studentName,
    studentsmn.email,
    coursesmn.id AS courseId,
    coursesmn.name AS courseName,
    coursesmn.classes
FROM students_courses -- selecionando a tabela de relação primeiro (no INNER JOIN não importa a ordem)
-- primeira junção
INNER JOIN studentsmn
ON students_courses.student_id = studentsmn.id -- olhamos sempre para a FK
-- segunda junção
INNER JOIN coursesmn 
ON students_courses.course_id = coursesmn.id; -- olhamos sempre para a FK