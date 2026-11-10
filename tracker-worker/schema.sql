-- Paste into the D1 Console for each database (tracker-alevel-7132, tracker-gcse, tracker-alevel-7138).
-- Safe to run more than once.

CREATE TABLE IF NOT EXISTS students (
  username     TEXT PRIMARY KEY,
  name         TEXT NOT NULL,
  pw_hash      TEXT NOT NULL,
  pw_salt      TEXT NOT NULL,
  ver          INTEGER NOT NULL DEFAULT 1,
  active       INTEGER NOT NULL DEFAULT 1,
  fails        INTEGER NOT NULL DEFAULT 0,
  locked_until INTEGER NOT NULL DEFAULT 0,
  created      TEXT NOT NULL,
  last_login   TEXT
);

CREATE TABLE IF NOT EXISTS course_log (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  t           TEXT NOT NULL,
  username    TEXT NOT NULL,
  stage       INTEGER NOT NULL,
  stage_title TEXT,
  score       INTEGER,
  total       INTEGER,
  passed      INTEGER,
  seconds     INTEGER,
  missed      TEXT,
  answer      TEXT
);
CREATE INDEX IF NOT EXISTS course_log_user ON course_log(username);

CREATE TABLE IF NOT EXISTS marks (
  id       INTEGER PRIMARY KEY AUTOINCREMENT,
  t        TEXT NOT NULL,
  username TEXT NOT NULL,
  tool     TEXT,
  question TEXT,
  mark     TEXT,
  level    TEXT,
  well     TEXT,
  improve  TEXT,
  answer   TEXT
);
CREATE INDEX IF NOT EXISTS marks_user ON marks(username);

CREATE TABLE IF NOT EXISTS throttle (
  k     TEXT PRIMARY KEY,
  fails INTEGER NOT NULL DEFAULT 0,
  until INTEGER NOT NULL DEFAULT 0
);
