import React, { Component } from "react";
import api from "../../services/api";
import { Title, HorizontalLine, SearchDiv } from "./styles";
import { NavLink } from "react-router-dom";
import Search from "../../components/Search";

class Home extends Component {
    state = {
        search: false,
        news: [],
    }

    async componentDidMount() {
        const response = await api.get('news?title=')
        this.setState({ news: response.data });
    }
    filterNews = async (e) => {
        const filterName = e.target.elements.filterName.value;
        e.preventDefault();
        const response = await api.get('news?title=' + filterName)
        this.setState({ news: response.data });
        this.setState({ search: true });
        if(!filterName) {
            this.setState({ search: false });
        }
    }

    render() {
        const { news, search } = this.state;

        return (
            <div>
                <SearchDiv><Search filterNews={this.filterNews} /></SearchDiv>
                <Title>{search ? "Resultado da Pesquisa" : "Ultimas Notícias"}</Title>
                <HorizontalLine />
                <form action="/news/create">
                    <input type="submit" value="Nova notícia" />
                </form>
                {news.map(news => (
                    <li key={news.id}>
                        <h4>
                            <NavLink to={`/news/view/${news.news_url}`}>{news.title}</NavLink>

                        </h4>
                        <div dangerouslySetInnerHTML={{ __html: news.content }}></div>
                        Autor: {news.author.name}
                        <img src={news.thumb_url} alt="Thumbnail" />
                        <br />
                    </li>
                ))}
            </div>
        )
    }
}

export default Home;