CREATE TABLE `content_paragraphs` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` text NOT NULL,
	`paragraph` text NOT NULL,
	`order` integer NOT NULL,
	`created_at` text DEFAULT (datetime('now'))
);
--> statement-breakpoint
CREATE TABLE `quiz_items` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` text NOT NULL,
	`step_id` text NOT NULL,
	`type` text NOT NULL,
	`text` text,
	`title` text,
	`description` text,
	`placeholder` text,
	`image` text,
	`textbox` text,
	`order` integer NOT NULL,
	`hide_bars` integer DEFAULT false,
	`ratings_block` integer DEFAULT false,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT (datetime('now'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `quiz_items_item_id_unique` ON `quiz_items` (`item_id`);--> statement-breakpoint
CREATE TABLE `quiz_options` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item_id` text NOT NULL,
	`option_text` text NOT NULL,
	`order` integer NOT NULL,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT (datetime('now'))
);
--> statement-breakpoint
CREATE TABLE `quiz_steps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`step_id` text NOT NULL,
	`title` text,
	`order` integer NOT NULL,
	`is_active` integer DEFAULT true,
	`created_at` text DEFAULT (datetime('now'))
);
--> statement-breakpoint
CREATE UNIQUE INDEX `quiz_steps_step_id_unique` ON `quiz_steps` (`step_id`);--> statement-breakpoint
CREATE TABLE `user_responses` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` text NOT NULL,
	`item_id` text NOT NULL,
	`response` text NOT NULL,
	`response_type` text NOT NULL,
	`answered_at` text DEFAULT (datetime('now'))
);
--> statement-breakpoint
CREATE TABLE `user_sessions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`session_id` text NOT NULL,
	`user_email` text,
	`user_name` text,
	`started_at` text DEFAULT (datetime('now')),
	`completed_at` text,
	`current_step_id` text,
	`current_item_id` text,
	`is_completed` integer DEFAULT false
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_sessions_session_id_unique` ON `user_sessions` (`session_id`);