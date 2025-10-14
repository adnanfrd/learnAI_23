import { sql } from 'drizzle-orm';
import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

// Quiz Steps Table - Main sections of quiz
export const quizSteps = sqliteTable('quiz_steps', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  stepId: text('step_id').notNull().unique(), // "bar-1", "bar-2", etc.
  title: text('title'),
  order: integer('order').notNull(),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

// Quiz Items Table - Individual questions/content in each step
export const quizItems = sqliteTable('quiz_items', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  itemId: text('item_id').notNull().unique(), // "1", "2-1", "3-1", etc.
  stepId: text('step_id').notNull(), // foreign key to quiz_steps
  type: text('type').notNull(), // "radio", "checkbox", "transition", "scale", "yesno", "input", "content"
  text: text('text'), // Question text
  title: text('title'), // For transition/content pages
  description: text('description'), // For transition pages
  placeholder: text('placeholder'), // For input fields
  image: text('image'), // Image path
  textbox: text('textbox'), // For scale questions
  order: integer('order').notNull(),
  hideBars: integer('hide_bars', { mode: 'boolean' }).default(false),
  ratingsBlock: integer('ratings_block', { mode: 'boolean' }).default(false),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

// Quiz Options Table - Options for radio/checkbox questions
export const quizOptions = sqliteTable('quiz_options', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  itemId: text('item_id').notNull(), // foreign key to quiz_items
  optionText: text('option_text').notNull(),
  order: integer('order').notNull(),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

// Content Paragraphs Table - For content type items
export const contentParagraphs = sqliteTable('content_paragraphs', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  itemId: text('item_id').notNull(), // foreign key to quiz_items
  paragraph: text('paragraph').notNull(),
  order: integer('order').notNull(),
  createdAt: text('created_at').default(sql`(datetime('now'))`),
});

// User Quiz Sessions - Track user attempts
export const userSessions = sqliteTable('user_sessions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sessionId: text('session_id').notNull().unique(), // UUID for each attempt
  userEmail: text('user_email'),
  userName: text('user_name'),
  startedAt: text('started_at').default(sql`(datetime('now'))`),
  completedAt: text('completed_at'),
  currentStepId: text('current_step_id'),
  currentItemId: text('current_item_id'),
  isCompleted: integer('is_completed', { mode: 'boolean' }).default(false),
});

// User Quiz Responses - Individual answers
export const userResponses = sqliteTable('user_responses', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  sessionId: text('session_id').notNull(), // foreign key to user_sessions
  itemId: text('item_id').notNull(),
  response: text('response').notNull(), // JSON string for complex responses
  responseType: text('response_type').notNull(), // "radio", "checkbox", "scale", "input"
  answeredAt: text('answered_at').default(sql`(datetime('now'))`),
});