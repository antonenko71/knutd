import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  gap: 10px;
  padding: 0;

  & > li {
    list-style: none;

    & > a {
      text-decoration: none;
      color: #c473ea;

      &:hover,
      &:active {
        color: #c473ea;
      }
    }
  }
`;

export { List };
