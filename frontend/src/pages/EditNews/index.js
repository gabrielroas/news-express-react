import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Logo from "../../assets/newspaper-news-svgrepo-com.svg";
import api from "../../services/api";
import { Form, Container, Success, Error, CustomEditor } from "./styles";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class EditNews extends Component {
  state = {
    title: "",
    content: "",
    thumb_url: "",
    error: "",
    success: "",
    news: "",
    author: "",
    user: "",
  };
  async componentDidMount() {
    await api.get(`news/view/${this.props.match.params.news_url}`)
      .then(res => {
        this.setState({ news: res.data });
        this.setState({ author: res.data.author });
        this.setState({ title: res.data.title });
        this.setState({ content: res.data.content });
        this.setState({ thumb_url: res.data.thumb_url });
      })
    await api.get('profile')
      .then(res => {
        this.setState({ user: res.data });
      })
  }

  handleEditNews = async e => {
    e.preventDefault();
    const { title, content, thumb_url } = this.state;
    if (!title || !content) {
      this.setState({ error: "Preencha o título e o conteúdo da notícia." });
    } else {
      try {
        const response = await api.post(`news/view/${this.props.match.params.news_url}/edit`, { title, content, thumb_url });
        this.setState({ success: "Notícia editada com sucesso! Vocẽ será redirecionado." });

        setTimeout(function () {
          window.location.href = "/";

        }, 2000)
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao editar a notícia, verifique os campos preenchidos."
        });
      }
    }
  };
  isAuthor = async e => {
    this.setState({ error: "Você não é o autor desta notícia. Redirecionando." });
      window.location.href = "/";
  }


  render() {
    const { news, author, user } = this.state;

    if (user.id && author.id) {
      if (user.id != author.id) {
        this.isAuthor()
      }
    }

    return (
      <Container>
        <Form onSubmit={this.handleEditNews}>
          <img src={Logo} alt="News" />
          Editar Notícia
          <hr />
          {this.state.error && <Error>{this.state.error}</Error>}
          {this.state.success && <Success>{this.state.success}</Success>}
          <input
            type="text"
            defaultValue={news.title}
            placeholder="Título da notícia *"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <CustomEditor><CKEditor
            editor={ClassicEditor}
            data={news.content}
            onReady={editor => {
              // You can store the "editor" and use when it is needed.
              console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              this.setState({ content: data })
            }}
            onBlur={(event, editor) => {
              console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
              console.log('Focus.', editor);
            }}
          /></CustomEditor>

          <input
            type="text" defaultValue={news.thumb_url}
            placeholder="Insira o link da Thumbnail"
            onChange={e => this.setState({ thumb_url: e.target.value })}
          />
          <button type="submit"><FontAwesomeIcon icon={faCheck} /> Editar notícia</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(EditNews);