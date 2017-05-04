import React from "react";

import Article from "../components/Article";

import NewsAPI from "../api/NewsAPI";

export default class Gaming extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      sources: []

    };
  }
  componentDidMount() {
  NewsAPI.getNews().then(res => {
      const posts = res;
      this.setState({ posts: posts});
      console.log(posts);
    },err => {
      console.log(err);
    });

    NewsAPI.getSources('cnn').then(res => {
        const sources = res;
        this.setState({ sources: sources});
        console.log(sources);
      },err => {
        console.log(err);
      });
}
  render() {
    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter } = query;


    // <div class="row">
    //   {this.state.posts.map((val,keys)=>
    //
    //       <Article key={keys} title={val.id} description={val.description} url={val.url}/>
    //   )}
    //
    // </div>

    return (
      <div>
        <h1>Gaming</h1>

          <select>
            {this.state.posts.map((val,keys)=>

                <option value={val.name}>{val.name}</option>
            )}
          </select>

          <div class="row">{this.state.sources.map((val,keys)=>

              <Article key={keys} title={val.title} description={val.description} url={val.url}/>
          )}


          </div>

      </div>
    );
  }
}
