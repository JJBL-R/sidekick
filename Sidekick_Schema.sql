CREATE TABLE "user" (
	"_id" INT GENERATED ALWAYS AS IDENTITY,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"bio" TEXT,
	"age" INT NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"zipcode" INT NOT NULL,
	PRIMARY KEY ("_id"),
);



CREATE TABLE "user_sport" (
  "_id" INT GENERATED ALWAYS AS IDENTITY,
	"user_id" INT NOT NULL,
	"sport_id" INT NOT NULL,
  PRIMARY KEY ("_id")
  FOREIGN KEY ("user_id") REFERENCES user("_id"),
  FOREIGN KEY ("sport_id") REFERENCES sport("_id"),
);



CREATE TABLE "sport" (
	"_id" INT GENERATED ALWAYS AS IDENTITY,
	"sport_name" VARCHAR(255) NOT NULL,
	PRIMARY KEY ("_id"),
);

CREATE TABLE "like_user" (
  "_id" INT GENERATED ALWAYS AS IDENTITY,
  "user_id_given" INT NOT NULL,
  "user_id_received" INT NOT NULL,
  "like" BOOLEAN,
  FOREIGN KEY ("user_id_given") REFERENCES user("_id"),
  FOREIGN KEY ("user_id_given") REFERENCES user("_id"),
);

CREATE TABLE "dislike_user" (
  "_id" INT GENERATED ALWAYS AS IDENTITY,
  "user_id_given" INT NOT NULL,
  "user_id_received" INT NOT NULL,
  "dislike" BOOLEAN,
  FOREIGN KEY ("user_id_given") REFERENCES user("_id"),
  FOREIGN KEY ("user_id_given") REFERENCES user("_id"),
);



INSERT INTO user(first_name, last_name, bio, gender, age, email, zipcode)
VALUES ('Michael', 'Scott', 'I am compeittive.', 'Male', '25', 'joe@gmail.com', '90026'),
       ('Jim', 'Halpert', 'I like to hike.', 'Female', '28', 'angel@gmail.com', '90026'),

INSERT INTO sport(sport_name)
VALUES ('Baksetball')
       ('Tennis')
       ('Soccer')
