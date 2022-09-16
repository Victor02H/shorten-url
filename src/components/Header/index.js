import { useState } from 'react';
import { Container, Head, LinksContainer, Link, Login, SignUp, HamburgerIcon } from './style';
import { Logo, List } from '../styled/styles';

import logo from '../../../src/assets/images/logo.svg';
import hamburgerIconImg from '../../assets/images/hamburger-icon.svg';

export default function Header() {
  const [menuMobileOpened, setMenuMobileOpened] = useState(false);

  function mobileMenu() {
    menuMobileOpened === true ? setMenuMobileOpened(false) : setMenuMobileOpened(true);
  }

  return (
    <Container>
      <Head>
        <Logo>
          <img src={logo} alt='Logo' />
        </Logo>

        <LinksContainer menuIsOpen={menuMobileOpened}>
          <List>
            <li>
              <Link href='#'>Features</Link>
            </li>
            <li>
              <Link href='#'>Princing</Link>
            </li>
            <li>
              <Link href='#'>Resources</Link>
            </li>
          </List>

          <Login>
            <Link href='#'>Login</Link>
            <SignUp href='#'>Sign Up</SignUp>
          </Login>
        </LinksContainer>

        <HamburgerIcon src={hamburgerIconImg} alt="Hamburger Icon" onClick={mobileMenu} />
      </Head>
    </Container>
  );
}
