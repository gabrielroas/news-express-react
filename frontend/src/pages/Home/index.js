import React, { Component } from "react";
import api from "../../services/api";

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
                <h2>Todas noticias</h2>
                {console.log(news.content)}
                {news.map(news => (
                    <li key={news.id}>
                        <h4>
                            <a href={news.news_url}> {news.title} </a>
                        </h4>
                        <i>{news.content}</i>
                        Autor: { news.author.name }
                        <img src={news.thumb_url} />
                        <br />
                    </li>
                ))}
            </div>
        )
    }
}

export default Home;