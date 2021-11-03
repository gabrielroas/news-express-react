import React, { Component } from "react";
import api from "../../services/api";
import { NewsContainer, HorizontalLine, Button, ButtonsDiv, ButtonIcon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

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
    window.location.href = "/";

  }

  render() {
    const { news, author, user } = this.state;

    const FormatDateCreatedAt = (unformattedDate) => {
      var currentDate = new Date(unformattedDate);
      var newDate =
        ("00" + currentDate.getDate()).slice(-2) + "/" +
        ("00" + (currentDate.getMonth() + 1)).slice(-2) + "/" +
        currentDate.getFullYear() + " às " +
        ("00" + currentDate.getHours()).slice(-2) + ":" +
        ("00" + currentDate.getMinutes()).slice(-2) + ":" +
        ("00" + currentDate.getSeconds()).slice(-2);
      return newDate;
    }
    const createdAt = FormatDateCreatedAt(news.createdAt);

    return (

      <NewsContainer key={news.id}>

        <h6>Por {author.name} em {createdAt}</h6>
        <HorizontalLine lineWidth="30%" />
        <h1>{news.title}</h1>

        <img src={news.thumb_url} alt="Thumbnail" />

        <p dangerouslySetInnerHTML={{ __html: news.content }} />
        <br />
        {
          user.id == author.id
            ?
            <ButtonsDiv>
              <form action={`/news/view/${this.props.match.params.news_url}/edit`}>
                <Button type="submit" value="Editar notícia" buttonHoverColor="#40bd67"  />
                <ButtonIcon>
                  <FontAwesomeIcon color="black" icon={faEdit} />
                </ButtonIcon>
              </form>
              <form onSubmit={this.handleDelete}>
                <Button type="submit" value="Excluir notícia" buttonHoverColor="red" />
                <ButtonIcon>
                  <FontAwesomeIcon color="black" icon={faTrashAlt} />
                </ButtonIcon>
              </form>
            </ButtonsDiv>
            :
            null
        }
      </NewsContainer>
    )
  }
}

export default News;