import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-Items: center;
  flex-direction: column;

  height: 100vh;

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;

    :focus {
      border-color: #111;
    }
  }

  ul {
    list-style: none;
  
    span {
      font-size: 20px;
      font-weight: bold;
      color: #FF79C6;
    }

    strong {
      font-size: 20px;
      color: #FFF;
    }

    li {
      margin-top: 10px;
    }
  }
`;