import styled from "styled-components";
import { Button } from "../styled/styles";

export const Container = styled.div`
  width: 100%;
  padding: 0 4%;
`;

export const Head = styled.header`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 984px) {
    position: relative;
  }
`;

export const LinksContainer = styled.div`
  width: 100%;
  padding: 0 0 0 20px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 984px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px;
    background-color: hsl(257, 27%, 26%);
    position: absolute;
    transition: .8s;
    z-index: 999;
    top: ${props => props.menuIsOpen ? '90px' : '-400px'};

    ul {
      width: 100%;
      flex-direction: column;

      li {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
`;

export const Link = styled.a`
  color: hsl(257, 7%, 63%);
  text-decoration: none;
  font-weight: 700;

  &:hover {
    color: hsl(255, 11%, 22%);
  }
  
  @media(max-width: 984px) {
    display: block;
    color: #fff;
    font-size: 17px;
  }
`;

export const Login = styled.div`
  align-self: flex-end;

  @media (max-width: 984px) {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    a {
      width: 100%;
      margin: 20px 0;
    }
  }
`;

export const SignUp = styled(Button)`
  margin-left: 25px;
  padding: 5px 20px;

  @media (max-width: 984px) {
    width: 100%;
    margin-left: 0;
    font-size: 17px;
  }
`;

export const HamburgerIcon = styled.img`
  display: none;

  @media (max-width: 984px) {
    display: block;
    cursor: pointer;
  }
`;
