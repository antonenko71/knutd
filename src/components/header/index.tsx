// library
import { Link } from 'react-router-dom';

//components
import { Container } from '@mui/material';
import { LanguageFlags, Navigation } from '@common';

// assets
import { logo } from '@assets';

// styles
import * as S from './styles';

const Header = () => {
  return (
    <S.Header>
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <S.LogoContainer>
          <Link to="/">
            <img src={logo} alt="Logo" width="100%" height="100%" />
          </Link>
        </S.LogoContainer>
        <S.Wrapper>
          <Navigation />
          <LanguageFlags />
        </S.Wrapper>
      </Container>
    </S.Header>
  );
};

export default Header;
