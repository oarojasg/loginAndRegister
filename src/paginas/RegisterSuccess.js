import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import Titulo from '../componentes/Titulo/titulo';
import Contrasena from '../componentes/Contrasena/contrasena';
import * as formik from 'formik';
import * as yup from 'yup';
import { ref } from 'yup';
import CorreoElectronico from '../componentes/CorreoElectronico/correoElectronico';
import { registerUser } from '../api/registerUser';
import terminosYCondiciones from '../activos/terminosYCondiciones.pdf'

export default function RegisterSuccess() {
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
                principal={"Se ha registrado exitosamente"}
                secundario={"Por favor revise su correo electrónico."} />
              <Container className='bg-light border rounded p-2 w-90'>
              </Container>
            </div>
          </section>
        )} 
    </Formik> 
  );
}