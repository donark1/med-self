
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
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "bodyparts" (
	"bodyPartId" serial NOT NULL,
	"bodypartname" TEXT NOT NULL,
	CONSTRAINT "bodyparts_pk" PRIMARY KEY ("bodyPartId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "symptoms" (
	"symptomId" serial NOT NULL,
	"bodyPartId" integer NOT NULL,
	"symptomname" TEXT NOT NULL,
	CONSTRAINT "symptoms_pk" PRIMARY KEY ("symptomId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "diagnosis" (
	"diagnosisId" serial NOT NULL,
	"symptomId" integer NOT NULL,
	"diagnosisname" TEXT NOT NULL,
	CONSTRAINT "diagnosis_pk" PRIMARY KEY ("diagnosisId")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "treatments" (
	"treatmentsId" serial NOT NULL,
	"bodyPartId" integer NOT NULL,
	"diagnosisId" integer NOT NULL,
	"treatmentsname" TEXT NOT NULL,
	CONSTRAINT "treatments_pk" PRIMARY KEY ("treatmentsId")
) WITH (
  OIDS=FALSE
);

ALTER TABLE "symptoms" ADD CONSTRAINT "symptoms_fk0" FOREIGN KEY ("bodyPartId") REFERENCES "bodyparts"("bodyPartId");
ALTER TABLE "diagnosis" ADD CONSTRAINT "diagnosis_fk1" FOREIGN KEY ("symptomId") REFERENCES "symptoms"("symptomId");
ALTER TABLE "treatments" ADD CONSTRAINT "treatments_fk0" FOREIGN KEY ("treatmentsId") REFERENCES "diagnosis"("diagnosisId");
ALTER TABLE "treatments" ADD CONSTRAINT "treatments_fk1" FOREIGN KEY ("diagnosisId") REFERENCES "diagnosis"("diagnosisId");
