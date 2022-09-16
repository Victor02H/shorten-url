import { useState } from "react";

import {
  DetailsContainer,
  CardWrapper,
  CardContainer,
  CardIcon,
  CardInformation,
  ShortenIt,
  ShortenLinkList,
  LinksInformations,
  CopyButton,
  LinkSpan,
  ShortenLinkContainer
} from "./style";

// import { ShortenContainer } from '../styled/styles';

import icon from '../../assets/images/icon-brand-recognition.svg';

import api from "../../services/api";
import data from './cardDetails.json';

export default function Details() {
  const [inputValue, setInputValue] = useState('');
  const [link, setLink] = useState([]);
  const [linkIsCopied, setLinkIsCopied] = useState(false);
  const [inputIsEmpty, setInputIsEmpty] = useState(false);

  async function ShortenLink() {
    if (inputValue) {
      await api.get(`shorten?url=${inputValue}`)
        .then(res => {
          setLink([...link, res.data.result]);
          setInputValue('');
        })
        .catch(err => console.log(err));

      setInputIsEmpty(false);

      return false;
    }

    setInputIsEmpty(true);
    console.log(inputIsEmpty);
  }

  async function copyLink(shortenedLink, target) {
    await navigator.clipboard.writeText(shortenedLink)
      .then(() => {
        //setLinkIsCopied(true);
        console.log(`link ${shortenedLink} copiado!`);
      })
      .catch((err) => console.log(err));
  }

  return (
    <DetailsContainer>
      <ShortenLinkContainer>
        <input
          type="text"
          name="Shorten"
          autoComplete="off"
          value={inputValue}
          inputisempty="1px solid #f46262"
          placeholder="Shorten a link here..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <ShortenIt onClick={() => ShortenLink()}>Shorten It!</ShortenIt>
      </ShortenLinkContainer>

      {link &&
        <ShortenLinkList>
          {
            link.map((item, index) => {
              return (
                <li key={index}>
                  <LinksInformations>
                    <LinkSpan>{item.original_link}</LinkSpan>
                    <LinkSpan primary="true">https://{item.short_link}</LinkSpan>
                  </LinksInformations>
                  <CopyButton onClick={(e) => copyLink(item.short_link, e.target)}>Copy</CopyButton>
                </li>
              );
            })
          }
        </ShortenLinkList>
      }

      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <CardWrapper>
        {
          data.map((item, index) => {
            return (
              <CardContainer key={index}>
                <CardIcon>
                  <img src={icon} alt='Icon' />
                </CardIcon>

                <CardInformation>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </CardInformation>
              </CardContainer>
            );
          })
        }
      </CardWrapper>

    </DetailsContainer >
  );
}
