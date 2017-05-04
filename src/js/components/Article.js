import React from "react";

export default class Article extends React.Component {
  render() {
    const { title, description, url } = this.props;

    return (
      <div class="col-md-4">
        <h4>{title}</h4>
        <p>{description}.</p>
        <a class="btn btn-default" href={url} target='blank'>More Info</a>
      </div>
    );
  }
}
