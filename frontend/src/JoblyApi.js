import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

class JoblyApi {
  static async request(endpoint, params = {}, verb = 'get') {
    // for now, hardcode a token for user "testuser"
    let _token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc' +
      '3R1c2VyIiwiaXNfYWRtaW4iOmZhbHNlLCJpYXQiOjE1NDE1NjQ2Nzl9.LYDHSkl81gEm' +
      '7jfHv9wJhzD4ndpuBkSzBan8Nirb6UY';

    console.debug('API Call:', endpoint, params, verb);

    let q;

    if (verb === 'get') {
      q = axios.get(`${BASE_URL}/${endpoint}`, {
        params: { _token, ...params }
      });
    } else if (verb === 'post') {
      q = axios.post(`${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === 'patch') {
      q = axios.patch(`${BASE_URL}/${endpoint}`, { _token, ...params });
    }

    try {
      return (await q).data;
    } catch (err) {
      console.error('API Error:', err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    try {
      let res = await this.request(`companies/${handle}`);
      return res.company;
    } catch (err) {
      throw err;
    }
  }

  static async getCompanies(queryObj) {
    try {
      let res = await this.request(`companies/`, queryObj);
      return res.companies;
    } catch (err) {
      throw err;
    }
  }

  static async getJobs(queryObj) {
    try {
      let res = await this.request(`jobs/`, queryObj);
      return res.jobs;
    } catch (err) {
      throw err;
    }
  }

  static async login(bodyObj) {
    try {
      let res = await this.request(`login/`, bodyObj, 'post');
      return res.token;
    } catch (err) {
      throw err;
    }
  }
}

export default JoblyApi;