import React from "react";

import Article from "../components/Article";

import NewsAPI from "../api/NewsAPI";

import NewsAPIStore from '../store/NewsAPIStore';

export default class Sports extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
  NewsAPI.getSources('ign').then(res => {
      const posts = res;
      this.setState({ posts });
      console.log(posts);
    },err => {
      console.log(err);
    });
}
  render() {
    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter } = query;
    const {posts} = this.state;
    console.log(posts);
    const Articles = posts.map((val,keys)=>{
        return <Article key={keys} title={val.title} description={val.description} url={val.url}/>;
      });

    return (
      <div>
        <h1>Sports</h1>


          <div class="row">
            {Articles}


          </div>

      </div>
    );
  }
}
