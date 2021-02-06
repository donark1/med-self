
insert into "users"
  ( "FirstName", "LastName", "Email", "Password", "Gender", "DateOfBirth", "City", "ZipCode", "Height(inches)", "Weight(lbs)")
  values
    ('Joe', 'Schmoe', 'jschmoe@example.com', 'abcde', 'Male', '1/1/1940', 'Irvine', '92618', '70', '210'),
    ('Jane', 'Doe', 'jdoe@example.com', '12345', 'Female', '6/30/1970', 'Newport Beach','92660', '55', '110');

insert into "bodyParts"
  ("name")
  values
    ('Head/Neck'),
    ('Shoulders/Arms/Hands'),
    ('Chest'),
    ('Abdomen'),
    ('Legs/Feet');

insert into "symptoms"
  ("userId", "bodyPartId", "description")
  values
  (1, 4, 'lower backache'),
  (2, 3, 'chest pain');

insert into "results"
  ("symptomId", "userForumDiagnosis")
  values
  (1, 'Lumbar Strain'),
  (1, 'Lumbar Herniated Disc'),
  (1, 'Vertebral Compression Fracture'),
  (1, 'Osteoarthritis'),
  (2, 'Heart Attack'),
  (2, 'Fractured Ribs'),
  (2, 'Heartburn');
