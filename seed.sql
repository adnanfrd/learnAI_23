-- Insert Quiz Steps
INSERT INTO quiz_steps (step_id, title, "order") VALUES 
('bar-1', 'Personal Goals', 1),
('bar-2', 'Financial Situation', 2), 
('bar-3', 'AI Experience', 3),
('bar-4', 'Goals & Timeline', 4),
('bar-5', 'Learning Style', 5);

-- Insert Quiz Items for bar-1
INSERT INTO quiz_items (item_id, step_id, type, text, title, description, image, textbox, "order", hide_bars, ratings_block) VALUES 
('1', 'bar-1', 'radio', 'What is your main goal?', NULL, NULL, NULL, NULL, 1, 0, 0),
('2', 'bar-1', 'radio', 'Which one describes you best?', NULL, NULL, NULL, NULL, 2, 0, 0),
('3', 'bar-1', 'checkbox', 'What challenges are you facing in your current job?', NULL, NULL, NULL, NULL, 3, 0, 0),
('4', 'bar-1', 'transition', NULL, 'We know how to help you!', '120 000 people became AI-experts with us and left their work related struggles in the past!', '/trans1.png', NULL, 4, 1, 0),
('5', 'bar-1', 'radio', 'Have you tried earning online before?', NULL, NULL, NULL, NULL, 5, 0, 0),
('6', 'bar-1', 'radio', 'What''s stopping you from trying AI to earn online?', NULL, NULL, NULL, NULL, 6, 0, 0),
('7', 'bar-1', 'scale', 'How true is this for you?', NULL, NULL, NULL, '"I like the idea of earning with AI, but I''m not sure I can actually do it."', 7, 0, 0),
('8', 'bar-1', 'scale', 'How true is this for you?', NULL, NULL, NULL, '"I know I''m capable of more, but I don''t know where to start — and that frustrates me."', 8, 0, 0),
('9', 'bar-1', 'yesno', 'Do you have coding experience?', NULL, NULL, NULL, NULL, 9, 0, 0),
('10', 'bar-1', 'transition', NULL, 'Your coding skills are a huge advantage', 'With your coding skills you can master AI in just 1 week! Just use our step-by-step guide.', '/whatwomen.avif', NULL, 10, 1, 0),
('11', 'bar-1', 'content', NULL, '120k+ users started freelancing career with us', NULL, '/review12.png', NULL, 11, 0, 1);

-- Insert Options for Item 1 (main goal)
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('1', 'Get a side-hustle and earn extra +1000$ a month', 1),
('1', 'Quit my 9-5 job and be my own boss', 2),
('1', 'Professional growth', 3),
('1', 'Financial freedom', 4),
('1', 'Travel the world', 5);

-- Insert Options for Item 2 (describes you)
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('2', 'Full-time worker', 1),
('2', 'Business owner', 2),
('2', 'Service worker', 3),
('2', 'Freelancer', 4),
('2', 'Currently unemployed', 5);

-- Insert Options for Item 3 (challenges - checkbox)
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('3', 'Low salary', 1),
('3', 'Lack of free time', 2),
('3', 'Feeling stuck', 3),
('3', 'Poor work-life balance', 4),
('3', 'Burnout and too much stress', 5),
('3', 'Toxic work culture', 6),
('3', 'No recognition', 7);

-- Insert Options for Item 5 (earning online)
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('5', 'Yes, but it didn''t work out', 1),
('5', 'No, I don''t know where to start', 2),
('5', 'I tried, but everything seemed too complicated', 3),
('5', 'Yes, and I still want to try', 4);

-- Insert Options for Item 6 (stopping from AI)
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('6', 'I''m afraid it''s not for me', 1),
('6', 'It''s hard to understand AI', 2),
('6', 'I think it''s only for programmers', 3),
('6', 'I don''t have time to learn', 4),
('6', 'It all seems too new and confusing', 5);

-- Insert Options for Item 9 (coding experience)
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('9', 'Yes', 1),
('9', 'No', 2);

-- Insert Content Paragraphs for Item 11
INSERT INTO content_paragraphs (item_id, paragraph, "order") VALUES 
('11', '4.6 out of 5 — user reviews', 1),
('11', 'Ina K. | NY, USA — Great support, real results. Their team helped me get started with AI customer bots on WhatsApp and email. I''ve made $2,300 so far. (March 13, 2025)', 2),
('11', 'Emma R. | UK — Didn''t expect much… but it actually works! I built a WhatsApp chatbot for a local store and made $750. (June 3, 2025)', 3),
('11', 'Carlos M. | California, USA — Side hustle turned full-time income — now building AI sales agents. (April 28, 2025)', 4);

-- Insert Quiz Items for bar-2 (Financial Situation)
INSERT INTO quiz_items (item_id, step_id, type, text, title, description, image, "order", hide_bars) VALUES 
('2-1', 'bar-2', 'radio', 'How satisfied are you with your current financial situation?', NULL, NULL, NULL, 1, 0),
('2-2', 'bar-2', 'radio', 'When did you start thinking about making extra income?', NULL, NULL, NULL, 2, 0),
('2-3', 'bar-2', 'radio', 'How much money do you want to make a year?', NULL, NULL, NULL, 3, 0),
('2-4', 'bar-2', 'transition', NULL, 'Leave Financial Stress and Worries Behind!', 'You can start building AI chatbots with us and sell one chatbot for average $2000.\n\nThis course is for educational purposes only and does not guarantee specific results. Success depends on individual effort and application.', '/income.png', 4, 0);

-- Insert Options for bar-2 items
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('2-1', 'I''m more than happy', 1),
('2-1', 'I''d like more stability', 2),
('2-1', 'I''m struggling financially', 3),
('2-1', 'I don''t want to answer', 4),

('2-2', 'I''m always looking for new opportunities', 1),
('2-2', 'I''ve been thinking about it for a few months', 2),
('2-2', 'I''ve only started thinking about it recently', 3),
('2-2', 'I haven''t thought about it, but it sounds interesting', 4),

('2-3', '$30,000-$50,000', 1),
('2-3', '$50,000-$100,000', 2),
('2-3', '$100,000 and more', 3);

-- Insert Quiz Items for bar-3 (AI Experience)
INSERT INTO quiz_items (item_id, step_id, type, text, title, description, image, "order", hide_bars) VALUES 
('3-1', 'bar-3', 'radio', 'What''s the most exciting thing about AI freelancing for you?', NULL, NULL, NULL, 1, 0),
('3-2', 'bar-3', 'checkbox', 'Which AI tools are you familiar with? Choose all that apply', NULL, NULL, NULL, 2, 0),
('3-3', 'bar-3', 'radio', 'Did you know that with JobEscape, you get free access to 15+ AI tools in one place?', NULL, NULL, NULL, 3, 0),
('3-4', 'bar-3', 'transition', NULL, 'Get free access to 15+ AI tools from JobEscape – text, images, video, voice automation, and more!', NULL, '/mobile.png', 4, 0),
('3-5', 'bar-3', 'radio', 'Would you try an easy tech skill that can make you money fast?', NULL, NULL, NULL, 5, 0),
('3-6', 'bar-3', 'radio', 'Do you know how AI business automation work?', NULL, NULL, NULL, 6, 0),
('3-7', 'bar-3', 'transition', NULL, 'AI Chatbot for Customer Support', '💰 Freelancer Cost: $500 - $5,000\n\nAnswers customer inquiries 24/7\nHandles order tracking and issue resolution\nIntegrates with WhatsApp, Facebook, and etc.\nUses NLP to understand and respond conversationally.', '/support.png', 7, 0),
('3-8', 'bar-3', 'transition', NULL, 'AI Sales Agent', '💰 Freelancer Cost: $2,000 - $10,000\n\nAutomates lead generation\nQualifies leads using AI-driven conversations\nEngages and nurtures leads through emails and messages.\nIntegrates with CRM systems (Salesforce, HubSpot).', '/support.png', 8, 0),
('3-9', 'bar-3', 'transition', NULL, 'AI Marketing Agent – Automated Social Media Posting', 'Freelancer Cost: $3,000 - $12,000\n\nAutomates social media posting & scheduling\nAnalyzes market trends and audience engagement\nCreates AI-generated content (text, images, videos)\nRuns AI-optimized ad campaigns.', '/support.png', 9, 0),
('3-10', 'bar-3', 'transition', NULL, 'AI-Based Resume Screening for HR', 'Freelancer Cost: $2,500 - $8,000\n\nScans and ranks resumes based on job descriptions\nUses NLP to match skills and experience\nFilters out irrelevant applications.\nReduces HR workload by up to 70%.', '/support.png', 10, 0),
('3-11', 'bar-3', 'radio', 'Did you know what methods of finding clients there are?', NULL, NULL, NULL, 11, 0),
('3-12', 'bar-3', 'transition', NULL, '83.3% Success Rate', 'We will show you all the methods of finding clients and consider all channels, so you will definitely find your client. 83.3% of our students find their first client within 1 month.', '/successrate.png', 12, 0),
('3-13', 'bar-3', 'input', NULL, 'At what price would a personal freelancing plan with 15+ free AI tools start to feel too expensive?', NULL, NULL, 13, 0),
('3-14', 'bar-3', 'transition', NULL, 'Here''s Your AI-Driven Income Growth Profile', NULL, '/potential.png', 14, 0);

-- Insert Options for bar-3 items
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('3-1', 'High earning potential', 1),
('3-1', 'Flexibility & remote work', 2),
('3-1', 'Automating work & scaling income', 3),
('3-1', 'Learning cutting-edge AI skills', 4),

('3-2', '🤖 ChatGPT', 1),
('3-2', '🧠 Claude', 2),
('3-2', '🌌 Gemini', 3),
('3-2', '🎨 Midjourney', 4),
('3-2', '🖼️ DALL-E', 5),
('3-2', '🎥 Runway', 6),
('3-2', '🎙️ Eleven Labs', 7),
('3-2', 'No experience yet, but I''m excited to learn', 8),

('3-3', 'Yes, that sounds amazing!', 1),
('3-3', 'No, but I want to learn more!', 2),

('3-5', 'Sounds exciting - I''m ready to learn!', 1),
('3-5', 'Not sure yet - I need more info', 2),

('3-6', 'Yes', 1),
('3-6', 'No, I want to know', 2),

('3-11', 'Yes, I''m experienced freelancer', 1),
('3-11', 'No, I want to know', 2);

-- Set placeholder for input item
UPDATE quiz_items SET placeholder = 'Enter amount' WHERE item_id = '3-13';

-- Insert Quiz Items for bar-4 (Goals & Timeline)
INSERT INTO quiz_items (item_id, step_id, type, text, title, description, placeholder, image, "order", hide_bars) VALUES 
('4-1', 'bar-4', 'radio', 'Do you have specific reason for starting making money online?', NULL, NULL, NULL, NULL, 1, 0),
('4-2', 'bar-4', 'radio', 'How much do you plan to make to achieve your goal?', NULL, NULL, NULL, NULL, 2, 0),
('4-3', 'bar-4', 'radio', 'How much time do you want to dedicate to achieve your goal?', NULL, NULL, NULL, NULL, 3, 0),
('4-4', 'bar-4', 'transition', NULL, 'Your Personal AI-Driven Income Growth Plan', 'We predict you''ll have $5000-$10000 by 01 Dec\nYour big goal: Close student loan', NULL, '/plan.png', 4, 0),
('4-5', 'bar-4', 'transition', NULL, 'Ready? We''ll move on in 10 seconds...', 'Automatic move to next after 10s', NULL, '/next-step.png', 5, 0),
('4-6', 'bar-4', 'input', NULL, 'Enter your email to get your personal AI-Expert Plan', NULL, 'email@domain.com', NULL, 6, 0),
('4-7', 'bar-4', 'input', NULL, 'What is your name?', NULL, 'Your name', NULL, 7, 0),
('4-8', 'bar-4', 'transition', NULL, 'adnan, your 4-week AI-Expert Plan is ready!', '', NULL, '/mobile.png', 8, 0);

-- Insert Options for bar-4 items
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('4-1', 'Get out of debts', 1),
('4-1', 'Go on a vacation', 2),
('4-1', 'Have a perfect wedding', 3),
('4-1', 'Get a new car', 4),
('4-1', 'Buy an apartment', 5),
('4-1', 'Close student loan', 6),
('4-1', 'Other', 7),

('4-2', 'Up to $2000', 1),
('4-2', '$2000-$5000', 2),
('4-2', '$5000-$10000', 3),
('4-2', 'More than $10000', 4),

('4-3', '15-20 minutes a day', 1),
('4-3', '20-30 minutes a day', 2),
('4-3', '30-60 minutes a day', 3),
('4-3', 'More than 60 minutes a day', 4);

-- Insert Quiz Items for bar-5 (Learning Style)
INSERT INTO quiz_items (item_id, step_id, type, text, title, description, image, "order", hide_bars) VALUES 
('5-1', 'bar-5', 'radio', 'How confident are you in starting your AI freelancing journey?', NULL, NULL, NULL, 1, 0),
('5-2', 'bar-5', 'checkbox', 'Which areas would you like to focus on in your AI freelancing plan? Choose all that apply', NULL, NULL, NULL, 2, 0),
('5-3', 'bar-5', 'radio', 'What is your preferred learning style?', NULL, NULL, NULL, 3, 0),
('5-4', 'bar-5', 'transition', NULL, 'Your Journey to AI Freelancing Starts Now!', 'With JobEscape, you''ll get tailored resources to match your learning style and goals. Get ready to build your first AI project!', '/next-step.png', 4, 0),
('5-5', 'bar-5', 'transition', NULL, 'Finalizing Your AI-Expert Plan...', 'We''re putting the finishing touches on your personalized plan. Ready to dive in?', '/next-step.png', 5, 0);

-- Insert Options for bar-5 items
INSERT INTO quiz_options (item_id, option_text, "order") VALUES 
('5-1', 'Very confident', 1),
('5-1', 'Somewhat confident', 2),
('5-1', 'Neutral', 3),
('5-1', 'Not very confident', 4),
('5-1', 'Not confident at all', 5),

('5-2', 'Building AI chatbots', 1),
('5-2', 'Creating AI marketing content', 2),
('5-2', 'Automating business processes', 3),
('5-2', 'Learning AI tool integrations', 4),
('5-2', 'Finding clients', 5),

('5-3', 'Step-by-step guides', 1),
('5-3', 'Video tutorials', 2),
('5-3', 'Hands-on projects', 3),
('5-3', 'Live workshops', 4),
('5-3', 'Self-paced reading', 5);