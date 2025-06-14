import {Form, Button} from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingresa una tarea" />
        <Button variant="info" className="ms-3">Enviar</Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default FormularioTarea;
