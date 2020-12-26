import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../Contexts/AppContext';

const Sugestor = () => {
  const { coresVestimentaInferior } = useContext(AppContext);

  const corEscolhida = useRef();

  function executeScroll() {
    corEscolhida.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    executeScroll();
  }, [coresVestimentaInferior]);

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${coresVestimentaInferior.r}, ${coresVestimentaInferior.g}, ${coresVestimentaInferior.b})`,
          width: '100%',
          height: '200px',
          borderRadius: '15px',
        }}
        className="mb-3 shadow-lg"
        ref={corEscolhida}
      ></div>
      <h3 className="text-center">{`rgb(${coresVestimentaInferior.r}, ${coresVestimentaInferior.g}, ${coresVestimentaInferior.b})`}</h3>
    </div>
  );
};

export default Sugestor;
