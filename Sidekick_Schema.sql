CREATE TABLE public.user 
(
	"_id" INT GENERATED ALWAYS AS IDENTITY,
	"first_name" VARCHAR(255) NOT NULL,
	"last_name" VARCHAR(255) NOT NULL,
	"bio" TEXT,
	"birthdate" VARCHAR NOT NULL,
	"email" VARCHAR(255) NOT NULL,
	"zipcode" INT NOT NULL,
  "google_id" VARCHAR,
  "registered" BOOLEAN DEFAULT NULL,
	PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.sport 
(
	"_id" INT GENERATED ALWAYS AS IDENTITY,
	"sport_name" VARCHAR(255) NOT NULL,
  "registered" BOOLEAN,
	PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.user_sport 
(
  "_id" INT GENERATED ALWAYS AS IDENTITY,
	"user_id" INT NOT NULL,
	"sport_id" INT NOT NULL,
  PRIMARY KEY ("_id"),
  FOREIGN KEY ("user_id") REFERENCES public.user("_id"),
  FOREIGN KEY ("sport_id") REFERENCES public.sport("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.like_user 
(
  "_id" INT GENERATED ALWAYS AS IDENTITY,
  "user_id_given" INT NOT NULL,
  "user_id_received" INT NOT NULL,
  "like" BOOLEAN,
  FOREIGN KEY ("user_id_given") REFERENCES public.user("_id"),
  FOREIGN KEY ("user_id_received") REFERENCES public.user("_id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE public.dislike_user 
(
  "_id" INT GENERATED ALWAYS AS IDENTITY,
  "user_id_given" INT NOT NULL,
  "user_id_received" INT NOT NULL,
  "dislike" BOOLEAN,
  FOREIGN KEY ("user_id_given") REFERENCES public.user("_id"),
  FOREIGN KEY ("user_id_received") REFERENCES public.user("_id")
) WITH (
  OIDS=FALSE
);

INSERT INTO public.user(first_name, last_name, bio, birthdate, email, zipcode, google_id, registered)
VALUES ('Michael', 'Scott', 'I am compeittive.', '1997-03-25', 'joe@gmail.com', '90026', 'f92hg923gh8', true),
       ('Jim', 'Halpert', 'I like to hike.', '1993-09-11', 'angel@gmail.com', '90026', '2389gh248', true);

INSERT INTO public.sport(sport_name, registered)
VALUES ('Basketball', false),
       ('Tennis', true),
       ('Soccer', true);



ALTER TABLE public.user ADD city VARCHAR(250) DEFAULT 'Vancouver';