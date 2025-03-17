import React from 'react';
import { Container } from 'react-bootstrap';
import Titulo from '../componentes/Titulo/titulo';

export default function RegisterSuccess() {

  return(
    <section className='register-page-wrapper page'>
      <div className='register-page'>
        <Titulo 
          principal={"Se ha registrado exitosamente"}
          secundario={"Por favor revise su correo electrónico."} />
        <Container className='bg-light border rounded p-2 w-90'>
        </Container>
      </div>
    </section> 
  );
}