import { EventEmitter } from "events";

import NewsAPI from '../api/NewsAPI';

class NewsAPIStore extends EventEmitter{
  constructor(){
    super();
    const that = this;
    this.sources = []


  };
  getAll(){
    let temp = [];
    NewsAPI.getNews().then(res => {

        temp = res;
        //this.setState({ posts: posts});
        //console.log(posts);
      },err => {
        console.log(err);
      });
      return temp;
  };
  // console.log(this.sources);

}

const newsApiStore = new NewsAPIStore;
// console.log(this.sources);
export default newsApiStore;
