-- create the database
CREATE DATABASE pern_todo;

-- create the table 
CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    todo_desc VARCHAR(225)
);