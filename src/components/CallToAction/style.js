import styled from 'styled-components';
import { Button, ShortenContainer } from '../styled/styles';

import boostBg from '../../assets/images/bg-boost-desktop.svg';

export const BoostContainer = styled(ShortenContainer)`
  width: 100%;
  border-radius: 0;
  position: initial;
  flex-direction: column;
  justify-content: center;
  background-image: url('${boostBg}');

  h2 {
    color: #fff;
    font-size: 32px;
  }

  @media (max-width: 984px) {
    text-align: center;

    h2 {
      font-size: 19px;
    }
  }
`;

export const GetStarted = styled(Button)`
  padding: 10px 30px;
  margin-top: 20px;
`;