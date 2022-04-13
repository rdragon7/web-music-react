import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 125px;
  padding: 20px;
  background-color: #E6E6E6;
  box-shadow: 0 1px 1px 1px #ccc;
  p {
    color: #666;
  }
  a {
    display: block;
    width: 100px;
    height: 30px;
    margin: 20px 0 0 50px;
    color: #fff;
    text-align: center;
    line-height: 30px;
    background-color: #C40A10;
    border-radius: 6px;
    &:hover {
      text-decoration: none;
      background-color: #F30C11;
    }
  }
`