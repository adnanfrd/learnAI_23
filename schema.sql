-- d1_quiz_schema.sql (improved)
-- Cloudflare D1 / SQLite schema for quizzes

-- =====================================
-- QUIZZES
-- =====================================
CREATE TABLE IF NOT EXISTS quizzes (
  id TEXT PRIMARY KEY,          -- e.g. uuid or short id
  title TEXT NOT NULL,
  description TEXT,
  settings JSON DEFAULT '{}',   -- quiz-level JSON config
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now'))
);

-- =====================================
-- STEPS
-- =====================================
CREATE TABLE IF NOT EXISTS steps (
  id TEXT PRIMARY KEY,
  quiz_id TEXT NOT NULL,
  step_index INTEGER NOT NULL, -- order in quiz
  title TEXT,
  metadata JSON DEFAULT '{}',
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Ensure no duplicate step_index inside the same quiz
CREATE UNIQUE INDEX IF NOT EXISTS uniq_step_order
  ON steps (quiz_id, step_index);

-- =====================================
-- ITEMS
-- =====================================
CREATE TABLE IF NOT EXISTS items (
  id TEXT PRIMARY KEY,
  step_id TEXT NOT NULL,
  item_index INTEGER NOT NULL,   -- order within step
  type TEXT NOT NULL CHECK (type IN (
    'radio','checkbox','transition','scale','yesno','input','content'
  )),
  data JSON NOT NULL,            -- full item object (options, text, etc.)
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  updated_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  FOREIGN KEY (step_id) REFERENCES steps(id) ON DELETE CASCADE
);

-- Ensure no duplicate item_index inside the same step
CREATE UNIQUE INDEX IF NOT EXISTS uniq_item_order
  ON items (step_id, item_index);

-- =====================================
-- RESPONSES
-- =====================================
CREATE TABLE IF NOT EXISTS responses (
  id TEXT PRIMARY KEY,
  quiz_id TEXT NOT NULL,
  user_id TEXT,                  -- optional, if you track users
  created_at TEXT DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
  answers JSON NOT NULL,         -- { itemId: value } map
  metadata JSON DEFAULT '{}',
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Optimize queries for fetching responses per quiz/user
CREATE INDEX IF NOT EXISTS idx_responses_quiz_user
  ON responses (quiz_id, user_id);

-- =====================================
-- INDEXES FOR ORDERING
-- =====================================
CREATE INDEX IF NOT EXISTS idx_steps_quiz_order
  ON steps (quiz_id, step_index);

CREATE INDEX IF NOT EXISTS idx_items_step_order
  ON items (step_id, item_index);