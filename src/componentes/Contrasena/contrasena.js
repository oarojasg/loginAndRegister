import React, { useState } from 'react';
import { InputGroup, Form, Col } from 'react-bootstrap';

export default function Contrasena({ 
    handleChange, 
    contrasenaValue, 
    contrasenaTouched, 
    contrasenaErrors,
    controlId,
    formControlName,
    tabindex
 }) {
    const [shown, setShown] = useState(false);
    const type = shown ? "text" : "password";
    const Icon = shown ? "bi bi-eye-slash" : "bi bi-eye";

    return (
        <Form.Group as={Col} xs="7" controlId={controlId}>
            <InputGroup>
                <Form.Control
                    type={type}
                    value={contrasenaValue}
                    name={formControlName}
                    className=" mr-sm-2"
                    onChange={handleChange}
                    isInvalid={contrasenaTouched &&
                        !!contrasenaErrors}
                    tabIndex={tabindex}
                />
                <InputGroup.Text as='button'
                    onClick={(e) => {
                    e.preventDefault();
                    setShown(!shown);}}>
                    <i className={Icon}></i>
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                    {contrasenaErrors}
                </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
    );
}