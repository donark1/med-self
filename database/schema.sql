set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "med-self" cascade;

create schema "med-self";


 CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"FirstName" TEXT NOT NULL,
	"LastName" TEXT NOT NULL,
	"Email" TEXT NOT NULL,
	"Password" TEXT NOT NULL,
	"Gender" TEXT NOT NULL,
	"DateOfBirth" DATE NOT NULL,
	"City" TEXT NOT NULL,
	"ZipCode" integer NOT NULL,
	"Height(inches)" integer NOT NULL,
	"Weight(lbs)" integer NOT NULL,
	"isGuest" BOOLEAN NOT NULL DEFAULT 'true',
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bodyParts" (
	"bodyPartId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "bodyParts_pk" PRIMARY KEY ("bodyPartId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "symptoms" (
	"symptomId" serial NOT NULL,
	"bodyPartId" serial NOT NULL,
	"userId" serial NOT NULL,
	"description" TEXT DEFAULT NULL,
	CONSTRAINT "symptoms_pk" PRIMARY KEY ("symptomId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "results" (
	"userForumDiagnosis" TEXT NOT NULL,
	"symptomId" integer NOT NULL
) WITH (
  OIDS=FALSE
);



CREATE TABLE "userAccess" (
	"bodyPartId" integer NOT NULL,
	"resultsId" integer NOT NULL,
	"userId" integer NOT NULL,
	"resources" TEXT NOT NULL,
	"medicalFacilitiesNearBy" TEXT NOT NULL,
	"userQuestionForPro" TEXT NOT NULL
) WITH (
  OIDS=FALSE
);



ALTER TABLE "symptoms" ADD CONSTRAINT "symptoms_fk0" FOREIGN KEY ("bodyPartId") REFERENCES "bodyParts"("bodyPartId");
ALTER TABLE "symptoms" ADD CONSTRAINT "symptoms_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "results" ADD CONSTRAINT "results_fk1" FOREIGN KEY ("symptomId") REFERENCES "symptoms"("symptomId");
