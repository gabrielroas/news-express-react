import React, { Component } from "react";
import api from "../../services/api";
import { Title, HorizontalLine, ButtonAndSearchDiv, Button, ButtonIcon, NewsContainer, NewsItem } from "./styles";
import { Link } from "react-router-dom";
import Search from "../../components/Search";
import { isAuthenticated } from "../../services/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";


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
        if (!filterName) {
            this.setState({ search: false });
        }
    }

    render() {
        const { news, search } = this.state;

        return (
            <div>
                <Title>{search ? "Resultados da Pesquisa" : "Ultimas Notícias"}</Title>
                <HorizontalLine lineWidth={search ? "270px" : "190px"} />
                <ButtonAndSearchDiv>
                {isAuthenticated() ?
                    <Link style={{ textDecoration: 'none' }} to={`/news/create`}>
                        <Button disabled="disabled" value="Nova notícia" />
                        <ButtonIcon><FontAwesomeIcon color="black" icon={faPlus} />
                        </ButtonIcon>
                    </Link> : null
                }
                <Search filterNews={this.filterNews} />
                </ButtonAndSearchDiv>
                <NewsContainer key={news.id}>
                    {news.map(news => (                       
                        <Link style={{ textDecoration: 'none' }} to={`/news/view/${news.news_url}`}>
                            <NewsItem>
                                <h6>  Autor: {news.author.name} </h6>
                                <h2>
                                    {news.title}
                                </h2>
                                <p dangerouslySetInnerHTML={{ __html: news.content.substring(0, 150) + "..." }} />
                                { news.thumb_url ? <img src={news.thumb_url} alt="Thumbnail" /> : null } 
                                <br />
                            </NewsItem>
                        </Link>
                    ))}
                </NewsContainer>
            </div>
        )
    }
}

export default Home;