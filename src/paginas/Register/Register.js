import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Titulo from '../../componentes/Titulo/titulo';
import Contrasena from '../../componentes/Contrasena/contrasena';
import * as formik from 'formik';
import * as yup from 'yup';
import { ref } from 'yup';
import CorreoElectronico from '../../componentes/CorreoElectronico/correoElectronico';
import { registerUser } from '../../api/registerUser';

export default function Register() {
  const navigate = useNavigate();
  const { Formik } = formik;

  const schema = yup.object().shape({
    correoElectronico: yup.string()
      .email("Dirección de correo inválida")
      .required("Se requiere un correo electrónico"),
    contrasena: yup.string()
      .required("Se requiere una contraseña"),
    confirmarContrasena: yup.string()
      .oneOf([ref("contrasena")], "Las contraseñas no coinciden")
      .required("Se requiere una contraseña"),
    aceptaTerminos: yup.boolean()
      .oneOf([true], 'Debe aceptar términos de privacidad')
  });

  const handleSubmitApi = async (values, actions) => {
    const result = await registerUser({
      email: values.correoElectronico,
      password: values.contrasena
    });
    handleSubmitApiResponseHandler(result);
  }

  const handleSubmitApiResponseHandler = (result) => {
    if (result.status == 200) {
      alert("Success! go to login");
      return;
    }
    if (result.status == 400) {
      const errorDetailsObject = result.errors;
      const detailsObjectValues = Object.values(errorDetailsObject);
      const errorMessage = detailsObjectValues.reduce(
        (cumulated, current) => cumulated + '\n' + current );
      alert(errorMessage);
      return;
    }
    alert("Error reading response");
  }

  return(
    <Formik
      validationSchema={schema}
      onSubmit={handleSubmitApi}
      initialValues={{
        correoElectronico: '',
        contrasena: '',
        confirmarContrasena: '',
        aceptaTerminos: false
      }}>
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <section className='register-page-wrapper page'>
            <div className='register-page'>
              <Titulo 
                principal={"Bienvenido al aplicativo de convocatorias"}
                secundario={"Registro usuarios nuevos"} />
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
                      error={errors.correoElectronico}
                      tabIndex={1} />
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
                      formControlName={"contrasena"} 
                      tabindex={2}/>
                  </Row>
                  <Row className='justify-content-end mb-2'>
                    <Col xs="5" className='text-end'>
                      Confirmar contraseña
                    </Col>
                    <Contrasena 
                      handleChange={handleChange}
                      contrasenaValue={values.confirmarContrasena}
                      contrasenaTouched={touched.confirmarContrasena}
                      contrasenaErrors={errors.confirmarContrasena}
                      controlId={"validationFormik03"}
                      formControlName={"confirmarContrasena"}
                      tabindex={3} />
                  </Row>
                  <Row className='justify-content-end mb-2'>
                    <Col xs="5" className='text-end'>
                      Acepto términos de privacidad
                    </Col>
                    <Form.Group as={Col} xs="7" className='text-start'
                      controlId="validationFormik04">
                        <InputGroup>
                          <Form.Check
                              type='checkbok'>
                            <Form.Check.Input 
                              type='checkbox' 
                              name="aceptaTerminos"
                              checked={values.aceptaTerminos}
                              onChange={handleChange}
                              isInvalid={touched.aceptaTerminos &&
                                !!errors.aceptaTerminos}
                              tabIndex={4}/>
                            <Form.Control.Feedback type="invalid">
                              {errors.aceptaTerminos}
                            </Form.Control.Feedback>
                          </Form.Check>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <ButtonToolbar className="justify-content-end">
                    <Button 
                      variant="primary" 
                      className='me-2' 
                      tabIndex={5}
                      type="submit">Registrarse
                    </Button>
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
        )} 
    </Formik> 
  );
}