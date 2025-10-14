// lib/types/quiz.ts
export interface QuizStep {
  id: number;
  step_id: string;
  title: string;
  order: number;
  is_active: number;
  created_at: string;
}

export interface QuizItem {
  id: number;
  item_id: string;
  step_id: string;
  type: 'radio' | 'checkbox' | 'transition' | 'scale' | 'yesno' | 'input' | 'content';
  text: string | null;
  title: string | null;
  description: string | null;
  placeholder: string | null;
  image: string | null;
  textbox: string | null;
  order: number;
  hide_bars: number;
  ratings_block: number;
  is_active: number;
  created_at: string;
}

export interface QuizOption {
  id: number;
  item_id: string;
  option_text: string;
  order: number;
  is_active: number;
  created_at: string;
}

export interface ContentParagraph {
  id: number;
  item_id: string;
  paragraph: string;
  order: number;
  created_at: string;
}

export interface QuizData {
  steps: QuizStep[];
  items: QuizItem[];
  options: QuizOption[];
  paragraphs: ContentParagraph[];
}

export interface QuizApiResponse {
  success: boolean;
  message: string;
  data: QuizData;
  count: {
    steps: number;
    items: number;
    options: number;
    paragraphs: number;
  };
}


export interface UserInfo {
  email?: string;
  name?: string;
  [key: string]: unknown;
}

export interface UserResponse {
  id?: number;
  session_id: string;
  item_id: string;
  response: string; // JSON stringified response
  response_type: 'radio' | 'checkbox' | 'scale' | 'input' | 'yesno';
  answered_at?: string;
}

export interface UserSession {
  id?: number;
  session_id: string;
  user_email?: string;
  user_name?: string;
  started_at?: string;
  completed_at?: string;
  current_step_id?: string;
  current_item_id?: string;
  is_completed: boolean;
}

// API Request/Response Types
export interface SaveResponseRequest {
  sessionId: string;
  itemId: string;
  response: unknown; // Will be JSON.stringified
  responseType: 'radio' | 'checkbox' | 'scale' | 'input' | 'yesno';
  userInfo?: UserInfo;
}

export interface SaveResponseResponse {
  success: boolean;
  message: string;
  sessionId: string;
  itemId: string;
  error?: string;
}

export interface SubmitQuizRequest {
  sessionId: string;
  responses: Record<string, unknown>;
  userInfo: UserInfo;
  completedAt?: string;
}

export interface SubmitQuizResponse {
  success: boolean;
  message: string;
  sessionId: string;
  totalResponses: number;
  completedAt: string;
  userInfo: UserInfo;
  error?: string;
}

// Database Helper Response Type
export interface D1QueryResponse<T = unknown> {
  success: boolean;
  errors?: { message: string }[];
  result: { results: T[] }[];
}

// Error Response Type
export interface ApiErrorResponse {
  success: false;
  message: string;
  error: string;
  details?: string;
}

export interface AdminUserData {
  session_id: string;
  user_email: string | null;
  user_name: string | null;
  started_at: string;
  completed_at: string | null;
  is_completed: number;
  total_responses: number;
}

export interface AdminStepData {
  step_id: string;
  title: string;
  order: number;
  item_count: number;
}

export interface AdminItemData extends QuizItem {
  options?: QuizOption[];
}

// API Response Types for Admin
export interface AdminUsersResponse {
  success: boolean;
  users: AdminUserData[];
  total: number;
  error?: string;
}

export interface AdminStepsResponse {
  success: boolean;
  steps: AdminStepData[];
  error?: string;
}

export interface AdminUpdateResponse {
  success: boolean;
  message: string;
  error?: string;
}