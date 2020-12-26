import React, { useContext } from 'react';
import { CirclePicker } from 'react-color';
import { AppContext } from '../Contexts/AppContext';

import { cores } from '../Utilidades/Cores';

const SeletorDeCores = () => {
  const { setCoresVestimentaSuperior } = useContext(AppContext);
  const { setCoresVestimentaInferior } = useContext(AppContext);

  const capturaTrocaDeCor = ({ rgb }) => {
    setCoresVestimentaSuperior({
      r: rgb.r,
      g: rgb.g,
      b: rgb.b,
    });

    setCoresVestimentaInferior({
      r: 255 - rgb.r,
      g: 255 - rgb.g,
      b: 255 - rgb.b,
    });
  };

  return (
    <CirclePicker
      onChangeComplete={capturaTrocaDeCor}
      width="100%"
      colors={cores}
      className="mb-2"
    />
  );
};

export default SeletorDeCores;
