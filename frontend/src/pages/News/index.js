import React, { Component } from "react";
import api from "../../services/api";

class News extends Component {
  state = {
    news: '',
    author: '',
    user: '',
  }

  async componentDidMount() {
    await api.get(`news/view/${this.props.match.params.news_url}`)
      .then(res => {
        // const {news} = res.data;
        this.setState({ news: res.data });
        this.setState({ author: res.data.author });
      })
    await api.get('profile')
      .then(res => {
        this.setState({ user: res.data });
      })
  }

  handleDelete = event => {
    event.preventDefault();

    api.delete(`news/view/${this.props.match.params.news_url}/delete`)
      .then(res => {
      })
  }

  render() {
    const { news, author, user } = this.state;

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
          Autor: {author.name}
          <img src={news.thumb_url} alt="Thumbnail" />
          {
            user.id == author.id
              ?
              <div>
                <form onSubmit={this.handleDelete}>
                  <button type="submit">Delete</button>
                </form>
                <form action={`/news/view/${this.props.match.params.news_url}/edit`}>
                  <input type="submit" value="Editar notícia" />
                </form>
              </div>
              :
              null
          }
          <br />
        </li>

      </div>
    )
  }
}

export default News;