// 회원가입_post
export interface SignupRequest {
  password: string;
  private_answer: string;
  private_question: string;
  username: string;
}

export interface SignupResponse {
  id: string;
  username: string;
  private_question: string;
}

// 로그인_post
export interface LoginRequest {
  password: string;
  private_answer: string;
  username: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
}

// 내 정보 조회_get
export interface UserInfoResponse {
  id: string;
  username: string;
  private_question: string;
}

// 사용 기록 목록_get
export interface UsageLogResponse {
  id: string;
  title: string;
  file_name: string;
  created_at: Date;
}

// 사용 기록 상세 조회
export interface UsageLogDetailResponse {
  id: string;
  title: string;
  file_name: string;
  s3_key: string;
  compact_result: string;
  created_at: Date;
  updated_at: Date;
}

// 기록 제목 수정_PATCH
export interface UsageLogUpdateRequest {
  title: string;
}

export interface UsageLogUpdateResponse {
  id: string;
  title: string;
  file_name: string;
  s3_key: string;
  compact_result: string;
  created_at: Date;
  updated_at: Date;
}

//기록 삭제_DELETE
export type DeleteRecordErrorDetail = {
  loc: string[];
  msg: string;
  type: string;
  input: null;
  ctx: Record<string, unknown>;
};

export type DeleteRecordErrorResponse = {
  detail: DeleteRecordErrorDetail[];
};

// 서버 상태 체크
export interface HealthStatus {
  status: string;
}

// 나만의 질문
export const PrivateQuestion = {
  FAVORITE_FRUIT: 'FAVORITE_FRUIT',
  BEST_FRIEND: 'BEST_FRIEND',
  FIRST_PET: 'FIRST_PET',
  FAVORITE_TEACHER: 'FAVORITE_TEACHER',
  BIRTH_CITY: 'BIRTH_CITY',
} as const;
export type UserPrivateQuestion = (typeof PrivateQuestion)[keyof typeof PrivateQuestion];

export type PrivateQuestionAndLabel = {
  value: UserPrivateQuestion;
  label: string;
};
