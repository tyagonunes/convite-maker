import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <Link to='/'>
        Convite Maker
      </Link>
      
    </Container>
  );
}

export default Header;