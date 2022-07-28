DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS reset_codes;
DROP TABLE IF EXISTS items;




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


  CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL, 
    title TEXT NOT NULL,
    item_img TEXT NOT NULL
  )




    


  