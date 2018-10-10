import request from '@/utils/request';

export async function queryMenuClickData() {
  return request('/api/menuClickAnalysis');
}
