CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers(
  id int auto_increment primary key,
  burger_name varchar(50) not null,
  devoured BOOLEAN DEFAULT false
);