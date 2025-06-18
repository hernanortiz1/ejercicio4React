import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("guardar tarea");
  // tomar tarea de state y guardar en state tareas (array)
  //... operado expred, copia los elementos de array tareas y al final le agrego la ultima tarea que agrego el usr 
  setTareas([...tareas, tarea])

  //limpiar formulario
  setTarea("");
}

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          <Form.Control
            type="text"
            placeholder="Ingresa una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button type="submit" variant="info" className="ms-3">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas />
    </section>
  );
};

export default FormularioTarea;
