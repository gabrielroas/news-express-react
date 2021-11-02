import React, { Component } from "react";
import api from "../../services/api";

class News extends Component {
  state = {
    news: '',
    author: ''
  }

  async componentDidMount() {
    const response = await api.get(`news/view/${this.props.match.params.news_url}`)
    this.setState({ news: response.data });
    this.setState({ author: response.data.author.name })

  }

  render() {
    const { news, author } = this.state;

    const FormatDateCreatedAt = (unformattedDate) => {
      var currentDate = new Date(unformattedDate);
      var newDate =
        ("00" + currentDate.getDate()).slice(-2) + "/" +
        ("00" + (currentDate.getMonth() + 1)).slice(-2) + "/" +
        currentDate.getFullYear() + " " +
        ("00" + currentDate.getHours()).slice(-2) + ":" +
        ("00" + currentDate.getMinutes()).slice(-2) + ":" +
        ("00" + currentDate.getSeconds()).slice(-2);
      return newDate;
    }
    const createdAt = FormatDateCreatedAt(news.createdAt);

    return (
      <div>
        <li key={news.id}>
          <h4>
            {news.title}
          </h4>
          {createdAt}
          <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
          Autor: {author}
          <img src={news.thumb_url} alt="Thumbnail" />
          <br />
        </li>

      </div>
    )
  }
}

export default News;