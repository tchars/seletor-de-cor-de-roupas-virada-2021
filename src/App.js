import React from 'react';
import { Col, Container, Jumbotron, Nav, Row } from 'react-bootstrap';
import SeletorDeCores from './Componentes/SeletorDeCores';
import Sugestor from './Componentes/Sugestor';
import Titulo from './Componentes/Titulo';

function App() {
  return (
    <>
      <Jumbotron fluid>
        <h1 className="display-4 text-center">2021 Dress-Color Generator</h1>
      </Jumbotron>

      <Container>
        <Row className="justify-content-center pb-2">
          <Col sm={12} md={6} className="pb-5">
            <Titulo texto={'Escolha a cor que USOU'} />
            <SeletorDeCores />
          </Col>

          <Col sm={12} md={6}>
            <Titulo texto={'Cor sugerida para virada 2021'} />
            <Sugestor />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="pb-2 text-center">
            <p>Desenvolvido com ❤ por Charles Jamil</p>
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
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
