import { api } from './instance';
import type { LoginRequest, SignupRequest } from './types';

// 회원가입 post 요청
export async function postSignup(body: SignupRequest) {
  const response = await api.post('/auth/signup', body);
  return response.data;
}

// 로그인 post 요청
export async function postLogin(body: LoginRequest) {
  const response = await api.post('/auth/login', body);
  return response.data;
}

// 내 정보 조회 get 요청
export async function getUserInfo() {
  const response = await api.get('/auth/me');
  return response.data;
}

// 서버 상태(헬스) 체크
export async function getServerStatus() {
  const response = await api.get('/health');
  return response.data;
}

// 나만의 질문 목록
export async function getPrivateQuestion() {
  const response = await api.get('/private-questions');
  return response.data;
}
