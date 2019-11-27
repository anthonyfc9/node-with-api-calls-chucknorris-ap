DROP TABLE IF EXISTS jokes;

CREATE TABLE jokes(
  id SERIAL PRIMARY KEY,
  text Text NOT NULL
);

INSERT INTO jokes (text) VALUES
('Chuck Norris hides under the Boogeyman''s bed'),
('Chuck Norris counted to infinitey. Twice');
