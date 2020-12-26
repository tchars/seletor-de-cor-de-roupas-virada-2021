import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from 'react-share';

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share';

const Compartilhar = () => {
  const atributos = {
    title: 'Sugestor de cores - Charles Jamil - https://tchars.com',
    summary: 'Sugestor de cores - tchars.com',
    source: 'https://tchars.com/projetos/sugestor-virada-2021/',
    tamanho: 48,
  };

  return (
    <>
      <p>Compartilhe</p>
      <LinkedinShareButton
        title={atributos.title}
        summary={atributos.summary}
        source={atributos.source}
        url={atributos.source}
      >
        <LinkedinIcon size={atributos.tamanho} round />
      </LinkedinShareButton>{' '}
      <WhatsappShareButton title={atributos.title} url={atributos.source}>
        <WhatsappIcon size={atributos.tamanho} round />
      </WhatsappShareButton>{' '}
      <FacebookShareButton quote={atributos.title} url={atributos.source}>
        <FacebookIcon size={atributos.tamanho} round />
      </FacebookShareButton>{' '}
      <EmailShareButton
        subject={atributos.title}
        body={`Achei uma aplicação legal! Aqui ${atributos.source}`}
        url={atributos.source}
      >
        <EmailIcon size={atributos.tamanho} round />
      </EmailShareButton>{' '}
      <WorkplaceShareButton quote={atributos.title} url={atributos.source}>
        <WorkplaceIcon size={atributos.tamanho} round />
      </WorkplaceShareButton>
    </>
  );
};

export default Compartilhar;
