import React, { useContext } from 'react';
import { Col, Container, Form, Jumbotron, Row } from 'react-bootstrap';

import Compartilhar from './Componentes/Compartilhar';
import Eita from './Componentes/Eita';
import LinksUteis from './Componentes/LinksUteis';
import SeletorDeCores from './Componentes/SeletorDeCores';
import Sugestor from './Componentes/Sugestor';
import Titulo from './Componentes/Titulo';

import { AppContext } from './Contexts/AppContext';

function App() {
  const { corDaRoupaEsquecida, setCorDaRoupaEsquecida } = useContext(
    AppContext,
  );

  const capturaEsquecimentoCorDaRoupa = () => {
    setCorDaRoupaEsquecida(!corDaRoupaEsquecida);
  };

  return (
    <>
      <Jumbotron fluid className={'text-center'}>
        <h1 className="display-4">2021 Dress-Color Generator</h1>
        <p className="lead">
          Descubra qual cor de roupa usar baseado na sua cor de roupa na virada
          de 2019
        </p>
      </Jumbotron>

      <Container>
        <Row className="justify-content-center pb-2">
          <Col sm={12} md={6} className="pb-5">
            <Titulo texto="Escolha a cor que USOU" />
            <SeletorDeCores />

            <Form.Check
              type="checkbox"
              id="customControlAutosizing"
              label="Não me lembro"
              onChange={capturaEsquecimentoCorDaRoupa}
              custom
            />
          </Col>

          <Col sm={12} md={6}>
            <Titulo
              texto={corDaRoupaEsquecida ? '' : 'Cor sugerida para virada 2021'}
            />
            {corDaRoupaEsquecida ? <Eita /> : <Sugestor />}
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="pb-2 text-center">
            <p>Desenvolvido com ❤ por Charles Jamil</p>
            <LinksUteis className="pb-2" />
            <Compartilhar />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
