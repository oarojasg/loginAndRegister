import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/loginUser';
import './Login.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Form, Row, Col, Container } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Titulo from '../../componentes/Titulo/titulo';
import Contrasena from '../../componentes/Contrasena/contrasena';
import * as formik from 'formik';
import * as yup from 'yup';
import CorreoElectronico from '../../componentes/CorreoElectronico/correoElectronico';
import { loginUserIdentityToken } from '../../api/loginUserIdentityToken';

export default function Login({ setToken }) {
  const navigate = useNavigate();
  const { Formik } = formik;

  const schema = yup.object().shape({
    correoElectronico: yup.string()
      .email("Dirección de correo inválida")
      .required("Se requiere un correo electrónico"),
    contrasena: yup.string()
      .required("Se requiere una contraseña")
  });

  const handleSubmitApi = async (values, actions) => {
    const token = await loginUserIdentityToken({
      email: values.correoElectronico,
      password: values.contrasena
    });
    setToken(token);
    actions.setSubmitting(false);
    navigate('/default');
  }

  return(
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmitApi}
      initialValues={{
        correoElectronico: '',
        contrasena: ''
      }}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <section className='register-page-wrapper page'>
            <div className="register-page">
              <Titulo 
                principal={"Bienvenido al aplicativo de convocatorias"}
                secundario={"Por favor ingrese con su usuario y contraseña"} />
              <Container className='bg-light border rounded p-2 w-90'>
                  <Form noValidate inline onSubmit={handleSubmit}>
                    <Row className='justify-content-end mb-2'>
                      <Col xs="5" className='text-end'>
                        Correo electrónico
                      </Col>
                      <CorreoElectronico
                        controlId="validationFormik01"
                        valor={values.correoElectronico}
                        formControlName="correoElectronico"
                        funcionCambio={handleChange}
                        tocado={touched.correoElectronico}
                        error={errors.correoElectronico} />
                    </Row>
                    <Row className='justify-content-end mb-2'>
                      <Col xs="5" className='text-end'>
                        Contraseña
                      </Col>
                      <Contrasena 
                        handleChange={handleChange}
                        contrasenaValue={values.contrasena}
                        contrasenaTouched={touched.contrasena}
                        contrasenaErrors={errors.contrasena}
                        controlId={"validationFormik02"}
                        formControlName={"contrasena"} />
                    </Row>
                    <ButtonToolbar className="justify-content-end">
                      <Button 
                        variant="primary" 
                        className='me-2' 
                        type="submit">Ingresar
                      </Button>
                      <Button 
                        variant="secondary"
                        onClick={() => navigate('/register')}>
                        Registrarse
                      </Button>
                    </ButtonToolbar>
                  </Form>
              </Container>
            </div>
          </section>
        )}
    </Formik>
    
       
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};