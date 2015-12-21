--need to first create database
--can try "sqlite3 test.db"
CREATE TABLE Ages ( 
  name VARCHAR(128), 
  age INTEGER
);
--if getting errors its because you need " ;" after CREATE TABLE
--DELETE FROM Ages;
INSERT INTO Ages (name, age) VALUES ('Keison', 36);
INSERT INTO Ages (name, age) VALUES ('Barney', 14);
INSERT INTO Ages (name, age) VALUES ('Heini', 20);
INSERT INTO Ages (name, age) VALUES ('Emilie', 26);
INSERT INTO Ages (name, age) VALUES ('Shafia', 37);
SELECT hex(name || age) AS X FROM Ages ORDER BY X;