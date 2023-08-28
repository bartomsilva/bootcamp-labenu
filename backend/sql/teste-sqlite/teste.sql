--criando a tabela
CREATE TABLE
    users (
        id INTEGER PRIMARY KEY UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

-- seleionar tadas colulas da tabela
SELECT * FROM users;

-- seleção de colunas específicas
SELECT name, email FROM users;

-- ver estrutura da tablela
PRAGMA table_info('users');

INSERT INTO
    users (id, name, email, password)
VALUES (
        4,
        'Pedro Antonio Bardosa',
        'pedrin@gmail.com',
        "1111111111@"
    );

INSERT INTO
    users (id, name, email, password)
VALUES (
        2,
        'Fulana',
        'fulana@gmail.com',
        '123456'
    ), (
        3,
        'Cicrano',
        'cicrano@gmail.com',
        '123456'
    );

-- WHERE filtro de seleção
UPDATE users SET name = 'Pedro Antônio Barbosa da Silva' WHERE id = 4;

-- atualizar mais de uma coluna por vez
UPDATE users
SET
    email = "fulanadetal@gmail.com",
    password = "135246"
WHERE id = 2; 

-- deletando dados
DELETE FROM users
WHERE id = 3;

--deletar a tabela inteira
DROP TABLE classrom;

-- lista todas tabelas
SELECT * FROM sqlite_master WHERE type='table';

SELECT COUNT(*) FROM users WHERE name LIKE "%barbosa%";