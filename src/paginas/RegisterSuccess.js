import React from 'react';
import { Container } from 'react-bootstrap';
import Titulo from '../componentes/Titulo/titulo';
import ContenedorPrincipal from '../componentes/ContenedorPrincipal/ContenedorPrincipal';

export default function RegisterSuccess() {

  return(
    <ContenedorPrincipal>
        <Titulo 
          principal={"Se ha registrado exitosamente"}
          secundario={"Por favor revise su correo electrónico."} />
    </ContenedorPrincipal>
  );
}