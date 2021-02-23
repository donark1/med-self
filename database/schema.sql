set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "med-self" cascade;

create schema "med-self";


 CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	"password" TEXT NOT NULL,
	"gender" TEXT NOT NULL,
	"dateOfBirth" DATE NOT NULL,
	"city" TEXT NOT NULL,
	"zipCode" integer NOT NULL,
	"height" integer NOT NULL,
	"weight" integer NOT NULL,
	"isGuest" BOOLEAN NOT NULL DEFAULT 'true',
	"createdAt" TIMESTAMP NOT NULL DEFAULT 'now()',
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "bodyparts" (
	"bodyPartId" serial NOT NULL,
	"name" TEXT NOT NULL,
	CONSTRAINT "bodyparts_pk" PRIMARY KEY ("bodyPartId")
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



ALTER TABLE "symptoms" ADD CONSTRAINT "symptoms_fk0" FOREIGN KEY ("bodyPartId") REFERENCES "bodyparts"("bodyPartId");
ALTER TABLE "symptoms" ADD CONSTRAINT "symptoms_fk1" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "results" ADD CONSTRAINT "results_fk1" FOREIGN KEY ("symptomId") REFERENCES "symptoms"("symptomId");
