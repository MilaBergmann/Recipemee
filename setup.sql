DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reset_codes;
DROP TABLE IF EXISTS recipes;





CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       first VARCHAR NOT NULL CHECK (first != ''),
       last VARCHAR NOT NULL CHECK (last != ''),
       email VARCHAR NOT NULL UNIQUE CHECK (email != ''),
       passwd VARCHAR NOT NULL CHECK (passwd != ''),
       img_url TEXT,
       bio TEXT
   );

 CREATE TABLE reset_codes(
    id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );


  CREATE TABLE recipes(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL , 
    name TEXT NOT NULL,
    img_url TEXT NOT NULL,
    ingredients TEXT NOT NULL,
    steps TEXT NOT NULL
  );




    


  