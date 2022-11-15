import styled from 'styled-components';
import { Container } from '@mui/material';

const Footer = styled.footer`
  padding: 20px 0;
  background-color: #000;
`;

const MyContainer = styled(Container).attrs({
  maxWidth: 'lg'
})`
  && {
    display: flex;
    justify-content: center;
  }
`;

export { Footer, MyContainer };
