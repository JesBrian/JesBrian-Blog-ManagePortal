import axios from 'axios';

import { stringify } from 'qs';

axios.interceptors.request.use(config => {
  if (config.method === 'get') {
    let params = config.params || {};
    config.params = params;
    // TODO: 参数拼接 URL
  } else if (config.method === 'post') {
    config = Object.assign(config, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });
    (config.data instanceof Object) && config.headers['content-type'] === 'application/x-www-form-urlencoded' && (config.data = stringify(config.data));
  }

  return config;
});

axios.interceptors.response.use(response => {
  const {data = {}} = response;
  return data;
});

export default axios;
