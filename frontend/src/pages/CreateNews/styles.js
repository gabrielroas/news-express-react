import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 60px;

`;

export const Form = styled.form`
  width: 70%;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100px;
    margin: 10px 0 40px;
  }

  input {
    // flex: 1;
    border-radius: 5px;
    height: 46px;    
    margin-bottom: 8px;
    padding: 0 20px;
    font-size: 15px;
    width: 100%;  
    border: 2px solid #ddd;
    &:focus {
    border: 1px solid #1b74fb;
    }
  }
  
  button {
    color: #fff;
    font-size: 16px;
    background: #7088ad;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 25%;
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;

export const Success = styled.p`
  background: #d8ffbf;
  color: #00810b;
  margin-bottom: 15px;
  border: 1px solid #228900;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export const Error = styled.p`
  color: #ff3333;
  margin-bottom: 15px;
  border: 1px solid #ff3333;
  padding: 10px;
  width: 100%;
  text-align: center;
`;

export const CustomEditor = styled.p`
  width: 100%; 
  weght: 200px;
  text-align: center;
  border-radius: 5px;  
  margin-bottom: 8px;  
  border: 0.5px solid #ddd;
`;