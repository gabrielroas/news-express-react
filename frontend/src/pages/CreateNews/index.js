import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import Logo from "../../assets/newspaper-news-svgrepo-com.svg";
import api from "../../services/api";
import { Form, Container, Success, Error, CustomEditor } from "./styles";

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class CreateNews extends Component {
  state = {
    title: "",
    content: "",
    thumb_url: "",
    error: "",
    success: ""
  };

  handleCreateNews = async e => {
    e.preventDefault();
    const { title, content, thumb_url } = this.state;
    if (!title || !content) {
      this.setState({ error: "Preencha o título e o conteúdo da notícia." });
    } else {
      try {
        const response = await api.post("/news/create", { title, content, thumb_url });
        this.setState({ success: "Notícia criada com sucesso! Vocẽ será redirecionado." });

        // setTimeout(function () {
        //   window.location.href = "/";

        // }, 2000)
      } catch (err) {
        this.setState({
          error:
            "Houve um problema ao cadastrar a notícia, verifique os campos preenchidos."
        });
      }
    }
  };


  render() {
    return (
      <Container>
        <Form onSubmit={this.handleCreateNews}>
          <img src={Logo} alt="News" />
          Nova Notícia
          <hr />
          {this.state.error && <Error>{this.state.error}</Error>}
          {this.state.success && <Success>{this.state.success}</Success>}
          <input
            type="text"
            placeholder="Título da notícia *"
            onChange={e => this.setState({ title: e.target.value })}
          />
          <CustomEditor><CKEditor
            editor={ClassicEditor}
            data=""
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
            type="text"
            placeholder="Insira o link da Thumbnail"
            onChange={e => this.setState({ thumb_url: e.target.value })}
          />
          <button type="submit"><FontAwesomeIcon icon={faPlus} /> Criar notícia</button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(CreateNews);