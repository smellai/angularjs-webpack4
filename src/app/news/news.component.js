class NewsComponent {
  /** @ngInject */
  constructor($scope, News) {
    this.scope = $scope;
    this.newsService = News;
    this.news = [];
    this.loadNext();
  }

  async loadNext() {
    this.loading = true;
    const news = await this.newsService.getList(10, this.news.length);
    this.news = this.news.concat(news);
    this.loading = false;
    this.scope.$apply();
  }
}

export default {
  template: require('./news.html'),
  controller: NewsComponent
};
