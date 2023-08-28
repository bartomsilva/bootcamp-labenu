-- Active: 1683940566273@@127.0.0.1@3306
CREATE TABLE
    accounts (
        id TEXT PRIMARY KEY UNIQUE NOT NULL,
        owner TEXT NOT NULL,
        balance REAL NOT NULL,
        category TEXT NOT NULL
    );

INSERT INTO accounts ( id, owner, balance, category ) 
VALUES 
	("a001", "Fulano", 12235.98, "Ouro"),
	("a002", "Ciclana", 19743.21, "Black"),
	("a003", "Beltrano", 7345.88, "Ouro"),
	("a004", "Astrodev", 432.57, "Black");

  SELECT * FROM accounts;

-- itens com id igual a a003
  SELECT * FROM accounts WHERE id = 'a003';

  -- itens co category diferente de ouro
  SELECT * FROM accounts WHERE category <> 'Ouro';

-- itens com balance maior ou igual a 1000
SELECT * FROM accounts WHERE balance >= 1000;

-- itens que tem o termo "a" em qualquer parte do owner
SELECT * FROM accounts WHERE owner LIKE "%a%";

-- itens que começam com o termo "a" en ower
SELECT * FROM accounts WHERE owner LIKE "a%";

-- itens que terminam com o termo "a" en ower
SELECT * FROM accounts WHERE owner LIKE "%a";

-- itens que category é black e a coluna balance maior que 1000
SELECT * FROM accounts WHERE category='Black' AND balance >= 1000;

-- apelidando colunas
SELECT id, owner as Titular FROM accounts;

-- apelidando tabela 
SELECT * FROM accounts AS contas;

-- somar coluna balance
SELECT SUM (balance) AS totalSaldo FROM accounts;

-- média simples coluna balance
SELECT AVG (balance) AS mediaSaldo FROM accounts;

-- contar linhas da tabela
SELECT COUNT(*) FROM accounts;

-- olhar apenas uma coluna (qual sentido?)
SELECT COUNT(ID) FROM accounts;

-- idenficar o menor valor de uma coluna
SELECT MIN(balance) AS minBlance FROM accounts;

-- idenficar o maior valor de uma coluna
SELECT MAX(balance) AS maxBlance FROM accounts;

-- Retorna todas string de uma coluna em letras minúsculas
SELECT LOWER(owner) AS Proprietário FROM accounts;

-- Retorna todas string de uma coluna em letras maiusculas
SELECT UPPER(owner) AS Proprietário FROM accounts;

-- Retorna a data de hoje no formata DATETIME OU DATABASE
-- aaaa-mm-dd hh:mm:ss
SELECT DATETIME('now');

-- aaaa-mm-dd 
SELECT DATE('now');

-- order by - ordenando saldo em orderm crescente
SELECT * FROM accounts ORDER by balance ASC;

-- order by - ordenando saldo em orderm decrescente
SELECT * FROM accounts ORDER by balance DESC;

-- contar quantas contas Black e ouro existem
SELECT COUNT(*),
category
FROM accounts
WHERE category="Black" OR category="Ouro"
GROUP BY category;

-- mostrar apenas as 3 primeiras linhas
SELECT * FROM accounts
LIMIT 3;
    
-- OFFSET inica o inicio da listagem

-- página 1 (começa depois do zero, ou seja, devolverá os itens 1 e 2)
-- OFFSET funciona em cojunto com o LIMIT
SELECT * FROM accounts
LIMIT 2
OFFSET 0;