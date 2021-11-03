import styled from "styled-components";

export const NewsContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;

    border-top: 1px solid #cecece;
    border-right: 1px outset #cecece;
    border-left: 1px solid #cccccc52;
    border-bottom: 1px solid #cccccc52;



    text-align:center;;
    align-items: center;
    padding: 20px;
    margin: 30px 30px 30px 30px;
        h1 {
            @import url('https://fonts.googleapis.com/css2?family=Zen+Antique&display=swap');
            font-family: 'Zen Antique', serif;
            color: #1f1a17;
            text-align: justify;
            padding: 30px 0px 0px;
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
            margin-top: 20px;
            margin-bottom: 20px;
            width: auto;
            height: auto;
            max-width: 700px;
            // height: 100%;
            object-fit: cover;
            border: 1px insert #e1e1e1;
            object-position: 20% 20%;         
        }
`;

export const HorizontalLine = styled.h1` 
    margin:0 auto;
    border-bottom: 1px solid #bbbbbb ;    
    width: ${props => props.lineWidth || "200px"};
    margin-top: -25px;
`;


export const ButtonsDiv = styled.div` 
    position: relative;
    z-index: 999;
    margin: 0 0px 0px 0px;
    // top: 0;
    // left: 0;
    // right: 0;
    display: flex;
    // justify-content: space-between;       
    // padding: 0 50px;
`;


export const Button = styled.input`
    border-radius: 5px;
    padding: 10px;       
    width: 150px;    
    height: 35px;
    font-size: 14px;
    margin-left: 10px;
    margin-bottom: -20px;  
    color: #000;
    border: 1px solid #000;
    // border-radius: 100px;
    background: #eee;
    cursor: pointer;    
    &:hover {    
    background: ${props => props.buttonHoverColor || "#e1e1e1e1"};
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
 
`;