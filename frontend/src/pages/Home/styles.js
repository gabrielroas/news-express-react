import styled from "styled-components";

export const Title = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    font-family: 'Roboto', sans-serif;
    text-align: center;
    padding: 30px 0px 0px;
`;

export const HorizontalLine = styled.h1` 
    border-bottom: 2px solid black;
    width: 200px;
    width: ${props => props.lineWidth || "200px"};

    margin: auto;
`;


export const ButtonAndSearchDiv = styled.div` 
    position: relative;
    top: 0px;
    position: relative;
    z-index: 999;
    margin: 10px -80px 0px -50px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;    
    padding: 0 50px;
`;

export const Button = styled.input`
    border-radius: 5px;
    padding: 10px;       
    width: 125px;
    height: 35px;
    font-size: 15px;
    margin-left: 50px;
    margin-bottom: -20px;  
    color: #000;
    border: 1px solid #000;
    // border-radius: 100px;
    background: #eee;
    cursor: pointer;
    
    &:hover {    
    background: #e1e1e1;
    border: 1px solid #000;
    // border-bottom: 1px solid #cccccc52;

    }
`;

export const ButtonIcon = styled.span`
    color: #ddd;
    position: relative;
    right: 25px;
    top: 0px;
`;

export const NewsContainer = styled.div`
    display: grid;
    padding: 35px;
    items-align: center;
    height: 100%;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

export const NewsItem = styled.div`           
    // max-width: 200px;
    // background: #fff;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    // border: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #cccccc52;
    border-top: 1px solid #ddd9d92e;
    color: #333;
    padding: 15px;
    &:hover {    
        background: #e1e1e180;
        // border: 1px solid #000;
    }

    // border-radius: 40px;
    
    h2 {        
        @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
        font-family: 'Zen Antique', serif;
        padding-bottom: 20px;
        margin: 30px 0 0 0;
        text-align: justify;   

    }   
    h6 {
        padding-top: -10px;
        margin-bottom: -20px;
        color: #767676;  
    } 
    p { 
        text-align: justify;   
        margin: -3px 0px 15px 0px;
    }
    img {
        // width: 100%;
        width: 100%;
        height: 220px;
        object-fit: cover;
        border: 1px insert #e1e1e1;
        // object-position: 20% 10%; 
        
    }
`;