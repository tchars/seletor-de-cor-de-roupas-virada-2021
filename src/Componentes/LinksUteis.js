import React from 'react';
import { Nav } from 'react-bootstrap';

const LinksUteis = () => {
  return (
    <Nav className="justify-content-center">
      <Nav.Item>
        <Nav.Link href="https://tchars.com/blog">Início</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled href="https://tchars.com">
          Tutorial
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/tchars/seletor-de-cor-de-roupas-virada-2021">
          GitHub
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default LinksUteis;
