import React, { useRef, useEffect } from 'react';
import { AppContext } from '../Contexts/AppContext';

const Eita = () => {
  const { corDaRoupaEsquecida } = React.useContext(AppContext);

  const corEita = useRef();

  function executeScroll() {
    corEita.current.scrollIntoView();
  }

  useEffect(() => {
    executeScroll();
  }, [corDaRoupaEsquecida]);

  return (
    <div>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: '200px',
          borderRadius: '15px',
        }}
        className="mb-3"
      >
        <h1 className="display-1 text-center">🤭</h1>
      </div>
      <h3 className="text-center" ref={corEita}>
        Eita...
      </h3>
    </div>
  );
};

export default Eita;
