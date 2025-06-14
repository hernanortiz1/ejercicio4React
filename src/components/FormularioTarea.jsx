import {Form, Button} from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex">
          <Form.Control type="text" placeholder="Ingresa una tarea" />
        <Button variant="info" className="ms-3">Enviar</Button>
        </Form.Group>
      </Form>
      <ListaTareas/>
    </section>
  );
};

export default FormularioTarea;
