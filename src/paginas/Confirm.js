import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Titulo from '../componentes/Titulo/titulo';

export default function Confirm() {
  const navigate = useNavigate();

  return(
    <section className='register-page-wrapper page'>
        <div className='register-page'>
            <Titulo 
            principal={"Hola"}
            secundario={"Se ha validado la creación de su cuenta"} />
            <Container className='bg-light border rounded p-2 w-90'>
                <Form>
                    <ButtonToolbar className="justify-content-end">
                    <Button 
                        variant="secondary"
                        onClick={() => navigate('/login')}>
                        Volver
                    </Button>
                    </ButtonToolbar>
                </Form>
            </Container>
        </div>
    </section>
  );
}