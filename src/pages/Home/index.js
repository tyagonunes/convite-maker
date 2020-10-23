import React from 'react';

import CategoryList from '../../components/CategoryList';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <CategoryList />
      <CategoryList />
    </Container>
  );
}

export default Home;