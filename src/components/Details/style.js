import styled from 'styled-components';
import { Button, List, ShortenContainer } from '../styled/styles';
import shortenBg from '../../assets/images/bg-shorten-desktop.svg';

export const DetailsContainer = styled.section`
  width: 100%;
  /* height: 900px; */
  padding: 0 4% 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #eff1f7;
  position: relative;

  h2 {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 20px;
    font-size: 32px;
    color: hsl(255,11%,22%);
  }

  p {
    width: 500px;
    font-size: 18px;
    text-align: center;
    color: hsl(257,7%,63%);
  }

  @media (max-width: 498px) {
    article {
      width: 100%;
      display: flex;
      justify-content: center;

      div h3, div p {
        text-align: center;
      }
    }

    p {
      width: 100%;
    }
  }
`;

export const ShortenLinkContainer = styled(ShortenContainer)`
  position: absolute;
  top: -84px;
  background-image: url('${shortenBg}');

  input {
    width: 75%;
    padding: 20px;
    /* border: none; */
    border-radius: 10px;
    font-size: 18px;
    color: hsl(255,11%,22%);
    border: ${props => props.inputisempty || 'none'};
  }

  @media (max-width: 984px) {
    height: auto;
    display: flex;
    flex-direction: column;

    input, button {
      width: 100%;
    }

    button {
      margin-top: 40px;
    }
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 984px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const CardContainer = styled.article`
  width: 350px;
  padding: 40px;
  margin-top: 70px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;

  @media (max-width: 984px) {
    width: 85%;
  }
`;

export const CardIcon = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: hsl(257, 27%, 26%);
  position: absolute;
  top: -40px;
`;

export const CardInformation = styled.div`
  padding-top: 30px;

  h3 {
    padding-bottom: 20px;
    font-size: 26px;
    color: hsl(255,11%,22%);
  }

  p {
    width: auto;
    font-size: 17px;
    text-align: initial;
    color: hsl(257,7%,63%);
  }
`;

export const ShortenIt = styled(Button)`
  width: 20%;
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
`;

export const ShortenLinkList = styled(List)`
  width: 100%;
  padding-top: 100px;
  flex-direction: column;

  li {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: #fff;
    font-size: 18px;
  }

  @media (max-width: 984px) {
    padding-top: 200px;

    li {
      flex-direction: column;

      div {
        width: 100%;
        flex-direction: column;

        span {
          width: 100%;
          padding: 10px;
        }

        span.hdSay {
          border-bottom: 1px solid #ccc;
        }
      }

      button {
        width: 100%;
      }
    }
  }
`;

export const LinksInformations = styled.div`
  width: 85%;
  display: flex;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const CopyButton = styled(Button)`
  width: 120px;
  padding: 10px;
  border-radius: 10px;
`;

export const LinkSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.primary ? 'hsl(180,66%,49%)' : 'hsl(255,11%,22%)'};
`;
