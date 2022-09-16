import styled from "styled-components";
import { Button } from "../styled/styles";

import illustration from '../../assets/images/illustration-working.svg';

export const Home = styled.section`
  width: 100%;
  height: 700px;
  padding: 0 4%;
  /* position: relative; */

  display: flex;
  align-items: center;

  /* background-position: 660px; */
  background-position: 120%;
  background-repeat: no-repeat;
  background-image: url('${illustration}');

  svg {
    width: 730px;
    height: 480px;
  }

  @media (max-width: 984px) {
    height: 940px;
    padding-bottom: 14%;
    align-items: flex-end;
    text-align: center;
    justify-content: center;
    background-size: 96%;
    background-position-x: center;
    background-position-y: 20px;
    /* background-size: 620px 460px; */
  }

  @media (max-width: 768px) {
    padding-bottom: 32%;
  }

  @media (max-width: 498px) {
    height: 575px;
    padding-bottom: 120px;
  }
`;

export const Informations = styled.div`
  /* width: 600px; */
  width: 440px;
  
  h1 {
    font-size: 54px;
    line-height: 64px;
    color: hsl(255, 11%, 22%);
  }

  @media (max-width: 498px) {
    h1 {
      font-size: 30px;
      line-height: 30px;
    }
  }
`;

export const Text = styled.p`
  color: hsl(257, 7%, 63%);
`;

export const GetStarted = styled(Button)`
  padding: 10px 30px;
  margin-top: 20px;
`;
