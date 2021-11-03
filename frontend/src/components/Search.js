import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchInput = styled.input` 
padding: 0 20px 0 20px;
    border-radius: 5px;
    height: 30px;       
    width: 15%;
    font-size: 15px;
    margin-top: 2px;  
    color: #a5a5a5;
    border: 1px solid #ddd;
    &:focus {
    border: 2px solid #ddd;
    }
`;
const SearchIcon = styled.span`
color: #ddd;
position: relative;
right: 20px;
`;

const Search = props => (
    <form onSubmit={props.filterNews}>
        <SearchInput type="text" name="filterName" /><SearchIcon><FontAwesomeIcon icon={faSearch} /></SearchIcon>
    </form>
);

export default Search;