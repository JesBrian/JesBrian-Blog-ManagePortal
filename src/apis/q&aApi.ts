// @ts-ignore
import request from '../utils/request.ts';

/**
 * 获取答案
 */
export const getAnswerFromQuestion = (params) => {
  return request.post('https://api.jisuapi.com/iqa/query?appkey=cad4abdb2be74cbf', params);
};
