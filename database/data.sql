
insert into "users"
  ( "firstName", "lastName", "email", "password", "gender", "dateOfBirth", "city", "zipCode", "height", "weight")
  values
    ('Joe', 'Schmoe', 'jschmoe@example.com', 'abcde', 'Male', '1/1/1940', 'Irvine', '92618', '70', '210'),
    ('Jane', 'Doe', 'jdoe@example.com', '12345', 'Female', '6/30/1970', 'Newport Beach','92660', '55', '110'),
    ('Don', 'Ark', 'don_ark@sbcglobal.net', 'abc123', 'Male', '6/4/1976', 'Irvine','92618', '70', '180'),
    ('John', 'Doe', 'john_doe@abc.com', '54321', 'Male', '1/1/1976', 'Tustin','92782', '60', '150'),
    ('Demo', 'User', 'demouser@abc.com', 'demouser', 'Male', '1/12/1960', 'Demo','12345', '60', '155'),
    ('Demo2', 'User2', 'demouser2@abc.com', 'demouser2', 'Female', '8/25/1970', 'Atlantis','92660', '60', '110');

insert into "bodyparts"
  ("bodypartname")
  values
    ('Head/Neck'),
    ('Shoulders/Arms/Hands'),
    ('Chest'),
    ('Abdomen'),
    ('Legs/Feet');

insert into "symptoms"
  ("bodyPartId", "symptomname")
  values
  (1, 'Headache'),
  (1, 'Head Shakes'),
  (1, 'Swollen Head'),
  (2, 'Arm Pain'),
  (2, 'Muscle Ache'),
  (2, 'Sore Arm(s) and/or Hand(s)'),
  (2, 'Sore Shoulder(s)'),
  (3, 'Breathing Difficulty'),
  (3, 'Chest Pain'),
  (4, 'Abdominal Pain'),
  (4, 'Stomach Ache'),
  (5, 'Ankle Pain'),
  (5, 'Leg Swelling');

  insert into "diagnosis"
  ("symptomId", "diagnosisname")
  values
  (1, 'Cerebellar Hemorrhage'),
  (1, 'Hypertension (High Blood Pressure)'),
  (1, 'Migraine Headache'),
  (1, 'Tension Headache'),
  (2, 'Alcoholism'),
  (2, 'Benign Essential Tremor'),
  (2, 'Poisoning'),
  (3, 'Acute Sinusitis'),
  (3, 'Chagas Disease'),
  (3, 'Nephrotic Syndrome'),
  (4, 'Cervical Spondylosis'),
  (4, 'Cervical Herniated Disk'),
  (4, 'Blood Clot'),
  (5, 'Bursitis (shoulders)'),
  (6, 'Fibromyaglia'),
  (6, 'Thrombophlebitis'),
  (7, 'Nerve Impingement'),
  (7, 'Rotator Cuff Tear'),
  (7, 'Separated Shoulder'),
  (8, 'Asthma'),
  (8, 'Bronchitis'),
  (8, 'Congestive Heart Failure'),
  (8, 'Emphysema'),
  (9, 'Heart Attack'),
  (9, 'Heartburn/GERD'),
  (9, 'Broken Rib(s)'),
  (10, 'Appendicitis'),
  (10, 'Diverticulitis'),
  (10, 'Gas'),
  (11, 'Irritable Bowel Syndrome'),
  (11, 'Constipation'),
  (11, 'Colon Cancer'),
  (12, 'Broken Ankle'),
  (12, 'Sprained Ankle'),
  (13, 'Varicose Veins');


  insert into "treatments"
  ("bodyPartId", "diagnosisId", "treatmentsname")
  values
  (1, 1, 'Consult physician immediately, surgery, medications.'),
  (1, 2, 'Medications such as ACE inhibitors, diuretics, beta blockers.'),
  (1, 3, 'Rest in a dark, quiet room. Drink water.'),
  (1, 4, 'Pain relivers, musclke relaxants, medication to help headaches.'),
  (1, 5, 'Alcohol avoidance, medications, therapy, support groups, rehab.'),
  (1, 6, 'Medicines (beta blocker, antiseicure drug), possible brain surgery.'),
  (1, 7, 'Andidotes for specific poisoning, medications for symptom controls.'),
  (1, 8, 'Flush nasal passages with warm water, antihistamines/decongestants.'),
  (1, 9, 'Antiparasitic medications.'),
  (1, 10, 'ACE inhibitors, diurectics, cholesterol lowering drugs.'),
  (2, 11, 'Pain medication, physical therapy, possible surgery.'),
  (2, 12, 'Pain medication, physical therapy, possible surgery.'),
  (2, 13, 'Blood tests, blood thinners, compression of are of swelling.'),
  (2, 14, 'Antibiotics, anti-inflammatory drugs, physical therapy.'),
  (3, 15, 'Medications, stress reduction, physical therapy.'),
  (3, 16, 'Blood thinning medications, support stockings, surgery.'),
  (3, 17, 'Pain medications, steroid injections, physical therapy, surgery.'),
  (3, 18, 'Pain medications, physical therapy, rest, exercises.'),
  (3, 19, 'Ice, rest, wear sling, physical therapy, surgery.'),
  (3, 20, 'Medication, inhaler, allergy treatment if asthma triggered.'),
  (3, 21, 'Rest, drink plenty of fluids, pain relievers, breath warm, moist air.'),
  (3, 22, 'Ace inhibitor medications. Heart surgery.'),
  (3, 23, 'Quit smoking, oxygen, pulmonary rehabilitation, surgery.'),
  (3, 24, 'Medications, angioplasty or stenting, surgery to redirect blood flow.'),
  (3, 25, 'Over the counter antacids, avoids foods and drinks that worsen symptoms.'),
  (3, 26, 'Rest, icing the area, pain medication, surgery.'),
  (4, 27, 'Surgery, antibiotics.'),
  (4, 28, 'Liquid diet, antibiotics, high-fiber diet, surgery.'),
  (4, 29, 'Diet change to avoid foods that give you gas, eat slowly, antacids.'),
  (4, 30, 'Dietary changes, fiber suppliments, avoid caffeine, reduce stress.'),
  (4, 31, 'Eat more fiber, hydrate, exercise, probiotics, enemas and suppositories.'),
  (4, 32, 'Consult physician right away for proper treatment.'),
  (5, 33, 'Rest, icing, elevate ankle, splint/cast, physical therapy, surgery.'),
  (5, 34, 'Rest, icing, elevate ankle, splint/cast, compress/wrap, surgery.'),
  (5, 35, 'Elevate legs, reducing standing, compression stocking, surgyery.');
