DROP TABLE IF EXISTS "users";

CREATE TABLE IF NOT EXISTS "users" (
  "id" INT NOT NULL PRIMARY KEY,
  "prenom" VARCHAR(128),
  "nom" VARCHAR(128),
  "mail" VARCHAR(128),
  "password" VARCHAR(128),
);

INSERT INTO "Users" ("id", "prenom", "nom", "mail", "password") VALUES 
(1, 'David', 'Basset', 'david.bassetw@gmail.com', 'hello');