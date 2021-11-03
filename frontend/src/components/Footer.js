import React, { Component } from "react";
import styled from "styled-components";

const Bar = styled.footer`
    position: relative;
    padding: 10px;
    z-index: 999;
    height: 30px;
    background-color: #e1e1e1;
`;

class Footer extends Component {

    render() {
        return (
            <Bar>
                <center>Desenvolvido por <a href="https://github.com/gabrielroas/news-express-react">Gabriel Roas</a></center>
            </Bar>
        )
    }
}

export default Footer;