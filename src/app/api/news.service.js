import ApiClient from '../core/api-client';

class NewsService extends ApiClient {
  constructor() {
    super('https://hacker-news.firebaseio.com/v0');
  }

  async getList(count = 10, start = 0) {
    if (!this.news) {
      this.news = await super.get('/newstories.json');
    }
    const stories = this.news.slice(start, start + count).map(id => this.get(id));
    return Promise.all(stories);
  }

  async get(id) {
    return super.get(`/item/${id}.json`);
  }
}

export default NewsService;
