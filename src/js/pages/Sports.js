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
      const posts = res.map(obj => obj.data);
      this.setState({ posts });
    });
}
  render() {
    const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    // const Articles = [
    //   "Some Article",
    //   "Some Other Article",
    //   "Yet Another Article",
    //   "Still More",
    //   "Fake Article",
    //   "Partial Article",
    //   "American Article",
    //   "Mexican Article",
    // ].map((title, i) => <Article key={i} title={title}/> ); article: {article}, date: {date}, filter: {filter}
    //const Articles = NewsAPI.getNews('sport').map((title, i) => <Article key={i} title={title}/> );

    return (
      <div>
        <h1>Sports</h1>

        <div class="row">{this.state.posts}</div>
      </div>
    );
  }
}
