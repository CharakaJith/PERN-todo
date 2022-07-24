CREATE DATABASE pern_todo;

CREATE TABLE todos(
    todo_id SERIAL PRIMARY KEY,
    todo_desc VARCHAR(225)
);