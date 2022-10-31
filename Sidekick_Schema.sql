-- generates user table with following fields
CREATE TABLE user {
  "_id" SERIAL NOT NULL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL,
  "gender" VARCHAR (50) NOT NULL,
  "age" INT NOT NULL,
  "email" VARCHAR(319) NOT NULL,
  "zipcode" INT NOT NULL,
  };

--generates sport with name and category (water, winter, summer, etc.)
CREATE TABLE sport {
  "_id" SERIAL NOT NULL PRIMARY KEY,
  "name" VARCHAR(50) NOT NULL,
  "category" VARCHAR(100) NOT NULL,
}

CREATE TABLE soccer {
  "_id" SERIAL NOT NULL PRIMARY KEY,
  --skill will be (beginner, intermediate, expert)
  "skill" VARCHAR(100),
  -- skillgap to allow players to play with any level if they choose so, 0 being false, 1 being true, 
  "skillgap" BIT DEFAULT 0,
  FOREIGN KEY (_id) REFERENCES user (_id)
}
