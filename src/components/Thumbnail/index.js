import React from 'react';

import { Container, Thumb } from './styles';

function Thumbnail({img, label}) {
  return (
    <Container>
      <Thumb src={img} />
      <span>{label}</span>
    </Container>
  );
}

export default Thumbnail;