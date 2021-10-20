import styled from '@emotion/styled';

import bgImage from 'images/bgImage.jpg';

export const Container = styled.div`
  height: 100vh;
  max-width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding: 40px;
  background-image: url(' ${bgImage} ');
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;
