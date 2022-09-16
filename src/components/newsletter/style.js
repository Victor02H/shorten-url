import styled from "styled-components";
import { Button } from "../styled/styles";

export const Form = styled.form`
  width: 100%;
  padding: 40px 4%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: hsl(225,33%,95%,1);
`;

export const InputNewsContainer = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;

  input {
    padding: 10px;
  }
`;

export const Submit = styled(Button)`
  width: 360px;
  margin: 40px 0 0 0;
  /* margin-left: 25px; */
  padding: 10px 20px;

  @media (max-width: 984px) {
    width: 100%;
    margin-left: 0;
    font-size: 17px;
  }
`;

