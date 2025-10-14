-- Migration number: 0002 	 2025-01-09T00:00:00.000Z
-- Creating comprehensive quiz system database schema

-- Quizzes table to store quiz metadata
CREATE TABLE quizzes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Quiz items table to store individual quiz questions/items
CREATE TABLE quiz_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quiz_id INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('radio', 'checkbox', 'scale', 'input', 'transition', 'content', 'yesno')),
  question TEXT NOT NULL,
  description TEXT,
  required BOOLEAN DEFAULT false,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Quiz item options table for radio, checkbox, and scale questions
CREATE TABLE quiz_item_options (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quiz_item_id INTEGER NOT NULL,
  option_text TEXT NOT NULL,
  option_value TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (quiz_item_id) REFERENCES quiz_items(id) ON DELETE CASCADE
);

-- Quiz responses table to store user responses
CREATE TABLE quiz_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  quiz_id INTEGER NOT NULL,
  user_session TEXT, -- For anonymous users
  user_email TEXT,   -- For registered users
  started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME,
  status TEXT DEFAULT 'in_progress' CHECK (status IN ('in_progress', 'completed', 'abandoned')),
  FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Quiz response answers table to store individual answers
CREATE TABLE quiz_response_answers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  response_id INTEGER NOT NULL,
  quiz_item_id INTEGER NOT NULL,
  answer_text TEXT,
  answer_value TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (response_id) REFERENCES quiz_responses(id) ON DELETE CASCADE,
  FOREIGN KEY (quiz_item_id) REFERENCES quiz_items(id) ON DELETE CASCADE
);

-- Create indexes for better performance
CREATE INDEX idx_quiz_items_quiz_id ON quiz_items(quiz_id);
CREATE INDEX idx_quiz_items_order ON quiz_items(quiz_id, order_index);
CREATE INDEX idx_quiz_item_options_item_id ON quiz_item_options(quiz_item_id);
CREATE INDEX idx_quiz_responses_quiz_id ON quiz_responses(quiz_id);
CREATE INDEX idx_quiz_response_answers_response_id ON quiz_response_answers(response_id);

-- Insert sample data for testing
INSERT INTO quizzes (title, description, status) VALUES 
('AI Learning Assessment', 'Assess your current knowledge and learning preferences for AI topics', 'published'),
('Programming Skills Evaluation', 'Evaluate your programming experience and preferred learning methods', 'draft');

-- Sample quiz items for the AI Learning Assessment
INSERT INTO quiz_items (quiz_id, type, question, description, required, order_index) VALUES 
(1, 'radio', 'What is your current experience level with AI?', 'Select the option that best describes your background', true, 1),
(1, 'checkbox', 'Which AI topics interest you most?', 'Select all that apply', true, 2),
(1, 'scale', 'How comfortable are you with mathematical concepts?', 'Rate from 1 (not comfortable) to 5 (very comfortable)', true, 3),
(1, 'input', 'What specific AI application would you like to build?', 'Describe your goal in a few words', false, 4),
(1, 'yesno', 'Do you have programming experience?', 'This helps us customize your learning path', true, 5);

-- Sample options for radio question
INSERT INTO quiz_item_options (quiz_item_id, option_text, option_value, order_index) VALUES 
(1, 'Complete beginner', 'beginner', 1),
(1, 'Some exposure to AI concepts', 'intermediate', 2),
(1, 'Experienced with AI tools', 'advanced', 3),
(1, 'AI professional/researcher', 'expert', 4);

-- Sample options for checkbox question
INSERT INTO quiz_item_options (quiz_item_id, option_text, option_value, order_index) VALUES 
(2, 'Machine Learning', 'ml', 1),
(2, 'Natural Language Processing', 'nlp', 2),
(2, 'Computer Vision', 'cv', 3),
(2, 'Robotics', 'robotics', 4),
(2, 'AI Ethics', 'ethics', 5);

-- Sample options for scale question
INSERT INTO quiz_item_options (quiz_item_id, option_text, option_value, order_index) VALUES 
(3, '1 - Not comfortable', '1', 1),
(3, '2 - Slightly comfortable', '2', 2),
(3, '3 - Moderately comfortable', '3', 3),
(3, '4 - Very comfortable', '4', 4),
(3, '5 - Extremely comfortable', '5', 5);

-- Sample options for yes/no question
INSERT INTO quiz_item_options (quiz_item_id, option_text, option_value, order_index) VALUES 
(5, 'Yes', 'yes', 1),
(5, 'No', 'no', 2);