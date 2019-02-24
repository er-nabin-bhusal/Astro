-- Up

CREATE TABLE IF NOT EXISTS User(
  id INTEGER PRIMARY KEY,
  userName TEXT NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL
);

-- Creating user by default....
INSERT OR REPLACE INTO User (id, userName, password, name, type) VALUES
(1, "bidha", "$2b$10$W0rnKFoVT3dWFDrjiad8mOqyFR04b9tiH3Ic.yZjn8TFITsrvaOwm", "Bhagya Sah", "super");

CREATE TABLE IF NOT EXISTS Astrologer(
  id INTEGER PRIMARY KEY,
  userId INTEGER NOT NULL,
  name TEXT NOT NULL,
  gender TEXT NOT NULL,
  experience TEXT NOT NULL,
  qualification TEXT NOT NULL,
  phoneNo INTEGER NOT NULL,
  image TEXT,

  -- Constraints
CONSTRAINT Astrologer_fk_userId FOREIGN KEY (userId) REFERENCES User(id)
);

CREATE TABLE IF NOT EXISTS BidhaUser(
  id INTEGER PRIMARY KEY,
  firstName TEXT NOT NULL,
  gender TEXT NOT NULL,
  dob TEXT NOT NULL,
  country TEXT,
  state TEXT,
  city TEXT,
  accurateTime TEXT,
  time TEXT,
  registrationToken TEXT,
  image TEXT
);

CREATE TABLE IF NOT EXISTS SampleQuestion(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  question TEXT NOT NULL,
  astrologerId INTEGER NOT NULL,
  timeStamp INTEGER NOT NULL,

  --Constraints
  CONSTRAINT SampleQuestion_fk_UserID FOREIGN KEY (astrologerId) REFERENCES Astrologer(id)
);

CREATE TABLE IF NOT EXISTS Question(
    id INTEGER PRIMARY KEY,
    userId INTEGER NOT NULL,
    status TEXT NOT NULL,
    question TEXT NOT NULL,
    timeStamp INTEGER NOT NULL,
    type TEXT NOT NULL,
    --Constraints
    CONSTRAINT Question_fk_UserId FOREIGN KEY (userId) REFERENCES BidhaUser(id)
);

CREATE TABLE IF NOT EXISTS Answer(
  id INTEGER NOT NULL,
  questionId INTEGER NOT NULL,
  astrologerId INTEGER NOT NULL,
  answer TEXT NOT NULL,
  timeStamp INTEGER NOT NULL,

  --Constraints
  CONSTRAINT Answer_fk_questionId FOREIGN KEY (questionId) REFERENCES Question(id),
  CONSTRAINT Answer_fk_astrologerId FOREIGN KEY (astrologerId) REFERENCES Astrologer(id)
);

-- Down
