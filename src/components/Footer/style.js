import styled from 'styled-components';
import { List } from '../styled/styles';

export const Footer = styled.footer`
  width: 100%;
  padding: 60px 4%;
  display: flex;
  justify-content: space-between;
  background-color: hsl(260,8%,14%);

  @media (max-width: 984px) {
    text-align: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterInformations = styled.div`
  display: flex;

  @media (max-width: 984px) {
    flex-direction: column;

    ul {
      padding: 20px 0;
    }
  }
`;

export const FooterList = styled(List)`
  color: hsl(257,7%,63%);
  flex-direction: column;
  align-items: initial;
  padding-right: ${props => props.paddingRight}px;

  h2 {
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
  }

  li {
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
      color: hsl(180,66%,49%);
    }
  }
`;

export const SocialMedias = styled.div`
  li {
    padding: 0;
    margin: 0 20px;
  }

  ul {
    align-items: center;
    flex-direction: row;
  }
  
  @media (max-width: 498px) {
    li {
      margin: 0 10px;
    }
  }
`;