import styled, { css } from 'styled-components';

const HomeSection = styled.section<{
  homeBg?: string;
  correctionBg?: string;
  brushesBg?: string;
}>`
  position: relative;
  height: 700px;
  background-size: cover;
  background-position: center center;
  background-color: #000;

  ${(props) =>
    props?.homeBg &&
    css`
      background-image: url(${props.homeBg});
    `}

  ${(props) =>
    props?.correctionBg &&
    css`
      background-image: url(${props.correctionBg});
    `}


  ${(props) =>
    props?.brushesBg &&
    css`
      background-image: url(${props.brushesBg});
    `}
`;

const Content = styled.div<{ correction?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  width: 50%;
  backdrop-filter: blur(5px);
  background-color: hsla(0, 0%, 87.1%, 0.2);

  ${(props) =>
    props?.correction &&
    css`
      max-height: 650px;
      height: 100%;
    `}
`;

export { HomeSection, Content };
