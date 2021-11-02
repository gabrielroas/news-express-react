import React, { Component } from "react";
import api from "../../services/api";
import { Title, HorizontalLine } from "./styles";

class Home extends Component {
    state = {
        news: [],
    }

    async componentDidMount() {
        const response = await api.get('news')
        this.setState({ news: response.data });
    }

    render() {
        const { news } = this.state;

        return (
            <div>
                <Title>Ultimas Notícias</Title>
                <HorizontalLine />
                {console.log(news.content)}
                {news.map(news => (
                    <li key={news.id}>
                        <h4>
                            <a href={news.news_url}> {news.title} </a>
                        </h4>
                        <div dangerouslySetInnerHTML={{ __html: news.content}}></div>
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