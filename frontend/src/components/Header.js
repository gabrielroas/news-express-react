import React, { Component } from "react";
import styled from "styled-components";
import { logout, isAuthenticated } from "../services/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faSignOutAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons'

const Bar = styled.div`
    position: relative;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;    
    align-items: center;
    padding: 0 50px;
    background-color: #e1e1e1;
`;

const Title = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');

    font-family: 'Zen Antique', serif;
    text-decoration: none;
`;

const Link = styled.a` 
    text-decoration: none;
    color: #000;
`;


class Header extends Component {

    render() {
        return (
            <Bar>
                <Title><Link href="/home"><FontAwesomeIcon icon={faNewspaper} /> Global News</Link></Title>
                {
                    isAuthenticated() ?
                        <Link href="/" onClick={() => logout()}> Logout <FontAwesomeIcon icon={faSignOutAlt} /></Link> :
                        <Link href="/signin"> Login <FontAwesomeIcon icon={faUserCircle} /></Link>
                }
            </Bar>
        )
    }
}

export default Header;