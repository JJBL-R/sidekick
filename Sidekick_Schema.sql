CREATE TABLE "public.user" (
	"_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"bio" varchar(255) NOT NULL,
	"gender" varchar(255) NOT NULL,
	"age" int NOT NULL,
	"email" varchar(255) NOT NULL,
	"zipcode" int NOT NULL,
	CONSTRAINT "user_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.sport" (
	"_id" serial NOT NULL,
	"soccer" BOOLEAN DEFAULT 'FALSE',
	"tennis" BOOLEAN DEFAULT 'FALSE',
	"basketball" BOOLEAN DEFAULT 'FALSE',
	"user_id" int NOT NULL,
	CONSTRAINT "sport_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.soccer" (
	"_id" serial NOT NULL,
	"skill" varchar(255) NOT NULL,
	"skillgap" BOOLEAN DEFAULT 'FALSE',
	"soccer_id" serial NOT NULL,
	CONSTRAINT "soccer_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.basketball" (
	"_id" serial NOT NULL,
	"skill" varchar(255) NOT NULL,
	"skillgap" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"basketball_id" serial NOT NULL,
	CONSTRAINT "basketball_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.tennis" (
	"_id" serial NOT NULL,
	"skill" varchar(255) NOT NULL,
	"skillgap" BOOLEAN NOT NULL DEFAULT 'FALSE',
	"tennis_id" serial NOT NULL,
	CONSTRAINT "tennis_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "sport" ADD CONSTRAINT "sport_fk0" FOREIGN KEY ("user_id") REFERENCES "user"("_id");

ALTER TABLE "soccer" ADD CONSTRAINT "soccer_fk0" FOREIGN KEY ("soccer_id") REFERENCES "sport"("soccer");

ALTER TABLE "basketball" ADD CONSTRAINT "basketball_fk0" FOREIGN KEY ("basketball_id") REFERENCES "sport"("basketball");

ALTER TABLE "tennis" ADD CONSTRAINT "tennis_fk0" FOREIGN KEY ("tennis_id") REFERENCES "sport"("tennis");





