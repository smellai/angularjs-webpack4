
class ApiClient {
  constructor(basePath) {
    this.basePath = basePath;
  }

  static toQueryString(params) {
    if (params) {
      const keys = Object.keys(params);
      if (keys.length > 0) {
        return '?' + keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`).join('&');
      }
    }
    return '';
  }

  async get(url, params) {
    const request = new Request(this.basePath + url + ApiClient.toQueryString(params), {
      method: 'GET'
    });
    const response = await fetch(request);
    return response.json();
  }
}

export default ApiClient;
