import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import api from "../../services/api";

import Logo from "../../assets/profile-svgrepo-com.svg";

import { Form, Container, Error, Success } from "./styles";

import { isAuthenticated } from "../../services/auth";

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    error: "",
    success: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, email, password } = this.state;
    if (!name || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await api.post("/register", { name, email, password });
        this.setState({ success: "Cadastrado com sucesso! Vocẽ será redirecionado." });

        setTimeout(function () {
          // this.props.history.push("/signin");
          window.location.href = "/signin";

        }, 2000)
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      isAuthenticated() ?
        <>
          Você já está logado! Faça Logout para acessar essa página
        </>
        :
        <Container>
          <Form onSubmit={this.handleSignUp}>
            <img src={Logo} alt="News" />
            SignUp
            <hr />
            {this.state.error && <Error>{this.state.error}</Error>}
            {this.state.success && <Success>{this.state.success}</Success>}

            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={e => this.setState({ name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Endereço de e-mail"
              onChange={e => this.setState({ email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Senha"
              onChange={e => this.setState({ password: e.target.value })}
            />
            <button type="submit">Cadastrar</button>
            <hr />
            <Link to="/signin">Fazer login</Link>
          </Form>
        </Container>
    );
  }
}

export default withRouter(SignUp);