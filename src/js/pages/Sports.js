import React from "react";

import Article from "../components/Article";

import NewsAPI from "../api/NewsAPI";

export default class Sports extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
  NewsAPI.getNews('sport').then(res => {
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


    return (
      <div>
        <h1>Sports</h1>

        <div class="row">{this.state.posts.map((val,keys)=>

            <Article key={keys} title={val.id} description={val.description} url={val.url}/>
        )}


        </div>
      </div>
    );
  }
}
