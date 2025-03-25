import React from 'react';
import { Container, Form, ButtonToolbar, Button } from 'react-bootstrap';
import Titulo from '../componentes/Titulo/titulo';
import ContenedorPrincipal from '../componentes/ContenedorPrincipal/ContenedorPrincipal';
import { useNavigate } from 'react-router-dom';

export default function RegisterSuccess() {
  const navigate = useNavigate();
  return(
    <ContenedorPrincipal>
        <Titulo 
          principal={"Se ha registrado exitosamente"}
          secundario={"En caso de enviar correo electrónico, " +
          "esta será la pantalla informativa."} />
        <Container className='bg-light border rounded p-2 w-90'>
          <Form>
              <ButtonToolbar className="justify-content-end">
              <Button 
                  variant="secondary"
                  onClick={() => navigate('/login')}>
                  Login
              </Button>
              </ButtonToolbar>
          </Form>
        </Container>
    </ContenedorPrincipal>
  );
}