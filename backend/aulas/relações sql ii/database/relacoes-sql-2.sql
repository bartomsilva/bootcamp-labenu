-- Active: 1687988334834@@127.0.0.1@3306

-- Práticas
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT(DATETIME('now','localtime'))
);

INSERT INTO users ( id, name, email, password)
VALUES  ("u001","Abraão","aaa@gmail.com","1111"),
        ("u002","Baltazar","bbb@gmail.com","1111"),
        ("u003","Cásar","ccc@gmail.com","1111");


DROP TABLE users;


CREATE TABLE IF NOT EXISTS follows (
  follower_id TEXT NOT NULL,
  followed_id TEXT NOT NULL
  -- FOREIGN KEY (follower_id) REFERENCES users(id)
  -- ON DELETE CASCADE
);

DROP TABLE follows;

INSERT INTO follows (follower_id, followed_id)
VALUES ( "u001","u002"),
       ( "u001","u003"),
       ( "u002","u001");

SELECT * FROM follows;

-- SELECT u1.name AS usuerName,
--        f.followed_id AS Followed
-- FROM users u1,follows  f
-- WHERE u1.id == f.follower_id UNION SELECT followed_id from follows WHERE follows.followed_id != follower_id ;




SELECT  user.name AS userName, user.id, user.email, 
fwed.name AS Followed,fwed.id

FROM users AS user

LEFT JOIN follows AS fs  ON fs.follower_id = user.id

LEFT JOIN users   AS fwed ON fs.followed_id = fwed.id;



