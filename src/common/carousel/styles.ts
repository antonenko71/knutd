import styled from 'styled-components';

const ImgContainer = styled.div`
  width: 350px;
  height: 300px;
`;

const TwoImgContainer = styled.div`
  display: flex;
  gap: 5px;
  width: 100%;
  height: 70%;

  & > img {
    width: 50%;
  }
`;

export { ImgContainer, TwoImgContainer };
