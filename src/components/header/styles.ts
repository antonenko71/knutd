import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  z-index: 9;
  width: 100%;
  height: 50px;
  background-color: #000;
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export { Header, LogoContainer, Wrapper };
