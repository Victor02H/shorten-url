import styled from "styled-components";



export const Logo = styled.div`
  width: 120px;

  img {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;

  li {
    padding: 0 20px;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  color: #fff;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  background-color: hsl(180, 66%, 49%);
  transition: background .4s;

  &:hover {
    background-color: #9be3e2;
  }
`;

export const ShortenContainer = styled.div`
  width: 90%;
  /* width: 1177px; */
  height: 168px;
  padding: 30px 50px;
  border-radius: 10px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: hsl(257, 27%, 26%);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
