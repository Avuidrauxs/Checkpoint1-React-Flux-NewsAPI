import Axios from 'axios';
//var axios = require('axios');


const NEWS_API_URL = 'https://newsapi.org/v1/sources?apiKey=213327409d384371851777e7c7f78dfe';
const NEWS_API_URL_SOURCES = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe&sortBy=top'
 export default {
  getNews: function (){
    const encodedCategory = encodeURIComponent();
    const requestUrl = `${NEWS_API_URL}` //&category=${encodedCategory}`;

    return Axios.get(requestUrl).then(function(res){
      if(res.data.status === 'ok' && res.data.sources === []){
        throw new Error('Error no news');
      }else {
        return res.data.sources;
      }
    },function(res){
      throw new Error('Error no news')
    })
  },
  getSources: function (category){
    const encodedCategory = encodeURIComponent(category);
    const requestUrl = `${NEWS_API_URL_SOURCES}&source=${encodedCategory}`;

    return Axios.get(requestUrl).then(function(res){
      if(res.data.status === 'ok' && res.data.articles === []){
        throw new Error('Error no news');
      }else {
        return res.data.articles;
      }
    },function(res){
      throw new Error('Error no news')
    })

  }
}
