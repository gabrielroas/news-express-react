import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = styled.input` 
padding: 0 20px 0 20px;
    border-radius: 5px;
    height: 30px;       
    width: 70%;
    font-size: 15px;
    margin-top: -15px;  
    color: #a5a5a5;
    border: 1px solid #000;
    &:focus {
    border: 2px solid #ddd;
    }
    ::placeholder,
    ::-webkit-input-placeholder {
        color: #ddd;
    }
    :-ms-input-placeholder {
        color: #ddd;
    }
`;
const SearchIcon = styled.span`
color: #ddd;
position: relative;
right: 20px;
`;

const Search = props => (
    <form onSubmit={props.filterNews}>
        <SearchInput placeholder="Pesquisar notícia" type="text" name="filterName" /><SearchIcon><FontAwesomeIcon icon={faSearch} /></SearchIcon>
    </form>
);

export default Search;