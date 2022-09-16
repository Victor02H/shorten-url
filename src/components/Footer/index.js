import { Footer, FooterInformations, FooterList, SocialMedias } from './style';
import { Logo } from '../styled/styles';

import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import twitter from '../../assets/images/icon-twitter.svg';

import footerData from './footerInformations.json';

export default function FooterComponent() {
  return (
    <Footer>

      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>

      <FooterInformations>

        {
          footerData.map((item, index) => {
            return (
              <FooterList paddingRight={50} key={index}>
                <li>
                  <h2>{item.title}</h2>
                </li>
                {
                  item.items.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    );
                  })
                }
              </FooterList>
            );
          })
        }

        <SocialMedias>
          <FooterList>
            <li>
              <object data={facebook} title="Icon"></object>
              {/* <img src={facebook} alt="Icon" /> */}
            </li>
            <li>
              <object data={twitter} title="Icon"></object>
              {/* <img src={twitter} alt="Icon" /> */}
            </li>
            <li>
              <object data={pinterest} title="Icon"></object>
              {/* <img src={pinterest} alt="Icon" /> */}
            </li>
            <li>
              <object data={instagram} title="Icon"></object>
              {/* <img src={instagram} alt="Icon" /> */}
            </li>
          </FooterList>
        </SocialMedias>

      </FooterInformations>

    </Footer>
  );
}
