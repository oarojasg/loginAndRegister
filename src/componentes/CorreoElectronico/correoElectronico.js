import { Form, Col } from 'react-bootstrap';

export default function CorreoElectronico ({
    controlId,
    valor,
    formControlName,
    funcionCambio,
    tocado,
    error
}) {
    return (
        <Form.Group as={Col} xs="7" controlId={controlId}>
            <Form.Control
                type="text"
                value={valor}
                name={formControlName}
                className=" mr-sm-2"
                onChange={funcionCambio}
                isInvalid={tocado && !!error}
            />
            <Form.Control.Feedback type="invalid">
                {error}
            </Form.Control.Feedback>
        </Form.Group>
    );
}