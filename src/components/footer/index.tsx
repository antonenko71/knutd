// component
import { Copyright } from '@common';
import { Container } from '@mui/material';

// data
import { AUTHOR } from '@data';

// styles
import * as S from './styles';

const Footer = () => {
  return (
    <S.Footer>
      <S.MyContainer>
        <Copyright fullName={AUTHOR.fullName} city={AUTHOR.city} />
      </S.MyContainer>
    </S.Footer>
  );
};

export default Footer;
